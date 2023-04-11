import React from 'react';

const JobsCard = ({job}) => {
    console.log(job);
    return (
        <div className="card w-96 bg-blue-100 shadow-xl">
            <figure className='p-8 -mb-8'><img className='-ms-32 bg-blue-200 p-4 rounded-lg' src={icon} alt="" /></figure>
            <div className="card-body">
                <h2 className="card-title">
                    {categoryName}
                </h2>
                <p>{availableJobs} Jobs Available</p>
            </div>
        </div>
    );
};

export default JobsCard;