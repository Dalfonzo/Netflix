import React from "react";
import Img from "../images/tab-1-pic.png";
import styled from "styled-components";
import { Button } from "./Button";
import { generateMedia } from "styled-media-query";

export default function TabContentOne() {
    return (
        <TabContentContainer>
            <div className="container">
                <div className="tab-content">
                    <div>
                        <span style={{ marginBottom: "2rem" }}>
                            If you decide Netflix isn't for you, no problem. No
                            commitment. Cancel online anytime
                        </span>
                        <br />
                        <Button style={{ marginTop: "2rem" }}>
                            Try it now
                        </Button>
                    </div>
                    <img src={Img} alt="" />
                </div>
            </div>
        </TabContentContainer>
    );
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

// Main Content Container
const TabContentContainer = styled.div`
    background: var(--main-deep-dark);

    .container {
        margin: 0 10%;
        ${customMedia.lessThan("mdDesktop")`
        margin: 0 auto;
    `}
    }

    img {
        width: 31.875rem;
        ${customMedia.lessThan("mdDesktop")`
        width: 30rem;
    `}
        ${customMedia.lessThan("desktop")`
        width:25rem;
    `}
    ${customMedia.lessThan("tablet")`
        width:20rem;
        aling-self: center;
        justify-self:center;
        grid-row-start: 1;

    `}
    ${customMedia.lessThan("mdPhone")`
        width:15rem;


    `}
    }

    .tab-content {
        display: grid;
        grid-template-columns: repeat(2, 1fr);
        grid-gap: 2rem;
        align-items: center;
        font-size: 2rem;
        padding: 2.5rem;
        
        ${customMedia.lessThan("tablet")`
        grid-template-columns: 1fr;
    `}
    }
    span {
        ${customMedia.lessThan("desktop")`
        font-size:1.5rem;
    `}
    ${customMedia.lessThan("tablet")`
        text-align:center;

    `}
    ${customMedia.lessThan("xsmTable")`
        font-size:1rem;

    `}
    }

    div{
        ${customMedia.lessThan("desktop")`
        display:grid;
        grid-template-columns: 1fr;


    `}

    }
    button{
        ${customMedia.lessThan("desktop")`
        width:50%;
        justify-self:center;

    `}
    }
`;
