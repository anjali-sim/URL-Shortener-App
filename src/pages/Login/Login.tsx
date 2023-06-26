import React, { useState } from "react";
import {
  Wrapper,
  FormWrapper,
  TitleText,
  SlideControls,
  Slide1,
  Slide2,
  InputWrapper,
  Input,
  MainDiv,
  MainWrap,
  SignUpDiv,
} from "@/styled/Form.style";
import { ButtonWrapper, Text, Wrap, Button, TextDiv } from "./Login.style";
import { Link, useNavigate } from "react-router-dom";
import { auth } from "@/service/firebaseConfig";
import { signInWithEmailAndPassword } from "firebase/auth";
import { ErrorStyle } from "@/styled/Error.style";
import { useFormik } from "formik";
import { validationSchemas } from "@/constants/formValidation";
import { showErrorToast, errorMessage } from "@/utils/toast";
import Loader from "@/components/Loader/Loader";

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
        showErrorToast(errorMessage);
        IsLoading(false);
      }
    },
  });

  return (
    <>
      {loading ? (
        <Loader />
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
                  <Input
                    type="email"
                    id="email"
                    placeholder="Email Address"
                    {...formik.getFieldProps("email")}
                  />
                  {formik.touched.email && formik.errors.email && (
                    <ErrorStyle>{formik.errors.email}</ErrorStyle>
                  )}

                  <Input
                    type="password"
                    id="password"
                    placeholder="Password"
                    {...formik.getFieldProps("password")}
                  />
                  {formik.touched.password && formik.errors.password && (
                    <ErrorStyle>{formik.errors.password}</ErrorStyle>
                  )}

                  <TextDiv>
                    <Text as={Link} to="/forgot-password">
                      Forgot Password?
                    </Text>
                  </TextDiv>
                </InputWrapper>

                <ButtonWrapper>
                  <Button type="submit">Login</Button>
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
    </>
  );
};

export default Login;
