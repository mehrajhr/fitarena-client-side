import React, { useEffect, useState } from 'react';
import { AuthContext } from './AuthContext';
import { createUserWithEmailAndPassword, GoogleAuthProvider, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from "firebase/auth";
import { auth } from '../Firebase/firebase.init';

const AuthProvider = ({children}) => {
    const [user , setUser] = useState(null);
    const provider = new GoogleAuthProvider();
    const [loading , setLoading] = useState(true);
    const signupEmail = (email , password) =>{
        setLoading(true);
        return createUserWithEmailAndPassword(auth , email , password);
    }
    const signInEmail = (email , password) =>{
        setLoading(true);
        return signInWithEmailAndPassword(auth , email , password);
    }
    const signWithGoogle = () =>{
        setLoading(true);
        return signInWithPopup(auth , provider);
    }
    const profileUpdate = (user) =>{
        return updateProfile(auth.currentUser , {
            displayName : user.name,
            photoURL : user.photo
        })
    }
    const logOut = () =>{
        setLoading(true);
        return signOut(auth);
    }
    useEffect(() =>{
        const unsubscribe = onAuthStateChanged(auth, currentUser =>{
            setUser(currentUser);
            setLoading(false);
        })
        return () => unsubscribe();
    },[])
    console.log(user);
    const authData = {
        user,
        signupEmail,
        profileUpdate,
        logOut,
        signWithGoogle,
        signInEmail,
        loading
    }
    return <AuthContext value={authData}>
        {
            children
        }
    </AuthContext>
};

export default AuthProvider;