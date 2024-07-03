import React from 'react';

const CareerForm = () => {
  return (
    <form action="#" className="career-form mb-60">
      <div className="row">
        <div className="col-md-6 col-lg-3 my-3 ">
          <div className="input-group position-relative">
            <input type="text" className="form-control text-dark bg-light" placeholder="Enter Your Keywords" id="keywords" />
          </div>
        </div>
        <div className="col-md-6 col-lg-3 my-3">
          <div className="select-container">
            <select className="custom-select bg-light ">
              <option selected>Location</option>
              <option value="1">Jaipur</option>
              <option value="2">Pune</option>
              <option value="3">Bangalore</option>
            </select>
          </div>
        </div>
        <div className="col-md-6 col-lg-3 my-3">
          <div className="select-container">
            <select className="custom-select bg-light ">
              <option selected>Select Job Type</option>
              <option value="1">Ui designer</option>
              <option value="2">JS developer</option>
              <option value="3">Web developer</option>
            </select>
          </div>
        </div>
        <div className="col-md-6 col-lg-3 my-3">
          <button type="button" className="btn btn-lg btn-block btn-light btn-custom" id="contact-submit">
            Search
          </button>
        </div>
      </div>
    </form>
  );
};

export default CareerForm;
