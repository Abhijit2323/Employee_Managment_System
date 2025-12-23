import axios from 'axios';
import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
function Login() {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();
    //const app = "http://13.204.76.242:8080/EmployeeManagementSystem-0.0.1-SNAPSHOT";

    const userlogin = (e) => {
        e.preventDefault();
        const logindata = { username, password }
        axios.post("http://localhost:8080/user/login", logindata).then((resp) => {
            if (resp.data === "Invalid username or password") {
                alert("Invalid username or password")
            }
            else {
                alert("Login Sucessful...✅")
                const response = resp.data;
                localStorage.setItem("userdetails", JSON.stringify(resp.data))
                if (response.role === "Admin") {
                    navigate('/admindashboard')
                } else {
                    navigate('/employee')
                }
            }
        })
            .catch((error) => {
                if (error.status === 401) {
                    alert("Invalid username or password 🧐")
                    console.log(error.st);

                } else {
                    alert("Login Failed 🥲")
                }
            })
    }
    return (
        <div>
            <h1 style={{ textAlign: "center", marginTop: 50 }}>Welcome to the EMS</h1>
            <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: "85vh" }}>

                <form onSubmit={userlogin} style={{ width: "40%", border: "1px solid #ddddt", padding: 20, borderRadius: 10, boxShadow: "0 4px 12px rgba(0,0,0,0.3)" }}>
                    <div className="mb-3 ">
                        <label for="username" className="form-label">Email Usename</label>
                        <input type="text" className="form-control" id="username" onChange={(e) => setUsername(e.target.value)} />
                        <div className="form-text">We'll never share your email with anyone else.</div>
                    </div>
                    <div className="mb-3">
                        <label for="exampleInputPassword1" className="form-label">Password</label>
                        <input type="password" className="form-control" id="exampleInputPassword1" onChange={(e) => setPassword(e.target.value)} />
                    </div>
                    <div style={{ display: "flex", gap: 20 }}>
                        <button type="submit" className="btn btn-success">Login</button>
                        <Link style={{ textDecoration: 'none', color: 'white' }} to={'/register'}><button type="button" className="btn btn-warning">Register</button></Link>
                    </div>
                    If not have account please register
                </form>
            </div>
        </div>
    )
}

export default Login
