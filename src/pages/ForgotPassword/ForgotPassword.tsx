import React, { useState } from "react";
import {
  Wrapper,
  FormWrapper,
  InputWrapper,
  Input,
  MainWrap,
  MainDiv,
} from "@/styled/Form.style";
import {
  Wrap,
  ButtonWrapper,
  Button,
  SignUpDiv,
  TitleText,
} from "./ForgotPassword.style";
import { ErrorStyle } from "@/styled/Error.style";
import { Link } from "react-router-dom";
import { sendPasswordResetEmail } from "firebase/auth";
import { auth } from "@/utils/firebase";
import { useFormik } from "formik";
import { showSuccessToast } from "@/utils/toast";
import { validationSchemas } from "@/constants/formValidation";

const ForgotPassword: React.FC = () => {
  const [email, setEmail] = useState("");
  const formik = useFormik({
    initialValues: {
      email: "",
    },
    validationSchema: validationSchemas.forgotPassword,
    onSubmit: async (values) => {
      try {
        await sendPasswordResetEmail(auth, values.email);
        showSuccessToast("Password reset email sent successfully!!!");
      } catch (error) {
        console.log(error);
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
                  <div className="title login">Forgot your password?</div>
                </TitleText>
              </FormWrapper>

              <InputWrapper>
                <Input
                  type="email"
                  id="email"
                  placeholder="Your email"
                  {...formik.getFieldProps("email")}
                />
                {formik.touched.email && formik.errors.email && (
                  <ErrorStyle>{formik.errors.email}</ErrorStyle>
                )}
              </InputWrapper>

              <ButtonWrapper>
                <Button type="submit">Reset Password</Button>
              </ButtonWrapper>

              <MainDiv>
                Found your password?{" "}
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

export default ForgotPassword;
