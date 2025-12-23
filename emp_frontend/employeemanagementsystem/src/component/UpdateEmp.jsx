import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

function UpdateEmp() {
    const [emp, setEmployee] = useState({});
    const [firstname, setFirstName] = useState('')
    const [lastname, setLastName] = useState('')
    const [email, setEmail] = useState('')
    const [contactno, setContact] = useState('')
    const [gender, setGender] = useState('')
    const [dob, setDob] = useState('')
    const [joiningdate, setJoiningDate] = useState('')
    const [designation, setDesignation] = useState('')
    const [dept, setDepartment] = useState('')
    const [reportingmanager, setRepostingManager] = useState('')
    const [exp, setExperience] = useState('')
    const [salary, setSalary] = useState('')
    const [address, setAddress] = useState('')
    const [uid, setuid] = useState('')
    const [marriagestatus, setMarriageStatus] = useState('')
    const [image, setImage] = useState(null)
    let info = useParams()
    // const app = "http://13.204.76.242:8080/EmployeeManagementSystem-0.0.1-SNAPSHOT";


    useEffect(() => {
        const fetchData = async () => {
            try {
                const resp = await axios.get("http://localhost:8080/getempbyid/${info.eid}");
                const data = resp.data;
                setEmployee(data);

                // populate the form fields
                setFirstName(data.firstname);
                setLastName(data.lastname);
                setEmail(data.email);
                setContact(data.contactno);
                setGender(data.gender);
                setDob(data.dob);
                setJoiningDate(data.joiningdate);
                setDesignation(data.designation);
                setDepartment(data.dept);
                setRepostingManager(data.reportingmanager);
                setExperience(data.exp);
                setSalary(data.salary);
                setAddress(data.address);
                setuid(data.uid);
                setMarriageStatus(data.marriagestatus);
                setImage(data.image);
            } catch (error) {
                alert("No data found to update");
            }
        }

        fetchData();
    }, [info.eid]); // run only when the ID changes

    let handleimg = (e) => {
        var file = e.target.files[0]
        var filepath = `/img/${file.name}`
        setImage(filepath)
        console.log(filepath);
    }

    const updateEmpData = (e) => {
        e.preventDefault();
        let newData = {
            firstname, lastname, email, contactno, gender, dob, joiningdate, designation, dept, reportingmanager, exp, salary, address, uid: uid, marriagestatus, image
        }
        axios.put("http://localhost:8080/updateemp/${emp.eid}", newData)
            .then((resp) => {
                if (resp.data === "Employee Data Updated Sucessfully..!") {
                    alert("Employee data updated sucessfully ✅");
                }
            }).catch((error) => {
                alert("Falied to Update the Data ❌")
            })
    }

    return (
        <div style={{
            width: "100%",
            minHeight: "100vh",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            background: "#f0f2f5",
            padding: "40px"
        }}>
            <form
                onSubmit={updateEmpData}
                style={{
                    display: "flex",
                    gap: "40px",
                    padding: "40px",
                    background: "white",
                    borderRadius: "12px",
                    boxShadow: "0 6px 16px rgba(0,0,0,0.1)",
                    maxWidth: "900px",
                    width: "100%",
                    flexWrap: "wrap"
                }}
            >
                {/* Left Column - Personal Info */}
                <div style={{ flex: 1, display: "flex", flexDirection: "column", gap: "16px" }}>
                    <h3 style={{ marginBottom: "10px", color: "#333" }}>Personal Info</h3>

                    <input type="text" placeholder="Enter first name" value={firstname} onChange={(e) => setFirstName(e.target.value)}
                        style={{ padding: "10px", border: "1px solid #ccc", borderRadius: "6px" }} />
                    <input type="text" placeholder="Enter last name" value={lastname} onChange={(e) => setLastName(e.target.value)}
                        style={{ padding: "10px", border: "1px solid #ccc", borderRadius: "6px" }} />
                    <input type="email" placeholder="Enter email" value={email} onChange={(e) => setEmail(e.target.value)}
                        style={{ padding: "10px", border: "1px solid #ccc", borderRadius: "6px" }} />
                    <input type="number" placeholder="Enter contact no." value={contactno} onChange={(e) => setContact(e.target.value)}
                        style={{ padding: "10px", border: "1px solid #ccc", borderRadius: "6px" }} />

                    <div style={{ display: "flex", gap: "20px", marginTop: "8px" }}>
                        <label><input type="radio" name="gender" value="Male" checked={gender === "Male"} onChange={(e) => setGender(e.target.value)} /> Male</label>
                        <label><input type="radio" name="gender" value="Female" checked={gender === "Female"} onChange={(e) => setGender(e.target.value)} /> Female</label>
                    </div>

                    <label style={{ fontWeight: "500" }}>Date of birth</label>
                    <input type="date" value={dob} onChange={(e) => setDob(e.target.value)}
                        style={{ padding: "10px", border: "1px solid #ccc", borderRadius: "6px" }} />

                    <input type="text" placeholder="Enter address" value={address} onChange={(e) => setAddress(e.target.value)}
                        style={{ padding: "10px", border: "1px solid #ccc", borderRadius: "6px" }} />

                    <select value={marriagestatus} onChange={(e) => setMarriageStatus(e.target.value)}
                        style={{ padding: "10px", border: "1px solid #ccc", borderRadius: "6px" }}>
                        <option>Marriage Status</option>
                        <option value="Married">Married</option>
                        <option value="Single">Single</option>
                    </select>
                </div>

                {/* Right Column - Work Info */}
                <div style={{ flex: 1, display: "flex", flexDirection: "column", gap: "16px" }}>
                    <h3 style={{ marginBottom: "10px", color: "#333" }}>Work Info</h3>

                    <label style={{ fontWeight: "500" }}>Date of joining</label>
                    <input type="date" value={joiningdate} onChange={(e) => setJoiningDate(e.target.value)}
                        style={{ padding: "10px", border: "1px solid #ccc", borderRadius: "6px" }} />

                    <select value={dept} onChange={(e) => setDepartment(e.target.value)}
                        style={{ padding: "10px", border: "1px solid #ccc", borderRadius: "6px" }}>
                        <option>Select Department</option>
                        <option value="IT">IT</option>
                        <option value="Banking">Banking</option>
                        <option value="HR">HR</option>
                    </select>

                    <select value={designation} onChange={(e) => setDesignation(e.target.value)}
                        style={{ padding: "10px", border: "1px solid #ccc", borderRadius: "6px" }}>
                        <option>Select Designation</option>
                        <option value="Fresher">Fresher</option>
                        <option value="Senior Employee">Senior Employee</option>
                        <option value="Helper">Helper</option>
                    </select>

                    <input type="text" placeholder="Enter reporting manager name" value={reportingmanager} onChange={(e) => setRepostingManager(e.target.value)}
                        style={{ padding: "10px", border: "1px solid #ccc", borderRadius: "6px" }} />

                    <input type="number" placeholder="Enter experience" value={exp} onChange={(e) => setExperience(e.target.value)}
                        style={{ padding: "10px", border: "1px solid #ccc", borderRadius: "6px" }} />

                    <input type="number" placeholder="Enter salary" value={salary} onChange={(e) => setSalary(e.target.value)}
                        style={{ padding: "10px", border: "1px solid #ccc", borderRadius: "6px" }} />

                    <input type="text" placeholder="Enter uid" value={uid} onChange={(e) => setuid(e.target.value)}
                        style={{ padding: "10px", border: "1px solid #ccc", borderRadius: "6px" }} />

                    <label style={{ fontWeight: "500" }}>Upload Profile Image</label>
                    <input type="file" accept="image/*" onChange={handleimg} style={{ padding: "8px 0" }} />
                </div>

                {/* Submit Button */}
                <div style={{ display: "flex", justifyContent: "center", marginTop: "20px", width: "100%" }}>
                    <button type="submit"
                        style={{ padding: "12px 30px", background: "#007bff", color: "white", border: "none", borderRadius: "6px", cursor: "pointer", fontWeight: "500", fontSize: "16px" }}>
                        Update
                    </button>
                </div>
            </form>
        </div>
    )
}

export default UpdateEmp
