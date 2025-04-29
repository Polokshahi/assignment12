import { createContext } from "react";

const authContext = createContext(null); //null is the default value

const AuthProvider = ({children}) => {
    return (
        <authContext.Provider value={{}}>
            {children}
        </authContext.Provider>
