import React from 'react'
import { Heading, InputContainer, InputStyle, SpanStyle, ButtonStyle, InputDiv, Paragraph } from './Input.style'

const InputShortener:React.FC = () => {
  return (
    <>
      <InputContainer>
      <Heading>SHORTENING YOUR <SpanStyle>URL?</SpanStyle></Heading>
      <Paragraph>Sure, LinkZip will do that at a mouse click.</Paragraph>
      <InputDiv>
        <InputStyle
          type="text"
          placeholder="Paste a link to shorten it"
        />
        <ButtonStyle>shorten</ButtonStyle>
      </InputDiv>
    </InputContainer>
    </>
  )
}

export default InputShortener
