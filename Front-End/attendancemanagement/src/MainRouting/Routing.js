import {createBrowserRouter} from "react-router-dom";
import HomeComp from "../Layouts/HomeComp";
import EmployeeDashComp from "../Crud/EmployeeDashComp";
import EmployeeAddComp from "../Crud/EmployeeAddComp";
import EmployeeAttendanceComp from "../Crud/EmployeeAttendanceComp";
import ProtectedRouting from "./ProtectedRouting";
import { PageNotFound } from "../Layouts/PageNotFound";



const routing=createBrowserRouter([
    {path:"",element:<HomeComp/>},
    //{path:"login",element:<LoginComp/>}, 

   
    {path:"addemployee",element:<ProtectedRouting Component={EmployeeAddComp}/>},

    {path:"listemployee",element:<EmployeeDashComp/>},

    {path:"attendance",element:<EmployeeAttendanceComp/>},

    {path:"*",element:<PageNotFound/>}

])

export default routing;
