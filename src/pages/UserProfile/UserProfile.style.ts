import styled from "styled-components";

export const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Container = styled.div`
  margin-top: 30px;
  display: flex;
  width: 30%;
  padding: 20px 20px;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  box-shadow: -5px 2px 18px 4px #ccc;
`;

export const Border = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  width: 90%;
  border-image: linear-gradient(to right, #a445b2, #fa4299) 1;
  border-style: solid;
`;

export const Photo = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

export const Image = styled.img`
  margin-top: 50px;
  height: 100px;
  width: 100px;
  border-radius: 80px;
  box-shadow: -1px 1px 11px 6px rgba(189, 172, 172, 0.33);
`;

export const Button = styled.button`
  cursor: pointer;
  border: none;
  font-weight: 500;
  background: transparent;
  text-align: center;
  color: #a445b2;
  font-size: 15px;
  border-image: linear-gradient(to right, #a445b2, #fa4299) 1;
  border-style: solid;
  border-width: 2px;
  transition: all 0.2s linear;
  text-decoration: none;

  &:hover {
    background: -webkit-linear-gradient(left, #a445b2, #fa4299);
    color: #fff;
  }
`;

export const EditPhotoButton = styled(Button)`
  margin-top: 20px;
  font-weight: 500;
  font-size: 12px;
  border-width: 2px;
`;

export const EditProfileButton = styled(Button)`
  height: 16px;
  padding: 9px;
  font-weight: 600;
  font-size: 16px;
`;

export const ButtonPosition = styled.div`
  display: flex;
  justify-content: end;
`;

export const Content = styled.div`
  background: #ededed;
  width: 90%;
  padding: 10px;
  position: relative;
  top: 30px;
  margin-bottom: 40px;
`;

export const Name = styled.h2`
  padding-bottom: 20px;
`;

export const Email = styled.h3`
  padding-bottom: 10px;
`;
