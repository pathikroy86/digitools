import React from 'react';
import { MdOutlineShoppingCart } from "react-icons/md";

const Navbar = () => {
    return (
        <div className='w-11/12 md:w-10/12 mx-auto mb-5'>
            <div className="navbar bg-base-100 shadow-sm">
                <div className="navbar-start">
                    <div className="dropdown">
                        <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
                        </div>
                        <ul
                            tabIndex="-1"
                            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">
                            <li><a>Products</a></li>
                            <li><a>Features</a></li>
                            <li><a>Pricing</a></li>
                            <li><a>Testimonials</a></li>
                            <li><a>FAQ</a></li>
                        </ul>
                    </div>
                    <a className="bg-linear-to-r from-[#4F39F6] to-[#9514FA] text-transparent bg-clip-text text-2xl font-bold">DigiTools</a>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1 text-[#101727] font-semibold">
                        <li><a>Products</a></li>
                        <li><a>Features</a></li>
                        <li><a>Pricing</a></li>
                        <li><a>Testimonials</a></li>
                        <li><a>FAQ</a></li>
                    </ul>
                </div>
                <div className="navbar-end space-x-3">
                    <button><MdOutlineShoppingCart /></button>
                    <a className='text-[#101727] font-semibold'>Login</a>
                    <a className="btn bg-linear-to-r from-[#4F39F6] to-[#9514FA]  text-white font-semibold rounded-full">Get Started</a>
                </div>
            </div>
        </div>
    );
};

export default Navbar;