import React, { useContext, useEffect } from "react";
import "./Main.css";
import { Link, useNavigate } from "react-router-dom";
import AuthContext from "../../Auth";

export default function Main({ user }) {
  const { handleLogout, isLoggedIn } = useContext(AuthContext);

  return (
    <>
      {isLoggedIn ? (
        <div>
          <h1>main page</h1>
          <h1>this is {user.username}'s account</h1>
          <Link to={"/register"}>go to create account</Link>
          <Link
            onClick={() => handleLogout()}
            to={"/"}
          >
            LOG OUT
          </Link>
        </div>
      ) : (
        <div>
          <h1>you are not looged in. please go and create account</h1>
          <Link to={"/createaccount"}>go to create account</Link>
        </div>
      )}
    </>
  );
}
