import React from 'react';
import Header from '../Header'
import Footer from '../Footer'
import { Outlet } from 'react-router-dom';


const Home = () => {
    return (
        <div className=''>
            <Header></Header>
            <Outlet></Outlet>
            <Footer></Footer>
        </div>
    );
};

export default Home;