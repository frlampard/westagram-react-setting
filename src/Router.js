import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./pages/Login/Login";
import Main from "./pages/Main/Main";
import LostPassword from "./pages/LostPassword/LostPassword";

const Router = () => {

    return (
        <BrowserRouter>
                <Routes>
                    <Route path="/" element={<Login/> } />
                    <Route path="/main" element={<Main/> } />
                    <Route path="/lostPassword" element={<LostPassword/> } />
                </Routes>
        </BrowserRouter>
    );
};

export default Router;