import styled from "styled-components";

export const MainWrap = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  width: 100vw;
  place-items: center;
  font-family: "Poppins", sans-serif;
  margin: 0;
  padding: 0;
  background: -webkit-linear-gradient(left, #a445b2, #fa4299);
  opacity: 0.92;
`;

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

export const InputStyle = styled.input`
  height: 50px;
  width: 370px;
  outline: none;
  padding-left: 15px;
  margin-top: 15px;
  margin-left: 0px;
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

  @media (max-width: 500px) {
    width: 330px;
    margin-left: 0px;
    height: 48px;
  }

  @media (max-width: 410px) {
    width: 300px;
    margin-left: 3px;
    height: 45px;
    padding-left: 10px;
  }
  @media (max-width: 370px) {
    width: 270px;
    margin-left: 5px;
    height: 40px;
    padding-left: 8px;
  }
  @media (max-width: 330px) {
    width: 265px;
    margin-left: 5px;
    height: 38px;
    padding-left: 7px;
  }
  @media (max-width: 310px) {
    width: 250px;
    margin-left: 5px;
    height: 38px;
    padding-left: 7px;
  }
`;

export const InputWrapper = styled.div`
  width: 100%;
  margin-top: 20px;
  margin:bottom:20px;
`;

export const MainDiv = styled.div`
  text-align: center;
  margin-top: 30px;
`;

export const FormWrapper = styled.div`
  display: flex;
  width: 200%;
`;

export const TitleText = styled.div`
  display: flex;
  justify-content: center;
  width: 50%;
  font-size: 30px;
  font-weight: 600;
`;

export const SlideControls = styled.div`
  position: relative;
  display: flex;
  height: 50px;
  width: 95%;
  overflow: hidden;
  margin: 30px 0 0 10px;
  justify-content: space-between;
  border: none;

  @media (max-width: 500px) {
    width: 88%;
    margin-left: 20px;
  }
  @media (max-width: 410px) {
    width: 82%;
    margin-left: 30px;
  }
  @media (max-width: 370px) {
    width: 78%;
    margin-left: 35px;
    height: 45px;
  }
  @media (max-width: 330px) {
    width: 78%;
    margin-left: 35px;
    height: 45px;
  }
`;

export const Slide1 = styled.button`
  height: 100%;
  width: 50%;
  color: #fff;
  font-size: 20px;
  font-weight: 600;
  padding: 0px;
  line-height: 48px;
  cursor: pointer;
  border: none;
  border-radius: 5px 0px 0px 5px;
  text-decoration: none;
  text-align: center;
  z-index: 1;
  background: -webkit-linear-gradient(left, #a445b2, #fa4299);
  transition: all 0.6s ease;

  &:hover {
    background: -webkit-linear-gradient(left, #73307d, #d70669);
    // background: -webkit-linear-gradient(left, #62296b, #b9055a);
  }
`;

export const Slide2 = styled.button`
  height: 100%;
  width: 50%;
  color: #fff;
  font-size: 20px;
  font-weight: 600;
  padding: 0px;
  line-height: 48px;
  cursor: pointer;
  text-decoration: none;
  text-align: center;
  border: none;
  border-radius: 0px 5px 5px 0px;
  z-index: 1;
  background: -webkit-linear-gradient(left, #a445b2, #fa4299);
  transition: all 0.6s ease;

  &:hover {
    background: -webkit-linear-gradient(left, #73307d, #d70669);
    // background: -webkit-linear-gradient(left, #62296b, #b9055a);
  }
`;

export const SignUpDiv = styled.button`
  color: #fa4299;
  text-decoration: none;
  border: none;
  background-color: #fff;
  font-size: 16px;

  &:hover {
    text-decoration: underline;
  }
`;
