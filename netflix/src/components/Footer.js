import React, { Component } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { Icon } from "react-icons-kit";
import { iosWorld } from "react-icons-kit/ionicons/iosWorld/";
import { ic_keyboard_arrow_down } from "react-icons-kit/md/ic_keyboard_arrow_down";
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
                <span style={{ marginLeft: "17%", fontSize: "1.125rem" }}>
                    Questions? <Link>Call 1-877-145-6589</Link>
                </span>
                <div className="footer-columns">
                    <ul>
                        <li>
                            <Link>FAQ</Link>
                        </li>
                        <li>
                            <Link>Investor Relations</Link>
                        </li>
                        <li>
                            <Link>Privacy</Link>
                        </li>
                        <li>
                            <Link>Speed Test</Link>
                        </li>
                    </ul>
                    <ul>
                        <li>
                            <Link>Help Center</Link>
                        </li>
                        <li>
                            <Link>Jobs</Link>
                        </li>
                        <li>
                            <Link>Cookie Preferences</Link>
                        </li>
                        <li>
                            <Link>Legal Notices</Link>
                        </li>
                    </ul>
                    <ul>
                        <li>
                            <Link>Account</Link>
                        </li>
                        <li>
                            <Link>Ways to Watch</Link>
                        </li>
                        <li>
                            <Link>Corporate Information</Link>
                        </li>
                        <li>
                            <Link>Netflix Originals</Link>
                        </li>
                    </ul>
                    <ul>
                        <li>
                            <Link>Media Center</Link>
                        </li>
                        <li>
                            <Link>Terms of Use</Link>
                        </li>
                        <li>
                            <Link>Contact Us</Link>
                        </li>
                    </ul>
                    {/* Language Button */}
                    <div className="lang-btn" onClick={this.handleToggle}>
                        <Icon icon={iosWorld} size={20} />
                        English
                        <Icon icon={ic_keyboard_arrow_down} size={20} />
                    </div>
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
                <span style={{ marginLeft: "15%", fontSize: "0.9rem" }}>
                    Netflix Canada
                </span>
            </FooterContainer>
        );
    }
}

const FooterContainer = styled.footer`
    background: var(--main-deep-dark);
    padding-top: 10rem;
    padding-bottom: 3rem;
    color: #999;

    .footer-columns {
        width: 70%;
        margin: 1rem auto 0;
        font-size: 0.9rem;
        overflow: auto;
        display: grid;
        grid-template-columns: repeat(4, 1fr);
    }

    ul li {
        list-style: none;
        line-height: 2.5;
    }

    a {
        color: #999;
    }

    a:hover {
        text-decoration: underline;
        cursor: pointer;
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
    }

    /* Toggle Language */
    .lang-toggle {
        margin-left: 14.8%;
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
