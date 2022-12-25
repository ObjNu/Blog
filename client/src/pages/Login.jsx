import React from "react";
import {Link} from "react-router-dom"


const Login=()=>{
        return (
             <div className="auth">
                <h1>登入</h1>
                <form >
                    <input type="text" placeholder="輸入帳號" />
                    <input type="password" placeholder="輸入密碼" />
                    <button>登入</button>
                    <p>發生錯誤!</p>
                    <span>沒有帳號嗎？<Link to="/register" >前往註冊</Link></span>
                </form>
             </div>
        );
    }

export default Login
