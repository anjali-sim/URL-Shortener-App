// export async function signUpUser(email: string, password: string) {
//   const userCredential = await createUserWithEmailAndPassword(
//     auth,
//     email,
//     password
//   );
//   return userCredential.user;
// }

// export async function resetPassword(email: string) {
//   await sendPasswordResetEmail(auth, email);
// }

// export async function loginUser(email: string, password: string) {
//   const userCredential = await signInWithEmailAndPassword(
//     auth,
//     email,
//     password
//   );
//   return userCredential.user;
// }

// export async function addUserToFirestore(user: any) {
//   const userData = {
//     uid: user.uid,
//     name: user.name,
//     email: user.email,
//   };
//   await addDoc(collection(db, "users"), userData);
// }
