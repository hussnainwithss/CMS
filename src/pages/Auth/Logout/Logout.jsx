import React, { useEffect } from "react";
import { useAuth } from "../../../hooks/useAuth";

const Logout = () => {
  const { logout } = useAuth();
  useEffect(() => {
    logout();
  }, []);
  return <></>;
};

export default Logout;
