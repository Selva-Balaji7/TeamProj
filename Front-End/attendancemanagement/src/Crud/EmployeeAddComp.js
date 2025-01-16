// import axios from 'axios';
// import React, { useState } from 'react';
// import { useNavigate } from 'react-router-dom';
// import LogoutIcon from '@mui/icons-material/Logout';
// //impoert usestate
// //usenavigate

// const EmployeeAddComp = () => {

//     const nav=useNavigate();
//     const[employee,setEmployee]=useState({
//         eid:"",
//         efullname:"",

//     });

//     const inputHandler=(event)=>{
//         console.log(event);
//         const {name,type,value}=event.target;
//         setEmployee({...employee,[name]:value});
//         console.log(event.target);
//     }


//         const addEmployee=(event)=>{
//             event.preventDefault();
//             //console.log(product);
//             axios.post(``,employee).then(()=>{
//                 window.alert("Employee added succesfully");
//                 nav('');
//             }).catch((error)=>{})
//         }

//         const logout=()=>{
//             const nav=useNavigate();
//             const isConfirmLogout=window.confirm("Are you sure you want to logout?");
//             if(!isConfirmLogout){
//                 sessionStorage.clear();
//                 window.alert("Logout successful");
//                 console.log("redirecting to login page!");
//                 nav('/login');   
//             }
           
            
//         }
        

//     return (
//         <div>
            
//             <h2>List of Employees</h2>
//             <div className='row'>
//                 <div className='col-sm-3'></div>
//                 <div className='col-sm-6'></div>
//                 <div className='col-sm-3'></div>

//                 <form onSubmit={addEmployee}>

//                     <label className='form-label'>Enter Employee id</label>
//                     <input type="number" name="eid" onChange={inputHandler} value={employee.eid} className='form-control'></input>
//                     <label className='form-label'>Enter Employee name:</label>
//                     <input type="text" name="ename" onChange={inputHandler} value={employee.eid} className='form-control'></input>
                   
//                     <button type="submit" className='btn btn-primary mt-2'> Add data</button>  

//                 </form>
//             </div>
//             <button className="btn btn-danger" onClick={logout}><LogoutIcon></LogoutIcon></button>
//         </div>
//     )
// }
// export default EmployeeAddComp;
