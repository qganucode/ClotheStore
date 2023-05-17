import { useState } from 'react';
import {Link, useNavigate} from 'react-router-dom'
import { toast } from 'react-toastify';
import axios from 'axios';
import './Login.scss';
import { storeUser } from '../../helper';
import { useDispatch } from 'react-redux';
import { updateUserData } from '../../redux/userProfileReducer';
import { setCartUserId } from '../../redux/cartReducer';
const initialUserData = {identifier: '', password: ''}

const Login = () => {
    const [userData, setUserData] = useState(initialUserData)
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const handleChangeInputLogin = ({target}) => {
        const {name, value} = target
        setUserData((currentUserData) => ({
            ...currentUserData,
            [name] : value
        }))
    }
    const handleClickLogin = async () => {
        const url = 'http://localhost:1337/api/auth/local'
        try {
            if(userData.identifier && userData.password) {
                const {data} = await axios.post(url,userData)
                if(data.jwt) {
                    storeUser(data)
                    dispatch(updateUserData(data));
                    dispatch(setCartUserId(data.user.id));
                    toast.success('logged in  successfully!',{
                        hideProgressBar: true,
                    })
                    setUserData(initialUserData)
                    navigate('/');
                }
            }
        } catch (error) {
            toast.error(error.message,{
                hideProgressBar: true,
            })
        }
    }
    return (
        <div className="login">
            <h2>Login</h2>
            <input
                type="email"
                name='identifier'
                value={userData.identifier} 
                onChange={handleChangeInputLogin}
                placeholder='enter email'
            />
            <input 
                type="password" 
                name='password'
                value={userData.password} 
                onChange={handleChangeInputLogin}
                placeholder='enter password'
            />
            <button onClick={handleClickLogin}>Login</button>
            <h6>click <Link style={{color: 'Highlight'}} to='/registration'>Here</Link> to sign up</h6>
        </div>
    )
}

export default Login;