import React, { Component } from "react";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import TabDoor from "./tabs_nav/TabDoor";
import TabDevices from "./tabs_nav/TabDevices";
import TabPrices from "./tabs_nav/TabPrices";
import TabContentOne from "./TabContentOne";
import TabContentTwo from "./TabContentTwo";
import "../css/TabsNav.css";

export default class TabComponent extends Component {
    state = {
        tabIndex: 0
    };
    render() {
        return (
            <div>
                <Tabs
                    className="tabs"
                    selectedIndex={this.state.tabIndex}
                    onSelect={tabIndex => this.setState({ tabIndex })}
                >
                    <TabList className="tab-nav-container">
                        <Tab
                            className={`${
                                this.state.tabIndex === 0
                                    ? "active tab-selected"
                                    : null
                            }`}
                        >
                            <TabDoor />
                            <p style={{ marginBottom: "1.75rem" }}>
                                <strong>
                                    No commitments <br />
                                    Cancel online at anytime
                                </strong>
                            </p>
                        </Tab>
                        <Tab
                            className={`${
                                this.state.tabIndex === 1
                                    ? "active tab-selected"
                                    : null
                            }`}
                        >
                            <TabDevices />
                            <p style={{ marginTop: "-5rem" }}>
                                <strong>Watch Anywhere</strong>
                            </p>
                        </Tab>
                        <Tab
                            className={`${
                                this.state.tabIndex === 2
                                    ? "active tab-selected"
                                    : null
                            }`}
                        >
                            <TabPrices />
                            <p>
                                <strong>Pick your price</strong>
                            </p>
                        </Tab>
                    </TabList>

                    {/* TabsContent */}
                    <TabPanel>
                        <TabContentOne />
                    </TabPanel>
                    <TabPanel>
                        <TabContentTwo />
                    </TabPanel>
                </Tabs>
            </div>
        );
    }
}
