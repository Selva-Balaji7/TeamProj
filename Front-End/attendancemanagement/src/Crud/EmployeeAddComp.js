import axios from 'axios';
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import LogoutIcon from '@mui/icons-material/Logout';
import { Link } from 'react-router-dom';
import { Button } from '@mui/material';

//impoert usestate
//usenavigate

const EmployeeAddComp = () => {

    const nav=useNavigate();
    const[employee,setEmployee]=useState({
        eid:"",
        efullname:"",

    });

    const inputHandler=(event)=>{
        console.log(event);
        const {name,type,value}=event.target;
        setEmployee({...employee,[name]:value});
        console.log(event.target);
    }


        const addEmployee=(event)=>{
            event.preventDefault();
            //console.log(product);
            axios.post(``,employee).then(()=>{
                window.alert("Employee added succesfully");
                nav('');
            }).catch((error)=>{})
        }

        const logout=()=>{
            const isConfirmLogout=window.confirm("Are you sure you want to logout?");
            if(!isConfirmLogout){
                sessionStorage.clear();
                window.alert("Logout successful");
                console.log("redirecting to login page!");
                nav('/login');   
            }
           
            
        }
        

    return (
        <div>
            
           
            <div className='row'>
                <div className='col-sm-4'></div>
                <div className='col-sm-4'>
                <form onSubmit={addEmployee}>
                <h1 style={{fontFamily:"cursive",fontWeight:"500",fontSize:"25px",color:"#079a8e",justifyContent:"center",textAlign:"center"}}>Employee Registration</h1>
                <br/><br/>
                 <label className='form-label'>Enter Employee id</label>
                 <input type="number" name="eid" onChange={inputHandler} value={employee.eid} className='form-control'></input>
                 <label className='form-label'>Enter Employee name:</label>
                <input type="text" name="ename" onChange={inputHandler} value={employee.ename} className='form-control'></input>
                <br/>
                 <div style={{ alignItems:"center", textAlign:"center"}}>
                 <button type="submit" className='btn btn-primary mt-2'> Add data</button>  
                 </div>
               
                </form>     


                </div>
                <div className='col-sm-4'></div> 
            </div>
            <Link to="/login">
            <Button style={{position:"absolute",left:"5px",top:"5px"}} variant="contained">Back</Button>
            </Link>
            <button className="btn btn-danger mt-2" style={{position:"absolute",right:"5px"}} onClick={logout}><LogoutIcon></LogoutIcon></button>
        </div>
    )
}
export default EmployeeAddComp;


