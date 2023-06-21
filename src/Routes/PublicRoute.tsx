import React from "react";
import { Route, Navigate } from "react-router-dom";
import { auth } from "@/utils/firebase";

const PublicRoute: React.FC<any> = ({ element, restricted, ...rest }) => {
  const user = auth.currentUser;

  return restricted && user ? (
    <Navigate to="/" replace />
  ) : (
    <Route {...rest} element={element} />
  );
};

export default PublicRoute;
