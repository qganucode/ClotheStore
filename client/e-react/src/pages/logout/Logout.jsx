import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { setCartUserId } from "../../redux/cartReducer";

export const Logout = () => {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(setCartUserId(null));
        localStorage.setItem("user","");
        navigate('/login')
    },[navigate]);

    return null
}

export default Logout;