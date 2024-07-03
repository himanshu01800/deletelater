import React, { useEffect, useState } from 'react'
import './Check.css'
import axios from "axios";

const Check = () => {
    const [User, setUser] = useState([]);
    const [id, setId] = useState();
    const [firstName, setFirstName] = useState();
    const [lastName, setLastName] = useState();
    const [password, setPassword] = useState();
    const [dateOfBirth, setdateOfBirth] = useState();
    const [countryCode, setCountryCode] = useState();
    const [phone, setPhone] = useState();
    const [address, setAddress] = useState();
    const [email, setEmail] = useState();
    const [btnchange, setBtnchange] = useState("Submit");

    useEffect(() => {
        fetchData();
    }, []);

    const fetchData = () => {
        axios.get('https://localhost:7278/api/User')
            .then((response) => {
                setUser(response.data);
            });
    }

    const AddCheck = (event) => {
        event.preventDefault();
        if (btnchange === "Submit") {
            axios.post('https://localhost:7278/api/User', {
                firstName, lastName, dateOfBirth, address, countryCode, password, phone, email
            }).then(result => {
                fetchData();
                alert("Data Added")
            }).catch(error => {
                console.log(error)
            })
        } else {
            axios.put('https://localhost:7278/api/User/', {
                firstName, lastName, dateOfBirth, address, countryCode, password, phone, email, id
            }).then(result => {
                fetchData();
                alert("Data Updated")
            }).catch(error => {
                console.log(error)
            })
        }
    }

    const DeleteData = (id) => {
        axios.delete(`https://localhost:7278/api/User?id=${id}`)
            .then((res) => {
                console.log(res);
                fetchData();
            })
            .catch((error) => {
                console.log(error);
            });
    }

    const EditData = (dataedit) => {
        setFirstName(dataedit.firstName);
        setLastName(dataedit.lastName);
        setPassword(dataedit.password);
        setCountryCode(dataedit.countryCode);
        setPhone(dataedit.phone);
        setAddress(dataedit.address);
        setEmail(dataedit.email);
        setId(dataedit.id);
        setdateOfBirth(dataedit.dateOfBirth);
        setBtnchange("SaveChange")
    }

    return (
        <>
            <div className='CBOX ' >
                <form onSubmit={AddCheck}>
                    <div>
                        <input type="text" name="Firstname" value={firstName} onChange={(e) => setFirstName(e.target.value)} className="form-control clo" placeholder="First Name" id="firstName" />
                    </div>
                    <div className="col-12 ">
                        <input type="text" name="Lastname" value={lastName} onChange={(e) => setLastName(e.target.value)} className="form-control" placeholder="Last Name" id="lastName" />
                    </div>
                    <div className="col-12 mt-2">
                        <input type="text" name="Email" value={email} onChange={(e) => setEmail(e.target.value)} className="form-control" placeholder="Email" id="email" />
                    </div>
                    <div className="col-12 mt-2">
                        <input type="text" name="DateOfBirth" value={dateOfBirth} onChange={(e) => setdateOfBirth(e.target.value)} className="form-control" placeholder="Date of Birth" id="Dob" />
                    </div>
                    <div className="col-12 mt-2">
                        <input type="text" name="Password" value={password} onChange={(e) => setPassword(e.target.value)} className="form-control" placeholder="Password" id="password" />
                    </div>
                    <div className="col-4 mt-2">
                        <select name="CountryCode" value={countryCode} onChange={(e) => setCountryCode(e.target.value)} className="form-select" aria-label="Default select example">
                            <option value="">Country Code</option>
                            <option value="+91">+91</option>
                            <option value="+01">+01</option>
                            <option value="+95">+95</option>
                        </select>
                    </div>
                    <div className="col-8 mt-2">
                        <input type="text" name="Phonenumber" value={phone} onChange={(e) => setPhone(e.target.value)} className="form-control" placeholder="Phone" id="phone" />
                    </div>
                    <div className="col-12 mt-2">
                        <input type="text" name="Address" value={address} onChange={(e) => setAddress(e.target.value)} className="form-control p-4" placeholder="Address" id="address" />
                    </div>
                    <div className="mt-2">
                        <input className="btn btn-primary" value={btnchange} type="submit" />
                    </div>
                </form>
            </div>
            <div>
                <table className="table">
                    <thead>
                        <tr className='d-flex'>
                            <th>Id</th>
                            <th>Firstname</th>
                            <th>Lastname</th>
                            <th>DateOfBirth</th>
                            <th>Address</th>
                            <th>CountryCODE</th>
                            <th>Phone</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            User.map((val) => {
                                return (
                                    <tr key={val.id} className='d-flex'>
                                        <td>{val.id}</td>
                                        <td>{val.firstName}</td>
                                        <td>{val.lastName}</td>
                                        <td>{val.dateOfBirth}</td>
                                        <td>{val.address}</td>
                                        <td>{val.countryCode}</td>
                                        <td>{val.phone}</td>
                                        <td>
                                            <button className='bg-primary rounded-3 mb-1' onClick={() => EditData(val)}>Edit</button>
                                            <button className='bg-primary rounded-3' onClick={() => DeleteData(val.id)}>Delete</button>
                                        </td>
                                    </tr>
                                )
                            })
                        }
                    </tbody>
                </table>
            </div>
        </>
    )
}

export default Check;
