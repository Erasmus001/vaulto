"use client";

import {
  createUserWithEmailAndPassword,
  signinUserWithEmailAndPassword,
} from "@/actions/server-actions/auth";
import { createContext, useContext, useState, useEffect } from "react";
import { pb } from "../../pocketbase/pocket-config";
import { useLocalStorage } from "@mantine/hooks";

const AuthContext = createContext({
  user: null,
  token: null,
  isAuth: null,
  signin: () => Promise,
  createUser: () => Promise,
  logout: () => {},
});

export const useAuth = () => useContext(AuthContext);

const AuthContextProvider = ({ children }) => {
  const [isAuth, setIsAuth] = useLocalStorage({
    key: "isAuth",
    defaultValue: null,
  });

  const [user, setUser] = useState(null);
  const [token, setToken] = useState(null);

  useEffect(() => {
    if (isAuth) {
      setUser(pb.authStore.model);
    } else setUser(null);
  }, [isAuth]);

  //* Create user
  async function createUser(authData) {
    const data = await createUserWithEmailAndPassword(authData);
    return data;
  }

  //* Signin user
  async function signin(authData) {
    const data = await signinUserWithEmailAndPassword(authData);
    setUser(data);
    setIsAuth(data?.record);
    setToken(data?.token);

    if (data?.record?.created) {
      return {
        status: 201,
        message: "Login successful",
      };
    }
  }

  //* Sign out user
  function logout() {
    setIsAuth(null);
    return pb.authStore.clear();
  }

  const globalVals = {
    user,
    createUser,
    signin,
    token,
    logout,
    isAuth,
  };

  return (
    <AuthContext.Provider value={globalVals}>{children}</AuthContext.Provider>
  );
};

export default AuthContextProvider;
