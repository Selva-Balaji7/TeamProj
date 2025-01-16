import React from 'react'
import { useNavigate,useEffect } from 'react';

export const ProtectedRouting = ({Component}) => {
    
    const nav= useNavigate();
    useEffect(()=>{
        if(!sessionStorage.getItem('user')){
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
