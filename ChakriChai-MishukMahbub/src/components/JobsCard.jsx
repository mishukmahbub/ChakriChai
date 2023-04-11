import React from 'react';
import pinPoint from '../assets/Icons/Frame-4.png'
import salary from '../assets/Icons/Frame.png'
import { Link } from 'react-router-dom';

const JobsCard = ({ job }) => {

    return (
        <div className="card shadow-xl card-bordered">
            <figure className='w-28 m-8 -mb-4'>
                <img className='' src={job.logo} alt="" />
            </figure>
            <div className="card-body">
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
                            <img className='grayscale' src={salary} /><p>Salary: {job.salary}</p>
                        </div>
                    </small>
                </div>
                <Link to={`/job-details/${job.id}`}>
                    <button className='btn btn-primary w-40 rounded-lg mt-6'>View Details</button>
                </Link>
            </div>
        </div>
    );
};

export default JobsCard;