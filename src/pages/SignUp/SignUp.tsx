import React from "react";
import {
  Wrapper,
  FormWrapper,
  TitleText,
  SlideControls,
  Slide1,
  Slide2,
  InputWrapper,
  MainWrap,
  MainDiv,
  SignUpDiv,
} from "@/styled/Form.style";
import { ButtonSignUpWrapper, Wrap, Button } from "./SignUp.style";
import { useFormik } from "formik";
import { validationSchemas } from "@/constants/formValidation";
import { Link } from "react-router-dom";
import {
  auth,
  db,
  createUserWithEmailAndPassword,
  collection,
  addDoc,
} from "@/service/firebaseConfig";
import { useNavigate } from "react-router-dom";
import { showErrorToast, emailErrorMessage } from "@/utils/toast";
import Form from "@/components/Form/Form";
import { emailAlreadyInUseMessage } from "@/constants/firebase";

interface SignUpValues {
  name: string;
  email: string;
  password: string;
  repassword: string;
}

const SignUp: React.FC = () => {
  const navigate = useNavigate();

  const formik = useFormik<SignUpValues>({
    initialValues: {
      name: "",
      email: "",
      password: "",
      repassword: "",
    },
    validationSchema: validationSchemas.signup,
    onSubmit: async (values: SignUpValues) => {
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
        if (error.code === emailAlreadyInUseMessage) {
          showErrorToast(emailErrorMessage);
        } else {
          console.log(error);
        }
      }
    },
  });

  return (
    <>
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
                <Form formik={formik} />
              </InputWrapper>

              <ButtonSignUpWrapper>
                <Button type="submit">SignUp</Button>
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
    </>
  );
};

export default SignUp;
