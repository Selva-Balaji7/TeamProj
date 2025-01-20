import React, {  useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { GET, POST } from '../Shared/HttpService';
import modcss from '../css/EmployeeAddComp.module.css';
import ClearIcon from '@mui/icons-material/Clear';
import HighlightOffIcon from '@mui/icons-material/HighlightOff';
import LogoutIcon from '@mui/icons-material/Logout';
import { Button } from '@mui/material';
import {Link} from 'react-router-dom';

const EmployeeAddComp = () => {
    const [employees, setEmployees] = useState([]);
    const [error, setError] = useState([]);
    const nav = useNavigate();
    const [employee, setEmployee] = useState({
        empId: "",
        empName:""
    });
    
    useEffect(()=>{
        getEmployee()

    }
    ,[]  );


    const getEmployee = () => {
        GET(`/api/Employee`)
        .then((res)=>{
            setEmployees(res.data);            
        })
        .catch((error)=>setError((curerror)=>[...curerror, "Unable to Fetch Employee List"+error]));
    }

    const inputHandler=(event)=>{
        const {name,value}=event.target;
        setEmployee({...employee,[name]:value});
    }
    const handleSubmit = (event) => {
        event.preventDefault();
        setEmployee({
            empId: "",
            empName: ""
        })
    }

    const addEmployee=(event)=>{
        event.preventDefault();
        let index = -1;
        employees.map((val, ind)=>{
            if(val.empId == employee.empId)
                index = ind;
        });

    

        if( index == -1 ){
            POST("api/Employee", employee)
                .then(()=>{
                    setError((curerror)=>[...curerror, "Employee added succesfully "]);
                    
                })
                .catch((error)=>setError((curerror)=>[...curerror, "Unable to Add Employee "+error]));
        }
        else{
            setError((curerror)=>[...curerror, "Employee Already Exists "]);
        }

    }
        
    const hideFun = (id) => {
        document.getElementById(id).style.display = "none";
    }

    const loggout = () => {
        sessionStorage.clear();
        nav("/");
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
              <Link to="/homepage">
            <Button variant="contained">Back</Button>
            </Link>
           
            <Button  className='btn btn-info' onClick={handleSubmit}>Refresh</Button>
            <Link onClick={loggout} className='btn btn-dark logout'>
              <LogoutIcon></LogoutIcon>Logout
            </Link>
          
            {/* <button className='btn btn-info' type='button'>Refresh</button> */}
            <div className='row'>
                <div className='col-sm-3'></div>
                <div className='col-sm-6'>
                    <form onSubmit={addEmployee}>
                        <h3>Register Employee</h3>
                        <label className='form-label'>Enter Employee id</label>
                        <input type="text" name="empId" onChange={inputHandler} value={employee.empId} className='form-control'></input>
                        <label className='form-label'>Enter Employee name:</label>
                        <input type="text" name="empName" onChange={inputHandler} value={employee.empName} className='form-control'></input>
                    
                        <button type="submit" className='btn btn-primary mt-2'> Add data</button>  
                    </form>


                </div>
                <div className='col-sm-3'></div>

            </div>            
        </div>
    )
}
export default EmployeeAddComp;