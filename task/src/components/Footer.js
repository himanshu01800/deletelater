import React from 'react'
import './Footer.css'
const Footer = () => {
  return (
    <footer className="bg-dark text-white text-center py-3">
    <div className="container">
      <p className="mb-0">© 2024 Your Company. All rights reserved.</p>
      <p className="mb-0">Follow us on 
        <a href="https://www.facebook.com" className="text-white mx-2">Facebook</a>, 
        <a href="https://www.twitter.com" className="text-white mx-2">Twitter</a>, and 
        <a href="https://www.instagram.com" className="text-white mx-2">Instagram</a>
      </p>
    </div>
  </footer>
  )
}

export default Footer