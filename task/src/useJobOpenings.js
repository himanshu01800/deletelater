// useJobOpenings.js
import { useState, useEffect } from 'react';

const useJobOpenings = () => {
  const [jobOpenings, setJobOpenings] = useState([]);

  useEffect(() => {
    const staticJobOpenings = [
      {
        id: 1,
        position: 'Software Engineer',
        experienceRequired: '3+ years',
        noticePeriod: '45 days'
      },
      {
        id: 2,
        position: 'Product Manager',
        experienceRequired: '5+ years',
        noticePeriod: '45 days'
      },
      {
        id: 3,
        position: 'UI/UX Designer',
        experienceRequired: '2+ years',
        noticePeriod: '45 days'
      },
      {
        id: 4,
        position: 'DevOps Engineer',
        experienceRequired: '4+ years',
        noticePeriod: '45 days'
      },
      {
        id: 5,
        position: 'Data Scientist',
        experienceRequired: '3+ years',
        noticePeriod: '45 days'
      }
    ];
    
    setJobOpenings(staticJobOpenings);
  }, []);

  return jobOpenings;
};

export default useJobOpenings;
