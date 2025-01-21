import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';
import modcss from '../css/NavigationComp.module.css'
import LoginIcon from '@mui/icons-material/Login';
import LogoutIcon from '@mui/icons-material/Logout';
import { GET } from '../Shared/HttpService';


function NavigationComp() {

    const [status , setStatus] = useState(null);

    useEffect(()=>{
        GET("api/Status")
            .then(()=>{setStatus(true)})
            .catch(()=>{setStatus(false)})
    },[]);

    const loggout = () =>{
        sessionStorage.clear();
        window.location.reload();
    }

    return (
        <div>
            <span>Server Status </span>
            { status == null && <div className={`${modcss.StatusMessage}`}><span className={`${modcss.messageChecking}`}>Checking..</span></div> }
            { status == true && <div className={`${modcss.StatusMessage}`}><span className={`${modcss.messageOnline}`}>online</span></div> }
            { status == false && <div className={`${modcss.StatusMessage}`}><span className={`${modcss.messageOffline}`}>offline</span></div> }
                
            {!!sessionStorage.getItem("user") ?
                <div className={modcss.linkContainer}>
                    <Link to="/addemployee" className={`btn btn-primary ${modcss.navLink}`}>Add Employee</Link>
                    <Link to="/listemployee" className={`btn btn-primary ${modcss.navLink}`}>List Employee</Link>
                    <Link to="/" className={`btn btn-primary ${modcss.navLink}`}>Attendance</Link>
                    <Link onClick={loggout} className={`btn btn-danger ${modcss.navLink2}`}><LogoutIcon/>loggout</Link>
                </div>
            :
                <div className={modcss.linkContainer2}>
                    <Link to="/login" className={`btn btn-dark ${modcss.navLink2}`}>
                        <LoginIcon to="/login"/>loggin
                    </Link>
                </div>
            }

        </div>
    )
}

export default NavigationComp;
