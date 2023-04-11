import React, { useEffect, useState } from 'react';
import { useLoaderData, useParams } from 'react-router-dom';
import salary from '../assets/Icons/Frame.png'
import title from '../assets/Icons/Frame-1.png'
import phone from '../assets/Icons/Frame-2.png'
import email from '../assets/Icons/Frame-3.png'
import address from '../assets/Icons/Frame-4.png'

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
        <div className='grid grid-cols-3 mx-24 my-32 gap-6'>
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
                <div className='bg-blue-100 p-8 rounded-lg'>
                    <h3 className='font-bold'>Job Details</h3>
                    <br />
                    <hr className='border-t-primary' />
                    <br />
                    <div className='flex gap-2'>
                        <img src={salary} className='h-6' alt="" />
                        <p><span className='font-bold'>Salary:</span> {details.salary} (Per Month)</p>
                    </div>
                    <div className='flex gap-2'>
                        <img src={title} className='h-6' alt="" />
                        <p><span className='font-bold'>Job Title:</span> {details.position}</p>
                    </div>
                    <br />
                    <h3 className='font-bold'>Contact Information</h3>
                    <br />
                    <hr className='border-t-primary' />
                    <br />
                    <div className='flex gap-2'>
                        <img src={phone} className='h-6' alt="" />
                        <p><span className='font-bold'>Phone:</span> {details.phone}</p>
                    </div>
                    <div className='flex gap-2'>
                        <img src={email} className='h-6' alt="" />
                        <p><span className='font-bold'>Email:</span> {details.email}</p>
                    </div>
                    <div className='flex gap-2'>
                        <img src={address} className='h-6' alt="" />
                        <p><span className='font-bold'>Address:</span> {details.address}</p>
                    </div>
                    <br />
                </div>

                <button className='btn btn-primary w-full rounded-lg mt-6'>Apply Now</button>
            </div>
        </div>
    );
};

export default JobDetails;