import React from 'react';
import JobItem from './JobItem';

const jobs = [
  {
    title: "Front End Developer",
    location: "Los Angeles",
    salary: "2500-3500/pm",
    type: "Full Time",
    icon: "FD"
  },
  {
    title: "Ui/Ux Developer",
    location: "Los Angeles",
    salary: "2500-3500/pm",
    type: "Full Time",
    icon: "UX"
  },
  {
    title: "Graphic Designer",
    location: "Los Angeles",
    salary: "2500-3500/pm",
    type: "Full Time",
    icon: "GD"
  },
  {
    title: "Javascript Developer",
    location: "Los Angeles",
    salary: "2500-3500/pm",
    type: "Full Time",
    icon: "JS"
  }
];

const JobList = () => {
  return (
    <div className="filter-result">
      <p className="mb-30 ff-montserrat">Total Job Openings : 89</p>
      {jobs.map((job, index) => (
        <JobItem key={index} job={job} />
      ))}
    </div>
  );
};

export default JobList;
