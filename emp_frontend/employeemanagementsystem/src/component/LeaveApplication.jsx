import axios from "axios";
import React, { useState, useEffect } from "react";

function LeaveApplication() {
  const [empid, setEmpid] = useState("");
  const [employeeName, setEmployeeName] = useState("");
  const [fromDate, setFromDate] = useState("");
  const [toDate, setToDate] = useState("");
  const [reason, setReason] = useState("");
  //const app = "http://13.204.76.242:8080/EmployeeManagementSystem-0.0.1-SNAPSHOT";

  useEffect(() => {
    let user = JSON.parse(localStorage.getItem("userdetails"));
    console.log(user);

    if (user) {
      setEmpid(user.empid);
      setEmployeeName(user.firstname + " " + user.lastname);
    }
  }, []);

  const applyForLeave = (e) => {
    e.preventDefault();

    const leaveData = { empid, employeeName, fromDate, toDate, reason };
    axios
      .post("http://localhost:8080/applyforleave", leaveData)
      .then((resp) => {
        if (resp.data === "Apply for the leave sucessfully") {
          alert("Leave Applied Successfully ✅");
        }
      })
      .catch((error) => {
        alert("Failed to Apply Leave ❌");
        console.log(error);
      });
  };


  return (
    <div className="d-flex justify-content-center align-items-center vh-100 bg-light">
      <form
        onSubmit={applyForLeave}
        className="bg-white shadow-lg rounded-4 p-4 w-50"
      >
        <h3 className="mb-4 text-center text-primary">Leave Application</h3>

        {/* Employee ID */}
        <div className="mb-3">
          <label className="form-label">Employee ID</label>
          <input
            type="number"
            className="form-control"
            value={empid}
            readOnly
          />
        </div>

        {/* Employee Name */}
        <div className="mb-3">
          <label className="form-label">Employee Name</label>
          <input type="text" className="form-control" value={employeeName} readOnly />
        </div>

        <div className="row">
          {/* From Date */}
          <div className="col-md-6 mb-3">
            <label className="form-label">From Date</label>
            <input
              type="date"
              className="form-control"
              value={fromDate}
              onChange={(e) => setFromDate(e.target.value)}
              required
            />
          </div>

          {/* To Date */}
          <div className="col-md-6 mb-3">
            <label className="form-label">To Date</label>
            <input
              type="date"
              className="form-control"
              value={toDate}
              onChange={(e) => setToDate(e.target.value)}
              required
            />
          </div>
        </div>

        {/* Reason */}
        <div className="mb-4">
          <label className="form-label">Reason</label>
          <textarea
            className="form-control"
            rows="3"
            value={reason}
            onChange={(e) => setReason(e.target.value)}
            placeholder="Enter reason for leave..."
            required
          ></textarea>
        </div>

        {/* Submit Button */}
        <button type="submit" className="btn btn-success w-100">
          Apply Leave
        </button>
      </form>
    </div>
  );
}

export default LeaveApplication;
