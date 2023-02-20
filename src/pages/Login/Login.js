import React from 'react';
import './Login.css'

const Login = () => {
    return  (
        <article>
            <div className="login_wrapper">
                <div className="login_logo">westagram</div>
                <form className="login_form">
                    <input id="login_id" className="login_text" type="text" name="id" placeholder="전화번호, 사용자 이름 또는 이메일"/>
                    <input id="login_pw" className="login_text" type="password" name="id" placeholder="비밀번호"/>
                    <button id="login_btn" className="login_btn" type="button" disabled>로그인</button>
                </form>
                <a className="login_bottom" href="">비밀번호를 잊으셨나요?</a>
            </div>
        </article> 
    )
};

export default Login;