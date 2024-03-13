import {
  createUserWithEmailAndPassword,
  signinUserWithEmailAndPassword,
} from "@/actions/server-actions/auth";
import { createContext, useContext, useState, useEffect } from "react";
import { pb } from "../../pocketbase/pocket-config";

const AuthContext = createContext({
  user: null,
  token: null,
  signin: () => Promise,
  createUser: () => Promise,
  logout: () => {}
});

export const useAuth = () => useContext(AuthContext);

const AuthContextProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [token, setToken] = useState(null);

  useEffect(() => {
    if (pb.authStore.model) {
      setUser(pb.authStore.model);
    } else setUser(null);
  }, []);

  // Create user
  async function createUser(authData) {
    const data = await createUserWithEmailAndPassword(authData);
    return data;
  }

  async function signin(authData) {
    const data = await signinUserWithEmailAndPassword(authData);
    setUser(data);
    setToken(data?.token);

    if (data?.record?.created) {
      return {
        status: 201,
        message: "Login successful",
      };
    }
  }

  function logout() {
    return pb.authStore.clear()
  }

  const globalVals = {
    user,
    createUser,
    signin,
    token,
    logout
  };

  return (
    <AuthContext.Provider value={globalVals}>{children}</AuthContext.Provider>
  );
};

export default AuthContextProvider;
