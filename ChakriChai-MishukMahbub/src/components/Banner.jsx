import React from 'react';
import person from '../assets/All Images/P3OLGJ1 copy 1.png'

const Banner = () => {
    return (
        <div>
            <div className='xs:flex-col-reverse md:flex justify-between items-center mx-12 -me-10 md:gap-28'>
            <div className=''>
                <h2 className='text-7xl font-extrabold leading-tight'>One Step <br /> Closer To Your <br /> <span className='text-primary'>Dream Job</span></h2>
                <p className='my-7'>Explore thousands of job opportunities with all the <br /> information you need. Its your future. Come find it. Manage all your job application from start to finish.</p>
                <button className='btn btn-primary rounded-lg'>Get Started</button>
            </div>
            <div>
                <img src={person} alt="" className='' />
            </div>
        </div>
        </div>
    );
};

export default Banner;