import React from 'react'
import axios from 'axios';
import React, {useState,useEffect} from 'react'

 function EmployeeAttendance (){
    const [inTime, setInTime] = useState('');
    const [outTime, setOutTime] = useState('');
    const [attendance, setAttendance] = useState([]);


    const handleMarkInTime = () => {
        const currentTme = new Date().toLocaleTimeString();//get current time
        setInTime(currentTime);
    };

    const handleMarkOutTime = () => {
        const currentTme = new Date().toLocaleTimeString();//get current out time
        setOutTime(currentTime);
    };

    useEffect(()=>{
        if(inTime && outTime){
            setAttendance([...attendance, {inTime, outTime}]);
        }

    }



   


    return (

        <div>
            <h2>Employee Attendance</h2>

            <div>
            <h2>Employee List</h2>

            <Link to="/maindashboard/productaddcomp" className='btn btn-primary me-2'> Add
            </Link>
            <table className='table table-hover table-bordered table-striped text-center'>
                <thead>
                    <tr>
                        <th>id</th><th>pname</th><th>pprice</th><th>pcompany</th><th>pquantity</th><th>Action</th>
                    </tr>
                </thead>
                <tbody>
                    {

                        product.length > 0 && product.map((val, index) => {
                            return <tr key={val.id}>
                                <td>{index + 1}</td>
                                <td>{val.pname}</td>
                                <td>{val.pprice}</td>
                                <td>{val.pcompany}</td>
                                <td>{val.pquantity}</td>




                                <button type='button' onClick={() => handleShow(val)} className='btn btn-danger me-2' >
                                <RemoveRedEyeIcon/>
                                </button>

                                <Link to={`/maindashboard/producteditcomp/${val.id}`} className='btn btn-danger me-2'>
                                    <EditIcon></EditIcon></Link>

                                <button type='button' onClick={() => deleteProduct(val.id)} className='btn btn-primary '>
                                    <DeleteIcon></DeleteIcon></button>

                               
                            </tr>
                        })
                    }
                </tbody>

            </table>

        </div>
            </div>
            
    )
}
export default EmployeeAttendance;