// import React from 'react';

const Ready = () => {
    return (
        <div className='flex flex-col gap-6 justify-center items-center text-center text-white mx-auto py-15 px-6 body bg-linear-to-r from-[#4F39F6] to-[#9514FA]'>
            <div className='space-y-4 order-2 lg:order-1'>
                <h2 className='text-6xl font-bold'>Ready to Transform Your Workflow?</h2>
                <p className='text-lg font-normal'>Join thousands of professionals who are already using Digitools to work smarter. <br></br>Start your free trial today.
                </p>
                <div className='flex justify-center items-center gap-4'>
                    <button className="btn bg-white rounded-2xl text-[#4F39F6]">Explore Products</button>
                    <button className="btn border-2 bg-[#9514FA] text-white rounded-2xl">View Pricing</button>
                </div>
                <p className='text-lg font-normal'>14-day free trial • No credit card required • Cancel anytime
                </p>
            </div>
        </div>
    );
};

export default Ready;