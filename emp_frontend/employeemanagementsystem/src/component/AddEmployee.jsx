import React, { useState } from 'react'
import axios from 'axios'

function AddEmployee() {
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
  //const app = "http://13.204.76.242:8080/EmployeeManagementSystem-0.0.1-SNAPSHOT";
  const validation = () => {
    if (
      firstname === '' ||
      lastname === '' ||
      email === '' ||
      contactno === '' ||
      gender === '' ||
      dob === '' ||
      joiningdate === '' ||
      designation === '' ||
      dept === '' ||
      uid === '' ||
      !image
    ) {
      alert("Please fill all required details")
      return false
    } else if (!/^[A-Za-z]+$/.test(firstname)) {
      alert("Please enter a valid first name")
      return false
    } else if (!/^[A-Za-z]+$/.test(lastname)) {
      alert("Please enter a valid last name")
      return false
    } else if (!/^\S+@\S+\.\S+$/.test(email)) {
      alert("Please enter a valid email id")
      return false
    } else if (!/^\d{10}$/.test(contactno)) {
      alert("Please enter a 10 digit contact number")
      return false
    } else if (exp && exp < 0) {
      alert("Experience cannot be negative")
      return false
    } else if (salary && salary < 0) {
      alert("Salary cannot be negative")
      return false
    }
    return true
  }

  const addData = async (e) => {
    e.preventDefault()
    if (!validation()) return
    const newemp = {
      firstname,
      lastname,
      email,
      contactno,
      gender,
      dob,
      joiningdate,
      designation,
      dept,
      reportingmanager,
      exp,
      salary,
      address,
      uid,
      marriagestatus,
      image
    }

    try {
      const resp = await axios.post("http://localhost:8080/addemployee", newemp)

      if (resp.data === "Employee record added sucessfully") {
        alert("Employee record added successfully")
      } else {
        alert(resp.data)
      }
    } catch (error) {
      console.error("Error adding employee:", error)
      alert("Something went wrong while saving employee")
    }
  }


  let handleimg = (e) => {
    var file = e.target.files[0]
    var filepath = `/img/${file.name}`
    setImage(filepath)
    console.log(filepath);
  }
  return (
    <div>
      <div style={{
        width: "100%",
        minHeight: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        background: "#f0f2f5",
        padding: "40px",
        boxSizing: "border-box"
      }}>
        <form
          onSubmit={addData}
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

            <input type="text" placeholder="Enter first name" onChange={(e) => setFirstName(e.target.value)}
              style={{ padding: "10px", border: "1px solid #ccc", borderRadius: "6px" }} />
            <input type="text" placeholder="Enter last name" onChange={(e) => setLastName(e.target.value)}
              style={{ padding: "10px", border: "1px solid #ccc", borderRadius: "6px" }} />
            <input type="email" placeholder="Enter email" onChange={(e) => setEmail(e.target.value)}
              style={{ padding: "10px", border: "1px solid #ccc", borderRadius: "6px" }} />
            <input type="number" placeholder="Enter contact no." onChange={(e) => setContact(e.target.value)}
              style={{ padding: "10px", border: "1px solid #ccc", borderRadius: "6px" }} />

            <div style={{ display: "flex", gap: "20px", marginTop: "8px" }}>
              <label><input type="radio" name="gender" value="Male" onChange={(e) => setGender(e.target.value)} /> Male</label>
              <label><input type="radio" name="gender" value="Female" onChange={(e) => setGender(e.target.value)} /> Female</label>
            </div>

            <label style={{ fontWeight: "500" }}>Date of birth</label>
            <input type="date" onChange={(e) => setDob(e.target.value)}
              style={{ padding: "10px", border: "1px solid #ccc", borderRadius: "6px" }} />

            <input type="text" placeholder="Enter address" onChange={(e) => setAddress(e.target.value)}
              style={{ padding: "10px", border: "1px solid #ccc", borderRadius: "6px" }} />

            <select onChange={(e) => setMarriageStatus(e.target.value)}
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
            <input type="date" onChange={(e) => setJoiningDate(e.target.value)}
              style={{ padding: "10px", border: "1px solid #ccc", borderRadius: "6px" }} />

            <select onChange={(e) => setDepartment(e.target.value)}
              style={{ padding: "10px", border: "1px solid #ccc", borderRadius: "6px" }}>
              <option>Select Department</option>
              <option value="IT">IT</option>
              <option value="Banking">Banking</option>
              <option value="HR">HR</option>
            </select>

            <select onChange={(e) => setDesignation(e.target.value)}
              style={{ padding: "10px", border: "1px solid #ccc", borderRadius: "6px" }}>
              <option>Select Designation</option>
              <option value="Fresher">Fresher</option>
              <option value="Senior Employee">Senior Employee</option>
              <option value="Helper">Helper</option>
            </select>

            <input type="text" placeholder="Enter reporting manager name" onChange={(e) => setRepostingManager(e.target.value)}
              style={{ padding: "10px", border: "1px solid #ccc", borderRadius: "6px" }} />

            <input type="number" placeholder="Enter experience" onChange={(e) => setExperience(e.target.value)}
              style={{ padding: "10px", border: "1px solid #ccc", borderRadius: "6px" }} />

            <input type="number" placeholder="Enter salary" onChange={(e) => setSalary(e.target.value)}
              style={{ padding: "10px", border: "1px solid #ccc", borderRadius: "6px" }} />

            <input type="text" placeholder="Enter uid" onChange={(e) => setuid(e.target.value)}
              style={{ padding: "10px", border: "1px solid #ccc", borderRadius: "6px" }} />

            <label style={{ fontWeight: "500" }}>Upload Profile Image</label>
            <input type="file" accept="image/*" onChange={handleimg} style={{ padding: "8px 0" }} />
          </div>

          {/* Submit Button */}
          <div style={{ display: "flex", justifyContent: "center", marginTop: "20px", width: "100%" }}>
            <button type="submit"
              style={{ padding: "12px 30px", background: "#007bff", color: "white", border: "none", borderRadius: "6px", cursor: "pointer", fontWeight: "500", fontSize: "16px" }}>
              Submit
            </button>
          </div>
        </form>
      </div>
    </div>

  )
}

export default AddEmployee