import React, { useContext } from "react";
import { AuthContext } from "../provider/AuthProvider";
import { Navigate } from "react-router-dom";

const PrivateRoute = ({ children }) => {
  const { user, loading } = useContext(AuthContext);

  if (loading) {
    return <progress className="progress e-56"></progress>;
  }

  if (user) {
    return children;
  }
  return <Navigate to="/login" replace={true}></Navigate>;
};

export default PrivateRoute;
