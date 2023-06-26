import Navbar from "@/components/Navbar";
import React from "react";
import { Container, InputLabel } from "./UserProfileForm";
import { Wrapper } from "./UserProfile";
import { Input, InputWrapper, UpdateProfileButton } from "./UserProfileForm";

const UserProfileForm: React.FC = () => {
  return (
    <>
      <Navbar />
      <Wrapper>
        <Container>
          <InputWrapper>
            <InputLabel>Your Name: </InputLabel>
            <Input type="text" placeholder="Enter your name to change" />
            <InputLabel>Your Email: </InputLabel>
            <Input type="text" placeholder="Enter your email to change" />
          </InputWrapper>
          <UpdateProfileButton>Update</UpdateProfileButton>
        </Container>
      </Wrapper>
    </>
  );
};

export default UserProfileForm;
