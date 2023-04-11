import React from 'react';

const JobsCategory = ({ jobCategory }) => {
    return (
        <div className="card w-96 bg-blue-100 shadow-xl">
            <figure className='p-8 -mb-8'><img className='-ms-32 bg-blue-200 p-4 rounded-lg' src={jobCategory.icon} alt="" /></figure>
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