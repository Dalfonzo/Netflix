import React, { Component } from "react";
import styled from "styled-components";

export default class LoginForm extends Component {
    render() {
        return (
            <FormContainer>
                <div className="form-container">
                    <form>
                        <h1>Sign In</h1>
                        <div className="input-container">
                            <input
                                className="input-empty"
                                type="email"
                                required
                            />
                            <label>Email or Phone Number</label>
                        </div>
                        <div className="input-container">
                            <input
                                className="input-empty"
                                type="password"
                                required
                            />
                            <label>Password</label>
                        </div>
                        <div className="input-container">
                            <a href="#" type="submit">
                                Sign In
                            </a>
                        </div>
                    </form>
                </div>
            </FormContainer>
        );
    }
}

const FormContainer = styled.div`
    display: grid;
    justify-content: center;
    position: relative;
    z-index: 5;

    .form-container {
        background: rgba(0, 0, 0, 0.8);
        position: relative;
        width: 28.125rem;
        height: 41.25rem;
        padding: 4rem;
    }

    .input-container {
        display: grid;
        grid-template-columns: 1fr;
        margin-top: 1.2rem;
    }

    .input-empty {
        color: white;
        background: #333;
        border: 0;
        border-radius: 0.25rem;
        height: 3rem;
        padding: 0.9rem 1.25rem 0;
    }

    form div label {
        position: absolute;
        top: 0.625rem;
        left: 1.25rem;
        pointer-events: none;
        color: #8a8a8a;
        font-size: 1rem;
        transition: transform 150ms ease-out, font-size 150ms ease-out;
    }

    form div {
        position: relative;
    }

    input:focus ~ label {
        top: 0.4375rem;
        font-size: 0.7rem;
    }

    input:focus {
        outline: none;
    }
`;

// Button
