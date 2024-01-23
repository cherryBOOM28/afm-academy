import { Route, Navigate } from 'react-router-dom';
import { useAuth } from './AuthContext';
import { useEffect } from 'react';

const MustBeAdmin = ({ component: Component, redirect='/' }) => {
    const { isLoggedIn } = useAuth();
    const role = localStorage.getItem('role')

    useEffect(() => {
        // console.log(isLoggedIn, shouldBeLoggedIn)
    }, [])

    if (role == 'ROLE_ADMIN') {
        return <Component />
    }

    

    return <Navigate to={redirect ? redirect : '/'} />
}
export default MustBeAdmin;