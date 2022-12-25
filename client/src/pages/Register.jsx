import React from "react";
import {Link} from "react-router-dom"


const Register=()=>{
        return (
             <div className="auth">
                <h1>註冊</h1>
                <form >
                    <input required type="text" placeholder="輸入帳號" />
                    <input required type="email" placeholder="輸入電子信箱" />
                    <input required type="password" placeholder="輸入密碼" />
                    <button>登入</button>
                    <p>發生錯誤!</p>
                    <span>已有帳號嗎？<Link to="/login" >前往登入</Link></span>
                </form>
             </div>
        );
    }

export default Register
