"use client";
import { auth } from "@/firebase/config";
import {
  createUserWithEmailAndPassword,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signOut,
} from "firebase/auth";
import { createContext, useContext, useEffect, useState } from "react";
import { getUserByEmail, registerUserInfo } from "../data/UserDao";

const UserContext = createContext();

export const useUserContext = () => {
  const ctx = useContext(UserContext);
  return ctx;
};

const UserProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [userInfo, setUserInfo] = useState(null);
  const [userError, setUserError] = useState(null);

  const registerUser = async (values) => {
    await createUserWithEmailAndPassword(auth, values.email, values.password);
    const info = { ...values, role: "user" };

    delete info.password;
    await registerUserInfo(info);
  };

  const signinUser = async (values) => {
    setUserError(null);
    try {
      await signInWithEmailAndPassword(auth, values.email, values.password);      
    } catch (error) {
      setUserError(error.code);
    }
  };

  const signoutUser = () => {
    signOut(auth);
    setUserInfo(null);
    setUser(null);
    setUserError(null);
  };

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        setUser({
          logged: true,
          email: user.email,
          uid: user.uid,
        });
      } else {
        setUser({
          logged: false,
          email: null,
          uid: null,
        });
      }
    });
  }, []);

  const getData = async () => {
    try {
      if (user && user.email) {
        const info = await getUserByEmail(user?.email);

        setUserInfo({
          logged: true,
          email: user.email,
          uid: user.uid,
          role: info.role,
          name: info.name,
          address:info.address,
          lastName: info.lastName,
        });
      }
    } catch (error) {
      setUserError(error);
    }
  };
  useEffect(() => {
    getData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [user]);

  return (
    <UserContext.Provider
      value={{ user, userInfo, userError, registerUser, signinUser, signoutUser }}
    >
      {children}
    </UserContext.Provider>
  );
};

export { UserProvider, UserContext };
