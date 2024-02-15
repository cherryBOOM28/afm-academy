import { Route, Navigate } from 'react-router-dom';
import { useAuth } from './AuthContext';
import { useEffect } from 'react';

const MustBeAdmin = ({ component: Component, shouldBeLoggedIn, redirect='/' }) => {
    const { isLoggedIn } = useAuth();
    const role = localStorage.getItem('role')

    useEffect(() => {
        // console.log(isLoggedIn, shouldBeLoggedIn)
    }, [])

    if (role == 'ROLE_ADMIN' && isLoggedIn ) {
        return <Component />
    }
    if (!isLoggedIn && shouldBeLoggedIn) {
        return <Navigate to="/login" />
    }

    

    return <Navigate to={redirect ? redirect : '/'} />
}
export default MustBeAdmin;