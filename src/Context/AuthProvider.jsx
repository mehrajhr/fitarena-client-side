import React, { useEffect, useState } from 'react';
import { AuthContext } from './AuthContext';
import { createUserWithEmailAndPassword, GoogleAuthProvider, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from "firebase/auth";
import { auth } from '../Firebase/firebase.init';

const AuthProvider = ({children}) => {
    const [user , setUser] = useState(null);
    const provider = new GoogleAuthProvider();
    const [loading , setLoading] = useState(false);
    const signupEmail = (email , password) =>{
        return createUserWithEmailAndPassword(auth , email , password);
    }
    const signInEmail = (email , password) =>{
        return signInWithEmailAndPassword(auth , email , password);
    }
    const signWithGoogle = () =>{
        return signInWithPopup(auth , provider);
    }
    const profileUpdate = (user) =>{
        return updateProfile(auth.currentUser , {
            displayName : user.name,
            photoURL : user.photo
        })
    }
    const logOut = () =>{
        return signOut(auth);
    }
    useEffect(() =>{
        const unsubscribe = onAuthStateChanged(auth, currentUser =>{
            setUser(currentUser);
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
        signInEmail
    }
    return <AuthContext value={authData}>
        {
            children
        }
    </AuthContext>
};

export default AuthProvider;