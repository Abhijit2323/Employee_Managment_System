import axios from "axios";
import { useNavigate } from "react-router-dom";

function EmpCard({ employee, setData, data }) {
  const navigate = useNavigate();
  // const app = "http://13.204.76.242:8080/EmployeeManagementSystem-0.0.1-SNAPSHOT";

  const deleteData = (eid) => {
    axios
      .delete("http://localhost:8080/deleteempbyid/${eid}")
      .then((resp) => {
        if (resp.data === "Record Deleted Sucessfully ..") {
          alert("Record Deleted Successfully ✅");
          setData((prev) => prev.filter((emp) => emp.eid !== eid));
        } else {
          alert("Delete Operation Failed ❌");
        }
      });
  };

  return (
    <div className="card col-4" style={{ width: "18rem", boxShadow: "0 4px 12px rgba(0,0,0,0.3)" }}>
      <img
        src={process.env.PUBLIC_URL + employee.image} // ✅ Correct path for public folder
        className="card-img-top mx-auto my-3"
        alt="employeeimage"
        style={{ height: "200px", width: "100%", objectFit: "cover", backgroundColor: "#E8E5E0" }}
      />
      <div className="card-body">
        <h5 className="card-title mb-2">Employee Info</h5>
        <p className="card-text mb-1">Name: {employee.firstname}</p>
        <p className="card-text mb-1">Email: {employee.email}</p>
        <p className="card-text mb-1">Contact: {employee.contactno}</p>
        <div className="d-flex justify-content-center gap-2">
          <button
            className="btn btn-success w-100"
            onClick={() => navigate(`/admindashboard/updateemp/${employee.eid}`)}
          >
            Update
          </button>
          <button className="btn btn-danger w-100" onClick={() => deleteData(employee.eid)}>
            Delete
          </button>
        </div>
      </div>
    </div>
  );
}

export default EmpCard;
