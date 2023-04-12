import React, { useEffect, useState } from 'react';
import { getShoppingCart } from '../utilities/fakedb';
import { useLoaderData } from 'react-router-dom';
import AppliedCard from './AppliedCard';

const Applied = () => {
    const jobDetails = useLoaderData();
    const getAppliedJobs = getShoppingCart()

    const [jobs, setJobs] = useState([]);

    useEffect(() => {
        let jobsArr = []
        for (const id in getAppliedJobs) {
            const appliedJob = jobDetails.find(job => job.id === id)
            jobsArr.push(appliedJob)
        }
        setJobs(jobsArr)
    }, [])

    const filterOnsite = () => {
        let onsiteArr = [];
        const onsite = jobs.filter(job => job.office === 'Onsite')
        onsiteArr.push(onsite)
        setJobs(onsiteArr[0]);
    };
    const filterRemote = () => {
        let remoteArr = [];
        const remote = jobs.filter(job => job.office === 'Remote')
        remoteArr.push(remote)
        setJobs(remoteArr[0]);
    };

    return (
        <div className='px-24 py-32 relative'>
            <div className="dropdown dropdown-bottom absolute top-16 right-24 dropdown-end">
                <label tabIndex={0} className="btn btn-outline btn-primary rounded-lg">Filter</label>
                <ul tabIndex={0} className="dropdown-content menu p-2 shadow bg-base-100 rounded-box w-52 border-4">
                    <li><a className='font-bold' onClick={filterOnsite}>Onsite</a></li>
                    <li><a className='font-bold' onClick={filterRemote}>Remote</a></li>
                </ul>
            </div>
            <div>
                {
                    jobs.map(job => <AppliedCard
                        key={job.id}
                        job={job}
                    />)
                }
            </div>
        </div>
    );
};

export default Applied;