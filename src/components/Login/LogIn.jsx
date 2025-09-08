import React, { useContext, useEffect, useState } from "react";
import "./login.css";
import { Link, useNavigate } from "react-router-dom";
import AuthContext from "../../Auth";
import { RouteContext } from "../../RouteContext";

export default function LogIn() {
  const navigate = useNavigate();
  const { handleLogin } = useContext(AuthContext);
  const [user, setUser] = useState({});
  const appRoutes = useContext(RouteContext);

  const handleSumbit = (e) => {
    e.preventDefault();
    const u = user;
    if (handleLogin(u)) {
      navigate(appRoutes.panel);
    } else {
      console.log("somthing went wrong");
    }
  };

  return (
    <div className="login">
      <div className="login-card">
        <h2>Log in</h2>
        <div className="login-inputs">
          <div className="">
            <input
              type="text"
              placeholder="Username"
              onChange={(e) => setUser({ ...user, username: e.target.value })}
            />
          </div>
          <div className="">
            <input
              type="password"
              placeholder="Password"
              onChange={(e) => setUser({ ...user, password: e.target.value })}
            />
          </div>
        </div>

        <div className="login-buttons">
          <button className="login-button" onClick={handleSumbit}>
            Log in
          </button>

          <Link to={appRoutes.register}>
            <button className="create-acc-button">Register</button>
          </Link>
        </div>
      </div>
    </div>
  );
}
