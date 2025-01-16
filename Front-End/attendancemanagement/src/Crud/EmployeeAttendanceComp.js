import React, { useEffect, useState} from 'react'
import { GET, POST, PUT } from '../Shared/HttpService';
import axios from 'axios';

const EmployeeAttendanceComp = () => {

    let attendanceObj={
        empId: "",
        empName:"",
        inTime:"",
        outTime:""
    };

    const [employee, setEmployee] = useState([        ]);

        const [attendance, setAttendance] = useState([        ]);

        const [userempId, setUserempId] = useState(0);

        const [error, setError] = useState("");

        let emp = null;

        // /*
        useEffect(() => {
            GET("/api/Attendance")
                .then((res)=>setAttendance(res.data))
                .catch((error)=>setError("Unable to Fetch Attendance List"+error));

            GET("/api/Employee")
                .then((res)=>{
                    setEmployee(res.data);
                })
                .catch((error)=>setError("Unable to Fetch Employee List"+error));
        }
        ,[]);
        // */
     
    
        const handleMarkAttendance = (event) => {
            // event.preventDefault();
            const currentTime=new Date().toLocaleTimeString('en-GB', {hour12:false});
            console.log("Current Time",currentTime);
            console.log("User EMp Id",userempId);

            let attIndex = -1;
            attendance.map((val, ind) => {
                if(val.empId == userempId) attIndex = ind;
            })

            //IF ATTENDANCE NOT FOUND
            if(attIndex == -1){
                console.log("IF ATTENDANCE NOT FOUND");
                emp = employee.filter((val) =>{
                    return val.empId == userempId;
                })[0];

                //IF EMPLOYEE NOT FOUND
                if(emp == null){
                    console.log("IF EMPLOYEE NOT FOUND");
                    setError("Unable to find Employee, Contact Admin to Add you");
                }
                //IF EMPLOYEE FOUND
                else{
                    console.log("IF EMPLOYEE FOUND", {...emp});
                    attendanceObj = {...emp, inTime:currentTime, outTime:""};
                    
                    console.log(attendanceObj);
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
                    attendanceObj = {...attendance[attIndex], outTime:{currentTime}};
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

            <form onSubmit={handleMarkAttendance}>
                <input type="text" name="userempId" value={userempId} onChange={(e)=>setUserempId(e.target.value)}></input>
                <button type="submit" className='btn btn-primary '>Mark Attendance</button>  
            </form>

            <h2>Attendance Records</h2>
                {attendance.length === 0 ? (
                    <p>No attendance records found.</p>
                ) : (
                    <table border="1" style={{ width: '100%', marginTop: '20px' }}>
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