import React, { useEffect } from "react";
import { useLayoutEffect } from "react";
import { useAuth } from "../../../hooks/useAuth";

const Logout = () => {
  const { logout } = useAuth();
  useLayoutEffect(() => {
    logout();
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return <></>;
};

export default Logout;
