import React, { Suspense, lazy } from 'react';
import { Route, Routes, useNavigate } from 'react-router-dom';
import { ROUTES } from './constants';
import { DashboardLayout } from '../layouts';
import { useAuth } from '../hooks/useAuth';
import { useEffect } from 'react';

const Login = lazy(() => import('../components/Login/Login'));
const Logout = lazy(() => import('../pages/Auth/Logout/Logout'));
const UserManagement = lazy(() =>
    import('../pages/admin/UserManagement/UserManagement'),
);

const Router = () => {
    const { isAuthenticated } = useAuth();
    const navigate = useNavigate();

    useEffect(() => {
        if (!isAuthenticated) {
            navigate(ROUTES.LOGIN);
        }
    }, [navigate, isAuthenticated]);
    return (
        <Suspense fallback={<div>Loading...</div>}>
            <Routes>
                <Route path={ROUTES.LOGIN} element={<Login />} />
                <Route path={ROUTES.LOGOUT} element={<Logout />} />
                <Route
                    path={ROUTES.DASHBOARD}
                    element={<DashboardLayout>Dashboard</DashboardLayout>}
                />
                <Route
                    path={ROUTES.GOVENTS}
                    element={
                        <DashboardLayout>Government Entities</DashboardLayout>
                    }
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
                    element={<DashboardLayout>NATIONALITIES</DashboardLayout>}
                />
                <Route
                    path={ROUTES.LANGUAGES}
                    element={<DashboardLayout>LANGUAGES</DashboardLayout>}
                />
                <Route
                    path={ROUTES.REGIONS}
                    element={<DashboardLayout>REGIONS</DashboardLayout>}
                />
                <Route
                    path={ROUTES.CITIES}
                    element={<DashboardLayout>CITIES</DashboardLayout>}
                />
                <Route
                    path={ROUTES.CHANNELS}
                    element={<DashboardLayout>CHANNELS</DashboardLayout>}
                />
                <Route
                    path={ROUTES.SETTINGS}
                    element={<DashboardLayout>SETTINGS</DashboardLayout>}
                />
                <Route path={ROUTES.USERS} element={<UserManagement />} />
            </Routes>
        </Suspense>
    );
};

export default Router;
