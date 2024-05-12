import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../provider/AuthProvider";
import { useNavigate } from "react-router-dom";
const LoginProtection = ({ children }) => {
    const [isAuth, setIsAuth] = useState(localStorage.getItem('isAuth'));
    const navigate = useNavigate()
    useEffect(() => {
        if (isAuth) {
            navigate('/');
        }
    }, [isAuth, navigate]);
    return isAuth ? navigate('/') : children;

};

export default LoginProtection;