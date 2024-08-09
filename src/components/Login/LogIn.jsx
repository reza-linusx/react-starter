import React, { useContext, useEffect, useState } from "react";
import "./login.css";
import { Link, useNavigate } from "react-router-dom";
import AuthContext from "../../Auth";
import { users } from "../../users";

export default function LogIn() {
  const navigate = useNavigate();
  const { handleLogin } = useContext(AuthContext);
  const [user, setUser] = useState({});

  const handleSumbit = (e) => {
    e.preventDefault();
    const u = user;
    if (handleLogin(u)) {
      navigate("/panel");
    } else {
      console.log("somthing went wrong");
    }
  };

  return (
    <div className="login">
      <div className="login-card">
        <div className="">
          <p>Username</p>
          <input
            type="text"
            placeholder="username"
            onChange={(e) => setUser({ ...user, username: e.target.value })}
          />
        </div>
        <div className="">
          <p>Password</p>
          <input
            type="text"
            placeholder="password"
            onChange={(e) => setUser({ ...user, password: e.target.value })}
          />
        </div>

        <div className="buttons">
          <button
            className="login-button"
            onClick={handleSumbit}
          >
            Log in
          </button>
          <button className="create-acc-button">
            <Link to={"/createaccount"}>CREATE ACCOUNT</Link>
          </button>
        </div>
      </div>
    </div>
  );
}
