  import React from 'react';
  import './App.css';
  import {  Route, Routes } from 'react-router-dom'
  import AddEmployee from './component/AddEmployee';
  import GetEmpData from './component/GetEmpData';
  import AdminDasboard from './component/AdminDasboard';
  import UpdateEmp from './component/UpdateEmp';
  import Login from './component/Login';
  import Register from './component/Register';
  import Home from './component/Home';
  import EmployeeDashboard from './component/EmployeeDashboard';
  import EmpNavbar from './component/EmpNavbar';
  import About from './component/About';
  import ContactUs from './component/ContactUs';
import LeaveApplication from './component/LeaveApplication';
import ViewLeaveDetails from './component/ViewLeaveDetails';
import IssueLeave from './component/IssueLeave';

  function App() {
    return (
      <div>
        <Routes>
          <Route path={'/'} element={<Login />}></Route>
          <Route path={'/register'} element={<Register />}></Route>
          <Route path='/employee' element={<EmpNavbar />}>
            <Route index element={<Home />} />              {/* default page */}
            <Route path='home' element={<Home />} />
            <Route path='empdashboard' element={<EmployeeDashboard />} />
            <Route path='about' element={<About/>}/>
            <Route path='contact' element={<ContactUs/>}/>
            <Route path='applyleave' element={<LeaveApplication/>}/>
            <Route path='leavedetails' element={<ViewLeaveDetails/>}/>
          </Route>
          <Route path={'/admindashboard'} element={<AdminDasboard />}>       {/* index is used to make the page default */}
            <Route index element={<Home />} />
            <Route path={'home'} element={<Home />}></Route>
            <Route path={'addemp'} element={<AddEmployee />}></Route>
            <Route path={'getemp'} element={<GetEmpData />}></Route>
            <Route path={'about'} element={<About />}></Route>
            <Route path={'contact'} element={<ContactUs />}></Route>
            <Route path={'updateemp/:eid'} element={<UpdateEmp />}></Route>
            <Route path={'issueleave'} element={<IssueLeave/>}/>
          </Route>
        </Routes>
      </div>
    );
  }

  export default App;
