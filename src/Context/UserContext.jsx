import React, { useState, useEffect, createContext } from "react";

export const UserContext = createContext();

export const UserProvider = ({ children }) => {
  const [userData, setUserData] = useState(null);
  const [userLoading, setUserLoading] = useState(false);

  useEffect(() => {
    setUserLoading(true);
    if (localStorage.getItem("userInfo")) {
      setUserData(JSON.parse(localStorage.getItem("userInfo")));
    }
    setUserLoading(false);
  }, []);

  useEffect(() => {
    if (!userLoading) {
      localStorage.setItem("userInfo", JSON.stringify(userData));
    }
  }, [userLoading, userData]);

  return (
    <UserContext.Provider
      value={{ userData, setUserData, userLoading, setUserLoading }}
    >
      {children}
    </UserContext.Provider>
  );
};
