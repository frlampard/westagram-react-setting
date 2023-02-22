import React from "react";
import "./Login.css";

// const loginText = () => {
//     return (
//     )
// };

const buttonClick = () => {
    return (
        console.log("버튼 클릭 작동 확인!")
    )
};

const Login = () => {
    return  (
        <article>
            <div className="loginWrapper">
                <div className="loginLogo">westagram</div>
                <form className="loginForm">
                    <input id="login_id" className="loginText" type="text" name="id" placeholder="전화번호, 사용자 이름 또는 이메일"/>
                    <input id="login_pw" className="loginText" type="password" name="id" placeholder="비밀번호"/>
                    <button id="login_btn" className="loginButton" type="button" onClick={buttonClick} disabled>로그인</button>
                </form>
                <a className="loginBottom" href="./keonrok.js">비밀번호를 잊으셨나요?</a>
            </div>
        </article> 
    )
};

export default Login;