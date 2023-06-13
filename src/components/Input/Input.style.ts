import styled from "styled-components";

export const Heading = styled.h1`
font-family: 'Playfair Display', serif;
  font-size: 3.5rem;
  color: #fff;
  margin-bottom: 1.5rem;
`;

export const SpanStyle = styled.span`
color: #f99f38;
`;

export const InputContainer = styled.div`
display: flex;
position:absolute;
flex-direction: column;
align-items:center;
width:100%;
margin-bottom: 2rem;
`;

export const InputStyle = styled.input`
width: 100%;
  padding: 0.5rem 0.2rem 0.5rem 0;
  text-indent: 1rem;
  border: none;
  outline: none;
  font-size: 1rem;
  border-top-left-radius: 3px;
  border-bottom-left-radius: 3px;

  ::placeholder {
    font-size: 0.9rem;
  }
`;

export const ButtonStyle = styled.button`
padding: 0 1rem;
  height: 3rem;
  font-size: 0.8rem;
  text-transform: uppercase;
  font-weight: bold;
  border-top-right-radius: 3px;
  border-bottom-right-radius: 3px;
  color: #fff;
  background-color: #f99f38;
  border: none;
  cursor: pointer;
`;

export const InputDiv = styled.div`
display:flex;
margin-top: 10px;
margin-bottom:10px;
width:50%;
`;

export const Paragraph = styled.p`
color: #fff;
font-size: 18px;
`;