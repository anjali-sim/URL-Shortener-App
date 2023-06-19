import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  margin-top: 30px;
`;

export const SideBar = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  width: 35%;
  background-color: red;
  margin-left: 30px;
  margin-right: 30px;
  padding: 15px;
  box-shadow: 10px 10px 8px #888888;
`;

export const Image = styled.img`
  height: 30px;
  width: 30px;
  border-radius: 30px;
`;
export const Name = styled.p`
  font-size: 16px;
`;

export const Email = styled.p`
  font-size: 16px;
`;

export const MainContent = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 65%;
  background-color: blue;
  margin-right: 30px;
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
`;
