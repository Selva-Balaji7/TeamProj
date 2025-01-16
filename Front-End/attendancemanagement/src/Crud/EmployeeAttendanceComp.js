import React, { useState} from 'react'

const EmployeeAttendanceComp = () => {
    const [employee, setEmployee] = useState([
            {eid:1,ename:"Rahul",Date:"2025-01-16",intime:"09:45",outtime:"06:45"},
            {eid:1,ename:"John",Date:"2025-01-16",intime:"09:30",outtime:"06:30"},
        ]);
        const [attendance, setAttendance] = useState([]);
        const [error, setError] = useState("");
     
    
        const handleMarkAttendance = (id) => {
    
            const currentDate=new Date().toLocaleDateString();
            const currentTime=new Date().toLocaleTimeString();
            console.log(currentDate);
            console.log(currentTime);
            const existingRecord = attendance.find(
                (record) => record.eid === employee.eid && record.date === today
            );
           if(existingRecord && existingRecord.intime && !existingRecord.outtime){
                  existingRecord.outtime=Date().toLocaleTimeString();
                  setAttendance([...attendance]);
           }else if(existingRecord && existingRecord.intime && existingRecord.outtime){
            setError('Attendance for ${employee.ename} is already marked');
           }
           
           else{
               const newRecord={
                   eid:employee.eid,
                   date:today,
                   intime:Date().toLocaleTimeString(),
                   outtime:""
               };
               setAttendance([...attendance,newRecord]);
           }
        }  

return(
    <div>
         <h2>Attendance Records</h2>
            {attendance.length === 0 ? (
                <p>No attendance records found.</p>
            ) : (
                <table border="1" style={{ width: '100%', marginTop: '20px' }}>
                    <thead>
                        <tr>
                            <th>Employee ID</th>
                            <th>Employee Name</th>
                            <th>Date</th>
                            <th>Intime</th>
                            <th>Outtime</th>
                        </tr>
                    </thead>
                    <tbody>
                        {attendance.map((record, index) => (
                            <tr key={index}>
                                <td>{record.eid}</td>
                                <td>{record.ename}</td>
                                <td>{record.date}</td>
                                <td>{record.intime}</td>
                                <td>{record.outtime || 'N/A'}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
                
            )}

        <button type='button' onClick={() => handleMarkAttendance(val.id)} className='btn btn-primary '>Mark Attendance</button>                    
              

    </div>
)



}