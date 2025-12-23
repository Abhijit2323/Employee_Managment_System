import axios from "axios";
import React, { useEffect, useState } from "react";

function ViewLeaveDetails() {
  const [getleaves, setGetLeaves] = useState([]);
  const [id, setid] = useState("");
  const [employeeName, setEmployeeName] = useState("");
  const [fromDate, setFromDate] = useState("");
  const [toDate, setToDate] = useState("");
  const [reason, setReason] = useState("");
  const [show, setShow] = useState(false)

  const user = JSON.parse(localStorage.getItem("userdetails"));
  //const app = "http://13.204.76.242:8080/EmployeeManagementSystem-0.0.1-SNAPSHOT";

  const deleteleave = (leaveid) => {
    axios.delete("http://localhost:8080/cancelleave/" + leaveid)
      .then((resp) => {
        if (resp.data === "Leave Cancelled Successfully") {
          alert("Leave Cancelled Successfully ✅")
          setGetLeaves(getleaves.filter((leave) => leave.id != leaveid))
        }
      })
      .catch((error) => {
        console.log(error);
        alert("Leave delete operation failed ❌")
      })
  }

  const showupdate = (leave) => {
    setShow(true);
    setid(leave.id);
    setEmployeeName(leave.employeeName);
    setFromDate(leave.fromDate)
    setToDate(leave.toDate)
    setReason(leave.reason)
  }

  const updateleave = (e) => {
    e.preventDefault();
    const newdata = {
      id, employeeName, fromDate, toDate, reason
    }
    axios.put("http://locahost:8080/updateleave/${id}", newdata).then((resp) => {
      if (resp.data === "Leave application Updated Successfully.") {
        alert("leave upated sucessfully ✅")
        setShow(false)
      }
    })
      .catch((error) => {
        console.log(error);
        alert("Update opeation failed ❌")
      })

  }


  useEffect(() => {
    axios
      .get("http://localhost:8080/findleavebyempid/" + user.empid)
      .then((resp) => setGetLeaves(resp.data))
      .catch((error) => {
        console.log(error);
        alert("Failed to get leaves ❌");
      });
  }, [user.empid, updateleave]);

  return (
    <div className="d-flex justify-content-center align-items-start vh-100 bg-light pt-5">
      <div className="bg-white shadow-lg rounded-4 p-4 w-75">
        <h3 className="mb-4 text-center text-primary">My Leave Details</h3>

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
              {getleaves.length > 0 ? (
                getleaves.map((leave, index) => (
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
                      <button className="btn btn-sm btn-info me-2" onClick={() => showupdate(leave)}>
                        Edit
                      </button>
                      <button className="btn btn-sm btn-danger" onClick={() => deleteleave(leave.id)}>Delete</button>
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

          {
            (show ? <div className="d-flex justify-content-center align-items-center vh-100 bg-light">
              <form
                onSubmit={updateleave}
                className="bg-white shadow-lg rounded-4 p-4 w-50"
              >
                <h3 className="mb-4 text-center text-primary">Leave Application</h3>

                <div className="mb-3">
                  <label className="form-label">leave ID</label>
                  <input
                    type="number"
                    className="form-control"
                    value={id}
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
                  Update Leave
                </button>
                <button className="btn btn-primary w-50" style={{ marginTop: 10 }} onClick={() => setShow(false)}>Back</button>
              </form>
            </div> : null)
          }
        </div>
      </div>
    </div>
  );
}

export default ViewLeaveDetails;
