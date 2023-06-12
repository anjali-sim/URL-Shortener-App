import styled from "styled-components";

const ListStyle = styled.a`
display: inline-block;
  padding: 13px 10px 13px 10px;
  text-decoration: none;
  color: #efefef;

  &:hover{
    background-color: rgba(0, 0, 0, 0.3);
  }

  @media (max-width:600px) {
    display: block;
    width: 100%;
  }
`;

export default ListStyle;