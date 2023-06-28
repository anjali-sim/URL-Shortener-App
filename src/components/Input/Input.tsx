import React, { useState, useRef } from "react";
import UrlImage from "@/assets/images/url.png";
import Copy from "@/assets/images/document.png";
import {
  Heading,
  InputContainer,
  InputTag,
  Span,
  Button,
  InputDiv,
  Paragraph,
  Image,
  ResultDiv,
} from "./Input.style";
import { v4 as uuidv4 } from "uuid";
import { db, collection, addDoc } from "@/service/firebaseConfig";

const Input: React.FC = () => {
  const [url, setUrl] = useState("");
  const [shortenedUrl, setShortenedUrl] = useState("");
  const shortenedUrlRef = useRef<HTMLInputElement>(null);

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();

    try {
      const id = uuidv4();
      const docRef = await addDoc(collection(db, "urls"), {
        id,
        originalUrl: url,
        shortUrl: `${window.location.origin}/${id}`,
        createdAt: new Date().toISOString(),
      });

      const shortenedId = docRef.id;
      const shortenedUrl = `${window.location.origin}/${shortenedId}`;
      setShortenedUrl(shortenedUrl);
    } catch (error) {
      console.error("Error creating shortened URL:", error);
    }
  };

  const copyToClipboard = () => {
    if (shortenedUrlRef.current) {
      shortenedUrlRef.current.select();
      document.execCommand("copy");
    }
  };

  return (
    <>
      <InputContainer>
        <Heading>
          SHORTENING YOUR <Span>URL?</Span>
        </Heading>
        <Paragraph>Sure, LinkZip will do that at a mouse click.</Paragraph>

        <form onSubmit={handleSubmit}>
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

          {shortenedUrl && (
            <ResultDiv>
              <InputTag
                type="text"
                ref={shortenedUrlRef}
                value={shortenedUrl}
                readOnly
              />
              <Button type="button" onClick={copyToClipboard}>
                <Image src={Copy} />
              </Button>
            </ResultDiv>
          )}
        </form>
      </InputContainer>
    </>
  );
};
export default Input;
