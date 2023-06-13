import styled from "styled-components";

export const FooterSection = styled.div`
background-color: #e9e9e9;
  color: black;
  line-height: 1.5;
  padding: 1.25rem 1.875rem;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
`;

export const DivStyle = styled.div`
padding: 1.25rem;
min-width: 12.5rem;

ul {
    list-style: none;
    padding-left: 0;
  }
`;

export const Title = styled.h2`
color: black;
  font-family: "Merriweather", serif;
  font-size: 1.375rem;
  padding-bottom: 0.625rem;
`;

export const ReferStyle = styled.a`
text-decoration: none;
    color: black;

    &:hover {
        text-decoration: underline;
    }
`;

export const InputStyle = styled.input.attrs({type: "email"})`
border: 0;
  padding: 0.625rem;
  margin-top: 0.3125rem;
`;

export const SubmitStyle = styled.input.attrs({type: "submit"})`
// background-color: #f99f38;
background: -webkit-linear-gradient(left, #a445b2, #fa4299);
  color: #fff;
  cursor: pointer;
  border: 0;
  padding: 0.625rem 0.9375rem;
  margin-top: 0.3125rem;
`;



export const FooterDiv = styled.section`
    width: 100%;
    height: 150px;
    // background-color: #263238;
    // background-color: #2C3E50;
    background-color: #3d3d3d;
    text-align: center;
    color: #f4f4f4;
`;

export const IconsDiv = styled.div`
padding-top: 1rem;
`;

export const Icons = styled.a`
text-decoration: none;
    font-size: 2rem;
    margin: 0.5rem;
    color: #f4f4f4;
`;

export const Paragraph = styled.p`
font-size: 20px;
    margin-top: 30px;
`;