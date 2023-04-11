import React, { useEffect, useState } from 'react';
import { useLoaderData, useParams } from 'react-router-dom';

const JobDetails = () => {
    const id = useParams();
    const jobDetails = useLoaderData();
    const [details, setDetails] = useState({});
    useEffect(() => {
        const job = jobDetails.find(job => job.id === id.jobId)
        setDetails(job)
    }, []);
    console.log(details);
    return (
        <div className='grid grid-cols-3'>
            <div className='col-span-2'>
                <p><span className='font-bold'>Job Description: </span>{details.jobDesc}</p>
                <br />
                <p><span className='font-bold'>Job Responsibility: </span>{details.jobResponsibility}</p>
                <br />
                <p><span className='font-bold'>Educational Requirements: </span><br />{details.education}</p>
                <br />
                <p><span className='font-bold'>Experiences: </span><br />
                    {details.experience}</p>
                <br />
            </div>
            <div>
                <h3 className='font-bold'>Job Details</h3>

            </div>
        </div>
    );
};

export default JobDetails;