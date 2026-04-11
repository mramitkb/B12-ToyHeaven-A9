import React, { useEffect, useState } from "react";
import { AuthContext } from "./AuthContext";
import { createUserWithEmailAndPassword, onAuthStateChanged, sendEmailVerification, signInWithEmailAndPassword, signOut, updateProfile } from "firebase/auth";
import { auth } from "../../firebase/firebase.config";

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  // create User
  const createUser = (email, password) => {
    setLoading(true);
    return createUserWithEmailAndPassword(auth, email, password);
  };

  // Update User Profile
  const updateUserProfile = (displayName, photoURL) => {
    // setLoading(true);
    return updateProfile(auth.currentUser, { displayName, photoURL });
  };

//   Email Verification
const emailVerification = () => {
    // setLoading(true);
    return sendEmailVerification(auth.currentUser);
}

// Sign In User
const signInUser = (email, password)=> {
    setLoading(true);
    return signInWithEmailAndPassword(auth, email, password);
}

// Sign Out User
    const signOutUser = () => {
        setLoading(true);
        return signOut(auth);
    }

    // Observe the User
     useEffect(() => {
        const unSubscribe = onAuthStateChanged(auth, (currentUser) => {
            setUser(currentUser);
            console.log(currentUser);
            setLoading(false);
        })
        return () => {
            unSubscribe();
        }
     }, [])


  // Pass all Information
  const authInfo = {
    user,
    setUser,
    loading,
    setLoading,
    createUser,
    updateUserProfile,
    emailVerification,
    signOutUser,
    signInUser
  };

  return <AuthContext value={authInfo}>{children}</AuthContext>;
};

export default AuthProvider;
