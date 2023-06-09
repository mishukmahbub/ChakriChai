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
            <div className='mx-8 md:mx-24 my-8 md:my-32'>
                <h2 className='text-xl md:text-5xl text-center font-extrabold'>Job Category List</h2>
                <p className='text-center pt-4 pb-8'>Uneasy barton seeing remark happen his has. Am possible offering at contempt mr distance!</p>

                <div className='md:flex gap-6'>
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