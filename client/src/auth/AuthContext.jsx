import React, { useState, useEffect, useContext, createContext } from 'react';

const AuthContext = createContext()

export const useAuth = () => {
    return useContext(AuthContext)
}

export const AuthProvider = (props) => {
    const [authUser, setAuthUser] = useState(null);
    const [isLoggedIn, setIsLoggedIn] = useState(false);

    useEffect(() => {
        const token = localStorage.getItem('jwtToken');
        if (token) {
            setIsLoggedIn(true);
        }
    }, []);

    const value = {
        authUser,
        setAuthUser,
        isLoggedIn,
        setIsLoggedIn
    };

    return (
        <AuthContext.Provider value={value}>
            {props.children}
        </AuthContext.Provider>
    );
};
