import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios';
function Register() {
    // const [register, setRegister] = useState([]);
    const [firstname, setFirstname] = useState('')
    const [lastname, setLastname] = useState('')
    const [email, setEmail] = useState('');
    const [contactno, setContact] = useState();
    const [empid, setEmpid] = useState('');
    const [role, setRole] = useState('');
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')
    const [confirmpassword, setConfirmpassword] = useState('')
    //const app = "http://13.204.76.242:8080/EmployeeManagementSystem-0.0.1-SNAPSHOT";

    const ValidateUser = () => {
        if (!firstname || !lastname || !email || !contactno || !empid || !role || !username || !password || !confirmpassword) {
            alert("Please fill all the details..⚠️")
            return false;
        } else if (!/^[A-Za-z]+$/.test(firstname)) {
            alert("Please enter a valid first name..⚠️")
            return false
        } else if (!/^[A-Za-z]+$/.test(lastname)) {
            alert("Please enter a valid last name..⚠️")
            return false
        } else if (!/^\S+@\S+\.\S+$/.test(email)) {
            alert("Please enter a valid email id..⚠️")
            return false
        } else if (!/^\d{10}$/.test(contactno)) {
            alert("Please enter a 10 digit contact number..⚠️")
            return false
        }
        else if (password !== confirmpassword) {
            alert("Enter the same password ⚠️")
            return false;
        }
        else {
            return true;
        }
    }
    const registerUser = (e) => {
        e.preventDefault();
        if (ValidateUser()) {
            const newuser = { firstname, lastname, email, contactno, empid, role, username, password, confirmpassword }
            axios.post("http://localhost:8080/user/register", newuser).then((resp) => {
                if (resp.data === "Registration Successful") {
                    alert("Registration Successful ✅")
                } else {
                    alert("Username already exist please enter a new username")
                }
            })
                .catch((error) => alert("Failed to send data"));
        }
    }
    return (
        <div>
            <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', marginTop: 20 }}>
                <form onSubmit={registerUser} style={{ width: "40%", border: "1px solid #ddd", padding: 20, borderRadius: 10, boxShadow: "0 4px 12px rgba(0,0,0,0.3)" }}>
                    <h3 className='mb-4 text-center'>Employee Registration</h3>

                    <div className="mb-3">
                        <label className="form-label">Firstname</label>
                        <input type="text" className="form-control" placeholder="Enter Firstname" onChange={(e) => setFirstname(e.target.value)} />
                    </div>

                    <div className="mb-3">
                        <label className="form-label">Lastname</label>
                        <input type="text" className="form-control" placeholder="Enter Lastname" onChange={(e) => setLastname(e.target.value)} />
                    </div>

                    <div className="mb-3">
                        <label className="form-label">Email</label>
                        <input type="email" className="form-control" placeholder="Enter Email" onChange={(e) => setEmail(e.target.value)} />
                    </div>

                    <div className="mb-3">
                        <label className="form-label">Contact No</label>
                        <input type="tel" className="form-control" placeholder="Enter Contact No" onChange={(e) => setContact(e.target.value)} />
                    </div>

                    <div className="mb-3">
                        <label className="form-label">Employee ID</label>
                        <input type="number" className="form-control" placeholder="Enter Employee ID" onChange={(e) => setEmpid(e.target.value)} />
                    </div>

                    {/* ✅ Role Dropdown */}
                    <div className="mb-3">
                        <label className="form-label">Role</label>
                        <select className="form-select" onChange={(e) => setRole(e.target.value)}>
                            <option value="">Select Role</option>
                            <option value="User">Employee</option>
                        </select>
                    </div>

                    <div className="mb-3">
                        <label className="form-label">Username</label>
                        <input type="text" className="form-control" placeholder="Enter Username" onChange={(e) => setUsername(e.target.value)} />
                    </div>

                    <div className="mb-3">
                        <label className="form-label">Set Password</label>
                        <input type="password" className="form-control" placeholder="Enter Password" onChange={(e) => setPassword(e.target.value)} />
                    </div>

                    <div className="mb-3">
                        <label className="form-label">Confirm Password</label>
                        <input type="password" className="form-control" placeholder="Re-enter Password" onChange={(e) => setConfirmpassword(e.target.value)} />
                    </div>

                    <div style={{ display: "flex", gap: 15 }}>
                        <button type="submit" className="btn btn-success w-500">Register</button>
                        <Link style={{ textDecoration: 'none', color: 'white' }} to={'/'}>
                            <button type="button" className="btn btn-warning w-100">Back to Login</button>
                        </Link>
                    </div>
                    <label>Already registered ? Click back to login</label>
                </form>
            </div>
        </div>
    )
}

export default Register;
