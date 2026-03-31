import React from 'react';

const Counter = () => {
    return (
        <div className='w-fit mx-auto md:w-full bg-linear-to-r from-[#4F39F6] to-[#9514FA] flex justify-center mb-5 md:mb-10'>
            <div className="stats stats-vertical lg:stats-horizontal shadow">
                <div className="stat md:px-16 lg:px-24">
                    <div className="stat-title text-white md:text-6xl text-3xl font-extrabold">50K+</div>
                    <div className="stat-desc text-white md:text-xl text-lg">Active Users</div>
                </div>

                <div className="stat md:px-16 lg:px-24">
                    <div className="stat-title text-white md:text-6xl text-3xl font-extrabold">200+</div>
                    <div className="stat-desc text-white md:text-xl text-lg">Premium Tools</div>
                </div>

                <div className="stat md:px-16 lg:px-24">
                    <div className="stat-title text-white md:text-6xl text-3xl font-extrabold">4.9</div>
                    <div className="stat-desc text-white md:text-xl text-lg">Rating</div>
                </div>
            </div>
        </div>
    );
};

export default Counter;