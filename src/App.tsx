import React from "react";
import AppStyle from "@/styled/App.style.ts";
import MainPage from "@/pages/Main/MainPage";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "@/pages/Login/Login";
import SignUp from "@/pages/SignUp/SignUp";
import ForgotPassword from "@/pages/ForgotPassword/ForgotPassword";
import Profile from "@/pages/UserProfile/ViewProfile.tsx";
import EditProfile from "@/pages/UserProfile/EditProfile.tsx";
import About from "@/pages/About/About.tsx";
import PublicRoute from "@/Routes/PublicRoute";
import PrivateRoute from "@/Routes/PrivateRoute";

const App: React.FC = () => {
  return (
    <>
      <AppStyle>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<MainPage />} />
            <Route path="/login" element={<Login />} />
            <Route path="/signup" element={<SignUp />} />
            <Route path="/forgot-password" element={<ForgotPassword />} />
            <Route path="/view-profile" element={<Profile />} />
            <Route path="/edit-profile" element={<EditProfile />} />
            <Route path="/about" element={<About />} />

            {/* <PublicRoute restricted={false} path="/" element={<MainPage />} />
          <PublicRoute restricted={true} path="/login" element={<Login />} />
          <PublicRoute restricted={true} path="/signup" element={<SignUp />} />
          <PublicRoute
            restricted={true}
            path="/forgot-password"
            element={<ForgotPassword />}
          />
          <PrivateRoute path="/view-profile" element={<Profile />} />
          <PrivateRoute path="/edit-profile" element={<EditProfile />} />
          <PrivateRoute path="/about" element={<About />} /> */}
          </Routes>
        </BrowserRouter>
      </AppStyle>
    </>
  );
};

export default App;
