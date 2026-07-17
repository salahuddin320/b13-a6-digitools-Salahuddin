// import React from 'react';
import { FiShoppingCart } from "react-icons/fi";


const Navbar = ({ addCart }) => {
    return (
        <div className="container mx-auto body">
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
                            <div className="flex items-center p-2 gap-2">
                                <FiShoppingCart />
                                <p className="text-[#101727]">Login</p>
                            </div>
                        </ul>
                    </div>
                    <a className="btn btn-ghost text-2xl font-bold bg-linear-to-r from-[#4F39F6] to-[#9514FA] bg-clip-text text-transparent">DigiTools</a>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1">
                        <li><a>Products</a></li>
                        <li><a>Features</a></li>
                        <li><a>Pricing</a></li>
                        <li><a>Testimonials</a></li>
                        <li><a>FAQ</a></li>
                    </ul>
                </div>
                <div className="navbar-end gap-2">
                    <div className="flex justify-between items-center gap-2 sr-only lg:not-sr-only">
                        <div className="absolute top-2 ml-2 text-[#4F39F6]">
                            {addCart.length === 0 ? "" : addCart.length}
                        </div>
                        <div className="flex items-center gap-2 relative">
                            <FiShoppingCart />
                            <p className="text-[#101727]">Login</p>
                        </div>
                    </div>
                    <button className="btn bg-linear-to-r from-[#4F39F6] to-[#9514FA] rounded-2xl text-white">Get Started</button>
                </div>
            </div>
        </div>
    );
};

export default Navbar;