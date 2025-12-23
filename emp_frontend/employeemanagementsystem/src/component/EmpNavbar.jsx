import React from 'react';
import { NavLink, Outlet } from 'react-router-dom';

function EmpNavbar() {
    const logout=()=>{
        localStorage.removeItem("userdetails")
    }
    return (
        <div>
            <nav className="navbar navbar-expand-lg navbar-warning bg-primary">
                <div className="container-fluid d-flex justify-content-between align-items-center">
                    {/* Logo on the left */}
                    <NavLink to={'home'} style={{ color: "white", textDecoration: "none",display:'flex' }}>
                        <img src="./img/Logo.png" alt="Logo" style={{ height: "50px", marginRight: "10px" }} />
                        <h1>EMS</h1>
                    </NavLink>

                    {/* Navbar links on the right */}
                    <div className="collapse navbar-collapse justify-content-end" id="navbarSupportedContent">
                        <ul className="navbar-nav d-flex flex-row align-items-center">
                            <li className="nav-item mx-2">
                                <NavLink style={{ color: "white", textDecoration: "none" }} to={'empdashboard'}>Emp Dashboard</NavLink>
                            </li>
                            <li className="nav-item mx-2">
                                <NavLink style={{ color: "white", textDecoration: "none" }} to={'about'}>About</NavLink>
                            </li>
                            <li className="nav-item mx-2">
                                <NavLink style={{ color: "white", textDecoration: "none" }} to={'contact'}>Contact</NavLink>
                            </li>
                            <li className="nav-item mx-2">
                                <NavLink style={{ color: "white", textDecoration: "none" }} to={'applyleave'}>Apply leave</NavLink>
                            </li>
                            <li className="nav-item mx-2">
                                <NavLink style={{ color: "white", textDecoration: "none" }} to={'leavedetails'}>Leave Details</NavLink>
                            </li>
                            
                            <li className="nav-item mx-2">
                                <NavLink to={'/'}>
                                    <button className='btn btn-danger' onClick={logout}>Sign Out</button>
                                </NavLink>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
            <Outlet />
        </div>
    );
}

export default EmpNavbar;
