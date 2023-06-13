import React from 'react'
import { Wrapper, FormWrapper, TitleText, 
    SlideControls, Slide1, Slide2, InputWrapper,InputStyle,
 ButtonStyle, MainWrap
 } from '../../styled/Form.style'
 import { ButtonSignUpWrapper, Wrap } from './SignUp.style'

const SignUp:React.FC = () => {
  return (
    <div>
      {/* <form> */}
      <MainWrap>
        <Wrap>
        <Wrapper>
          <FormWrapper>
            <TitleText>
              <div className="title signup">Signup Form</div>
            </TitleText>
          </FormWrapper>

          {/* <FormContainer> */}
            <SlideControls>
              <Slide1>Login</Slide1>
              <Slide2>Signup</Slide2>
            </SlideControls>
          {/* </FormContainer> */}

          <InputWrapper>
          <InputStyle type="text" id="name" placeholder="Your name" />
            <InputStyle type="email" id="email" placeholder="Your email address" />
            <InputStyle type="password" id="password" placeholder="Your password" />
            <InputStyle
              type="repassword"
              id="repassword"
              placeholder="Confirm password"
            />
          </InputWrapper>

          <ButtonSignUpWrapper>
            <ButtonStyle type="submit">SignUp</ButtonStyle>
          </ButtonSignUpWrapper>
        </Wrapper>
        </Wrap>
        </MainWrap>
      {/* </form> */}
    </div>
  )
}

export default SignUp;
