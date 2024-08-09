import "./App.css";
import { useState, useContext } from "react";
import Main from "./components/Main/Main";
import LogIn from "./components/Login/LogIn";
import Create from "./components/Create/Create";
import AuthContext from "./Auth";
import { users } from "./users";

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

  // const { currentUser } = AuthContext();

  return (
    <div className="App">
      <Routes>
        <Route
          path="/"
          element={<LogIn />}
        />
        <Route
          path="/panel"
          element={<Main user={currentUser} />}
        />
        <Route
          path="/createaccount"
          element={isLoggedIn ? <Main /> : <Create />}
        />
      </Routes>
    </div>
  );
}

export default App;
