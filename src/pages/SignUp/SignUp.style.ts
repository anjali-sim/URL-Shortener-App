import styled from "styled-components";

export const ButtonSignUpWrapper = styled.div`
display:flex;
height: 50px;
width: 100%;
margin-top: 220px;
border-radius: 5px;
// position: relative;
margin-left: 0px;
overflow: hidden;

@media(max-width: 500px) {
    width: 90%;
    margin-left: 15px;
}
@media(max-width: 410px) {
    width: 80%;
    margin-left: 15px;
    display:flex;
}
`;

export const Wrap = styled.div`
display: flex;
justify-content: center;
align-items: center;
overflow: hidden;
width: 390px;
height: 600px;
background-color: #fff;
padding: 20px;
border-radius: 5px;
box-shadow: 0px 15px 20px rgba(0, 0, 0, 0.1);

@media(max-width: 500px) {
    width: 350px;
}
@media(max-width: 410px) {
    width: 310px;
}
@media(max-width: 370px) {
    width: 280px;
}
`;

export const ErrorStyle = styled.div`
color: red;
font-size: 14px;
margin-top: 1px;
margin-left: 0px;

@media(max-width: 500px) {
margin-left:20px;
}
@media(max-width: 410px) {
    margin-left:40px;
    }
    @media(max-width: 370px) {
        margin-left:55px;
        }
`;