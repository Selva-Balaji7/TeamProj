import React from "react"
import "./External.css"

const HomeComp = () => {
    return (
        <div>


        <div className="card">
        <div className="card-header" style={{ backgroundColor:"#13b2e3",justifyContent:"center",textAlign:"center"}}>
        <b>Employee Attendance System</b> 
        </div>
        <div className="card-body">
        <ul className="list-group list-group-flush">
        <li className="list-group-item">
        <Link to="addemployee" className='btn btn-primary mt-2'>Add New Employee</Link>
        </li>
        <li className="list-group-item">
        <Link to="listemployee" className="btn btn-info btm-sm me-4">List Employees</Link>
        </li>
        <li className="list-group-item">
         <Link to="attendance" className="btn btn-success btm-sm me-4">show Attendance</Link>
        </li>
        </ul>
        </div>
        </div>
        </div>
    )
}

export default HomeComp;
