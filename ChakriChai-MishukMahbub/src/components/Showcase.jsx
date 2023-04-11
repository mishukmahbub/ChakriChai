import React from 'react';
import Banner from './Banner';
import JobCategory from './JobCategory';
import FeaturedJobs from './FeaturedJobs';
import { useLoaderData } from 'react-router-dom';

const Showcase = () => {
    const jobCategories = useLoaderData();
    return (
        <div>
            <Banner></Banner>

            <div className='mx-24 my-32'>
                <h2 className='text-5xl text-center font-extrabold'>Job Category List</h2>
                <p className='text-center pt-4 pb-8'>Explore thousands of job opportunities with all the information you need. Its your future!</p>

                <div className='flex gap-6'>
                    {
                        jobCategories.map(jobCategory => <JobCategory
                            key={jobCategory.id}
                            jobCategory={jobCategory}
                        ></JobCategory>
                        )
                    }
                </div>
            </div>

            <FeaturedJobs></FeaturedJobs>
        </div>
    );
};

export default Showcase;