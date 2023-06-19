import Navbar from '../../components/Navbar';
import React from 'react'
import { Container, InputLabel } from './EditProfile.style';
import { Wrapper } from './ViewProfile.style';
import { InputStyle, InputWrapper, UpdateProfileButton } from './EditProfile.style';

const EditProfile:React.FC = () => {
  return (
    <>
      <Navbar />
      <Wrapper>
        <Container>
            <InputWrapper>
            <InputLabel>Your Name: </InputLabel>
            <InputStyle type='text' placeholder='Enter your name to change' />
            <InputLabel>Your Email: </InputLabel>
            <InputStyle type='text' placeholder='Enter your email to change'/>
            </InputWrapper>
            <UpdateProfileButton>Update</UpdateProfileButton>
        </Container>
      </Wrapper>
    </>
  )
}

export default EditProfile;
