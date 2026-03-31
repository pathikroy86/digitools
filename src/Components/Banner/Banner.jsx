import React from 'react';
import { CiPlay1 } from "react-icons/ci";

const Banner = () => {
    return (
        <div className='w-11/12 md:w-10/12 mx-auto flex justify-between items-center flex-col-reverse md:flex-row gap-3 mb-5 md:mb-10'>
            <div className='space-y-3'>
                <div className="badge bg-[#E1E7FF] font-medium">
                    <span aria-label="status" className="status status-primary"></span>
                    <span className='bg-linear-to-r from-[#4F39F6] to-[#9514FA] text-transparent bg-clip-text'>New AI-Powered Tools Available</span>
                </div>
                <h1 className='text-[#101727] text-3xl md:text-7xl font-extrabold'>Supercharge Your <br /> Digital Workflow</h1>
                <p className='text-[#627382] text-lg'>Access premium AI tools, design assets, templates, and productivity <br />
                    software—all in one place. Start creating faster today. <br />

                    Explore Products
                </p>
                <div className='space-x-2'>
                    <button className='btn bg-linear-to-r from-[#4F39F6] to-[#9514FA] text-white font-bold rounded-full'>Explore Products</button>
                    <button className='bg-linear-to-r from-[#4F39F6] to-[#9514FA] text-transparent bg-clip-text font-bold btn rounded-full border-[#9514FA]'><CiPlay1 className='text-[#9514Fa]' /> Watch Demo</button>
                </div>
            </div>
            <div>
                <img src="https://i.ibb.co.com/fGZP65D9/banner.png" alt="" />
            </div>
        </div>
    );
};

export default Banner;