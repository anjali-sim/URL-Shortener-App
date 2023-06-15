import React from 'react'
import { Wrapper, FormWrapper, InputWrapper, InputStyle, MainWrap, MainDiv } from '../../styled/Form.style';
import { Wrap, ButtonWrapper, ButtonStyle, SignUpDiv, TitleText } from './ForgotPassword.style';
// import { ErrorStyle } from '../../styled/Error.style';
import { Link } from 'react-router-dom';
// import { Formik } from 'formik';


const ForgotPassword:React.FC = () => {
  return (
    <div>
      {/* <form onSubmit={formik.handleSubmit}> */}
      <form>
        <MainWrap>
          <Wrap>
            <Wrapper>
              <FormWrapper>
                <TitleText>
                  <div className="title login">Forgot your password?</div>
                </TitleText>
              </FormWrapper>

              <InputWrapper>
                <InputStyle
                  type="email"
                  id="email"
                  placeholder="Your email"
                //   {...formik.getFieldProps('email')}
                />
                {/* {formik.touched.email && formik.errors.email && (
                  <ErrorStyle>{formik.errors.email}</ErrorStyle>
                )} */}

              </InputWrapper>

              <ButtonWrapper>
                {/* <ButtonStyle type="submit" disabled={formik.isSubmitting}> */}
                <ButtonStyle type="submit">
                  Reset Password
                </ButtonStyle>
              </ButtonWrapper>

              <MainDiv>
                Found your password? <SignUpDiv as={Link} to="/login">Login</SignUpDiv>
              </MainDiv>
            </Wrapper>
          </Wrap>
        </MainWrap>
      </form>
    </div>
  )
}

export default ForgotPassword;
