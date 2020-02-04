import React, { Component } from "react";
import logo from "../svg/logo.svg";
import { NavLink } from "react-router-dom"; //{ NavLink,Link }
import styled from "styled-components";
import { Icon } from "react-icons-kit";
import { Button } from "./Button";
import { ic_keyboard_arrow_right } from "react-icons-kit/md/ic_keyboard_arrow_right";
// Media Query
import { generateMedia } from "styled-media-query";

export default class Header extends Component {
    render() {
        return (
            <HeaderComponent className="header-container">
                <div className="header-top">
                    <Logo src={logo} alt="" />
                    <NavLink to="/login" className="signIn-btn">
                        Sign In
                    </NavLink>
                </div>
                {/* Header Content */}
                <div className="header-content">
                    <Title>See What's next.</Title>
                    <Subtitle>WATCH ANYWHERE. CANCEL ANYTIME.</Subtitle>
                    <Button className="main-offer-btn" primary>
                        Try it now
                        <Icon
                            className="Icon"
                            icon={ic_keyboard_arrow_right}
                            size={37}
                        />
                    </Button>
                </div>
            </HeaderComponent>
        );
    }
}

const customMedia = generateMedia({
    lgDesktop: "1350px",
    mdDesktop: "1200px",
    desktop: "1030px",
    tablet: "960px",
    smTablet: "740px",
    xsmTable: "620px",
    phone: "520px",
    mdPhone: "425px"
});

// Logo
const Logo = styled.img`
    width: 10rem;
    height: 3.5rem;
    position: absolute;
    top: 25%;
    left: 50%;
    transform: translate(-50%, -50%);
    ${customMedia.lessThan("tablet")`
        left:20%;
    `}
    ${customMedia.lessThan("xsmTable")`
        margin-left: 20px;
    `}
    ${customMedia.lessThan("mdPhone")`
        width: 8rem;
    `}
`;

// Header Container

const HeaderComponent = styled.div`
    .signIn-btn {
        right: 0;
        margin: 1.123rem 3% 0;
        padding: 0.4375rem 1.0625rem;
        font-weight: 400;
        line-height: normal;
        border-radius: 0.1875rem;
        font-size: 1rem;
        background: var(--main-red);
        position: absolute;
        translate: transform(-50%, -50%);
        cursor: pointer;
        transition: background 0.2s ease-in;

        &:hover {
            background: var(--main-red-hover);
        }

        ${customMedia.lessThan("tablet")`
        right: 5%;
    `}

        ${customMedia.lessThan("smTablet")`
        margin-top:1.25rem;
    `}
        ${customMedia.lessThan("mdPhone")`
        font-size: 0.8rem;
    `}
    }

    /* header Top */
    .header-top {
        position: relative;
        height: 10rem;
        z-index: 1;
    }

    /* Header Content */

    .header-content {
        width: 65%;
        position: relative;
        margin: 4.5rem auto 0;
        display: flex;
        justify-content: center;
        align-content: center;
        text-align: center;
        flex-direction: column;
        z-index: 1;
        ${customMedia.lessThan("xsmTable")`
        width: 95%;
    `};
    }

    .Icon svg {
        vertical-align: bottom;
        margin-left: 1.5rem;
        ${customMedia.lessThan("lgDesktop")`
            display: none !important;
        `}
    }

    .main-offer-btn {
        ${customMedia.lessThan("lgDesktop")`
        margin: 0 33%;
        font-size:1.5rem;
    `};
        ${customMedia.lessThan("mdDesktop")`
        margin: 0 33% ;
        font-size:1.3rem;
    `};
        ${customMedia.lessThan("tablet")`
        margin: 0 20%;
        font-size:1.3rem;
    `};
        ${customMedia.lessThan("xsmTable")`
        margin: auto;
        font-size:1.3rem;
    `};
        ${customMedia.lessThan("mdPhone")`
        font-size: 1rem;
    `}
    }
`;

// Main title
const Title = styled.h1`
    margin: 0 0 1.2rem;
    font-size: 5rem;
    font-weight: 700;
    line-height: 1.1em;
    ${customMedia.lessThan("desktop")`
        font-size: 4rem;
    `}
    ${customMedia.lessThan("tablet")`
        font-size: 3rem;
    `};
    ${customMedia.lessThan("mdPhone")`
        font-size: 2rem;
    `}
`;

//Subtitle

const Subtitle = styled.h2`
    font-weight: 400;
    font-size: 1.875rem;
    line-height: 1.25em;
    margin: 0 0 1.875rem;
    text-transform: uppercase;
    ${customMedia.lessThan("desktop")`
        font-size: 1.4rem;
    `}
    ${customMedia.lessThan("tablet")`
        font-size: 1rem;
    `};
    ${customMedia.lessThan("mdPhone")`
        font-size: 0.8rem;
    `}
`;
