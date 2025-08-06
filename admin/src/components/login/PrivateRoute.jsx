import React, { useContext } from "react";
import { Navigate, useLocation } from "react-router-dom";
import { AdminContext } from "@/context/AdminContext";

const PrivateRoute = ({ children }) => {
  const { state } = useContext(AdminContext);
  const { adminInfo } = state;
  const location = useLocation();

  if (!adminInfo?.email) {
    return <Navigate to="/login" state={{ from: location }} replace />;
  }

  return children;
};

export default PrivateRoute;
