import React, { useRef } from 'react'
import  {useNavigate} from 'react-router-dom';
import { Link } from 'react-router-dom';
import axios from 'axios';
import { Button } from '@mui/material';

const LoginComp = () => {

    const nav = useNavigate();

    const unameRef = useRef();
    const upassRef = useRef();

    const checkUser = () => {
       

        let enteredUname = unameRef.current.value;
        let enteredUpass = upassRef.current.value;
        // console.log(uid,upass);

        axios.get("http://localhost:5180/").then((res) => {

            //console.log(res);
            let currentUser = res.data.filter((val, index) => { return val.userName === enteredUname && val.userPassword === enteredUpass })
            if (currentUser.length > 0) {
                window.alert("login success");
                sessionStorage.setItem("user", enteredUname);
                nav("/addemployee");
            }
            else {
                window.alert("wrong crediantials");
                unameRef.current.value = "";
                upassRef.current.value = "";
            }

        }).catch((error) => { })


    }

    return (
        <div className='loginContainer'>
            <Link to="/homepage">
            <Button variant="contained">Back</Button>
            </Link>
            <h2 className="text-center">Please Login with Admin credentials</h2>
            <form className="loginform" >
                <label className="form-label">enter user Name:</label>
                <input ref={unameRef} type="text" name="uid" id="uname" className="form-control mb-2 " ></input>

                <label className="form-label">enter user password:</label>
                <input ref={upassRef} type="text" name="upass" id="upass" className="form-control mb-2 " ></input>
                <button type="button" onClick={checkUser} className="btn btn-primary">Login</button>


            </form>
        </div>
    )
}

export default LoginComp;
