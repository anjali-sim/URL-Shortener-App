import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import {
  auth,
  db,
  collection,
  query,
  where,
  onSnapshot,
} from "@/service/firebaseConfig";
import Navbar from "@/components/Navbar";
import {
  Wrapper,
  Container,
  Photo,
  Image,
  Content,
  Name,
  Email,
  Border,
  EditPhotoButton,
  EditProfileButton,
  ButtonPosition,
} from "./UserProfile.style";
import profile from "@/assets/images/profile.png";

interface User {
  name: string;
  email: string;
}

const UserProfile: React.FC = () => {
  const [user, setUser] = useState<User | null>(null);

  useEffect(() => {
    const currentUser = auth.currentUser;
    if (currentUser) {
      const usersCollectionRef = collection(db, "users");
      const userQuery = query(
        usersCollectionRef,
        where("uid", "==", currentUser.uid)
      );

      const unsubscribe = onSnapshot(userQuery, (snapshot) => {
        if (!snapshot.empty) {
          const userData = snapshot.docs[0].data() as User;
          setUser(userData);
        } else {
          console.log("User data not found");
        }
      });

      return () => unsubscribe();
    }
  }, []);

  return (
    <>
      <Navbar />
      {user ? (
        <Wrapper>
          <Container>
            <Border>
              <Photo>
                <Image src={profile} alt="User" />
                <EditPhotoButton>+ Upload Photo</EditPhotoButton>
              </Photo>
              <Content>
                <Name>Name: {user.name}</Name>
                <Email>Email: {user.email}</Email>
                <ButtonPosition>
                  <EditProfileButton as={Link} to="/edit-profile">
                    + Edit Profile
                  </EditProfileButton>
                </ButtonPosition>
              </Content>
            </Border>
          </Container>
        </Wrapper>
      ) : (
        <div>
          <h1>User not found</h1>
        </div>
      )}
    </>
  );
};

export default UserProfile;
