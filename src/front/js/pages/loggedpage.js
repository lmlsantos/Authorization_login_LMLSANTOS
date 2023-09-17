import React, { useEffect } from "react";
import {useNavigate} from "react-router-dom";

export const LoggedPage = () => {

    const navigate = useNavigate();

    useEffect(()=> {
        const token = localStorage.getItem('jwt-token');
        if(!token) {
            navigate('/login')
        }
    },[])

    return (
        <div>
            <h2>This is the page when you are login!...</h2>
        </div>
    );
};