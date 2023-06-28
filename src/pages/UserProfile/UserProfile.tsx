import React, { useEffect, useState } from "react";
import {
  auth,
  db,
  collection,
  getDocs,
  query,
  where,
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
} from "./UserProfile";
import profile from "@/assets/images/profile.png";
import { Link } from "react-router-dom";

interface User {
  name: string;
  email: string;
}

const UserProfile: React.FC = () => {
  const [user, setUser] = useState<User | null>(null);

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((user) => {
      if (user) {
        const usersCollectionRef = collection(db, "users");
        const userQuery = query(
          usersCollectionRef,
          where("uid", "==", user.uid)
        );

        getDocs(userQuery)
          .then((snapshot) => {
            if (!snapshot.empty) {
              const userData = snapshot.docs[0].data() as User;

              setUser(userData);
            } else {
              console.log("User data not found");
            }
          })
          .catch((error) => {
            console.log("Error retrieving user data:", error);
          });
      } else {
        setUser(null);
      }
    });

    return () => unsubscribe();
  }, []);

  return (
    <>
      <Navbar />
      {user ? (
        <Wrapper>
          <Container>
            <Border>
              <Photo>
                <Image src={profile} alt="User"></Image>
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
