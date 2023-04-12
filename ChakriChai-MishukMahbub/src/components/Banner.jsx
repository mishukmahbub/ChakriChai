import React from 'react';
import person from '../assets/All Images/P3OLGJ1 copy 1.png'

const Banner = () => {
    return (
        <div>
            <div className='md:flex md:justify-between items-center px-8 md:px-24 md:gap-28 bg-blue-100'>
                <div className=''>
                    <h2 className='text-3xl md:text-7xl font-extrabold leading-tight'>One Step <br /> Closer To Your <br /> <span className='text-primary'>Dream Job</span></h2>
                    <p className='my-3 md:my-7'>Curiosity remaining own see repulsive household advantage son additions. Supposing exquisite daughters eagerness why repulsive for.</p>
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