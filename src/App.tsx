import React from "react";
import AppStyle from "@/styled/App.style.ts";
import MainPage from "@/pages/Main/MainPage";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "@/pages/Login/Login";
import SignUp from "@/pages/SignUp/SignUp";
// import HomePage from './pages/Home/HomePage';
import ForgotPassword from "@/pages/ForgotPassword/ForgotPassword";
import Profile from "@/pages/UserProfile/ViewProfile.tsx";
import EditProfile from "@/pages/UserProfile/EditProfile.tsx";
import About from "@/pages/About/About.tsx";

const App: React.FC = () => {
  return (
    <>
    <AppStyle>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<MainPage />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/home" element={<MainPage />} />
          <Route path="/forgot-password" element={<ForgotPassword />} />
          <Route path="/view-profile" element={<Profile />} />
          <Route path="/edit-profile" element={<EditProfile />} />
          <Route path="/about" element={<About />} />
        </Routes>
      </BrowserRouter>
      </AppStyle>
    </>
  );
};

export default App;
