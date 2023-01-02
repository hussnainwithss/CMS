import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';

import { actions } from '../../../actions/entities';

import TitleCard from '../../../components/TitleCard/TitleCard';
import { Loader } from '../../../components/Loader';
import { DashboardLayout } from '../../../layouts';
import DataCards from '../../../components/DataCards/DataCards';
import { ROUTES } from '../../../routes/constants';
import { ACTION_TYPE } from './EntityForm/constants';
import { selectEntitiesFromState } from '../../../selectors/entities';
import { getColumns } from './TableData';
const UserManagement = () => {
    const [isLoading, setIsLoading] = useState(false);
    
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const entitiesData = useSelector(selectEntitiesFromState);

    

    const clickHandler = (event) => {
        if (event.target.id === 'add') {
            navigate(ROUTES.ADDENTITY);
        }
    };

    useEffect(() => {
        dispatch(actions.getEntitiesAttempt({ setIsLoading }));
    }, [dispatch, setIsLoading]);

    return isLoading ? (
        <Loader />
    ) : (
        <DashboardLayout>
            <TitleCard
                title="Entity Management"
                description="View and manage the list of entities in the system"
                buttonTitle="Add a new entity"
                buttonId="add"
                buttonOnClick={clickHandler}
            />
            <DataCards
                data={entitiesData || []}
                dataType="Entites"
                columns={getColumns()}
                fieldsToShow={['arabicName', 'englishName', 'totalChannelCount']}
                fieldsLabels={{
                    arabicName: 'Arabic Name',
                    englishName: 'English Name',
                    totalChannelCount: '# of Channels',
                }}
                linkTo={ROUTES.EDITENTITY}
                toReplace=':entityId'
                isPaginated
            />
        </DashboardLayout>
    );
};

export default UserManagement;
