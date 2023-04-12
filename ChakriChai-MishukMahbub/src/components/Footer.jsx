import React from 'react';
import logo from '../assets/Icons/Group-9969.png'

const Footer = () => {
    return (
        <div>
            <footer className="footer p-10 ps-24 bg-slate-900 text-white">
                <div className=''>
                    <h2 className='text-3xl font-bold'>Chakri Chai</h2>
                    <p>Uneasy barton seeing remark happen his has. <br/> Am possible offering at contempt mr distance! </p>
                    <img src={logo} alt="" />
                </div>
                <div>
                    <span className="footer-title">Company</span>
                    <a className="link link-hover">Company</a>
                    <a className="link link-hover">Design</a>
                    <a className="link link-hover">Marketing</a>
                    <a className="link link-hover">Advertisement</a>
                </div>
                <div>
                    <span className="footer-title">Product</span>
                    <a className="link link-hover">About us</a>
                    <a className="link link-hover">Contact</a>
                    <a className="link link-hover">Jobs</a>
                    <a className="link link-hover">Press kit</a>
                </div>
                <div>
                    <span className="footer-title">Support</span>
                    <a className="link link-hover">Terms of use</a>
                    <a className="link link-hover">Privacy policy</a>
                    <a className="link link-hover">Cookie policy</a>
                </div>
                <div className='-me-12'>
                    <span className="footer-title">Contact</span>
                    <a className="link link-hover">Terms of use</a>
                    <a className="link link-hover">Privacy policy</a>
                    <a className="link link-hover">Cookie policy</a>
                </div>
            </footer>
            <footer className="footer px-24 py-4 border-t bg-slate-900 text-white border-slate-600">
                <div className="items-center grid-flow-col">
                <p>@2023 ChakriChai. All Rights Reserved</p>
                </div>
                <div className="md:place-self-center md:justify-self-end">
                    <p>Powered by ChakriChai</p>
                </div>
            </footer>
        </div>
    );
};

export default Footer;