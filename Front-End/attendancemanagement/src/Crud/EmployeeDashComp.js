// import axios from 'axios';
// import React, { useEffect, useState } from 'react'

// const EmployeeDashComp = () => {
//     const [employee, setEmployee] = useState([]);

//     useEffect(() => {
//         fetchData();
//     }, []);

//     const fetchData = () => {
//             axios.get("http://localhost:8080/").then((res) => {
//             console.log(res);
//             setEmployee(res.data);
//         }).catch((error) => { })
//     }
    

//     return (
//         <div>
//             <h2>Employee List</h2>

//             <Link to="" className='btn btn-primary me-2'> Add
//             </Link>
//             <table className='table table-hover table-bordered table-striped text-center'>
//                 <thead>
//                     <tr>
//                         <th>Enployee id</th><th>Employee name</th><th>Date</th><th>In-Time</th><th>Out-Time</th>
//                     </tr>
//                 </thead>
//                 <tbody>
//                     {

//                         employee.length > 0 && employee.map((val, index) => {
//                             return <tr key={val.eid}>
//                                 <td>{index + 1}</td>
//                                 <td>{val.eid}</td>
//                                 <td>{val.ename}</td>
//                                 <td>{val.Date}</td>
//                                 <td>{val.intime}</td>
//                                 <td>{val.outtime}</td>
//                             </tr>
                                

//                     })  
                    
//                     }    
//                 </tbody>
//             </table>        
//         </div>
//     )
// }


// export default EmployeeDashComp;

