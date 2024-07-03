import React from 'react';

const JobItem = ({ job }) => {
  return (
    <div className="job-box d-flex align-items-center  mb-4 bg-light  ">
        
          <h5 className="text-center ">{job.title}</h5>
          <ul className="  ">
            <li className="">
              <i className=""></i> {job.location}
            </li>
            <li className="">
              <i className=""></i> {job.salary}
            </li>
            <li className="">
              <i className=""></i> {job.type}
            </li>
          </ul>
       
     
      <div className="">
        <button className='bg-primary rounded-3 p-2 ' >ApplyNow</button>
      </div>
    </div>
  );
};

export default JobItem;
