import { createContext, useState, useEffect } from "react";
import { users } from "./users";

const AuthContext = createContext();

export function AuthProvider({ children }) {
  const [isLoggedIn, setIsLoggedIn] = useState(() => {
    const savedLoginState = localStorage.getItem("isLoggedin");
    return savedLoginState ? JSON.parse(savedLoginState) : false;
  });

  const [currentUser, setCurrentUser] = useState({});

  let testUser = {
    username: "John",
    password: 1,
  };

  useEffect(() => {
    localStorage.setItem("isLoggedin", JSON.stringify(isLoggedIn));
  }, [isLoggedIn]);

  const handleUserLogin = (user) => {
    for (let u of users) {
      if (u.username === user.username && u.password == user.password) {
        return true;
      }
    }
    return false;

    // for (let u of users) {
    //   console.log(u.password, user.password);
    // }
  };

  // console.log(handleUserLogin(testUser));

  const handleLogin = (user) => {
    // console.log(handleUserLogin(user));
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
