import React from 'react'
import './Navbar.css'
import { Navigate, Outlet, useNavigate} from 'react-router-dom'
import Home from './Home';
import { jwtDecode } from 'jwt-decode';
const Navbar = () => {

   const token=localStorage.getItem("accessToken");
   var data=jwtDecode(token);
   const role=data['http://schemas.microsoft.com/ws/2008/06/identity/claims/role'];
    const firstName=data['http://schemas.xmlsoap.org/ws/2005/05/identity/claims/name']



let nav=useNavigate();

const handleLogout=()=>{
   localStorage.removeItem("accessToken");
   window.location.reload();

}
    const handleHome=()=>{
       nav('/Home')
    }
    const handleCarrer=()=>{
        nav('/Carrer')
     }
     const handleContact=()=>{
        nav('/ContactUs')
     }
     const handleServices=()=>{
        nav('/Services')
     }

     const handleCheck =()=>{
      nav('/Check')
     }
     const handleLogin=()=>{
      nav('/Login')
     }

  return (
   <>
    <div className='Box1' >
        <div className='Box2'>
        <ul>
            <li onClick={handleHome}>Home</li>
            <li onClick={handleCarrer}>Carrer</li>
            <li onClick={handleContact}>ContactUs</li>
            <li  onClick={handleCheck}>Check</li>
            
        </ul>
        </div>
        <div className='Box3'>
        <button onClick={handleLogout}>Logout</button>
        <i class=" bi-person "></i>
        </div>
     
    </div>
   
    <Outlet/>
    
    </>
    
  )
}

export default Navbar