import React from 'react';
import {Link} from "react-router-dom";
import "./External.css"


const HomeComp = () => {
    return (
        <div>
        <div className="card" style={{position:"absolute",top:"30%",left:"40%",height:"300px",width:"250px",borderRadius:"10px"}}>
        <div className="card-header" style={{ backgroundColor:"#13b2e3",justifyContent:"center",textAlign:"center",height:"70px"}}>
        <b>Employee Attendance System</b> 
        </div>
        <div className="card-body">
        <ul className="list-group list-group-flush" style={{justifyContent:"center",textAlign:"center"}}>
        <li className="list-group-item">
        <Link to="/login" className="btn btn-outline-primary">Add New Employee</Link>
        </li>
        <li className="list-group-item">
        <Link to="/listemployee" className="btn btn-outline-info">List Employees</Link>
        </li>
        <li className="list-group-item">
         <Link to="/attendance" className="btn btn-outline-dark">show Attendance</Link>
        </li>
        </ul>
        </div>
        </div>
        </div>
    )
}

export default HomeComp;
