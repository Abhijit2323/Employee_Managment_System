import axios from 'axios'
import React, { useEffect, useState } from 'react'

function EmployeeDashboard() {
    const [data, setData] = useState([]);
    //const app = "http://13.204.76.242:8080/EmployeeManagementSystem-0.0.1-SNAPSHOT";

    useEffect(() => {
        axios.get("http://localhost:8080/findallemp")
            .then(resp => setData(resp.data))
            .catch(error => alert("Failed to fetch data"));
    }, []);

    return (
        <div className='container' style={{ marginTop: 30, marginBottom: 30 }}>
            <div className='row gap-5'>
                {data.map((employee, index) => (
                    <div className="card col-4" style={{ width: "18rem", boxShadow: "0 4px 12px rgba(0,0,0,0.3)" }} key={index}>
                        <img
                            src={process.env.PUBLIC_URL + employee.image} // ✅ Use same logic as EmpCard
                            className="card-img-top mx-auto my-3"
                            alt="employeeimage"
                            style={{ height: "200px", width: "100%", objectFit: "cover", backgroundColor: "#E8E5E0" }}
                        />
                        <div className="card-body">
                            <h5 className="card-title mb-2">Employee Info</h5>
                            <p className="card-text mb-1">Name: {employee.firstname}</p>
                            <p className="card-text mb-1">Email: {employee.email}</p>
                            <p className="card-text mb-1">Contact: {employee.contactno}</p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default EmployeeDashboard;
