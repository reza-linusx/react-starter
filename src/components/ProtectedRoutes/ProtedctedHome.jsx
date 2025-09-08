import React, { useContext } from "react";
import { Navigate } from "react-router-dom";
import AuthContext from "../../Auth";
import { RouteContext } from "../../RouteContext";

export default function ProtectedHome({ children }) {
  const appRoutes = useContext(RouteContext);
  const { isLoggedIn } = useContext(AuthContext);
  return !isLoggedIn ? children : <Navigate to={appRoutes.panel} />;
}
