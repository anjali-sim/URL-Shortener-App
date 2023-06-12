import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
    body {
        display: grid;
        height: 100%;
        width: 100%;
        place-items: center;
        font-family: 'Poppins', sans-serif;
        margin: 0;
        padding: 0;
        background: white;
        // background: -webkit-linear-gradient(left, #a445b2, #fa4299);
    }
`;

export default GlobalStyle;