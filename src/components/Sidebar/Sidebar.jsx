import React, { useState, useMemo } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Navbar, Nav, Collapse } from 'react-bootstrap';
import { ROUTES } from '../../routes/constants';
import { useAuth } from '../../hooks/useAuth';

import wataniLogo from '../../assets/img/watani_logo_arabic_desktop.png';

import './sidebar.css';

const Sidebar = () => {
    const location = useLocation();
    const route = location.pathname;

    const isCategoriesActive = useMemo(
        () =>
            [
                ROUTES.NATIONALITIES,
                ROUTES.LANGUAGES,
                ROUTES.REGIONS,
                ROUTES.CITIES,
                ROUTES.CHANNELCATEGORIES,
                ROUTES.ENTITYTYPES,
                ROUTES.QUESTIONCATEGORY,
                ROUTES.CHANNELTYPES,
            ].includes(route),
        [route],
    );
    const [isCategoriesExpanded, setIsCategoriesExpanded] =
        useState(isCategoriesActive);

    const { role: LoggedInUserRole } = useAuth();

    return (
        <Navbar
            expand="lg"
            className="navbar-vertical d-none d-lg-block d-xl-block d-xxl-block "
        >
            <Navbar.Brand className="d-flex align-items-center p-0 m-0 pl-0">
                <Link className="navbar-brand" to={ROUTES.DASHBOARD}>
                    <div className="d-flex align-items-center py-3">
                        <img
                            className="me-2"
                            src={wataniLogo}
                            alt=""
                            width="100"
                        />
                    </div>
                </Link>
            </Navbar.Brand>
            <Navbar.Collapse id="sidebar" className="scrollbar ">
                <Nav className={`me-auto flex-column vh-100 `} as="ul">
                    {LoggedInUserRole && (
                        <Nav.Item as="li">
                            <Link
                                className={`nav-link  ${
                                    ROUTES.DASHBOARD === route ? 'active' : ''
                                }`}
                                to={ROUTES.DASHBOARD}
                            >
                                <div className="d-flex align-items-center">
                                    <span className="nav-link-icon">
                                        <i className="svg-inline--fa fa-solid fa-chart-pie fa-w-17" />
                                    </span>
                                    <span className="ps-1 nav-link-text">
                                        Dashboard
                                    </span>
                                </div>
                            </Link>
                        </Nav.Item>
                    )}
                    {(LoggedInUserRole === 'Administrator' ||
                        LoggedInUserRole === 'ContentManager') && (
                        <>
                            <Nav.Item as="li">
                                <div className="row navbar-vertical-label-wrapper mt-3 mb-2">
                                    <div className="col-auto navbar-vertical-label">
                                        Content Management
                                    </div>
                                    <div className="col ps-0">
                                        <hr className="mb-0 navbar-vertical-divider" />
                                    </div>
                                </div>
                                <Link
                                    className={`nav-link  ${
                                        route.includes(ROUTES.SECTORS)
                                            ? 'active'
                                            : ''
                                    }`}
                                    to={ROUTES.SECTORS}
                                >
                                    <div className="d-flex align-items-center">
                                        <span className="nav-link-icon">
                                            <i className="svg-inline--fa fa-solid fa-vector-square fa-w-17" />
                                        </span>
                                        <span className="ps-1 nav-link-text">
                                            Sectors
                                        </span>
                                    </div>
                                </Link>
                            </Nav.Item>
                            <Nav.Item as="li">
                            <Link
                                    className={`nav-link  ${
                                        route.includes(ROUTES.ENTITIES) ? 'active' : ''
                                    }`}
                                    to={ROUTES.ENTITIES}
                                >
                                    <div className="d-flex align-items-center">
                                        <span className="nav-link-icon">
                                            <i className="svg-inline--fa fa-solid fa-building fa-w-17" />
                                        </span>
                                        <span className="ps-1 nav-link-text">
                                            Government Entities
                                        </span>
                                    </div>
                                </Link>
                            </Nav.Item>
                            <Nav.Item as="li">
                                <Link
                                    className={`nav-link  ${
                                        route.includes(ROUTES.SERVICES)
                                            ? 'active'
                                            : ''
                                    }`}
                                    to={ROUTES.SERVICES}
                                >
                                    <div className="d-flex align-items-center">
                                        <span className="nav-link-icon">
                                            <i className="svg-inline--fa fa-solid fa-tablet-screen-button fa-w-17" />
                                        </span>
                                        <span className="ps-1 nav-link-text">
                                            Services
                                        </span>
                                    </div>
                                </Link>
                            </Nav.Item>
                            <Nav.Item as="li">
                                <Link
                                    className={`nav-link  ${
                                        ROUTES.QUESTION_BANK === route
                                            ? 'active'
                                            : ''
                                    }`}
                                    to={ROUTES.QUESTION_BANK}
                                >
                                    <div className="d-flex align-items-center">
                                        <span className="nav-link-icon">
                                            <i className="svg-inline--fa fa fa-question-circle fa-w-17" />
                                        </span>
                                        <span className="ps-1 nav-link-text">
                                            Question Bank
                                        </span>
                                    </div>
                                </Link>
                            </Nav.Item>
                            <Nav.Item as="li">
                                <Link
                                    className={`nav-link  ${
                                        ROUTES.SURVEY_BANK === route
                                            ? 'active'
                                            : ''
                                    }`}
                                    to={ROUTES.SURVEY_BANK}
                                >
                                    <div className="d-flex align-items-center">
                                        <span className="nav-link-icon">
                                            <i className="svg-inline--fa fa-solid fa-edit fa-w-17" />
                                        </span>
                                        <span className="ps-1 nav-link-text">
                                            Survey Bank
                                        </span>
                                    </div>
                                </Link>
                            </Nav.Item>
                        </>
                    )}
                    {LoggedInUserRole === 'Administrator' && (
                        <>
                            <Nav.Item as="li">
                                <div className="row navbar-vertical-label-wrapper mt-3 mb-2">
                                    <div className="col-auto navbar-vertical-label">
                                        System Configuration
                                    </div>
                                    <div className="col ps-0">
                                        <hr className="mb-0 navbar-vertical-divider" />
                                    </div>
                                </div>
                                <Nav.Link
                                    onClick={() =>
                                        setIsCategoriesExpanded(
                                            !isCategoriesExpanded,
                                        )
                                    }
                                    aria-expanded={isCategoriesExpanded}
                                    aria-controls="categories"
                                    className={`${
                                        isCategoriesActive ? 'active' : ''
                                    } dropdown-indicator`}
                                >
                                    <div className="d-flex align-items-center">
                                        <span className="nav-link-icon">
                                            <i className="svg-inline--fa fa-solid fa-file-alt fa-w-17" />
                                        </span>
                                        <span className="nav-link-text ps-1">
                                            Categories
                                        </span>
                                    </div>
                                </Nav.Link>
                                <Collapse
                                    in={isCategoriesExpanded}
                                    className="nav"
                                    id="categories"
                                >
                                    <ul>
                                        <Nav.Item as="li">
                                            <Link
                                                className={`nav-link ${
                                                    ROUTES.NATIONALITIES ===
                                                    route
                                                        ? 'active'
                                                        : ''
                                                }`}
                                                to={ROUTES.NATIONALITIES}
                                            >
                                                <div className="d-flex align-items-center">
                                                    <span className="ps-1 nav-link-text">
                                                        Nationalities
                                                    </span>
                                                </div>
                                            </Link>
                                        </Nav.Item>
                                        <Nav.Item as="li">
                                            <Link
                                                className={`nav-link ${
                                                    ROUTES.LANGUAGES === route
                                                        ? 'active'
                                                        : ''
                                                }`}
                                                to={ROUTES.LANGUAGES}
                                            >
                                                <div className="d-flex align-items-center">
                                                    <span className="ps-1 nav-link-text">
                                                        Languages
                                                    </span>
                                                </div>
                                            </Link>
                                        </Nav.Item>
                                        <Nav.Item as="li">
                                            <Link
                                                className={`nav-link ${
                                                    ROUTES.REGIONS === route
                                                        ? 'active'
                                                        : ''
                                                }`}
                                                to={ROUTES.REGIONS}
                                            >
                                                <div className="d-flex align-items-center">
                                                    <span className="ps-1 nav-link-text">
                                                        Regions
                                                    </span>
                                                </div>
                                            </Link>
                                        </Nav.Item>
                                        <Nav.Item as="li">
                                            <Link
                                                className={`nav-link ${
                                                    ROUTES.CITIES === route
                                                        ? 'active'
                                                        : ''
                                                }`}
                                                to={ROUTES.CITIES}
                                            >
                                                <div className="d-flex align-items-center">
                                                    <span className="ps-1 nav-link-text">
                                                        Cities
                                                    </span>
                                                </div>
                                            </Link>
                                        </Nav.Item>
                                        <Nav.Item as="li">
                                            <Link
                                                className={`nav-link ${
                                                    ROUTES.CHANNELCATEGORIES ===
                                                    route
                                                        ? 'active'
                                                        : ''
                                                }`}
                                                to={ROUTES.CHANNELCATEGORIES}
                                            >
                                                <div className="d-flex align-items-center">
                                                    <span className="ps-1 nav-link-text">
                                                        Channel Categories
                                                    </span>
                                                </div>
                                            </Link>
                                        </Nav.Item>
                                        <Nav.Item as="li">
                                            <Link
                                                className={`nav-link ${
                                                    ROUTES.CHANNELTYPES ===
                                                    route
                                                        ? 'active'
                                                        : ''
                                                }`}
                                                to={ROUTES.CHANNELTYPES}
                                            >
                                                <div className="d-flex align-items-center">
                                                    <span className="ps-1 nav-link-text">
                                                        Channel Types
                                                    </span>
                                                </div>
                                            </Link>
                                        </Nav.Item>
                                        <Nav.Item as="li">
                                            <Link
                                                className={`nav-link ${
                                                    ROUTES.ENTITYTYPES === route
                                                        ? 'active'
                                                        : ''
                                                }`}
                                                to={ROUTES.ENTITYTYPES}
                                            >
                                                <div className="d-flex alirogn-items-center">
                                                    <span className="ps-1 nav-link-text">
                                                        Entity Types
                                                    </span>
                                                </div>
                                            </Link>
                                        </Nav.Item>
                                        <Nav.Item as="li">
                                            <Link
                                                className={`nav-link ${
                                                    ROUTES.QUESTIONCATEGORY ===
                                                    route
                                                        ? 'active'
                                                        : ''
                                                }`}
                                                to={ROUTES.QUESTIONCATEGORY}
                                            >
                                                <div className="d-flex alirogn-items-center">
                                                    <span className="ps-1 nav-link-text">
                                                        Question Category
                                                    </span>
                                                </div>
                                            </Link>
                                        </Nav.Item>
                                    </ul>
                                </Collapse>
                            </Nav.Item>
                            <Nav.Item as="li">
                                <Link
                                    className={`nav-link  ${
                                        ROUTES.SETTINGS === route
                                            ? 'active'
                                            : ''
                                    }`}
                                    to={ROUTES.SETTINGS}
                                >
                                    <div className="d-flex align-items-center">
                                        <span className="nav-link-icon">
                                            <i className=" fa-solid fa-gears fa-w-17" />
                                        </span>
                                        <span className="ps-1 nav-link-text">
                                            General Settings
                                        </span>
                                    </div>
                                </Link>
                            </Nav.Item>
                            <Nav.Item as="li">
                                <Link
                                    className={`nav-link  ${
                                        ROUTES.USERS === route ? 'active' : ''
                                    }`}
                                    to={ROUTES.USERS}
                                >
                                    <div className="d-flex align-items-center">
                                        <span className="nav-link-icon">
                                            <i className=" fa-solid fa-users fa-w-17" />
                                        </span>
                                        <span className="ps-1 nav-link-text">
                                            User Management
                                        </span>
                                    </div>
                                </Link>
                            </Nav.Item>
                        </>
                    )}
                    <Nav.Item as="li">
                        <div className="row navbar-vertical-label-wrapper">
                            <div className="col-auto navbar-vertical-label"></div>
                            <div className="col ps-0">
                                <hr className="mb-0 navbar-vertical-divider" />
                            </div>
                        </div>
                        <Link
                            className={`nav-link ${
                                ROUTES.LOGOUT === route ? 'active' : ''
                            }`}
                            to={ROUTES.LOGOUT}
                        >
                            <div className="d-flex align-items-center">
                                <span className="nav-link-icon">
                                    <i className=" fa-solid fa-right-from-bracket fa-w-17" />
                                </span>
                                <span className="ps-1 nav-link-text">
                                    Logout
                                </span>
                            </div>
                        </Link>
                    </Nav.Item>
                </Nav>
            </Navbar.Collapse>
        </Navbar>
    );
};

export default Sidebar;
