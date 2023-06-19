import React from "react";
import {
  Heading,
  InputContainer,
  InputStyle,
  SpanStyle,
  ButtonStyle,
  InputDiv,
  Paragraph,
  Image,
} from "./Input.style";
// import link from "../../assets/images/link.png"
import url from "../../assets/images/url.png";

const InputShortener: React.FC = () => {
  return (
    <>
      <InputContainer>
        <Heading>
          SHORTENING YOUR <SpanStyle>URL?</SpanStyle>
        </Heading>
        <Paragraph>Sure, LinkZip will do that at a mouse click.</Paragraph>
        <InputDiv>
          <InputStyle type="text" placeholder="Paste a link to shorten it" />
          {/* <ButtonStyle><Image src={link} /></ButtonStyle> */}
          <ButtonStyle>
            <Image src={url} />
          </ButtonStyle>
        </InputDiv>
      </InputContainer>
    </>
  );
};

export default InputShortener;
