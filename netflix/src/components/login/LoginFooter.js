import React, { Component } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { Icon } from "react-icons-kit";
import { iosWorld } from "react-icons-kit/ionicons/iosWorld/";
import { ic_keyboard_arrow_down } from "react-icons-kit/md/ic_keyboard_arrow_down";
import { generateMedia } from "styled-media-query";

export default class Footer extends Component {
    state = {
        langContent: false
    };

    handleToggle = e => {
        e.preventDefault();
        this.setState({
            langContent: !this.state.langContent
        });
    };
    render() {
        return (
            <FooterContainer>
                <span style={{ marginLeft: "10%", color: "#999" }}>
                    Questions? <Link>Call 1-877-145-6589</Link>
                </span>
                <div className="footer-columns">
                    <ul>
                        <li>
                            <Link>Gift Card Terms</Link>
                        </li>
                    </ul>
                    <ul>
                        <li>
                            <Link>Term of use</Link>
                        </li>
                    </ul>
                    <ul>
                        <li>
                            <Link>Privacy Statement</Link>
                        </li>
                    </ul>
                </div>

                {/* Language Button */}
                <div className="lang-btn" onClick={this.handleToggle}>
                    <Icon icon={iosWorld} size={20} />
                    English
                    <Icon icon={ic_keyboard_arrow_down} size={20} />
                </div>
                {/* Toggle Language content */}
                {this.state.langContent && (
                    <div className="lang-toggle">
                        <ul>
                            <li>English</li>
                        </ul>
                        <ul>
                            <li>Spanish</li>
                        </ul>
                    </div>
                )}
            </FooterContainer>
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

const FooterContainer = styled.footer`
    justify-content:center;
    background: rgba(0,0,0,0.8);
    padding-top: 3rem;
    padding-bottom: 6rem;
    margin-top:6rem;
    position: relative;
    z-index:5;
    span{
        ${customMedia.lessThan("phone")`
        margin-left: 5% !important;
        font-size:1rem !important;
    `}
    }

    .footer-columns {
        width: 80%;
        margin: 1rem auto 0;
        color: #999;
        font-size: 0.9rem;
        overflow: auto;
        display: grid;
        grid-template-columns: repeat(4, 1fr);
        ${customMedia.lessThan("desktop")`
        width: 100%;
    `}
        ${customMedia.lessThan("tablet")`
        font-size: 0.7rem;
    `}
    ${customMedia.lessThan("smTablet")`
        grid-template-columns: repeat(2, 1fr);
    `}
    }

    ul li {
        list-style: none;
        line-height: 2.5;
    }

    a {
        color: #999;
        font-size:0.9rem;
    }

    a:hover {
        text-decoration: underline;
        cursor: pointer;
    }

    p{
        text-decoration:underline;
        cursor:pointer;
    }

    /* Language */
    .lang-btn {
        background: transparent;
        border: 0.9px solid #333;
        padding: 1rem;
        width: 8rem;
        display: grid;
        grid-template-columns: repeat(3, 1fr);
        grid-gap: 0.5rem;
        cursor: pointer;
        margin-left:10%;
        margin-top:2rem;
        color:#999;
    }

    /* Toggle Language */
    .lang-toggle {
        margin-left: 10%;
        position: absolute;
    }

    .lang-toggle ul {
        background: var(--main-deep-dark);
        width: 8.125rem;
        border: 1px solid #333;
        text-align: center;
        margin: 0;
        padding: 0;
        &:hover {
            background: #0085ff;
            color: white;
        }
    }
`;
