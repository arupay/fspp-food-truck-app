//will pass global data to be used by this component tree

import {
  createUserWithEmailAndPassword,
  sendPasswordResetEmail,
  signInWithEmailAndPassword,
  signOut,
  updateEmail,
  updatePassword,
} from "firebase/auth";
import { createContext, useContext, useState, useEffect } from "react";
import { auth } from "../firebase";

export const AuthContext = createContext();

export const useAuth = () => useContext(AuthContext);
//hook that uses the context data in our app;

export const AuthProvider = ({ children }) => {
  //inside this AuthProvider we can add auth, sign up, update email, update password etc
  const [user, setUser] = useState();
  //we want to listen to listen to authentication state with this useEffect
  useEffect(() => {
    const currUser = auth.onAuthStateChanged((authUser) => {
      setUser(authUser);
    });
    return currUser;
    //This returns the current user that has been authenticated and sets it to state
  }, []);

  //sign up functionality
  function register(email, password) {
    return createUserWithEmailAndPassword(auth, email, password);
  }
  //log in functionality
  function login(email, password) {
    return signInWithEmailAndPassword(auth, email, password);
  }
  //log out method
  function logout() {
    return signOut(auth);
  }

  //Updating Email
  function updateUserEmail(email) {
    return updateEmail(user, email);
  }

  //update password
  function updateUserPassword(password) {
    return updatePassword(user, password);
  }

  // forget password functionality
  function forgotPassword(email) {
    return sendPasswordResetEmail(auth, email);
  }
  return (
    <AuthContext.Provider
      value={{
        user,
        login,
        logout,
        updateUserEmail,
        updateUserPassword,
        register,
        forgotPassword,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};
