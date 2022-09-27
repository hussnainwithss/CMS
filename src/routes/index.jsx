import React, { Suspense, lazy } from "react";
import { Route, Routes } from "react-router-dom";
import { ROUTES } from "./constants";
import { DashboardLayout } from "../layouts";

const Login = lazy(() => import('../components/Login/Login'));
const Users = lazy(() => import('../components/Admin/Users'));

const Router = () => {
    return (
        <Suspense fallback={<div>Loading...</div>}>
            <Routes>
                <Route path={ROUTES.LOGIN} element={<Login />} />
                <Route path={ROUTES.DASHBOARD} element={<DashboardLayout>Dashboard</DashboardLayout>} />
                <Route path={ROUTES.GOVENTS} element={<DashboardLayout>Government Entities</DashboardLayout>} />
                <Route path={ROUTES.QUESTION_BANK} element={<DashboardLayout>Question Bank</DashboardLayout>} />
                <Route path={ROUTES.SURVEY_BANK} element={<DashboardLayout>SURVEY_BANK</DashboardLayout>} />
                <Route path={ROUTES.NATIONALITIES} element={<DashboardLayout>NATIONALITIES</DashboardLayout>} />
                <Route path={ROUTES.LANGUAGES} element={<DashboardLayout>LANGUAGES</DashboardLayout>} />
                <Route path={ROUTES.REGIONS} element={<DashboardLayout>REGIONS</DashboardLayout>} />
                <Route path={ROUTES.CITIES} element={<DashboardLayout>CITIES</DashboardLayout>} />
                <Route path={ROUTES.CHANNELS} element={<DashboardLayout>CHANNELS</DashboardLayout>} />
                <Route path={ROUTES.SETTINGS} element={<DashboardLayout>SETTINGS</DashboardLayout>} />
                <Route path={ROUTES.USERS} element={<DashboardLayout><Users/></DashboardLayout>} />
            
            </Routes>
        </Suspense >

    )
};

export default Router;