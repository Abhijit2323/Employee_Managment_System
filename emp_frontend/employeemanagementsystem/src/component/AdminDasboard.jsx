import { Link, Outlet } from 'react-router-dom';

function AdminDasboard() {
     const logout=()=>{
        localStorage.removeItem("userdetails")
    }
    return (
        <div>
            <nav className="navbar navbar-expand-lg bg-primary">
                <div className="container-fluid d-flex justify-content-between align-items-center">
                    {/* Left Side: Logo and EMS */}
                    <Link
                        to={'home'}
                        className="d-flex align-items-center"
                        style={{ color: "white", textDecoration: "none" }}
                    >
                        <img src="./img/Logo.png" alt="Logo" style={{ height: "50px", marginRight: "10px" }} />
                        <h2 className="mb-0">EMS</h2>
                    </Link>

                    {/* Right Side: Navbar links */}
                    <div className="collapse navbar-collapse justify-content-end" id="navbarSupportedContent">
                        <ul className="navbar-nav mb-2 mb-lg-0 d-flex align-items-center">
                            <li className="nav-item">
                                <Link className="nav-link text-white" to={'getemp'}>Get Employee</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link text-white" to={'addemp'}>Add Employee</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link text-white" to={'about'}>About</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link text-white" to={'contact'}>Contact</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link text-white" to={'issueleave'}>Leave Applications</Link>
                            </li>
                            <li className="nav-item">
                                <Link to={'/'}>
                                    <button className="btn btn-danger ms-3" onClick={logout}>Sign Out</button>
                                </Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>

            <Outlet />
        </div>
    );
}

export default AdminDasboard;
