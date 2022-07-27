import { createContext, useCallback, useMemo, useState } from "react";

const auth = 'auth1'

export const AuthContext = createContext();

export function AuthContextProvider({children}){
    const [isAuth, setIsAuth] = useState(
        localStorage.getItem(auth) ?? false);

    const login = useCallback(function(){
        localStorage.setItem(auth, true);
        setIsAuth(true)
    }, []);
    
    const logout = useCallback(function(){
        localStorage.removeItem(auth);
        setIsAuth(false)
    }, [])

    const value = useMemo(() => ({
        login,
        logout,
        isAuth
    }),
    [login, logout, isAuth]
    );

    return <AuthContext.Provider value={value} >{children}</AuthContext.Provider>
    
}