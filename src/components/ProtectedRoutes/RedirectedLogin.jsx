import React, { useContext } from "react";
import { Navigate } from "react-router-dom";
import AuthContext from "../../Auth";
import { RouteContext } from "../../RouteContext";

export default function RedirectedLogin({ children }) {
  const appRoutes = useContext(RouteContext);
  const { isLoggedIn } = useContext(AuthContext);

  if (isLoggedIn) {
    return <Navigate to={appRoutes.panel} />;
  }

  return children;
}
