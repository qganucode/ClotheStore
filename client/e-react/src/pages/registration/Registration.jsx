import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';
import { toast } from 'react-toastify';
import './Registration.scss';

const initialUserData = {
    username: '',
    email: '',
    password: ''
}

const Registration = () => {
    const [userData,setUserData] = useState(initialUserData);
    const navigate = useNavigate();
    const handleChangeInputReg = ({target}) => {
        const { name, value } = target;
        setUserData((currentUserData) => ({
            ...currentUserData,
            [name] : value,
        }))
    }
    const handleSignUp = async () => {
        const url = 'http://localhost:1337/api/auth/local/register'
        try {
            if(userData.username && userData.email && userData.password) {
                const res = await axios.post(url,userData)
                if(res) {
                    setUserData(initialUserData);
                    navigate('/login');
                }
            }
        } catch (error) {
            toast.error(error.message, {hideProgressBar:true})
        }
    }
    return (
        <div className="registration">
            <h2>Sign up: </h2>
            <input 
                type="text" 
                name='username' 
                value={userData.username} 
                placeholder='enter username'
                onChange={handleChangeInputReg}
            />
            <input 
                type="email" 
                name='email' 
                value={userData.email} 
                placeholder='enter email'
                onChange={handleChangeInputReg}
            />
            <input 
                type="password" 
                name='password' 
                value={userData.password} 
                placeholder='enter password'
                onChange={handleChangeInputReg}
            />
            <button onClick={handleSignUp}>Sign Up</button>
            <h6>click <Link to='/login' style={{color: 'Highlight'}}>here</Link> to go Login</h6>
        </div>
    )
}

export default Registration;