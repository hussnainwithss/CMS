import React from "react";
import { Container } from "react-bootstrap";
import { Sidebar } from "../components/Sidebar";
import { Navbar } from "../components/Navbar";

import "./container.css";

const DashboardLayout = ({ children }) => (
  <Container fluid className="vh-100" id="container">
    <Sidebar />
    <div className="content">{children}</div>
  </Container>
);

export default DashboardLayout;
