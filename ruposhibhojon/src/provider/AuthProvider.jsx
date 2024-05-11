import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, onAuthStateChanged, GoogleAuthProvider, signInWithPopup, GithubAuthProvider, updateProfile, signOut } from "firebase/auth";
import app from "../utils/firebase.config";
import { createContext, useEffect, useState } from "react";
export const AuthContext = createContext()
const AuthProvider = ({ children }) => {
    const auth = getAuth(app)
    const [user, setUser] = useState(null)
    const [loading, setLoading] = useState(true)
    const googleProvider = new GoogleAuthProvider();
    const githubProvider = new GithubAuthProvider();
    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (user) => {
            setUser(user)
            setLoading(false)
        })
        return unsubscribe;
    })
    console.log(user);
    const userEmailSignUp = (email, password) => {
        return createUserWithEmailAndPassword(auth, email, password)
    }
    const userEmailSignIn = (email, password) => {
        return signInWithEmailAndPassword(email, password)
    }
    const userGoogleAuth = () => {
        return signInWithPopup(auth, googleProvider)
    }
    const userGithubAuth = () => {
        return signInWithPopup(auth, githubProvider)
    }
    const userUpdateProfile = (name, photoUrl) => {
        return updateProfile(auth.currentUser, {
            displayName: name, photoURL: photoUrl
        })
    }
    const userSignOut = () => {
        return signOut(auth)
    }

    const authMethods = { userEmailSignUp, userEmailSignIn, userGoogleAuth, userGithubAuth, userUpdateProfile, userSignOut, user, loading }


    return (
        <AuthContext.Provider value={authMethods}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;