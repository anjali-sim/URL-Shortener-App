import styled from "styled-components";

export const Heading = styled.h1`
  font-family: "Playfair Display", serif;
  font-size: 50px;
  color: #fff;
  margin-top: 8rem;
  margin-bottom: 1.5rem;

  @media (max-width: 690px) {
    font-size: 45px;
  }
  @media (max-width: 620px) {
    font-size: 40px;
  }
  @media (max-width: 550px) {
    font-size: 37px;
  }
  @media (max-width: 500px) {
    font-size: 34px;
  }
  @media (max-width: 450px) {
    font-size: 30px;
  }
  @media (max-width: 390px) {
    font-size: 28px;
  }
  @media (max-width: 360px) {
    font-size: 25px;
  }
`;

export const Span = styled.span`
  color: #f99f38;
`;

export const InputContainer = styled.div`
  display: flex;
  position: absolute;
  flex-direction: column;
  align-items: center;
  margin-bottom: 2rem;
`;

export const Input = styled.input`
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

  @media (max-width: 500px) {
    padding: 0.2rem 0.1rem 0.2rem 0;
  }
`;

export const Button = styled.button`
  padding: 0 1rem;
  height: 3rem;
  font-size: 0.8rem;
  text-transform: uppercase;
  font-weight: bold;
  border-top-right-radius: 3px;
  border-bottom-right-radius: 3px;
  border: none;
  cursor: pointer;
`;

export const InputDiv = styled.div`
  display: flex;
  margin-top: 10px;
  margin-bottom: 10px;
  margin-left: 25px;
  width: 100%;

  @media (max-width: 500px) {
    width: 80%;
  }
`;

export const Paragraph = styled.p`
  color: #fff;
  font-size: 18px;

  @media (max-width: 400px) {
    font-size: 16px;
  }
`;

export const Image = styled.img`
  width: 35px;
  height: 35px;
`;

export const ResultDiv = styled.div`
  display: flex;
  width: 50%;
`;

