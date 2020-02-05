import React, { Component } from "react";
import logo from "../svg/logo.svg";
import styled from "styled-components";
import LoginForm from "../components/login/LoginForm";
import LoginFooter from "../components/login/LoginFooter";
import { generateMedia } from "styled-media-query";

export default class Login extends Component {
    render() {
        return (
            <div className="main-login-container">
                <div className="header-top">
                    <Logo src={logo} alt="logo" className="logo" />
                </div>
                <LoginForm />
                <LoginFooter />
            </div>
        );
    }
}

const customMedia = generateMedia({
    tablet: "640px",
    lgTablet: "740px"
});
//Logo
const Logo = styled.img`
    width: 11rem;
    position: absolute;
    top: 5%;
    left: 15%;
    transform: translate(-50%, -50%);
    margin-left: 0;
    z-index: 5;
    ${customMedia.lessThan("tablet")`;
        top:5%;
        left:25%;
    `}
`;
