import React, { useState } from 'react';
import { Wrapper, FormWrapper, TitleText, SlideControls, Slide1, Slide2, InputWrapper, InputStyle, MainDiv, MainWrap, SignUpDiv } from '../../styled/Form.style';
import { ButtonWrapper, TextStyle, Wrap, ButtonStyle } from './Login.style';
import { Link, useNavigate } from 'react-router-dom';
import { auth } from '../../utils/firebase';
import { signInWithEmailAndPassword } from 'firebase/auth';
import { ErrorStyle } from '../../styled/Error.style';
import { useFormik } from 'formik';
import loginValidationSchema from '../../constants/loginSchema';

  const Login: React.FC = () => {
  const [error, setError] = useState<string>('');

  const navigate = useNavigate();

  const formik = useFormik({
    initialValues: {
      email: '',
      password: '',
    },
    validationSchema: loginValidationSchema,
    onSubmit: (values) => {
      setError('');

      signInWithEmailAndPassword(auth, values.email, values.password)
        .then((userCredential) => {
          console.log(userCredential);
          
          navigate('/');
        })
        .catch((error) => {
          setError(error.message);
        });
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
                  {...formik.getFieldProps('email')}
                />
                {formik.touched.email && formik.errors.email && (
                  <ErrorStyle>{formik.errors.email}</ErrorStyle>
                )}

                <InputStyle
                  type="password"
                  id="password"
                  placeholder="Password"
                  {...formik.getFieldProps('password')}
                />
                {formik.touched.password && formik.errors.password && (
                  <ErrorStyle>{formik.errors.password}</ErrorStyle>
                )}

                <TextStyle as={Link} to="/forgot-password">Forgot Password?</TextStyle>
              </InputWrapper>

              <ButtonWrapper>
                <ButtonStyle type="submit">
                  Login
                </ButtonStyle>
              </ButtonWrapper>

              <MainDiv>
                Not a member? <SignUpDiv as={Link} to="/signup">Signup Now</SignUpDiv>
              </MainDiv>
            </Wrapper>
          </Wrap>
        </MainWrap>
      </form>
    </div>
  );
};

export default Login;
