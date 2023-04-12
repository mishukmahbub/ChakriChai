import React, { useEffect, useState } from 'react';
import { getShoppingCart } from '../utilities/fakedb';
import { useLoaderData } from 'react-router-dom';
import AppliedCard from './AppliedCard';

const Applied = () => {
    const jobDetails = useLoaderData();
    // console.log(jobDetails);
    const getAppliedJobs = getShoppingCart()
    // console.log(getAppliedJobs);

    const [jobs, setJobs] = useState([]);
    useEffect(() => {
        let jobsArr = []
        for (const id in getAppliedJobs) {
            // console.log(id);
            const appliedJob = jobDetails.find(job => job.id === id)
            // console.log(appliedJob);
            jobsArr.push(appliedJob)
        }
        setJobs(jobsArr)
    }, [])
    // console.log(jobs);
    return (
        <div className='px-24 py-32'>
            {
                jobs.map(job => <AppliedCard
                    key={job.id}
                    job={job}                
                />)
            }
        </div>
    );
};

export default Applied;