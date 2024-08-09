import React, { useContext } from "react";
import { Navigate } from "react-router-dom";
import AuthContext from "../../Auth";

export default function RedirectedLogin({ children }) {
  const { isLoggedIn } = useContext(AuthContext);

  if (isLoggedIn) {
    return <Navigate to="/panel" />;
  }

  return children;
}
