import { createContext, useState, useEffect, useReducer } from "react";
import { users } from "./users";

const AuthContext = createContext();

export function AuthProvider({ children }) {
  const [isLoggedIn, setIsLoggedIn] = useState(() => {
    const savedLoginState = localStorage.getItem("isLoggedin");
    return savedLoginState ? JSON.parse(savedLoginState) : false;
  });

  const [allUsers, setAllUsers] = useState([]);

  useEffect(() => {
    const savedUsers = localStorage.getItem("users");
    const existingUsers = [...users, ...JSON.parse(savedUsers)];
    setAllUsers(existingUsers);
    console.log(existingUsers);
  }, []);

  const [currentUser, setCurrentUser] = useState({});

  useEffect(() => {
    localStorage.setItem("isLoggedin", JSON.stringify(isLoggedIn));
  }, [isLoggedIn]);

  const handleUserLogin = (user) => {
    for (let u of allUsers) {
      if (u.username === user.username && u.password == user.password) {
        return true;
      }
    }
    return false;
  };

  const handleLogin = (user) => {
    if (handleUserLogin(user)) {
      setIsLoggedIn(true);
      setCurrentUser(user);
      return true;
    } else {
      alert("Wrong username or password");
      return false;
    }
  };

  const handleLogout = () => {
    setIsLoggedIn(false);
    setCurrentUser({});
  };

  return (
    <AuthContext.Provider
      value={{ isLoggedIn, handleLogin, handleLogout, currentUser }}
    >
      {children}
    </AuthContext.Provider>
  );
}

export default AuthContext;
