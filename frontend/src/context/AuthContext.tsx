import {
  createUserWithEmailAndPassword,
  onAuthStateChanged,
  sendEmailVerification,
  signInWithEmailAndPassword,
} from "firebase/auth";
import React, { createContext, useState, useContext, useEffect } from "react";
import { auth } from "../components/firebase/firebaseConfig";
import { User } from "firebase/auth";

import axios from "axios";
// Define o tipo para o Contexto
interface AuthContextType {
  email: string;
  singUpGoogle: any;
  Singin: any;
  isLoggedIn: boolean;
  currentUser: any;
  loading: boolean;
  authError: any;
  userToken: any;
  registerLoading: boolean;
  setregisterLoading: any;
  loginloading: boolean;
}

// Cria o Contexto
export const AuthContext = createContext<AuthContextType | null>(null);

interface AuthContextProviderType {
  children: React.ReactNode;
}

// Cria o Provedor do Contexto
export const AuthContextProvider: React.FC<AuthContextProviderType> = ({
  children,
}) => {
  const [email, setEmail] = useState<string>("");
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [currentUser, setCurrentUser] = useState<User>();
  const [loading, setLoading] = useState(true);
  const [authError, setAuthError] = useState<any>({});
  const [userToken, setUserToken] = useState<String>();
  const [registerLoading, setregisterLoading] = useState(false);
  const [loginloading, setloginloading] = useState(false);
  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        setCurrentUser(user);
        setIsLoggedIn(true);
        console.log(isLoggedIn);
      }

      setLoading(false);
    });
  }, []);

  const singUpGoogle = async (
    auth: any,
    email: string,
    password: string,
    name: string
  ) => {
    setregisterLoading(true);
    console.log({ auth, email, password });
    try {
      const userCredentials = await createUserWithEmailAndPassword(
        auth,
        email,
        password
      );

      const user = userCredentials.user;
      const token = await user.getIdToken();

      setUserToken(token);

      await sendEmailVerification(user);
      setIsLoggedIn(true);
      console.log(user);

      const registerUser = await axios
        .post(
          import.meta.env.VITE_API_URL + "api/v1/auth/register",
          {
            id: user.uid,
            name,
            email: user.email,
            emailVerified: user.emailVerified,
            password,
          },
          {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          }
        )
        .then(function (response) {
          console.log(response);

          const user = userCredentials.user;
        })
        .catch(function (error) {
          console.log(error);
          user.delete();
        });

      return { userCredentials };
    } catch (error) {
      console.log({ error });
    } finally {
      setregisterLoading(false); // Termina o loading
    }
  };

  const Singin = async (auth: any, email: string, password: string) => {
    setloginloading(true);
    try {
      const userLogin = await signInWithEmailAndPassword(auth, email, password);
      console.log(userLogin);

      return userLogin;
    } catch (error) {
      setAuthError({ error });
    } finally {
      setloginloading(false);
    }
  };

  return (
    <AuthContext.Provider
      value={{
        email,
        singUpGoogle,
        isLoggedIn,
        currentUser,
        loading,
        authError,
        Singin,
        userToken,
        registerLoading,
        setregisterLoading,
        loginloading,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};
