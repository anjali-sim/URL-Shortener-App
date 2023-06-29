import React, { useState, useEffect } from "react";
import { auth, db, doc, getDoc, updateDoc } from "@/service/firebaseConfig";
import Navbar from "@/components/Navbar";
import {
  Container,
  InputLabel,
  UpdateProfileButton,
  Input,
  InputWrapper,
} from "./UserProfileForm.style";
import { Wrapper } from "./UserProfile.style";

interface User {
  name: string;
  email: string;
}

const UserProfileForm: React.FC = () => {
  const [updatedName, setUpdatedName] = useState("");
  const [updatedEmail, setUpdatedEmail] = useState("");
  const [user, setUser] = useState<User | null>(null);

  useEffect(() => {
    const fetchUserProfile = async () => {
      try {
        const currentUser = auth.currentUser;
        if (currentUser) {
          const userRef = doc(db, "users", currentUser.uid);

          // Get the user document from Firestore
          const snapshot = await getDoc(userRef);
          if (snapshot.exists()) {
            const userData = snapshot.data() as User;
            setUser(userData);
            // Set the initial values for name and email inputs
            setUpdatedName(userData.name);
            setUpdatedEmail(userData.email);
          }
        }
      } catch (error) {
        console.log("Error retrieving user data:", error);
      }
    };

    fetchUserProfile();
  }, []);

  const handleUpdateProfile = async () => {
    try {
      const currentUser = auth.currentUser;

      if (currentUser && user) {
        const userRef = doc(db, "users", currentUser.uid);

        // Update the user document in Firestore
        await updateDoc(userRef, {
          name: updatedName,
          email: updatedEmail,
        });

        console.log("User profile updated successfully!");
        // Handle any success message or navigation logic here
      }
    } catch (error) {
      console.error("Error updating user profile:", error);
      // Handle any error message or error handling logic here
    }
  };

  return (
    <>
      <Navbar />
      <Wrapper>
        <Container>
          <InputWrapper>
            <InputLabel>Your Name:</InputLabel>
            <Input
              type="text"
              placeholder="Enter your name to change"
              value={updatedName}
              onChange={(e) => setUpdatedName(e.target.value)}
            />
            <InputLabel>Your Email:</InputLabel>
            <Input
              type="text"
              placeholder="Enter your email to change"
              value={updatedEmail}
              onChange={(e) => setUpdatedEmail(e.target.value)}
            />
          </InputWrapper>
          <UpdateProfileButton onClick={handleUpdateProfile}>
            Update
          </UpdateProfileButton>
        </Container>
      </Wrapper>
    </>
  );
};

export default UserProfileForm;
