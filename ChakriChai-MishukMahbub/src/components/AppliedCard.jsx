import React from 'react';
import pinPoint from '../assets/Icons/Location Icon.png'
import salaryImg from '../assets/Icons/Frame.png'
import { Link } from 'react-router-dom';

const AppliedCard = ({ job }) => {
    console.log(job);
    return (
        <div className=''>
            <div className='flex-col mb-6'>
                <div className="card shadow-xl card-bordered grid grid-cols-6 items-center px-5 gap-8">
                    <figure className='col-span-1 m-auto bg-slate-300 h-48 w-48 p-6'>
                        <img className='' src={job.logo} alt="" />
                    </figure>
                    <div className="card-body col-span-4">
                        <h2 className="card-title">
                            {job.position}
                        </h2>
                        <p>{job.company}</p>
                        <div className='flex gap-4'>
                            <button className="btn btn-outline btn-primary rounded-lg w-32"><small>{job.office}</small></button>
                            <button className="btn btn-outline btn-primary rounded-lg w-32"><small>{job.type}</small></button>
                        </div>
                        <div className='flex gap-4 mt-4'>
                            <small>
                                <div className='flex gap-1 items-center'>
                                    <img className='grayscale' src={pinPoint} /><p>{job.location}</p>
                                </div>
                            </small>
                            <small>
                                <div className='flex gap-1 items-center'>
                                    <img className='grayscale' src={salaryImg} /><p>Salary: {job.salary}</p>
                                </div>
                            </small>
                        </div>
                    </div>
                    <Link className='col-span-1' to={`/job-details/${job.id}`}>
                        <button className='btn btn-primary w-40 rounded-lg'>View Details</button>
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default AppliedCard;