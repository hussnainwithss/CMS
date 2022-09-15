import React, { Suspense, lazy } from "react";
import { Route, Routes } from "react-router-dom";
import { ROUTES } from "./constants";

const Login = lazy(() => import('../components/Login/Login'));

const Router = () => {
    return (
        <Suspense fallback={<div>Loading...</div>}>
            <Routes>
                <Route path={ROUTES.LOGIN} element={<Login />} />
                <Route path={ROUTES.DASHBOARD} element={<div>Dashboard</div>} />

            </Routes>
        </Suspense >

    )
};

export default Router;