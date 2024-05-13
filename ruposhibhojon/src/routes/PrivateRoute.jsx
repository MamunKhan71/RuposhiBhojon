import {  useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";

const PrivateRoute = ({ children }) => {
    const navigate = useNavigate();
    const location = useLocation();
    const [isAuth, setIsAuth] = useState(localStorage.getItem('isAuth'));

    useEffect(() => {
        if (!isAuth) {
            navigate('/login', { state: { from: location.pathname } });
        }
    }, [isAuth, navigate, location]);

    return isAuth ? children : null;
};

export default PrivateRoute;