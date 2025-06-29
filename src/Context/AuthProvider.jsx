import React, { useEffect, useState } from "react";
import { AuthContext } from "./AuthContext";
import {
  createUserWithEmailAndPassword,
  GoogleAuthProvider,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
  updateProfile,
} from "firebase/auth";
import { auth } from "../Firebase/firebase.init";

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const provider = new GoogleAuthProvider();
  const [idToken, setIdToken] = useState(null);
  const [loading, setLoading] = useState(true);
  const signupEmail = (email, password) => {
    setLoading(true);
    return createUserWithEmailAndPassword(auth, email, password);
  };
  const signInEmail = (email, password) => {
    setLoading(true);
    return signInWithEmailAndPassword(auth, email, password);
  };
  const signWithGoogle = () => {
    setLoading(true);
    return signInWithPopup(auth, provider);
  };
  const profileUpdate = (user) => {
    return updateProfile(auth.currentUser, {
      displayName: user.name,
      photoURL: user.photo,
    });
  };
  const logOut = () => {
    setLoading(true);
    return signOut(auth);
  };
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, async (currentUser) => {
      if (currentUser) {
        const token = await currentUser.getIdToken();
        setIdToken(token);
        setLoading(false);
        setUser(currentUser);
      } else {

        setLoading(false);
        setUser(null);
        setIdToken(null);
      }
    });
    return () => unsubscribe();
  }, [auth]);
//   console.log(user);
  const authData = {
    user,
    setUser,
    signupEmail,
    profileUpdate,
    logOut,
    signWithGoogle,
    signInEmail,
    loading,
    idToken,
  };
  return (
    <AuthContext.Provider value={authData}>{children}</AuthContext.Provider>
  );
};

export default AuthProvider;
