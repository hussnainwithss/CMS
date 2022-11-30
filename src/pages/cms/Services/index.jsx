import React from 'react';
import { DataTable } from '../../../components/DataTable';

import { TitleCard } from '../../../components/TitleCard';
import { DashboardLayout } from '../../../layouts';
import { getColumns, Channels, SampleData, TableActions } from './TableData';

import './services.module.css';
import { useNavigate } from 'react-router-dom';
import { ROUTES } from '../../../routes/constants';

const Services = () => {
    const [show, setShow] = React.useState(false);
    
    const navigate = useNavigate();
    return (
        <DashboardLayout>
            <TitleCard
                title="Ministry of Education"
                // description="Manage services in the system"
                buttonId="addService"
                buttonTitle="Add service"
                buttonOnClick={() => navigate(ROUTES.ADDSERVICE)}
            >
                <h6>Sector: {SampleData[0].arabicName}</h6>
            </TitleCard>
            {/* <DataTable
                columns={getColumns(channels, setChannel)}
                data={channels}
                dataType="Services of Education Sector"
                actions={TableActions}
                // handler={() => }
                isPaginated
            /> */}
            {/* <ModalContainer
                show={show}
                setShow={setShow}
                header={`${'Add'} Service`}
                headerSubtitle={`Form for ${'Add'}ing a new Service`}
                primaryButtonText="Save"
                secondaryButtonText="Cancel"
            >
                <AddServiceChannel
                    afterSubmit={(vals) => {
                        // setChannel({ ...channels, vals });
                        setShow(false);
                    }}
                    afterCancel={() => setShow(false)}
                />
            </ModalContainer> */}
        </DashboardLayout>
    );
};

export default Services;
