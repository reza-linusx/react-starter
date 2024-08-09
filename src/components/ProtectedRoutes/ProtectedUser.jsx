import React, { useContext } from "react";
import { Navigate } from "react-router-dom";
import AuthContext from "../../Auth";

export default function ProtectedUser({ children }) {
  const { isLoggedIn } = useContext(AuthContext);
  return isLoggedIn ? children : <Navigate to="/" />;
}
