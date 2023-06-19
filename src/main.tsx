import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import GlobalStyle from "./styled/Global.style.ts";
import { ToastContainer } from "react-toastify";


ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <GlobalStyle />
    <ToastContainer />
    <App />
  </React.StrictMode>
);
