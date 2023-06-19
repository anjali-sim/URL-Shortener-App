import React, { useState } from "react";
import {
  Wrapper,
  FormWrapper,
  TitleText,
  SlideControls,
  Slide1,
  Slide2,
  InputStyle,
  MainWrap,
  MainDiv,
  SignUpDiv,
} from "../../styled/Form.style";
import {
  ButtonSignUpWrapper,
  Wrap,
  InputWrapper,
  ButtonStyle,
} from "./SignUp.style";
import { ErrorStyle } from "../../styled/Error.style";
import { useFormik } from "formik";
import signupValidationSchema from "../../constants/signupSchema";
import { Link } from "react-router-dom";
import { auth } from "../../utils/firebase";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { collection, addDoc } from "firebase/firestore";
import { db } from "../../utils/firebase";
import { useNavigate } from "react-router-dom";
import { showErrorToast } from "../../utils/toast";

const SignUp: React.FC = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();

  const formik = useFormik({
    initialValues: {
      name: "",
      email: "",
      password: "",
      repassword: "",
    },
    validationSchema: signupValidationSchema,
    onSubmit: async (values) => {
      try {
        const userCredential = await createUserWithEmailAndPassword(
          auth,
          values.email,
          values.password
        );
        const user = userCredential.user;
        const userData = {
          uid: user.uid,
          name: values.name,
          email: values.email,
        };
        await addDoc(collection(db, "users"), userData);
        navigate("/login");
      } catch (error) {
        // Handle the case when the email address is already in use
        if (error.code === "auth/email-already-in-use") {
          showErrorToast("Email is already registered!!!");
        } else {
          // Handle other errors
          console.log(error);
        }
      }
    },
  });

  return (
    <div>
      <form onSubmit={formik.handleSubmit}>
        <MainWrap>
          <Wrap>
            <Wrapper>
              <FormWrapper>
                <TitleText>
                  <div className="title signup">Signup Form</div>
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
                  type="text"
                  id="name"
                  placeholder="Your name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  {...formik.getFieldProps("name")}
                />
                {formik.touched.name && formik.errors.name ? (
                  <ErrorStyle>{formik.errors.name}</ErrorStyle>
                ) : null}
                <InputStyle
                  type="email"
                  id="email"
                  placeholder="Your email address"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  {...formik.getFieldProps("email")}
                />
                {formik.touched.email && formik.errors.email ? (
                  <ErrorStyle>{formik.errors.email}</ErrorStyle>
                ) : null}
                <InputStyle
                  type="password"
                  id="password"
                  placeholder="Your password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  {...formik.getFieldProps("password")}
                />
                {formik.touched.password && formik.errors.password ? (
                  <ErrorStyle>{formik.errors.password}</ErrorStyle>
                ) : null}
                <InputStyle
                  type="password"
                  id="repassword"
                  placeholder="Confirm password"
                  {...formik.getFieldProps("repassword")}
                />
                {formik.touched.repassword && formik.errors.repassword ? (
                  <ErrorStyle>{formik.errors.repassword}</ErrorStyle>
                ) : null}
              </InputWrapper>

              <ButtonSignUpWrapper>
                <ButtonStyle type="submit">SignUp</ButtonStyle>
              </ButtonSignUpWrapper>

              <MainDiv>
                Already have an account?{" "}
                <SignUpDiv as={Link} to="/login">
                  Login
                </SignUpDiv>
              </MainDiv>
            </Wrapper>
          </Wrap>
        </MainWrap>
      </form>
    </div>
  );
};

export default SignUp;
