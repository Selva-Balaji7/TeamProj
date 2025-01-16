import React from 'react'

const LoginComp = () => {

   // const nav = useNavigate();

    const checkUser = () => {
        alert("login clicked");
    }

    return (
        <div>

            <form className="loginform">
                <label className="form-label">enter user id:</label>
                <input type="text" name="uid" className="form-control mb-2 "></input>

                <label className="form-label">enter user password:</label>
                <input type="text" name="upass" className="form-control mb-2 "></input>
                <button type="button" onClick={()=>checkUser} className="btn btn-primary">Login</button>

            </form>
        </div>
    )
}

export default LoginComp;
