import { createContext, useEffect, useState } from "react";
import app from "../components/firebase/firebase.config";
import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signOut } from "firebase/auth";


 export const AuthContext = createContext()

 const auth = getAuth(app);

const AuthProvider = ({children}) => {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);
    console.log(loading, user);

    const createNewUser =(email, password) => {
        setLoading(true);
        return createUserWithEmailAndPassword(auth, email, password)

    };

    const userLogin = (email, password) => {
        setLoading(true);
        return signInWithEmailAndPassword(auth, email, password);
    }

    const logOut = () => {
        setLoading(true);
        return signOut(auth);
        // return logOut(auth);
    }


    const authInfo= {
        user, 
        setUser,
        createNewUser,
        logOut,
        userLogin,
        loading,
    };

useEffect(() => {
  const unsubscribe =  onAuthStateChanged(auth, (currentUser) =>{
        setUser(currentUser);
        setLoading(false);  // Once the user is logged in, set the loading state to false.  // This ensures that the UI doesn't freeze or get stuck while waiting for the user's data.  // Note: This is a simplistic example, and you may want to handle this differently based on your app's requirements.  // For example, you might want to display a loading spinner or a placeholder while waiting for the user's data.  // Also, consider
    })
    return () => {
        unsubscribe();

    };
}, [])

    return (
        <AuthContext.Provider value={authInfo }>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;