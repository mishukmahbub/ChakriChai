import React from 'react';
import Banner from './Banner';
import FeaturedJobs from './FeaturedJobs';
import { useLoaderData } from 'react-router-dom';
import JobsCategory from './JobsCategory';

const Showcase = () => {
    const jobsCategory = useLoaderData();
    
    return (
        <div>
            <Banner></Banner>
            {/* JobsCategory */}
            <div className='mx-24 my-32'>
                <h2 className='text-5xl text-center font-extrabold'>Job Category List</h2>
                <p className='text-center pt-4 pb-8'>Explore thousands of job opportunities with all the information you need. Its your future!</p>

                <div className='flex gap-6'>
                    {
                        jobsCategory.map(jobCategory => <JobsCategory
                            key={jobCategory.id}
                            jobCategory={jobCategory}
                        ></JobsCategory>
                        )
                    }
                </div>
            </div>
            {/* Featured Jobs Section */}
            <FeaturedJobs></FeaturedJobs>
        </div>
    );
};

export default Showcase;