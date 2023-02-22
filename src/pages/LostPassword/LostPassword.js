import React from "react";
import "./LostPassword.css";

const LostPassword = () => {
    return (
        <div className="lostPassword">
            <input type="tel" placeholder="전화번호를 입력하세요."></input>
            <input type="text" placeholder="이메일을 입력하세요."></input>
        </div>
    )
};

export default LostPassword;