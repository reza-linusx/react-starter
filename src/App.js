import "./App.css";
import { useState, useContext } from "react";
import Main from "./components/Main/Main";
import LogIn from "./components/Login/LogIn";
import Create from "./components/Create/Create";
import AuthContext from "./Auth";
import { users } from "./users";

import ProtectedUser from "./components/ProtectedRoutes/ProtectedUser";
import RedirectedLogin from "./components/ProtectedRoutes/RedirectedLogin";
import ProtectedHome from "./components/ProtectedRoutes/ProtedctedHome";

import {
  BrowserRouter as Router,
  Route,
  Routes,
  Link,
  useNavigate,
  redirect,
} from "react-router-dom";

function App() {
  const Navigate = useNavigate();
  const { isLoggedIn, currentUser } = useContext(AuthContext);

  return (
    <div className="App">
      <Routes>
        <Route
          path="/"
          element={
            <ProtectedHome>
              <LogIn />
            </ProtectedHome>
          }
        />
        <Route
          path="/panel"
          element={
            <ProtectedUser>
              <Main user={currentUser} />
            </ProtectedUser>
          }
        />
        <Route
          path="/register"
          element={
            <RedirectedLogin>
              <Create />
            </RedirectedLogin>
          }
        />
      </Routes>
    </div>
  );
}

export default App;
