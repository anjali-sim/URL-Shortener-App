import React from 'react'
import MainPage from './pages/Main/MainPage'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Login from './pages/Login/Login';
import SignUp from './pages/SignUp/SignUp';
// import HomePage from './pages/Home/HomePage';
import ForgotPassword from './pages/ForgotPassword/ForgotPassword';
// import Profile from './pages/UserProfile/Profile';
import AboutPage from './pages/About/AboutPage';

const App:React.FC = () => {

  return (
    <>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/home" element={<MainPage />} />
        <Route path="/forgot-password" element={<ForgotPassword />} />
        {/* <Route path="/edit-profile" element={<Profile />} /> */}
        <Route path="/about" element={<AboutPage />} />
      </Routes>
    </BrowserRouter>
    </>
  )
}

export default App
