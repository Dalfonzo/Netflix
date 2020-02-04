import React from "react";
import styled from "styled-components";
import { Button } from "./Button";
import { Icon } from "react-icons-kit";
import { cross } from "react-icons-kit/icomoon/cross";
import { checkmark } from "react-icons-kit/icomoon/checkmark";
import { generateMedia } from "styled-media-query";

export default function TabContentThree() {
    return (
        <TabContainer>
            <div className="tab-content">
                <div className="tab-top-content">
                    <span style={{ fontSize: "1.5rem" }}>
                        Choose one plan and watch everything on Netflix
                    </span>
                    <Button className="btn">Try it out</Button>
                </div>
                {/* Tab Bottom Content */}
                <div className="tab-bottom-content">
                    <table>
                        <thead>
                            <tr>
                                <th></th>
                                <th>Basic</th>
                                <th>Standard</th>
                                <th>Premium</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>Montly Price</td>
                                <td>$9.99</td>
                                <td>$13.99</td>
                                <td>$16.99</td>
                            </tr>
                            <tr>
                                <td>HD available</td>
                                <td>
                                    <Icon icon={cross} size={10} />
                                </td>
                                <td>
                                    <Icon icon={checkmark} size={10} />
                                </td>
                                <td>
                                    <Icon icon={checkmark} size={10} />
                                </td>
                            </tr>
                            <tr>
                                <td>Ultra HD available</td>
                                <td>
                                    <Icon icon={cross} size={10} />
                                </td>
                                <td>
                                    <Icon icon={cross} size={10} />
                                </td>
                                <td>
                                    <Icon icon={checkmark} size={10} />
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    Screens you can watch on at the same time
                                </td>
                                <td>1</td>
                                <td>2</td>
                                <td>4</td>
                            </tr>
                            <tr>
                                <td>
                                    Watch on your laptop, TV, phone and tablet
                                </td>
                                <td>
                                    <Icon icon={checkmark} size={10} />
                                </td>
                                <td>
                                    <Icon icon={checkmark} size={10} />
                                </td>
                                <td>
                                    <Icon icon={checkmark} size={10} />
                                </td>
                            </tr>
                            <tr>
                                <td>Unlimited movies and TV shows</td>
                                <td>
                                    <Icon icon={checkmark} size={10} />
                                </td>
                                <td>
                                    <Icon icon={checkmark} size={10} />
                                </td>
                                <td>
                                    <Icon icon={checkmark} size={10} />
                                </td>
                            </tr>
                            <tr>
                                <td>Cancel Anytime </td>
                                <td>
                                    <Icon icon={checkmark} size={10} />
                                </td>
                                <td>
                                    <Icon icon={checkmark} size={10} />
                                </td>
                                <td>
                                    <Icon icon={checkmark} size={10} />
                                </td>
                            </tr>
                        </tbody>
                    </table>
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

//Main Container
const TabContainer = styled.div`
    background: var(--margin-deep-dark);

    .tab-content {
        margin: 0 15%;
        padding-bottom: 1%;
        ${customMedia.lessThan("smTablet")`
        margin: 0 7%;

    `}
        ${customMedia.lessThan("phone")`
        margin: 0 auto;

    `}
    }

    .tab-top-content {
        display: grid;
        grid-template-columns: repeat(12, 1fr);
        padding: 3rem 0 0;
    }

    span {
        grid-column: 1 / 9;
        ${customMedia.lessThan("xsmTable")`
        font-size:1rem !important;

    `}
    }

    .btn {
        grid-column: 10 / -1;
        ${customMedia.lessThan("smTablet")`
        grid-column: 9 / -1;
        height: 60%;
    `}
        ${customMedia.lessThan("xsmTable")`
        height: 90%;

    `}
    }

    /* Tab Bottom Content */
    .tab-bottom-content {
        margin: 2rem auto;
    }

    /*Table  */
    table {
        width: 100%;
        margin-top: 2rem;
        border-collapse: collapse;
    }

    table thead th {
        text-transform: uppercase;
        padding: 0.8rem;
        ${customMedia.lessThan("xsmTable")`
        font-size:0.8rem !important;

    `}
    }

    table tbody {
        display: table-row-group;
        vertical-align: middle;
        border-color: inherit;
    }

    table tbody tr td {
        color: #999;
        padding: 0.8rem 1.2rem;
        text-align: center;
        ${customMedia.lessThan("xsmTable")`
        font-size:0.8rem !important;

    `}
    }
    table tbody tr td:first-child {
        text-align: left;
    }

    table tbody tr:nth-child(even) {
        background: #222;
    }
`;
