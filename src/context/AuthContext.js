import {React,createContext,useState,useEffect} from 'react';
import BaseUrl from '../BaseUrl';
import jwt_decode from "jwt-decode";

import axios from 'axios';


import { useNavigate } from 'react-router-dom';



const AuthContext = createContext()
export default AuthContext;
export const AuthProvider = ({children})=>{

    const navigate = useNavigate()
    const [authToken, setAuthToken] = useState(()=>localStorage.getItem('authToken') ? JSON.parse(localStorage.getItem('authToken')):null);

    const [user, setUser] = useState(()=>localStorage.getItem('user') ? JSON.parse(localStorage.getItem('user')):null);
    const [error,setError] = useState('');


    let loginUser = async (userDetails,response) =>{
        

        
        console.log("form submitted")
        console.log(userDetails);
        console.log(response);
        console.log(response.data.detail)
        if (response.status === 200){
            setAuthToken(response.data);
            var decoded =jwt_decode(response.data.access);
            console.log('ghjgghhgk')
            console.log(decoded)
            setUser(decoded)

            localStorage.setItem('user', JSON.stringify(decoded));

            localStorage.setItem('authToken', JSON.stringify(response.data));
            if(decoded.is_superuser){
                console.log(user)
                navigate('/admin/dashboard')
            }else{
                navigate('/')
            }
           

        }else{
            console.log(response.status);
            console.log('aslu');
            console.log("somthing is wrong")
            setError('invalid Email or Password')
        }
        


    }

    let logOutUser =()=>{
        setAuthToken(null);
        setUser(null);
        localStorage.removeItem('authToken');
        localStorage.removeItem('user');
        console.log(user);
        navigate('/login')
    }

    let contexData = {
        loginUser: loginUser,
        error:error,
        logOutUser:logOutUser,
        user:user,
      
        
        
        
    }





    return (
        <AuthContext.Provider value={contexData}>
            {children}    
        </AuthContext.Provider>
    )
}