// import React from 'react';

const PricingCart = ({priceCart,ind}) => {
    return (
        <div>
            <div className={`card ${ind === 1
          ? "-mt-8 bg-linear-to-r from-[#4F39F6] to-[#9514FA] text-white"
          : "bg-white"}
       shadow-sm rounded-2xl`}>
                <div className="card-body">
                    <span className={`badge badge-xs ${priceCart.tag === 'Most Popular' ? 'bg-[#FEF3C6] text-[#BB4D00]' : ""} mx-auto -top-4`}>{priceCart.tag}</span>
                    
                    <div className="space-y-4">
                        <h2 className="text-2xl font-bold">{priceCart.name}</h2>
                        <p>Generate high-quality content, blogs, and marketing copy in seconds with advanced AI.</p>
                        <span className="text-xl">${priceCart.price}/mo</span>
                    </div>
                    <ul className="mt-6 flex flex-col gap-2 text-xs">
                        <li>
                            {
                                priceCart.features.map((feature, index) => {
                                    return <span key={index} className='flex items-center my-2'><svg xmlns="http://www.w3.org/2000/svg" className="size-4 me-2 inline-block text-success" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" /></svg>{feature}</span>
                                })
                            }
                        </li>
                    </ul>
                    <div className="mt-6">
                        <button
                            className={`btn w-full ${ind === 1 ? "bg-white text-purple-600" : "bg-linear-to-r from-[#4F39F6] to-[#9514FA] text-white"} rounded-2xl `}>{priceCart.buttonText}</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default PricingCart;