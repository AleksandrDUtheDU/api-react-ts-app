import PropTypes from "prop-types";
import {
  User,
  UserCredential,
  createUserWithEmailAndPassword,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signOut,
} from "firebase/auth";
import { FC, ReactNode, createContext, useEffect, useState } from "react";
import { auth } from "../../config/fairbase";

interface AuthContextModel {
  user: User | null;
  createUser: (email: string, password: string) => Promise<UserCredential>;
  signIn: (email: string, password: string) => Promise<UserCredential>;
  logout: () => Promise<void>;
}

const authContextModel = {
  user: PropTypes.shape({
    uid: PropTypes.string,
    email: PropTypes.string,
  }),
  createUser: PropTypes.func.isRequired,
  signIn: PropTypes.func.isRequired,
  logout: PropTypes.func.isRequired,
};

export const UserContext = createContext<AuthContextModel>(
  {} as AuthContextModel
);

interface IAuthProvider {
  children: ReactNode;
}

export const AppAuthProvider: FC<IAuthProvider> = ({ children }) => {
  const [user, setUser] = useState<User | null>(null);

  const createUser = (email: string, password: string) => {
    return createUserWithEmailAndPassword(auth, email, password);
  };

  const signIn = (email: string, password: string) => {
    return signInWithEmailAndPassword(auth, email, password);
  };

  const logout = () => {
    return signOut(auth);
  };

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
    });
    return () => unsubscribe();
  }, []);

  return (
    <UserContext.Provider value={{ createUser, user, signIn, logout }}>
      {children}
    </UserContext.Provider>
  );
};
