import React, { useState } from "react";
import {
  Wrapper,
  FormWrapper,
  TitleText,
  SlideControls,
  Slide1,
  Slide2,
  InputWrapper,
  InputStyle,
  MainDiv,
  MainWrap,
  SignUpDiv,
} from "@/styled/Form.style";
import {
  ButtonWrapper,
  TextStyle,
  Wrap,
  ButtonStyle,
  LoaderContainer,
  TextDiv
} from "./Login.style";
import { Link, useNavigate } from "react-router-dom";
import { auth } from "@/utils/firebase";
import { signInWithEmailAndPassword } from "firebase/auth";
import { ErrorStyle } from "@/styled/Error.style";
import { useFormik } from "formik";
import { validationSchemas } from "@/constants/formValidation";
import { showErrorToast } from "@/utils/toast";
import { Rings } from "react-loader-spinner";

const Login: React.FC = () => {
  const [error, setError] = useState("");
  const [loading, IsLoading] = useState(false);

  const navigate = useNavigate();

  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    validationSchema: validationSchemas.login,
    onSubmit: async (values) => {
      setError("");
      IsLoading(true);

      try {
        const userCredential = await signInWithEmailAndPassword(
          auth,
          values.email,
          values.password
        );
        console.log(userCredential);

        IsLoading(false);
        navigate("/");
      } catch (error) {
        setError(error.message);
        showErrorToast("Invalid Username or Password!!!");
        IsLoading(false);
      }
    },
  });

  return (
    <div>
      {loading ? (
        <LoaderContainer>
          <Rings color="#000000" height={100} width={100}></Rings>
        </LoaderContainer>
      ) : (
        <form onSubmit={formik.handleSubmit}>
          <MainWrap>
            <Wrap>
              <Wrapper>
                <FormWrapper>
                  <TitleText>
                    <div className="title login">Login Form</div>
                  </TitleText>
                </FormWrapper>

                <SlideControls>
                  <Slide1 as={Link} to="/login">
                    Login
                  </Slide1>
                  <Slide2 as={Link} to="/signup">
                    Signup
                  </Slide2>
                </SlideControls>

                <InputWrapper>
                  <InputStyle
                    type="email"
                    id="email"
                    placeholder="Email Address"
                    {...formik.getFieldProps("email")}
                  />
                  {formik.touched.email && formik.errors.email && (
                    <ErrorStyle>{formik.errors.email}</ErrorStyle>
                  )}

                  <InputStyle
                    type="password"
                    id="password"
                    placeholder="Password"
                    {...formik.getFieldProps("password")}
                  />
                  {formik.touched.password && formik.errors.password && (
                    <ErrorStyle>{formik.errors.password}</ErrorStyle>
                  )}

                <TextDiv>
                  <TextStyle as={Link} to="/forgot-password">
                    Forgot Password?
                  </TextStyle>
                  </TextDiv>
                </InputWrapper>

                <ButtonWrapper>
                  <ButtonStyle type="submit">Login</ButtonStyle>
                </ButtonWrapper>

                <MainDiv>
                  Not a member?{" "}
                  <SignUpDiv as={Link} to="/signup">
                    Signup Now
                  </SignUpDiv>
                </MainDiv>
              </Wrapper>
            </Wrap>
          </MainWrap>
        </form>
      )}
    </div>
  );
};

export default Login;
