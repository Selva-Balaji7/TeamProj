import React from 'react'
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

export const ProtectedRouting = ({Component}) => {
    
    const nav= useNavigate();
    useEffect(()=>{
        if(!sessionStorage.getItem('user1')){
            nav("/");
        }
    },[])
    return (
        <div>
            {/* <h2>this is protected routing</h2> */}
            <Component></Component>

        </div>
    )
   
}
export default ProtectedRouting;
