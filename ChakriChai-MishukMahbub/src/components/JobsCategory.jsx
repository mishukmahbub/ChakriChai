import React from 'react';

const JobsCategory = ({ jobCategory }) => {
    return (
        <div className="card m-8 md:m-0 md:w-96 bg-blue-100 shadow-xl">
            <figure className='w-32 p-8 pb-0'><img className='bg-blue-200 p-4 rounded-lg' src={jobCategory.icon} alt="" /></figure>
            <div className="card-body">
                <h2 className="card-title">
                    {jobCategory.categoryName}
                </h2>
                <p>{jobCategory.availableJobs} Jobs Available</p>
            </div>
        </div>
    );
};

export default JobsCategory;