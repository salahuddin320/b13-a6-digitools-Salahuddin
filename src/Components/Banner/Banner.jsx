// import React from 'react';
import bannerImg from '../../../assets/banner.png'
import iconImg from '../../../assets/icon.png'
import { IoPlayOutline } from "react-icons/io5";

const Banner = () => {
    return (
        <div className='grid grid-cols-1 lg:grid-cols-2 gap-6 items-center container mx-auto py-15 px-6 body'>
            <div className='space-y-4 order-2 lg:order-1'>
                <div className='flex justify-center items-center gap-2 bg-[#E1E7FF] px-4 py-2 rounded-4xl w-[50%]'>
                    <img src={iconImg} alt="" />
                    <p className='bg-linear-to-r from-[#4F39F6] to-[#9514FA] bg-clip-text text-transparent'>New: AI-Powered Tools Available</p>
                </div>
                <h2 className='text-6xl font-bold'>Supercharge Your<br></br>Digital Workflow</h2>
                <p className='text-lg font-normal'>Access premium AI tools, design assets, templates, and productivity
                    software—all in one place. Start creating faster today.
                    Explore Products
                </p>
                <div className='flex items-center gap-4'>
                     <button className="btn bg-linear-to-r from-[#4F39F6] to-[#9514FA] rounded-2xl text-white">Explore Products</button>
                     <button className="btn border-2 bg-linear-to-r from-[#4F39F6] to-[#9514FA] bg-clip-text text-transparent rounded-2xl"><IoPlayOutline />Watch Demo</button>
                </div>
            </div>
            <img src={bannerImg} alt="bannerImage" className='w-125 h-147.5 lg:ml-auto order-1 lg:order-2' />
        </div>
    );
};

export default Banner;