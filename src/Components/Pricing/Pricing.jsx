// import React from 'react';

import { use } from "react";
import PricingCart from "./pricingCart";

const Pricing = ({ pricePromise }) => {
    const price = use(pricePromise);
    console.log(price);
    return (
        <div className="space-y-4 my-10 container mx-auto p-6">
            <div>
                <h2 className="text-5xl font-bold text-center">Simple, Transparent Pricing</h2>
                <p className="text-center">Choose the plan that fits your needs. Upgrade or downgrade anytime.</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 items-end">
                {
                    price.map((priceCart, ind) => {
                        return <PricingCart key={ind} priceCart={priceCart} ind={ind}></PricingCart>
                    })
                }
            </div>
        </div>
    );
};

export default Pricing;