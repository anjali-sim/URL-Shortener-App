import styled from "styled-components";

export const ButtonWrapper = styled.div`
height: 50px;
width: 100%;
margin-top: 40px;
border-radius: 5px;
position: relative;
overflow: hidden;
`;

export const Wrap = styled.div`
display: flex;
justify-content: center;
align-items: center;
overflow: hidden;
width: 390px;
height: 500px;
background-color: #fff;
padding: 20px;
border-radius: 5px;
box-shadow: 0px 15px 20px rgba(0, 0, 0, 0.1);
`;

export const TextStyle = styled.p`
margin-top:0px;
color: #fa4299;
  text-decoration: none;

&:hover {
      text-decoration: underline;
}
`;