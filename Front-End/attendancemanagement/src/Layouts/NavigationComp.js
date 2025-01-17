import React from 'react'
import { Link } from 'react-router-dom';
import modcss from '../css/NavigationComp.module.css'
import LoginIcon from '@mui/icons-material/Login';
import LogoutIcon from '@mui/icons-material/Logout';


function NavigationComp() {

    const loggout = () =>{
        sessionStorage.clear();
        window.location.reload();
    }

    return (
        <div>
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
