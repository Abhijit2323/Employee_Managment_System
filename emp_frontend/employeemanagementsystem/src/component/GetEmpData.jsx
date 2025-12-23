import axios from 'axios';
import React, { useEffect, useState } from 'react'
import EmpCard from './EmpCard';

function GetEmpData() {
    const [data, setData] = useState([]);
    const [allData, setAllData] = useState([]);
    const [searchResult, setSearchResult] = useState([])
    //const app = "http://13.204.76.242:8080/EmployeeManagementSystem-0.0.1-SNAPSHOT";

    let [firstname, setFirstname] = useState('')
    let [lastname, setLastname] = useState('')
    let [designation, setDesignation] = useState('')
    let [dept, setDept] = useState('')

    const fetchData = () => {
        axios.get("http://localhost:8080/findallemp")
            .then((resp) => {
                setData(resp.data);
                setAllData(resp.data);
            })
            .catch((error) => console.log(error));
    }

    useEffect(() => {
        fetchData();
    }, [])

    const filterEmp = (e, field) => {
        const value = e.target.value
        if (value === '') {
            setData(allData)
        } else {
            const filteredData = allData.filter((employee) => {
                return employee[field] && employee[field].toLowerCase().includes(value.toLowerCase())
            });
            setData(filteredData)
        }
    }

    const searchByFisrtname = () => {
        axios.get("http://localhos:8080/getbyfirstname/${firstname}")
            .then((resp) => setSearchResult(resp.data))
            .catch((error) => {
                alert("Error in search")
            })
    }
    const searchByLastname = () => {
        axios.get("http://localhost:8080/getbyfirstname/${lastname}")
            .then((resp) => setSearchResult(resp.data))
            .catch((error) => {
                alert("Error in search")
            })
    }
    const searchByDept = () => {
        axios.get("http://localhost:8080/getbydept/${dept}")
            .then((resp) => setSearchResult(resp.data))
            .catch((error) => {
                alert("Error in search")
            })
    }
    const searchByDesignation = () => {
        axios.get("http://localhost:8080/getbydesignation/${designation}")
            .then((resp) => setSearchResult(resp.data))
            .catch((error) => {
                alert("Error in search")
            })
    }


    return (
        <div>
            <div className="search container">
                <div className="row" style={{ marginTop: 20 }}>
                    <div className="col-3" style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', gap: 3 }}>
                        <input type="text" placeholder='Enter Employee Firstname' style={{ padding: 5 }} onChange={(e) => setFirstname(e.target.value)} />
                        <input type="submit" value="search" className='btn btn-warning' onClick={searchByFisrtname} />
                    </div>
                    <div className="col-3" style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', gap: 3 }}>
                        <input type="text" placeholder='Enter Employee Name' style={{ padding: 5 }} onChange={(e) => setLastname(e.target.value)} />
                        <input type="submit" value="search" className='btn btn-warning' onClick={searchByLastname} />
                    </div>
                    <div className="col-3" style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', gap: 3 }}>
                        <input type="text" placeholder='Enter Employee Department' style={{ padding: 5 }} onChange={(e) => setDept(e.target.value)} />
                        <input type="submit" value="search" className='btn btn-warning' onClick={searchByDept} />
                    </div>
                    <div className="col-3" style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', gap: 3 }}>
                        <input type="text" placeholder='Enter Employee Designation' style={{ padding: 5 }} onChange={(e) => setDesignation(e.target.value)} />
                        <input type="submit" value="search" className='btn btn-warning' onClick={searchByDesignation} />
                    </div>
                </div>
            </div>
            <div className="container" style={{ "marginTop": 30, "marginBottom": 30 }}>
                <div className="row gap-5">
                    {
                        (searchResult.length > 0 ? searchResult : data).map((employee, idx) => (
                            <EmpCard key={idx} employee={employee} setData={setData} data={data} />
                        ))
                    }
                </div>
            </div>
        </div>
    )
}

export default GetEmpData
