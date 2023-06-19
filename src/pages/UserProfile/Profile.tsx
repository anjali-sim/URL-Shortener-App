import React from "react";
import Navbar from "../../components/Navbar/Navbar";
import {
  Container,
  SideBar,
  MainContent,
  Image,
  Name,
  Email,
  InputStyle,
} from "./Profile.style";

const Profile: React.FC = () => {
  return (
    <div>
      <Navbar />
      <Container>
        <SideBar>
          <Image />
          <Name>jjj</Name>
          <Email>hhh</Email>

          <h1>he;oob kdbm</h1>
        </SideBar>
        <MainContent>
          <h1>he;oob kdbm</h1>
          <InputStyle></InputStyle>
        </MainContent>
      </Container>
    </div>
  );
};

export default Profile;

// import React, { useEffect, useState } from 'react';
// import { auth } from '../../utils/firebase';
// import { getFirestore, collection, getDocs, query, where } from 'firebase/firestore';

// interface User {
//   name: string;
//   email: string;
// }

// const Profile: React.FC = () => {
//   const [user, setUser] = useState<User | null>(null);

//   useEffect(() => {
//     const unsubscribe = auth.onAuthStateChanged((user) => {
//       if (user) {
//         const firestore = getFirestore();
//         const usersCollectionRef = collection(firestore, 'users');
//         const userQuery = query(usersCollectionRef, where('uid', '==', user.uid));

//         getDocs(userQuery)
//           .then((snapshot) => {
//             if (!snapshot.empty) {
//               const userData = snapshot.docs[0].data() as User;
//               setUser(userData);
//             } else {
//               console.log('User data not found');
//             }
//           })
//           .catch((error) => {
//             console.log('Error retrieving user data:', error);
//           });
//       } else {
//         setUser(null);
//       }
//     });

//     return () => unsubscribe();
//   }, []);

//   return (
//     <div>
//       {user ? (
//         <div>
//           <h1>Name: {user.name}</h1>
//           <h1>Email: {user.email}</h1>
//         </div>
//       ) : (
//         <div>
//           <h1>User not found</h1>
//         </div>
//       )}
//     </div>
//   );
// };

// export default Profile;
