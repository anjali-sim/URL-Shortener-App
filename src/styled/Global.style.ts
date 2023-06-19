import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  body {
      display: grid;
      height: 100vh;
      width: 100vw;
      place-items: center;
      font-family: 'Poppins', sans-serif;
      margin: 0;
      padding: 0;
      background: white;
  }
`;

export default GlobalStyle;
