import React from 'react'
import './ContactUs.css'  
const ContactUs = () => {

      return (
        <div className="container-fluid vh-100 d-flex flex-column align-items-center justify-content-center  Conta ">
          <div className="row  mm ">
            <div className="col-md-5  rounded-2  ">
              <h4>Get in touch</h4>
              <div className="mb-3">
                <label htmlFor="formGroupExampleInput" className="form-label">Name</label>
                <input type="text" className="form-control" id="formGroupExampleInput" placeholder="Enter your name" />
              </div>
              <div className="mb-3">
                <label htmlFor="formGroupExampleInput2" className="form-label">Email</label>
                <input type="text" className="form-control" id="formGroupExampleInput2" placeholder="Enter your email" />
              </div>
              <div className="mb-3">
                <label htmlFor="formGroupExampleInput3" className="form-label">Contact Number</label>
                <input type="text" className="form-control" id="formGroupExampleInput3" placeholder="Enter your number" />
              </div>
              <div className="mb-3">
                <label htmlFor="exampleFormControlTextarea1" className="form-label">Message</label>
                <textarea className="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
              </div>
              <button className="btn btn-primary">Submit</button>
            </div>
            <div className="col-md-6 bg-primary p-4 text-white rounded-3 dis">
          <h4>Contact us</h4>
          <hr />
          <div className="mt-4">
            <div className="d-flex mb-3 align-items-center">
              <i className="bi bi-geo-alt-fill me-2 ms-4"></i>
              <p className="mb-0">Address: 198 West 21th Street, Suite 721 New York NY 10016</p>
            </div>
            <hr />
            <div className="d-flex mb-3 align-items-center">
              <i className="bi bi-telephone-fill me-2 ms-4"></i>
              <p className="mb-0">Contact: 8888888888</p>
            </div>
            <hr />
            <div className="d-flex mb-3 align-items-center">
              <i className="bi bi-envelope-fill me-2 ms-4"></i>
              <p className="mb-0">Email: Contact@gmail.com</p>
            </div>
            <hr />
            <div className="d-flex mb-3 align-items-center">
              <i className="bi bi-browser-chrome me-2 ms-4"></i>
              <p className="mb-0">Website: www.contact.com</p>
            </div>
            <hr />
          </div>
        </div>
      </div>
        </div>
      );
    };
    
    export default ContactUs;
    
       
