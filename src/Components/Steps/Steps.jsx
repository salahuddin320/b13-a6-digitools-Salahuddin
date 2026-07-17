// import React from 'react';
import iconImg from '../../../assets/user.png'
import iconImg2 from '../../../assets/package.png'
import iconImg3 from '../../../assets/rocket.png'

const Steps = () => {
    return (
        <div className="space-y-4 my-10 container mx-auto p-6">
            <h2 className="text-5xl font-bold text-center">Get Started in 3 Steps</h2>
            <p className="text-center">Start using premium digital tools in minutes, not hours.</p>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                <div className='flex-col items-center bg-base-100 shadow-sm'>
                    <div className="flex justify-center items-center ml-auto rounded-[50%] w-10 h-10 bg-linear-to-r from-[#4F39F6] to-[#9514FA] text-white">01</div>
                    <div className='rounded-[50%] bg-purple-100 w-25 h-25 flex justify-center items-center mx-auto'>
                        <img
                            src={iconImg}
                            alt="Shoes"
                            className="rounded-xl" />
                    </div>
                    <div className="card-body items-center text-center">
                        <h2 className="card-title">Create Account</h2>
                        <p>Sign up for free in seconds. No credit card required to get started.</p>

                    </div>
                </div>
                <div className='flex-col items-center bg-base-100 shadow-sm'>
                    <div className="flex justify-center items-center ml-auto rounded-[50%] w-10 h-10 bg-linear-to-r from-[#4F39F6] to-[#9514FA] text-white">02</div>
                    <div className='rounded-[50%] bg-purple-100 w-25 h-25 flex justify-center items-center mx-auto'>
                        <img
                            src={iconImg2}
                            alt="Shoes"
                            className="rounded-xl" />
                    </div>
                    <div className="card-body items-center text-center">
                        <h2 className="card-title">Choose Products</h2>
                        <p>Browse our catalog and select the tools that fit your needs.</p>

                    </div>
                </div>
                <div className='flex-col items-center bg-base-100 shadow-sm'>
                    <div className="flex justify-center items-center ml-auto rounded-[50%] w-10 h-10 bg-linear-to-r from-[#4F39F6] to-[#9514FA] text-white">03</div>
                    <div className='rounded-[50%] bg-purple-100 w-25 h-25 flex justify-center items-center mx-auto'>
                        <img
                            src={iconImg3}
                            alt="Shoes"
                            className="rounded-xl" />
                    </div>
                    <div className="card-body items-center text-center">
                        <h2 className="card-title">Start Creating</h2>
                        <p>Download and start using your premium tools immediately.</p>

                    </div>
                </div>
            </div>
        </div>
    );
};

export default Steps;