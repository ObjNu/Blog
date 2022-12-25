import React from "react";
import Logo from "../img/logo.png"
import { Link } from "react-router-dom"

const Navbar = () => {
    return (
        <div className="navbar">
            <div className="container" >
                <div className="logo">
                    <img src={Logo} alt="" />
                </div>
                <div className="links">
                    <Link className="link" to="/?cat=art">
                        <h6>美術</h6>
                    </Link>
                    <Link className="link" to="/?cat=science">
                        <h6>科學</h6>
                    </Link>
                    <Link className="link" to="/?cat=techonology">
                        <h6>技術</h6>
                    </Link>
                    <Link className="link" to="/?cat=cinema">
                        <h6>影劇</h6>
                    </Link>
                    <Link className="link" to="/?cat=design">
                        <h6>設計</h6>
                    </Link>
                    <Link className="link" to="/?cat=food">
                        <h6>美食</h6>
                    </Link>
                    <span>userName</span>
                    <span>登出</span>
                    <span className="write">
                        <Link className="link" to="/write">編輯</Link>
                    </span>
                </div>

            </div>
        </div>
    );
}

export default Navbar
