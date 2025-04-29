import React, { createContext, useEffect, useState } from "react";
import { auth } from "../Firebase/firebase.config";
import { createUserWithEmailAndPassword, GoogleAuthProvider, onAuthStateChanged, sendPasswordResetEmail, signInWithEmailAndPassword, signInWithPopup, signOut } from "firebase/auth";

export const AuthContext = createContext();

const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);

    // Sign Up Function
    const signUp = (email, password) => {
        return createUserWithEmailAndPassword(auth, email, password);
    };

    // Sign Out Function
    const logOut = () => {
        return signOut(auth);
    };

      // Google Login
      const googleProvider = new GoogleAuthProvider();
      const googleSignIn = () => {
          return signInWithPopup(auth, googleProvider);
      };

          // Email & Password Login
    const signIn = (email, password) => {
        return signInWithEmailAndPassword(auth, email, password);
    };

       // Forgot Password (Reset Email)
       const resetPassword = (email) => {
        return sendPasswordResetEmail(auth, email);
    };




    // Listen for auth state changes
    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
            setUser(currentUser);
            setLoading(false);
        });

        return () => unsubscribe();
    }, []);

    return (
        <AuthContext.Provider value={{ user, signUp, logOut, loading, googleSignIn, signIn, resetPassword }}>
            {!loading && children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;
