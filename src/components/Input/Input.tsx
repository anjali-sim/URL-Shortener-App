// import React, { useState } from "react";
// import UrlImage from "@/assets/images/url.png"
// import {
//   Heading,
//   InputContainer,
//   InputTag,
//   Span,
//   Button,
//   InputDiv,
//   Paragraph,
//   Image,
//   ResultDiv,
// } from "./Input.style";
// import axios from "axios"; 

// const Input: React.FC = () => {
//   const [url, setUrl] = useState("");
//   const [shortenedUrl, setShortenedUrl] = useState("");

//   const handleShortenUrl = async (e) => {
//     e.preventDefault();
//     try {
//       const response = await axios.get(
//         `https://api.shrtco.de/v2/shorten?url=${url}`
//       );
//       const data = response.data;
//       setShortenedUrl(data.result.full_short_link);
//     } catch (error) {
//       console.error(error);
//     }
//   };

//   return (
//     <>
//       <InputContainer>
//         <Heading>
//           SHORTENING YOUR <Span>URL?</Span>
//         </Heading>
//         <Paragraph>Sure, LinkZip will do that at a mouse click.</Paragraph>
//         <form onSubmit={handleShortenUrl}>
//           <InputDiv>
//             <InputTag
//               type="text"
//               placeholder="Paste a link to shorten it"
//               value={url}
//               onChange={(e) => setUrl(e.target.value)}
//             />
//             <Button>
//               <Image src={UrlImage} alt="url" />
//             </Button>
//           </InputDiv>
//         </form>
//         {shortenedUrl && (
//           <ResultDiv>
//             <p>Shortened URL: {shortenedUrl}</p>
//           </ResultDiv>
//         )}
//       </InputContainer>
//     </>
//   );
// };

// export default Input;






import React, { useState } from "react";
import UrlImage from "@/assets/images/url.png"
import {
  Heading,
  InputContainer,
  InputTag,
  Span,
  Button,
  InputDiv,
  Paragraph,
  Image
} from "./Input.style";
import { v4 as uuidv4 } from "uuid";
import { useNavigate } from "react-router-dom";
import { db } from "@/service/firebaseConfig";
import { collection, addDoc } from "firebase/firestore";


const Input: React.FC = () => {
  const navigate = useNavigate();
  const [url, setUrl] = useState("");
  const [shortenedCode, setShortenedCode] = useState(null);

  const handleShortenUrl = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    let code = uuidv4();

    try {
      await addDoc(collection(db, "urls"), {
        url: url,
        code: code,
      });

      setShortenedCode(code);
    } catch (error) {
      console.error("Error adding document: ", error);
    }
  };

  return (
    <>
      <InputContainer>
        <Heading>
          SHORTENING YOUR <Span>URL?</Span>
        </Heading>
        <Paragraph>Sure, LinkZip will do that at a mouse click.</Paragraph>
        <form onSubmit={handleShortenUrl}>
          <InputDiv>
            <InputTag
              type="text"
              placeholder="Paste a link to shorten it"
              value={url}
              onChange={(e) => setUrl(e.target.value)}
            />
            <Button type="submit">
              <Image src={UrlImage} alt="url" />
            </Button>
          </InputDiv>
        </form>
        
      </InputContainer>
      
    </>
  );
};

export default Input;