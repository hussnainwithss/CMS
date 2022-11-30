import React, { Suspense, lazy } from 'react';
import { Route, Routes, useNavigate } from 'react-router-dom';
import { ROUTES } from './constants';
import { DashboardLayout } from '../layouts';
import { useAuth } from '../hooks/useAuth';
import { useEffect } from 'react';
import { Loader } from '../components/Loader';
import moment from 'moment';

const Login = lazy(() => import('../components/Login/Login'));
const Logout = lazy(() => import('../pages/Auth/Logout/Logout'));

const Dashboard = lazy(() => import('../pages/Dashboard'));
const Settings = lazy(() => import('../pages/admin/Settings'));
const Services = lazy(() => import('../pages/cms/Services'));
const AddServiceChannel = lazy(() =>
    import('../pages/cms/Services/AddUserForm/AddServiceChannel'),
);
const UserManagement = lazy(() =>
    import('../pages/admin/UserManagement/UserManagement'),
);
const Channels = lazy(() =>
    import('../pages/admin/Categories/ChannelCategory/Channels'),
);
const ChannelTypes = lazy(() =>
    import('../pages/admin/Categories/ChannelTypes/ChannelTypes'),
);
const Cities = lazy(() => import('../pages/admin/Categories/Cities/Cities'));
const Regions = lazy(() => import('../pages/admin/Categories/Regions/Regions'));
const Languages = lazy(() =>
    import('../pages/admin/Categories/Languages/Languages'),
);
const Nationalities = lazy(() =>
    import('../pages/admin/Categories/Nationalities/Nationalities'),
);
const EntityTypes = lazy(() =>
    import('../pages/admin/Categories/EntityType/EntityType'),
);
const QuestionCategory = lazy(() =>
    import('../pages/admin/Categories/QuestionCategory/QuestionCategory'),
);

const Sectors = lazy(() => import('../pages/cms/Sectors/Sectors'));
const SectorForm = lazy(() =>
    import('../pages/cms/Sectors/SectorForm/SectorForm'),
);

const Entities = lazy(() => import('../pages/cms/Entities/Entities'));

const Router = () => {
    const { isAuthenticated, tokenExpireTimeStamp, logout } = useAuth();
    const navigate = useNavigate();

    useEffect(() => {
        if (!isAuthenticated) {
            navigate(ROUTES.LOGIN);
        }
    }, [navigate, isAuthenticated]);

    useEffect(() => {
        moment().isAfter(moment(tokenExpireTimeStamp)) && logout();
    }, [tokenExpireTimeStamp, logout]);
    return (
        <Suspense fallback={<Loader />}>
            <Routes>
                <Route path={ROUTES.LOGIN} element={<Login />} />
                <Route path={ROUTES.LOGOUT} element={<Logout />} />
                <Route path={ROUTES.DASHBOARD} element={<Dashboard />} />
                <Route path={ROUTES.ENTITIES} element={<Entities />} />
                <Route path={ROUTES.SERVICES} element={<Services />} />
                <Route
                    path={ROUTES.ADDSERVICE}
                    element={<AddServiceChannel />}
                />
                <Route
                    path={ROUTES.QUESTION_BANK}
                    element={<DashboardLayout>Question Bank</DashboardLayout>}
                />

                <Route
                    path={ROUTES.SURVEY_BANK}
                    element={<DashboardLayout>SURVEY_BANK</DashboardLayout>}
                />
                <Route
                    path={ROUTES.NATIONALITIES}
                    element={<Nationalities />}
                />
                <Route path={ROUTES.LANGUAGES} element={<Languages />} />
                <Route path={ROUTES.REGIONS} element={<Regions />} />
                <Route path={ROUTES.CITIES} element={<Cities />} />
                <Route path={ROUTES.CHANNELCATEGORIES} element={<Channels />} />
                <Route path={ROUTES.CHANNELTYPES} element={<ChannelTypes />} />
                <Route path={ROUTES.ENTITYTYPES} element={<EntityTypes />} />
                <Route
                    path={ROUTES.QUESTIONCATEGORY}
                    element={<QuestionCategory />}
                />
                <Route path={ROUTES.SETTINGS} element={<Settings />} />
                <Route path={ROUTES.USERS} element={<UserManagement />} />
                <Route path={ROUTES.SECTORS} element={<Sectors />} />
                <Route path={ROUTES.ADDSECTOR} element={<SectorForm />} />
                <Route path={ROUTES.EDITSECTOR} element={<SectorForm />} />
            </Routes>
        </Suspense>
    );
};

export default Router;
