import React from "react";
import { Route, Navigate } from "react-router-dom";
import { auth } from "@/utils/firebase";

const PrivateRoute: React.FC<any> = ({ element, ...rest }) => {
  const user = auth.currentUser;

  return user ? (
    <Route {...rest} element={element} />
  ) : (
    <Navigate to="/login" replace />
  );
};

export default PrivateRoute;
