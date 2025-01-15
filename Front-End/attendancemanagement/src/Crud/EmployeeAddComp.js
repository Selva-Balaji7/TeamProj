import axios from 'axios';
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
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
                nav('p');
            }).catch((error)=>{})
        }


    return (
        <div>
            <h2>List of Employees</h2>
            <div className='row'>
                <div className='col-sm-3'></div>
                <div className='col-sm-6'></div>
                <div className='col-sm-3'></div>

                <form onSubmit={addEmployee}>

                    <label className='form-label'>Enter Employee id</label>
                    <input type="number" name="eid" onChange={inputHandler} value={employee.eid} className='form-control'></input>
                    <label className='form-label'>Enter Employee id</label>
                    <input type="text" name="ename" onChange={inputHandler} value={employee.eid} className='form-control'></input>
                   
                    <button type="submit" className='btn btn-primary mt-2'> Add data</button>

                </form>
            </div>
        </div>
    )
}
export default EmployeeAddComp;
