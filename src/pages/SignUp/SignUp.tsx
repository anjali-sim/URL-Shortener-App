import React from 'react'
import { Wrapper, FormWrapper, TitleText, 
    SlideControls, Slide1, Slide2,InputStyle,
  MainWrap
 } from '../../styled/Form.style'
 import { ButtonSignUpWrapper, Wrap, ErrorStyle, InputWrapper, ButtonStyle } from './SignUp.style'
 import { useFormik } from 'formik'
 import validationSchema from '../../constants/schema'
 import { Link } from 'react-router-dom'

const SignUp:React.FC = () => {

const formik = useFormik({
initialValues: {
    name:'',
    email:'',
    password:'',
    repassword:''
},
validationSchema: validationSchema,
onSubmit: (values) => {
    // Handle form submission
    console.log(values);
  },
})

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

          {/* <FormContainer> */}
            <SlideControls>
              <Slide1 as={Link} to="/login">Login</Slide1>
              <Slide2 as={Link} to="/signup">Signup</Slide2>
            </SlideControls>
          {/* </FormContainer> */}

          <InputWrapper>
          <InputStyle type="text" id="name" placeholder="Your name" {...formik.getFieldProps('name')} />
          {formik.touched.name && formik.errors.name ? (
          <ErrorStyle>{formik.errors.name}</ErrorStyle>
        ) : null}
            <InputStyle type="email" id="email" placeholder="Your email address" {...formik.getFieldProps('email')} />
            {formik.touched.email && formik.errors.email ? (
          <ErrorStyle>{formik.errors.email}</ErrorStyle>
        ) : null}
            <InputStyle type="password" id="password" placeholder="Your password" {...formik.getFieldProps('password')} />
            {formik.touched.password && formik.errors.password ? (
          <ErrorStyle>{formik.errors.password}</ErrorStyle>
        ) : null}
            <InputStyle
              type="repassword"
              id="repassword"
              placeholder="Confirm password"
              {...formik.getFieldProps('repassword')}
            />
            {formik.touched.repassword && formik.errors.repassword ? (
          <ErrorStyle>{formik.errors.repassword}</ErrorStyle>
        ) : null}
          </InputWrapper>

{/* <ButtonDiv> */}
          <ButtonSignUpWrapper>
            <ButtonStyle type="submit">SignUp</ButtonStyle>
          </ButtonSignUpWrapper>
          {/* </ButtonDiv> */}

        </Wrapper>
        </Wrap>
        </MainWrap>
      </form>
    </div>
  )
}

export default SignUp;
