
import './Carrer.css'


import CareerForm from './CareerForm';
import JobList from './JobList';

const Carrer = () => {
 
  
  
  return (
    <div className="container carr">
     

      <div className="row  mt-4 ">
        <div className="col-lg-10 mx-auto">
          <div className="career-search mb-60">
            <CareerForm />
            <JobList/>
           
          </div>
        </div>
      </div>
    </div>

      

  )
}

export default Carrer