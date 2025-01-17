import React from 'react';
import {Link, Outlet} from "react-router-dom";
import "./External.css"
import NavigationComp from './NavigationComp';

const HomeComp = () => {
    return (
        <div>
            <NavigationComp/>
            <Outlet/>
        </div>
    )
}

export default HomeComp;
