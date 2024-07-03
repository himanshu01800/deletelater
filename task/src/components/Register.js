import React, { useEffect, useState } from 'react'
import reg from '../images/reg.jpg'
import './Register.css'
import axios from 'axios'
import {  useNavigate } from 'react-router-dom'


const Register = () => {
  const [message,setmessage]=useState("");
  const [color,setColor]=useState(false);
  const nav=useNavigate();
   const [User,setUser]=useState({
    firstName: '',
    lastName: '',
    email: '',
    password: '',
    dateOfBirth: '',
    countryCode:'',
    phone:'',
    address: ''
   })

  
   const handleChange=(e)=>{
     const {name,value}=e.target;
     setUser((prevData)=>({
      ...prevData,
      [name]:value
     }))
   }


   const handleSubmit = async () => {
    console.log(User);
    try {
      const response = await axios.post('https://localhost:7278/api/User', User, {
        headers: {
          'Content-Type': 'application/json',
        }
      });
      console.log("ok done ", response.data);
      setColor(false);
      setmessage("Registration successful");
      nav('/login')
    } catch (error) {
      if (error.response && error.response.status === 400) {
        setColor(true);
        setmessage("Email already registered");
      } else {
        setColor(true);
        console.error("Error:", error);
        setmessage("An error occurred. Please try again.");
      }
    }
  }

  return (
          <div className="container-fluid vh-100 d-flex   Regi">
          <div className="row " >
            <div className="col-1"></div>
          <div className="col-5 h-100 bg-light align-content-center justify-content-center  Regimg">
          <img src={reg} className="img-fluid" alt="Responsive image" />
          </div>
          <div className="col-5 h-100 bg-light ms-5">
          <div className="container mt-2 px-5">
          <h2 className='text-center'>Register</h2>
          <div className="row mt-3">
          <div className="col-6">
          <input type="text"  name="firstName" value={User.firstName} onChange={handleChange} class="form-control clo" placeholder="First Name" id="firstName"/>
          </div>
          <div class="col-6">
          <input type="text"  name="lastName" value ={User.lastName} onChange={handleChange} class="form-control" placeholder="Last Name" id="lastName"/>
          </div>
         <div className="col-12  mt-2">
         <input type="text" name="email"   value={User.email} onChange={handleChange} class="form-control" placeholder="Email" id="email"/>
         </div>

         <div className="col-12  mt-2">
         <input type="text" name="dateOfBirth"  value={User.dateOfBirth} onChange={handleChange}class="form-control" placeholder="Date of Birth" id="dateOfBirth"/>
         </div>
         <div className="col-12  mt-2">
         <input type="password" name="password" value={User.password} onChange={handleChange} class="form-control" placeholder="Password" id="password"/>
         </div>
        <div className="col-4 mt-2">
        <select  name ="countryCode" value={User.countryCode}onChange={handleChange} class="form-select" aria-label="Default select example">
         <option selected>Countey Code</option>
         <option value="+91">+91</option>
         <option value="+01">+01</option>
         <option value="+95">+95</option>
        </select>
        </div>
         <div className="col-8 mt-2">
    <input type="text"  name="phone" value={User.phone}  onChange={handleChange} class="form-control" placeholder="Phone" id="phone"/>
         </div>
         <div className="col-12  mt-2">
         <input type="text" name="address" value={User.address} onChange={handleChange} class="form-control p-4" placeholder="Address" id="adress"/>
         </div>
        <div className="mt-2">
        <button class="btn btn-primary " onClick={handleSubmit}  type="submit">Register</button>
        <p className="mt-2 text-center  ">or</p>
        <div>
          <p className='d-flex justify-content-center ' onClick={()=>{nav('/login')}}>Already Have an Account? Login</p>
        </div>
        </div>
         <p className={`d-flex justify-content-center pt-2 danger fs-3 ${ color ? 'text-danger':'text-success'} `}>{message}</p>

          </div>
          </div>
          </div>
          </div>
          </div>
  )
}

export default Register