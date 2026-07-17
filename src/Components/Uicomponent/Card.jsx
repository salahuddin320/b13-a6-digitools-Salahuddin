// import React from 'react';

import { useState } from "react";

const Card = ({ tool, addCart, setAddCart }) => {

    const buyProduct = () => {
        setAddCart([...addCart, tool])
        setIsAdd(true)
    }
    const [isAdd, setIsAdd] = useState(false);
    return (
        <div>
            <div className="card w-96 bg-base-100 shadow-sm">
                <div className="card-body">
                    <span className={`badge badge-xs ${tool.tag === 'Best Seller' ? 'bg-[#FEF3C6] text-[#BB4D00]' : tool.tag === "Popular" ? 'bg-[#E1E7FF] text-[#4F39F6]' : 'bg-[#DBFCE7] text-[#0A883E]'} ml-auto`}>{tool.tag}</span>
                    <img src={tool.icon} alt="" className='w-8 h-8' />
                    <div className="space-y-4">
                        <h2 className="text-2xl font-bold">{tool.name}</h2>
                        <p>Generate high-quality content, blogs, and marketing copy in seconds with advanced AI.</p>
                        <span className="text-xl">${tool.price}/mo</span>
                    </div>
                    <ul className="mt-6 flex flex-col gap-2 text-xs">
                        <li>

                            {
                                tool.features.map((feature, index) => {
                                    return <span key={index} className='flex items-center my-2'><svg xmlns="http://www.w3.org/2000/svg" className="size-4 me-2 inline-block text-success" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" /></svg>{feature}</span>
                                })
                            }
                        </li>
                    </ul>
                    <div className="mt-6">
                        <button
                            onClick={() => buyProduct()}
                            disabled={isAdd}
                            className="btn w-full bg-linear-to-r from-[#4F39F6] to-[#9514FA] rounded-2xl text-white">Buy Now</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Card;