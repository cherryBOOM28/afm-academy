import Cookies from 'js-cookie';
import { Route, Navigate } from 'react-router-dom';
import { useAuth } from './AuthContext';
import { useEffect } from 'react';

const PrivateRoute = ({ component: Component, shouldBeLoggedIn, redirect }) => {
    const { isLoggedIn } = useAuth();

    useEffect(() => {
        console.log(isLoggedIn, shouldBeLoggedIn)
    }, [])

    if (!isLoggedIn && shouldBeLoggedIn) {
        return <Navigate to="/login" />
    }

    if (isLoggedIn && !shouldBeLoggedIn) {
        return <Navigate to={redirect ? redirect : '/'} />
    }

    return <Component />
}
export default PrivateRoute;