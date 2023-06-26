import React, { useState } from "react";
import UrlImage from "../../assets/images/url.png"
import {
  Heading,
  InputContainer,
  Input,
  Span,
  Button,
  InputDiv,
  Paragraph,
  Image,
  ResultDiv
} from "./Input.style";
import axios from "axios";

const InputShortener: React.FC = () => {
  const [url, setUrl] = useState("");
  const [shortenedUrl, setShortenedUrl] = useState("");

  const handleShortenUrl = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.get(
        `https://api.shrtco.de/v2/shorten?url=${url}`
      );
      const data = response.data;
      setShortenedUrl(data.result.full_short_link);
    } catch (error) {
      console.error(error);
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
            <Input
              type="text"
              placeholder="Paste a link to shorten it"
              value={url}
              onChange={(e) => setUrl(e.target.value)}
            />
            <Button>
              <Image src={UrlImage} alt="url" />
            </Button>
          </InputDiv>
        </form>
        {shortenedUrl && (
          <ResultDiv>
            <p>Shortened URL: {shortenedUrl}</p>
          </ResultDiv>
        )}
      </InputContainer>
    </>
  );
};

export default InputShortener;
