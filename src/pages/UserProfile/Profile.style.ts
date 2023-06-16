import styled from "styled-components";

export const Container = styled.div`
    width:100%;
    display: flex;
    flex-direction: row;
    margin-top: 30px;
`;

export const SideBar = styled.div`
    display: flex;
    justify-content:center;
    align-items:center;
    flex-direction:column;
    width: 40%;
    background-color: red;
    margin-left: 30px;
    margin-right: 30px;
    padding:15px;
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
    width:60%;
    background-color: black;
    margin-right: 30px;
`;