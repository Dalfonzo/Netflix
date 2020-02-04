import React from "react";
import { Button } from "./Button";
import styled from "styled-components";
import ImgTv from "../images/tab-tv.png";
import ImgTablet from "../images/tab-tablet.png";
import ImgMacBook from "../images/tab-macbook.png";
import { generateMedia } from "styled-media-query";

export default function TabContentTwo() {
    return (
        <TabContainer>
            <div className="tab-content">
                <div className="tab-top-content">
                    <span style={{ fontSize: "1.5rem" }}>
                        Watch TV shows and movies anytime, anywhere -
                        personalized for you.
                    </span>
                    <Button className="btn">Try it now</Button>
                </div>
                {/* Tab bottom content */}
                <div className="tab-bottom-content">
                    {/* Tv Image container */}
                    <div>
                        <img src={ImgTv} alt="" style={{ width: "18.75rem" }} />
                        <h3>Watch on your Tv</h3>
                        <p>
                            Smart Tvs, PlayStation, Xbox, Chromecast, Apple Tv,
                            Blu-ray players and more.
                        </p>
                    </div>
                    {/* Tablet Image container */}
                    <div>
                        <img
                            src={ImgTablet}
                            alt=""
                            style={{
                                width: "18.75rem",
                                paddingTop: "0.625rem"
                            }}
                        />
                        <h3>Watch on your Tv</h3>
                        <p>
                            Smart Tvs, PlayStation, Xbox, Chromecast, Apple Tv,
                            Blu-ray players and more.
                        </p>
                    </div>
                    {/* Macbook Image container */}
                    <div>
                        <img
                            src={ImgMacBook}
                            alt=""
                            style={{
                                width: "18.75rem",
                                paddingTop: "0.625rem",
                                paddingBottom: "0.625rem"
                            }}
                        />
                        <h3>Watch on your Tv</h3>
                        <p>
                            Smart Tvs, PlayStation, Xbox, Chromecast, Apple Tv,
                            Blu-ray players and more.
                        </p>
                    </div>
                </div>
            </div>
        </TabContainer>
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

// MAin Tab Content Container
const TabContainer = styled.div`
    background: var(--main-deep-dark);
    .tab-content {
        margin: 0 2rem;
        ${customMedia.lessThan("desktop")`
        margin: 0 auto;

    `}
    }

    /* Tab Top content */
    .tab-top-content {
        display: grid;
        grid-template-columns: repeat(12, 1fr);
        justify-content: center;
        align-items: center;
        padding: 2.5rem 0;
    }

    span {
        grid-column: 1 / 8;
        ${customMedia.lessThan("desktop")`
        margin-left: 1rem;
        grid-column: 1 / 9 ;
        font-size: 1.25rem !important;
    `}
    }
    .btn {
        margin: 0 1.25rem;
        grid-column: 10 / -1;
        ${customMedia.lessThan("tablet")`
        grid-column: 9 / -1;
    `}
    }

    /* Tab Bottom */
    .tab-bottom-content {
        display: grid;
        grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
        grid-gap: 2rem;
        text-align: center;
        margin-top: 2rem;
        ${customMedia.lessThan("desktop")`
           margin: 0 2rem;
    `}
    }

    h3 {
        margin: 0.5rem 0;
    }

    p {
        color: var(--main-grey);
    }
`;
