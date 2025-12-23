import axios from 'axios'
import React, { useEffect, useState } from 'react'
//const app = "http://13.204.76.242:8080/EmployeeManagementSystem-0.0.1-SNAPSHOT";
function IssueLeave() {
    const [leaves, setleaves] = useState([])

    const approveLeave = (id, action) => {
        axios.put("http://localhost:8080/updatestatus/${id}/${action}")
            .then((resp) => {
                if (resp) {
                    alert("Leave Status Updated Sucessfully ✅");
                    fetchleaves();
                }
            })
            .catch((error) => {
                alert(error)
            })
    }
    useEffect(() => {

        fetchleaves();
    }, [])
    const fetchleaves = () => {
        axios.get("http:localhost:8080/findallleaves").then((resp) => setleaves(resp.data)).catch((error) => alert("Failed to get leaves data ❌"))
    }
    return (
        <div className="d-flex justify-content-center align-items-start vh-100 bg-light pt-5">
            <div className="bg-white shadow-lg rounded-4 p-4 w-75">
                <h3 className="mb-4 text-center text-primary">Leave Applications</h3>

                <div className="table-responsive">
                    <table className="table table-bordered table-hover text-center align-middle">
                        <thead className="table-primary">
                            <tr>
                                <th>Emp ID</th>
                                <th>Employee Name</th>
                                <th>From Date</th>
                                <th>To Date</th>
                                <th>Reason</th>
                                <th>Status</th>
                                <th>Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            {leaves.length > 0 ? (
                                leaves.map((leave, index) => (
                                    <tr key={index}>
                                        <td>{leave.empid}</td>
                                        <td>{leave.employeeName}</td>
                                        <td>{leave.fromDate}</td>
                                        <td>{leave.toDate}</td>
                                        <td>{leave.reason}</td>
                                        <td>
                                            <span>
                                                {leave.status}
                                            </span>
                                        </td>
                                        <td>
                                            <button className="btn btn-sm btn-info me-2"
                                                onClick={() => approveLeave(leave.id, "Approved")}>
                                                Approve
                                            </button>
                                            <button className="btn btn-sm btn-danger" onClick={() => approveLeave(leave.id, "Rejected")}>Reject</button>
                                        </td>
                                    </tr>
                                ))
                            ) : (
                                <tr>
                                    <td colSpan="7" className="text-muted">
                                        No leave records found
                                    </td>
                                </tr>
                            )}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    )
}

export default IssueLeave
