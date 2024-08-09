import React from "react";
import "./create.css";
import { Link } from "react-router-dom";

export default function Create() {
  return (
    <div className="create-page">
      <p>create your account here</p>
      <Link to={"/"}>back to login page</Link>
    </div>
  );
}
