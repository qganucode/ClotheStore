import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

export const Logout = () => {
    const navigate = useNavigate();
    
    useEffect(() => {
        localStorage.setItem("user","");
        navigate('/login')
    },[navigate]);

    return null
}

export default Logout;