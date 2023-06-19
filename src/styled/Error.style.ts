import styled from "styled-components";

export const ErrorStyle = styled.div`
  color: red;
  font-size: 14px;
  margin-top: 1px;
  margin-left: 10px;

  @media (max-width: 500px) {
    margin-left: 5px;
  }
  @media (max-width: 410px) {
    margin-left: 10px;
  }
  @media (max-width: 370px) {
    margin-left: 13px;
  }
`;
