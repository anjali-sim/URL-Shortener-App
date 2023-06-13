import styled from "styled-components";

export const MainWrap = styled.div`
display: flex;
justify-content: center;
align-items: center;
    height: 100vh;
    width: 100vw;
    place-items: center;
    font-family: 'Poppins', sans-serif;
    margin: 0;
    padding: 0;
    background: -webkit-linear-gradient(left, #a445b2, #fa4299);
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

export const Wrapper = styled.div`
display:flex;
flex-direction:column;
justify-content:center;
// align-items:center;
// height: 500px;
// width:390px;
`;

export const InputStyle = styled.input`
height: 50px;
  width: 370px;
  outline: none;
  padding-left: 15px;
  margin-bottom: 15px;
  border-radius: 5px;
  border: 1px solid lightgrey;
  border-bottom-width: 2px;
  font-size: 17px;
  transition: all 0.3s ease;

  &:focus {
    border-color: #fc83bb;
    //    box-shadow: inset 0 0 3px #fb6aae;
  }

  &::placeholder {
    color: #999;
    transition: all 0.3s ease;
  }

  &:focus::placeholder {
    color: #b3b3b3;
  }
`;


export const InputWrapper = styled.div`
height: 150px;
  width: 100%;
  margin-top: 20px;
  margin:bottom:20px;
`;

export const ButtonWrapper = styled.div`
height: 50px;
width: 100%;
margin-top: 40px;
border-radius: 5px;
position: relative;
overflow: hidden;
`;

export const TextStyle = styled.p`
margin-top:0px;
color: #fa4299;
  text-decoration: none;

&:hover {
      text-decoration: underline;
}
`;

export const MainDiv = styled.div`
text-align:center;
margin-top:30px;
`;

export const SignUpDiv = styled.span`
color:#fa4299;
text-decoration:none;

&:hover {
    text-decoration:underline;
}
`;

export const FormWrapper = styled.div`
  display: flex;
  width: 200%;
`;

export const TitleText = styled.div`
  display: flex;
  justify-content:center;
  width: 50%;
  font-size: 30px;
  font-weight: 600;
//   text-align: center;
//   transition: all 0.6s cubic-bezier(0.68, -0.55, 0.265, 1.55);
`;

export const SlideControls = styled.div`
  position: relative;
  display: flex;
  height: 50px;
  width: 95%;
  overflow: hidden;
  margin: 30px 0 10px 10px;
  justify-content: space-between;
  border: none;
//   border-radius: 5px;
`;

export const Slide1 = styled.button`
  height: 100%;
  width: 50%;
  color: #fff;
  font-size: 20px;
  font-weight: 600;
padding:0px;
  line-height: 48px;
  cursor: pointer;
  border:none;
  border-radius:5px 0px 0px 5px;
  z-index: 1;
  background: -webkit-linear-gradient(left, #a445b2, #fa4299);
  transition: all 0.6s ease;

`;

export const Slide2 = styled.button`
  height: 100%;
  width: 50%;
  color: #fff;
  font-size: 20px;
  font-weight: 600;
padding:0px;
  line-height: 48px;
  cursor: pointer;
  border:none;
  border-radius:0px 5px 5px 0px;
  z-index: 1;
  background: -webkit-linear-gradient(left, #a445b2, #fa4299);
  transition: all 0.6s ease;

`;

export const ButtonStyle = styled.button.attrs({type: "submit"})`
height: 50px;
width: 370px;
margin-left:10px;
background: -webkit-linear-gradient(left, #a445b2, #fa4299);
border-radius: 5px;
transition: all 3s ease-in;
border: none;
color: #fff;
border-radius: 5px;
font-size: 20px;
font-weight: 500;
cursor: pointer;
`;
