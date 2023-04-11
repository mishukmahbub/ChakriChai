import React, { useEffect, useState } from 'react';
import JobsCard from './JobsCard';

const FeaturedJobs = () => {
    const [data, setData] = useState([]);
    const [showAll, setShowAll] = useState(false);
    useEffect(() => {
        fetch('/jobs.json')
            .then(response => response.json())
            .then(data => setData(data))
    }, []);

    const handleShowAll = () => {
        setShowAll(true);
    };

    return (
        <div>
            <div className='mx-24 my-32'>
                <h2 className='text-5xl text-center font-extrabold'>Featured Jobs</h2>
                <p className='text-center pt-4 pb-8'>Explore thousands of job opportunities with all the information you need. Its your future!</p>

                <div className=''>
                    <div className='grid md:grid-cols-2 gap-6 w-auto'>
                        {
                            data.slice(0, showAll ? 6 : 4).map(job => <JobsCard
                                key={job.id}
                                job={job}
                            ></JobsCard>
                            )
                        }
                    </div>
                </div>
                <div className='text-center mt-10'>
                    {!showAll && (
                        <span className='' onClick={handleShowAll}>
                            <button className='btn btn-primary rounded-lg'>See All Jobs</button>
                        </span>
                    )}
                </div>
            </div>
        </div>
    );
};

export default FeaturedJobs;