import { Link } from 'react-router-dom';
import React, { useEffect, useState } from 'react'
import { GET, DELETE } from '../Shared/HttpService';
import ClearIcon from '@mui/icons-material/Clear';
import HighlightOffIcon from '@mui/icons-material/HighlightOff';
import modcss from '../css/EmployeeDashComp.module.css'

import EmployeeAddComp from "../Crud/EmployeeAddComp";

const EmployeeDashComp = () => {
    const [employee, setEmployee] = useState([]);
    const [error, setError] = useState([]);
    const [showForm, setShowForm] = useState(true);
    

    useEffect(() => {
        getEmployee();
        document.getElementById("addEmpForm").style.display = "none";
    }, []);

    const getEmployee = () => {
        GET("/api/Employee")
            .then((res)=>{
                setEmployee(res.data);
            })
            .catch((error)=>setError((curerror)=>[...curerror, "Unable to Fetch Employee List"+error]));
    }

    const removeEmployee = (empId) => {
        DELETE(`api/Employee/${empId}`)
                .then(()=>{
                    setError((curerror)=>[...curerror, `Employee Deleted : ${empId}`]);
                    getEmployee();
                })
                .catch((error)=>setError((curerror)=>[...curerror, `Unable to remove Employee`+error]));

    }
    
    const hideFun = (id) => {
        document.getElementById(id).style.display = "none"  ;
    }
    const showAddEmp = () => {
        if(showForm){
            document.getElementById("addEmpForm").style.display = "block";
            setShowForm(false)
        }
        else{
            document.getElementById("addEmpForm").style.display = "none";
            setShowForm(true)
        }
        
    }

    return (
        <div>
            {error.length != 0 && 
                <div>
                    <button className={`btn btn-danger ${modcss.clearBtn}`} onClick={()=>setError([])}>
                        Clear All <ClearIcon/>
                    </button>
                    {error.map((val, index)=>{
                        return (
                            <div className={modcss.errors} id={`error${index}`}>
                                <span onClick={()=>hideFun(`error${index}`)} className={modcss.closeBtn}><HighlightOffIcon/> </span>
                                <span>{val}</span>
                            </div>
                        )
                            
                    })}
                </div>
            }  


            <Link to="/addemployee" className='btn btn-primary me-2'> Add </Link>
            {/* <button className="btn btn-success" onClick={showAddEmp}>Add</button> */}
            
            <Link to="/addemployee" className='btn btn-info me-2'> back</Link>
            <div id="addEmpForm">
                <EmployeeAddComp/>
            </div>

            <table className='table table-hover table-bordered table-striped text-center' style={{height:"300px",width:"500px"}}>
                <thead >
                    <tr>
                        <th>S.no</th>
                        <th>Enployee id</th>
                        <th>Employee name</th>
                        {!!sessionStorage.getItem("user")&&
                                    <th>Remove</th>}
                    </tr>
                </thead>
                <tbody>
                    {employee.length > 0 && employee.map((val, index) => {
                            return <tr key={val.eid}>
                                <td>{index + 1}</td>
                                <td>{val.empId}</td>
                                <td>{val.empName}</td>
                                {!!sessionStorage.getItem("user")&&
                                    <th><span onClick={()=>removeEmployee(val.empId)}>
                                        <HighlightOffIcon/>
                                    </span></th>}
                            </tr>   
                    })  
                    
                    }    
                </tbody>
            </table>        
        </div>
    )
}


export default EmployeeDashComp;