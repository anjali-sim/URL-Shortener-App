import styled from "styled-components";

export const ButtonWrapper = styled.div`
  height: 50px;
  width: 100%;
  margin-top: 10px;
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

  @media (max-width: 500px) {
    width: 350px;
  }
  @media (max-width: 410px) {
    width: 310px;
    height: 480px;
  }
  @media (max-width: 370px) {
    width: 280px;
    height: 460px;
  }
  @media (max-width: 330px) {
    width: 260px;
  }
  @media (max-width: 310px) {
    width: 240px;
  }
  @media (max-width: 290px) {
    width: 230px;
  }
`;

export const TextStyle = styled.button`
  color: #fa4299;
  border: none;
  background-color: #fff;
  font-size: 16px;
  text-decoration: none;

  &:hover {
    text-decoration: underline;
  }

  @media (max-width: 410px) {
    margin-left: 10px;
  }
`;

export const ButtonStyle = styled.button.attrs({ type: "submit" })`
  height: 50px;
  padding: 10px 150px;
  margin-left: 20px;
  background: -webkit-linear-gradient(left, #a445b2, #fa4299);
  border-radius: 5px;
  border: none;
  color: #fff;
  border-radius: 5px;
  font-size: 20px;
  font-weight: 500;
  cursor: pointer;

  @media (max-width: 500px) {
    padding: 10px 130px;
  }
  @media (max-width: 410px) {
    padding: 8px 120px;
    height: 46px;
    margin-left: 15px;
  }
  @media (max-width: 370px) {
    padding: 10px 100px;
    height: 43px;
    margin-left: 20px;
  }
  @media (max-width: 330px) {
    padding: 10px 90px;
    height: 40px;
    margin-left: 25px;
  }
  @media (max-width: 310px) {
    padding: 10px 90px;
    height: 38px;
    margin-left: 19px;
  }
`;
