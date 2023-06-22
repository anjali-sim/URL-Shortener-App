import Navbar from '@/components/Navbar';
import React from 'react'
import { Container, InputLabel } from './EditProfile.style';
import { Wrapper } from './ViewProfile.style';
import { Input, InputWrapper, UpdateProfileButton } from './EditProfile.style';

const EditProfile:React.FC = () => {
  return (
    <>
      <Navbar />
      <Wrapper>
        <Container>
            <InputWrapper>
            <InputLabel>Your Name: </InputLabel>
            <Input type='text' placeholder='Enter your name to change' />
            <InputLabel>Your Email: </InputLabel>
            <Input type='text' placeholder='Enter your email to change'/>
            </InputWrapper>
            <UpdateProfileButton>Update</UpdateProfileButton>
        </Container>
      </Wrapper>
    </>
  )
}

export default EditProfile;
