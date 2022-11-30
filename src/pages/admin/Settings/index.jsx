import React, { useEffect, useState } from 'react';
import { Card, Nav, Tabs, Tab } from 'react-bootstrap';
import { Loader } from '../../../components/Loader';
import { TitleCard } from '../../../components/TitleCard';
import { DashboardLayout } from '../../../layouts';

const Settings = () => {
    const [isLoading, setIsLoading] = useState(false);

    return isLoading ? (
        <Loader />
    ) : (
        <DashboardLayout>
            <TitleCard
                title="System Configuration"
                description="View and modify system settings such as notifications, security, rating page, etc"
                buttonTitle="Save"
                buttonId="add"
                buttonOnClick={() => console.log('clicked')}
                isButton
            />
            <Card>
                <Card.Body>
                    <Tabs
                        defaultActiveKey="profile"
                        id="fill-tab-example"
                        className="mb-3"
                        // fill
                    >
                        <Tab eventKey="home" title="Home">
                            asd
                        </Tab>
                        <Tab eventKey="profile" title="Profile">
                            asdasvdv
                        </Tab>
                        <Tab eventKey="longer-tab" title="Loooonger Tab">
                            2132
                        </Tab>
                        <Tab eventKey="contact" title="Contact" >213</Tab>
                    </Tabs>
                </Card.Body>
            </Card>
        </DashboardLayout>
    );
};

export default Settings;
