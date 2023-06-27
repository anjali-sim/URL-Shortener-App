import React, { useState } from "react";
import {
  Wrapper,
  FormWrapper,
  InputWrapper,
  Input,
  MainWrap,
  MainDiv,
} from "@/styled/Form.style";
import {
  Wrap,
  ButtonWrapper,
  Button,
  SignUpDiv,
  TitleText,
} from "./ForgotPassword.style";
import { ErrorStyle } from "@/styled/Error.style";
import { Link } from "react-router-dom";
import { sendPasswordResetEmail } from "firebase/auth";
import { auth } from "@/service/firebaseConfig";
import { useFormik } from "formik";
import { showSuccessToast, successMessage } from "@/utils/toast";
import { validationSchemas } from "@/constants/formValidation";

const ForgotPassword: React.FC = () => {
  const [email, setEmail] = useState("");
  const formik = useFormik({
    initialValues: {
      email: "",
    },
    validationSchema: validationSchemas.forgotPassword,
    onSubmit: async (values) => {
      try {
        await sendPasswordResetEmail(auth, values.email);
        showSuccessToast(successMessage);
      } catch (error) {
        console.log(error);
      }
    },
  });

  return (
    <>
      <form onSubmit={formik.handleSubmit}>
        <MainWrap>
          <Wrap>
            <Wrapper>
              <FormWrapper>
                <TitleText>
                  <div className="title login">Forgot your password?</div>
                </TitleText>
              </FormWrapper>

              <InputWrapper>
                <Input
                  type="email"
                  id="email"
                  placeholder="Your email"
                  {...formik.getFieldProps("email")}
                />
                {formik.touched.email && formik.errors.email && (
                  <ErrorStyle>{formik.errors.email}</ErrorStyle>
                )}
              </InputWrapper>

              <ButtonWrapper>
                <Button type="submit">Reset Password</Button>
              </ButtonWrapper>

              <MainDiv>
                Found your password?{" "}
                <SignUpDiv as={Link} to="/login">
                  Login
                </SignUpDiv>
              </MainDiv>
            </Wrapper>
          </Wrap>
        </MainWrap>
      </form>
    </>
  );
};

export default ForgotPassword;





// import React, { useState } from "react";
// import { Redirect } from "react-router-dom";

// const URLShortener: React.FC = () => {
//   const [originalURL, setOriginalURL] = useState("");
//   const [shortenedURL, setShortenedURL] = useState("");
//   const [redirectToOriginal, setRedirectToOriginal] = useState(false);

//   const handleShortenURL = () => {
//     // Add your custom logic to shorten the URL here
//     // You can use libraries like `shortid` or generate a unique ID

//     // For example, generating a random string of characters as the shortened URL
//     const characters = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
//     const length = 8;
//     let result = "";
//     for (let i = 0; i < length; i++) {
//       result += characters.charAt(Math.floor(Math.random() * characters.length));
//     }

//     setShortenedURL(result);
//   };

//   const handleRedirect = () => {
//     setRedirectToOriginal(true);
//   };

//   if (redirectToOriginal) {
//     // Redirect to the original URL
//     window.location.href = originalURL;
//     return null;
//   }

//   return (
//     <>
//       <input
//         type="text"
//         value={originalURL}
//         onChange={(e) => setOriginalURL(e.target.value)}
//         placeholder="Enter the URL"
//       />
//       <button onClick={handleShortenURL}>Shorten URL</button>
//       {shortenedURL && (
//         <>
//           <p>Shortened URL: {shortenedURL}</p>
//           <button onClick={handleRedirect}>Redirect to Original URL</button>
//         </>
//       )}
//     </>
//   );
// };

// export default URLShortener;
