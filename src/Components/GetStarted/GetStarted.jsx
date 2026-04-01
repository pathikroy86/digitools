import React from 'react';
import { CgProfile } from "react-icons/cg";

const GetStarted = () => {
    return (
        <div className='w-11/12 md:w-10/12 mx-auto'>
            <h1 className='text-3xl md:text-5xl font-bold text-center mb-3'>Get Started In 3 Steps</h1>
            <p className='text-[#627382] text-center mb-3'>Stay using premium digital tools in minutes not hours.</p>
            <div className='grid grid-cols-1 md:grid-cols-3 gap-5 mt-5 md:mt-16 mb-5 md:mb-24'>
                <div className='flex flex-col items-center p-3 shadow-lg relative'>
                    <div className="badge badge-primary rounded-full p-1 absolute -top-8 right-4">01</div>
                    <figure><img className='p-4 bg-purple-200 rounded-full' src="/src/assets/user.png" alt="" /></figure>
                    <h4 className='text-2xl font-bold'>Create Account</h4>
                    <p className='text-center text-[#627382]'>Sign up for free in seconds. No credit card <br /> required to get started.</p>
                </div>
                <div className='flex flex-col items-center p-3 shadow-lg relative'>
                    <div className="badge badge-primary rounded-full p-1 absolute -top-8 right-4">02</div>
                    <img className='p-4 bg-purple-200 rounded-full' src="/src/assets/package.png" alt="" />
                    <h4 className='text-2xl font-bold'>Choose Products</h4>
                    <p className='text-center text-[#627382]'>Browse our catalog and select the tools <br /> that fit your needs.</p>
                </div>
                <div className='flex flex-col items-center p-3 shadow-lg relative'>
                    <div className="badge badge-primary rounded-full p-1 absolute -top-8 right-4">03</div>
                    <img className='p-4 bg-purple-200 rounded-full' src="/src/assets/rocket.png" alt="" />
                    <h4 className='text-2xl font-bold'>Start Creating</h4>
                    <p className='text-center text-[#627382]'>Download and start using your premium <br /> tools immediately.</p>
                </div>
            </div>
        </div>
    );
};

export default GetStarted;