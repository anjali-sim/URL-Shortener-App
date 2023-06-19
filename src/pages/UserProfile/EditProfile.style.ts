import styled from "styled-components";

export const Container = styled.div`
  margin-top: 30px;
  display: flex;
  width: 40%;
  padding: 20px 20px;
//   justify-content: center;
  align-items: center;
  flex-direction: column;
  box-shadow: -5px 2px 18px 4px #ccc;
`;

export const InputLabel = styled.h3`
color: #a445b2;
margin-left: 25px;
`;

export const InputWrapper = styled.div`
display:flex;
flex-direction:column;
  width: 100%;
  margin-top: 20px;
  margin:bottom:20px;
`;

export const InputStyle = styled.input`
  height: 50px;
  width: 90%;
//   width: 370px;
  outline: none;
  padding-left: 15px;
  margin-left: 25px;
  border-radius: 5px;
  border: 1px solid lightgrey;
  border-bottom-width: 2px;
  font-size: 17px;
  transition: all 0.3s ease;

  &:focus {
    border-color: #fc83bb;
  }

  &::placeholder {
    color: #999;
    transition: all 0.3s ease;
  }

  &:focus::placeholder {
    color: #b3b3b3;
  }
`;

export const UpdateProfileButton = styled.button`
margin-top: 30px;
cursor: pointer;
border: none;
font-weight: 600;
background: transparent;
text-align: center;
color: #a445b2;
padding:10px;
font-size: 18px;
border-image: linear-gradient(to right, #a445b2, #fa4299) 1;
border-style: solid;
border-width: 3px;
transition: all 0.2s linear;
text-decoration:none;

&:hover {
  background: -webkit-linear-gradient(left, #a445b2, #fa4299);
  color: #fff;
}

`;