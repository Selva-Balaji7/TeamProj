import React, { useEffect, useState} from 'react'
import { DELETE, GET, POST, PUT } from '../Shared/HttpService';
import modcss from '../css/EmployeeAttendanceComp.module.css'
import ClearIcon from '@mui/icons-material/Clear';
import HighlightOffIcon from '@mui/icons-material/HighlightOff';

const EmployeeAttendanceComp = () => {

    let attendanceObj={
        empId: "",
        empName:"",
        inTime:null,
        outTime:null
    };

    const [employee, setEmployee] = useState([        ]);

        const [attendance, setAttendance] = useState([        ]);

        const [userempId, setUserempId] = useState("");

        const [error, setError] = useState([]);

        let emp = null;

        const getAttendance = () =>{
            GET("/api/Attendance")
                .then((res)=>setAttendance(res.data))
                .catch((error)=>setError((curerror)=>[...curerror, "Unable to Fetch Attendance List"+error]));
        }
        const getEmployee = () => {
            GET("/api/Employee")
                .then((res)=>{
                    setEmployee(res.data);
                })
                .catch((error)=>setError((curerror)=>[...curerror, "Unable to Fetch Employee List"+error]));
        }

        // /*
        useEffect(() => {
            
            getAttendance();
            getEmployee();
        }
        ,[]);
        // */

        const handleMarkAttendance = (event) => {
            event.preventDefault();

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
                    setError((curerror)=>[...curerror, "Unable to find Employee, Contact Admin to Add you"]);
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
                            setError((curerror)=>[...curerror, `Attendance Logged for ${emp.empId}`]);
                            getAttendance();
                        })
                        .catch(()=>setError((curerror)=>[...curerror, "Unable to Log Attendance"]));
                        
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
                        .then(()=>{
                            setError((curerror)=>[...curerror, `Attendance LoggedOut for ${emp.empId}`]);
                            getAttendance();
                        })
                        .catch(()=>setError((curerror)=>[...curerror, "Unable to Loggout"]));
                }
                //IF outTime IS EMPTY
                else{
                    window.alert("You have already loggout");
                }
            }


        }


        const removeAttendance = (empId) =>{
            DELETE(`api/Attendance/${empId}`)
                .then(()=>setError((curerror)=>[...curerror, `Attendance Deleted for ${empId}`]))
                .catch((error)=>setError((curerror)=>[...curerror, `Unable to remove Attendance`+error]));

            getAttendance();
        }

        const hideFun = (id) => {
            document.getElementById(id).style.display = "none";
        }
    

    return(
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
                                {!!sessionStorage.getItem("user")&&
                                    <th>Remove</th>}
                            </tr>
                        </thead>
                        <tbody>
                            {attendance.map((record, index) => (
                                <tr key={index}>
                                    <td>{record.empId}</td>
                                    <td>{record.empName}</td>
                                    <td>{record.inTime}</td>
                                    <td>{record.outTime || 'N/A'}</td>
                                    {!!sessionStorage.getItem("user")&&
                                    <th><span onClick={()=>removeAttendance(record.empId)}>
                                        <HighlightOffIcon/>
                                    </span></th>}
                                </tr>
                            ))}
                        </tbody>
                    </table>
                    
                )}

            
                

        </div>
    )



}
export default EmployeeAttendanceComp;