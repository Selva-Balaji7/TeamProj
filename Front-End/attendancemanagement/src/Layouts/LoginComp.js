import React, { useRef, useState } from 'react'
import  {useNavigate} from 'react-router-dom';
import { Link } from 'react-router-dom';
import axios from 'axios';
import modcss from '../css/LoginComp.module.css';
import HighlightOffIcon from '@mui/icons-material/HighlightOff';
import ClearIcon from '@mui/icons-material/Clear';

import ArrowBackIcon from '@mui/icons-material/ArrowBack';


import "./External.css"
import { GET } from '../Shared/HttpService';

const LoginComp = () => {

    const [error, setError] = useState([]);
    const nav = useNavigate();

    const unameRef = useRef();
    const upassRef = useRef();

    const checkUser = () => {
       

        let enteredUname = unameRef.current.value;
        let enteredUpass = upassRef.current.value;
        // console.log(uid,upass);
        GET(`api/Admin/${enteredUname}`)
            .then((res) => {
                let currentUser = res.data;
                if (currentUser.userName == enteredUname && currentUser.userPassword == enteredUpass) {
                    sessionStorage.setItem("user", enteredUname);
                    nav("/");
                }
                else if(currentUser.userPassword != enteredUpass){
                    setError((curerror)=>[...curerror, "Wrond Password"]);
                    upassRef.current.value = "";
                }
        }).catch((error)=>{
            setError((curerror)=>[...curerror, "Unable to find Username"]);
                    unameRef.current.value = "";
                    upassRef.current.value = "";
        });


    }

    const hideFun = (id) => {
        document.getElementById(id).style.display = "none";
    }


    return (
        <div>
              

            {error.length != 0 && 
                <div className={modcss.messagesBox}>
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
            <div className={modcss.loginContainer}>


                <Link to="/" className={`btn btn-info btm-sm me-4 ${modcss.backButton}`} >
                    <ArrowBackIcon/>Go back
                </Link>

                <div id="message" className={modcss.message}>
                    <span onClick={()=>hideFun("message")} className={modcss.closeBtn}><HighlightOffIcon/> </span>
                    Note : Only Admins can Add Employee
                </div>

                <form className={modcss.loginform} >
                    <label className="form-label">User Name:</label>
                    <input ref={unameRef} type="text" name="uid" id="uname" className="form-control mb-2 " ></input>

                    <label className="form-label">Password:</label>
                    <input ref={upassRef} type="text" name="upass" id="upass" className="form-control mb-2 " ></input>
                    <button type="button" onClick={checkUser} className="btn btn-primary">Login</button>


                </form>
            </div>
        </div>
    )
}

export default LoginComp;
