import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';

import { actions } from '../../../actions/sectors';

import TitleCard from '../../../components/TitleCard/TitleCard';
import { Loader } from '../../../components/Loader';
import { DashboardLayout } from '../../../layouts';
import DataCards from '../../../components/DataCards/DataCards';
import { ROUTES } from '../../../routes/constants';
import { ACTION_TYPE } from './SectorForm/constants';
import { selectSectorsFromState } from '../../../selectors/sectors';
import { getColumns } from './TableData';
const UserManagement = () => {
    const [isLoading, setIsLoading] = useState(false);
    
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const sectorsData = useSelector(selectSectorsFromState);

    

    const clickHandler = (event) => {
        if (event.target.id === 'add') {
            navigate(ROUTES.ADDSECTOR);
        }
    };

    useEffect(() => {
        dispatch(actions.getSectorsAttempt({ setIsLoading }));
    }, [dispatch, setIsLoading]);

    return isLoading ? (
        <Loader />
    ) : (
        <DashboardLayout>
            <TitleCard
                title="Sector Management"
                description="View and manage the list of sectors in the system"
                buttonTitle="Add a new sector"
                buttonId="add"
                buttonOnClick={clickHandler}
            />
            <DataCards
                data={sectorsData}
                dataType="Sectors"
                columns={getColumns()}
                fieldsToShow={['arabicName', 'englishName', 'csat']}
                fieldsLabels={{
                    arabicName: 'Arabic Name',
                    englishName: 'English Name',
                    csat: 'CSAT',
                }}
                linkTo={ROUTES.EDITSECTOR}
                toReplace=':sectorId'
                isPaginated
            />
        </DashboardLayout>
    );
};

export default UserManagement;
