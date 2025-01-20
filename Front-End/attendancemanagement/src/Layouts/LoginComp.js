import React, { useState} from 'react'
import  {useNavigate} from 'react-router-dom';
import { Link } from 'react-router-dom';
import axios from 'axios';
import { Button } from '@mui/material';

const LoginComp = () => {

    const nav = useNavigate();

    // const unameRef = useRef();
    // const upassRef = useRef();
    const [formdata, setformdata] = useState(
        {
            uname:"" ,
            upass: ""
        });
    const [masked, setmasked]   = useState(
        {
            uname: "",
            upass: ""
        }
    );

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setformdata({
            ...formdata,
            [name]: value
        })
        setmasked({
            ...masked,
            [name]: "*".repeat(value.length)
        })
        
    }
    const handleLogin = (e) => {    
        e.preventDefault();
        setformdata({
            uname:"",
            upass:""
        })
    };




    const checkUser = () => {
       

         let enteredUname = formdata.uname;
         let enteredUpass = formdata.upass;
        console.log(enteredUname,enteredUpass);

        axios.get(`http://localhost:5180/api/Admin/${enteredUname}`).then((res) => {

            console.log(res);
            let currentUser = res.data;
            if( currentUser.userPassword === enteredUpass )
            {
                window.alert("login success");
                sessionStorage.setItem("user", enteredUname);
                nav("/addemployee");
            }
            else {
                window.alert("wrong crediantials");
                setformdata({
                    uname: "",
                    upass: ""

              })
            }})
            
           .catch((error) => { })
    }
        
    return (
        <div className='loginContainer'>
            <Link to="/homepage">
            <Button variant="contained">Back</Button>
            </Link>
            <h2 className="text-center">Please Login with Admin credentials</h2>
            <form className="loginform" onSubmit={handleLogin}>
                <label className="form-label">enter user Name:</label>
                <input type="password" name="uname" value={formdata.uname} onChange={handleInputChange} id="uname" className="form-control mb-2 " ></input>

                <label className="form-label">enter user password:</label>
                <input  type="password" name="upass" value={formdata.upass} onChange={handleInputChange} id="upass" className="form-control mb-2 " ></input>
                <button type="submit" onClick={checkUser} className="btn btn-primary">Login</button>


            </form>
        </div>
        )
        
}


export default LoginComp;
