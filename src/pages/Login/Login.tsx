import React from 'react'
import { Wrapper, FormWrapper, TitleText, 
    SlideControls, Slide1, Slide2, InputWrapper,InputStyle,
 MainDiv, MainWrap
 } from '../../styled/Form.style'
 import { ButtonWrapper, TextStyle, Wrap, ButtonStyle, SignUpDiv } from './Login.style'
import { Link } from 'react-router-dom'

const Login:React.FC = () => {
  return (
    <div>
       {/* <form> */}
        <MainWrap>
        <Wrap>
        <Wrapper>
          <FormWrapper>
            <TitleText>
              <div className="title login">Login Form</div>
            </TitleText>
          </FormWrapper>

          {/* <FormContainer> */}
            <SlideControls>
              <Slide1 as={Link} to="/login">Login</Slide1>
              
              <Slide2 as={Link} to="/signup">Signup</Slide2>
            </SlideControls>
          {/* </FormContainer> */}

          <InputWrapper>
            <InputStyle type="email" id="email" placeholder="Email Address" />
            <InputStyle type="password" id="password" placeholder="Password" />
            <TextStyle>Forgot Password?</TextStyle>
          </InputWrapper>

          <ButtonWrapper>
            <ButtonStyle type="submit"> Login</ButtonStyle>
          </ButtonWrapper>

          <MainDiv>
            Not a member? <SignUpDiv>Signup Now</SignUpDiv>
          </MainDiv>
        </Wrapper>
        </Wrap>
        </MainWrap>
      {/* </form> */}
    </div>
  )
}

export default Login;
