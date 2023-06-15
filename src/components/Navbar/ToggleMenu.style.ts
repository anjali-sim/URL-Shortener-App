import styled from "styled-components";

export const DropdownContainer = styled.div`
  position: relative;
  display: inline-block;
`;

export const DropdownButton = styled.button`
background: transparent;
  color: white;
  padding: 16px;
  font-size: 18px;
  border: none;
  cursor: pointer;
  position: relative;
  display: flex;
  align-items: center;

  &::after {
    content: '';
    border: solid white;
    border-width: 0 2px 2px 0;
    display: inline-block;
    padding: 3px;
    transform: rotate(45deg);
    margin-left: 8px;
  }

  &:hover{
    background-color: rgba(0, 0, 0, 0.3);
  }
`;

export const DropdownContent = styled.div`
  display: ${props => (props.open ? 'block' : 'none')};
  position: absolute;
  background-color: #f1f1f1;
  min-width: 160px;
  box-shadow: 0px 8px 16px 0px rgba(0,0,0,0.2);
  z-index: 1;
`;

export const DropdownItem = styled.a`
  color: black;
  padding: 12px 16px;
  text-decoration: none;
  display: block;
  
  &:hover {
    background-color: #ddd;
  }
`;
