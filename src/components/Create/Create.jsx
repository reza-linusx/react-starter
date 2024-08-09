import React, { useState } from "react";
import "./create.css";
import { Link, Navigate, useNavigate } from "react-router-dom";

export default function Create() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleSubmit = () => {
    if (username.trim() === "" || password.trim() === "") {
      alert("Please enter a username and password");
      return;
    }

    const userExists = saveUserInLocalStorage({ username, password });
    if (!userExists) {
      alert(
        "Your account is now created, you are being redirected to the login page"
      );
      navigate("/");
    }
  };

  const saveUserInLocalStorage = (user) => {
    const existingUsers = JSON.parse(localStorage.getItem("users")) || [];
    if (existingUsers.find((u) => u.username === user.username)) {
      alert("User already exists");
      return true; 
    }

    existingUsers.push(user);
    localStorage.setItem("users", JSON.stringify(existingUsers));
    return false;
  };

  return (
    <div className="create-page">
      <div className="create-form">
        <h2>Create your account</h2>
        <div className="inputs">
          <input
            type="text"
            placeholder="Your Username"
            onChange={(e) => setUsername(e.target.value)}
          />

          <input
            type="password"
            placeholder="Your Password"
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>

        <button
          type="submit"
          onClick={handleSubmit}
        >
          Create Your Account
        </button>
      </div>
      <Link
        className="back"
        to={"/"}
      >
        Have account ? back to login page
      </Link>
    </div>
  );
}
