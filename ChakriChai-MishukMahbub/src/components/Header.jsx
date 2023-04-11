import React from 'react';
import { NavLink } from 'react-router-dom';

const Header = () => {
    return (
        <div className='flex justify-between items-center py-12 px-24 bg-blue-100'>
            <div><h1 className='font-bold text-3xl'>Chakri Chai</h1></div>
            <nav className='flex gap-10'>
                <NavLink to='/' className={({ isActive }) => (isActive ? "text-primary underline" : "")}>Home</NavLink>
                <NavLink to='/statistics' className={({ isActive }) => (isActive ? "text-primary underline" : "")}>Statistics</NavLink>
                <NavLink to='/applied-jobs' className={({ isActive }) => (isActive ? "text-primary underline" : "")}>Applied Jobs</NavLink>
                <NavLink to='/blog' className={({ isActive }) => (isActive ? "text-primary underline" : "")}>Blog</NavLink>
            </nav>
            <div><button className='btn btn-primary rounded-lg'>Start Applying</button></div>
        </div>
    );
};

export default Header;