import {createBrowserRouter} from "react-router-dom";
import HomeComp from "../Layouts/HomeComp";
import EmployeeDashComp from "../Crud/EmployeeDashComp";
import EmployeeAddComp from "../Crud/EmployeeAddComp";
import EmployeeAttendanceComp from "../Crud/EmployeeAttendanceComp";
import ProtectedRouting from "./ProtectedRouting";
import { PageNotFound } from "../Layouts/PageNotFound";
import LoginComp from "../Layouts/LoginComp";



const routing=createBrowserRouter([
    {path:"",element:<HomeComp/>, children:[
        {path:"",element:<EmployeeAttendanceComp/>},
        
        {path:"addemployee",element:<ProtectedRouting Component={EmployeeAddComp}/>},

        {path:"listemployee",element:<EmployeeDashComp/>},

    ] },
    {path:"login",element:<LoginComp/>},    

    //wildcart routing
    {path:"*",element:<PageNotFound/>}

])

export default routing;
