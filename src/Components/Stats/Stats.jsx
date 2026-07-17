// import React from 'react';

const Stats = () => {
    return (
        <div className="bg-linear-to-r from-[#4F39F6] to-[#9514FA] px-auto py-15 body">
            <div className="grid grid-cols-1 lg:grid-cols-5 justify-items-center ">
                <div className="px-12">
                    <h2 className="text-white text-6xl font-bold">50K+</h2>
                    <p className="text-white text-2xl font-medium">Active Users</p>
                </div>
                {/* 1st divider */}
                <div className="divider lg:divider-horizontal before:bg-white after:bg-white"></div>
                <div className="px-12">
                    <h2 className="text-white text-6xl font-bold">200+</h2>
                    <p className="text-white text-2xl font-medium">Premium Tools</p>
                </div>
                {/* 2nd divider */}
                <div className="divider lg:divider-horizontal before:bg-white after:bg-white"></div>
                <div className="px-12">
                    <h2 className="text-white text-6xl font-bold">4.9</h2>
                    <p className="text-white text-2xl font-medium">Rating</p>
                </div>
                
            </div>
            
        </div>
    );
};

export default Stats;