import React, { useEffect, useState} from 'react'
import { GET, POST, PUT } from '../Shared/HttpService';
import { Link } from 'react-router-dom';
import { Button } from '@mui/material';


const EmployeeAttendanceComp = () => {

    let attendanceObj={
        empId: "",
        empName:"",
        inTime:null,
        outTime:null
    };

    const [employee, setEmployee] = useState([  ]);

        const [attendance, setAttendance] = useState([ ]);

        const [userempId, setUserempId] = useState("");

        const [error, setError] = useState("");

        let emp = null;

        const getAttendance = () =>{
            GET("/api/Attendance")
                .then((res)=>setAttendance(res.data))
                .catch((error)=>setError("Unable to Fetch Attendance List"+error));
        }
        const getEmployee = () => {
            GET("/api/Employee")
                .then((res)=>{
                    setEmployee(res.data);
                })
                .catch((error)=>setError("Unable to Fetch Employee List"+error));
        }

        // /*
        useEffect(() => {
            
            getAttendance();
            getEmployee();
        }
        ,[]);
        // */

        const handleMarkAttendance = (event) => {

            const currentTime=new Date().toLocaleTimeString('en-GB', {hour12:false});

            let attIndex = -1;
            attendance.map((val, ind) => {
                if(val.empId == userempId) attIndex = ind;
            })

            emp = employee.filter((val) =>{
                return val.empId == userempId;
            })[0];

            //IF ATTENDANCE NOT FOUND
            if(attIndex == -1){
                

                //IF EMPLOYEE NOT FOUND
                if(emp == null){
                    setError("Unable to find Employee, Contact Admin to Add you");
                }
                //IF EMPLOYEE FOUND
                else{
                    attendanceObj = {
                        empId:emp.empId,
                        empName:emp.empName,
                        inTime:currentTime, 
                        outTime:null, 
                    };

                    POST("/api/Attendance", attendanceObj)
                        .then(()=>{
                            window.alert("Logged Successfully");
                        })
                        .catch(()=>setError("Unable to Log Attendance"));
                        

                }
            }
            //IF ATTENDANCE FOUND
            else
            {
                //IF outTime IS EMPTY
                if(attendance[attIndex].outTime == null){

                    attendanceObj = {
                        empId:emp.empId,
                        empName:emp.empName,
                        inTime:attendance[attIndex].inTime, 
                        outTime:currentTime, 
                    };
                    

                    PUT(`/api/Attendance/${attendanceObj.empId}`, attendanceObj)
                        .then(()=>window.alert("Loggout Successfully"))
                        .catch(()=>setError("Unable to Loggout"));
                }
                //IF outTime IS EMPTY
                else{
                    window.alert("You have already loggout");
                }
            }
        }

    return(
        <div>
            {error && window.alert(error)}     
            <div className='attendance-form' >
            <form onSubmit={handleMarkAttendance} style={{height:"200px",width:"200px"}}>
                <h3>Mark your attendance</h3>
                <input type="text" name="userempId" value={userempId} onChange={(e)=>setUserempId(e.target.value)}></input>
                <button type="submit" className='btn btn-primary '>Mark Attendance</button>  
            </form>
            </div>
           
            <Link to="/homepage">
            <Button variant="contained">Back</Button>
            </Link>
           
                {attendance.length === 0 ? (  <p>No attendance records found.</p> ) : (
                    
                    <table className="table table-success table-striped" border="1" style={{ width: '50%', marginTop: '20px' }}>
                        <thead>
                            <tr>
                                <th>Employee ID</th>
                                <th>Employee Name</th>
                                <th>inTime</th>
                                <th>outTime</th>
                            </tr>
                        </thead>
                        <tbody>
                            {attendance.map((record, index) => (
                                <tr key={index}>
                                    <td>{record.empId}</td>
                                    <td>{record.empName}</td>
                                    <td>{record.inTime}</td>
                                    <td>{record.outTime || 'N/A'}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                    
                )}

            
                

        </div>
    )



}
export default EmployeeAttendanceComp;