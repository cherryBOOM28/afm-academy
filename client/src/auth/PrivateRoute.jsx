import Cookies from 'js-cookie';
import { Route, Navigate } from 'react-router-dom';
import { useAuth } from './AuthContext';

const PrivateRoute = ({ component: Component, shouldBeLoggedIn, redirect }) => {
    const { isLoggedIn } = useAuth();

    if (!isLoggedIn && shouldBeLoggedIn) {
        return <Navigate to="/login" />
    }

    if (isLoggedIn && !shouldBeLoggedIn) {
        return <Navigate to={redirect ? redirect : '/'} />
    }

    return <Component />
}
export default PrivateRoute;