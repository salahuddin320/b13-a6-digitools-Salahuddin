// import React from 'react';

import { use, useState } from "react";
import Products from "../Products/Products";
import Cart from "../Cart/Cart";

const DigitalsTools = ({toolsPromise,addCart,setAddCart}) => {

    const tools = use(toolsPromise);
    // console.log(tools);

    // declared tools use state
    const [productBuy,setProductBuy] = useState('buy')
    





    return (
        <div className="container px-6 mx-auto my-30">
            <div className="space-y-4">
                <h2 className="text-5xl font-bold text-center">Premium Digital Tools</h2>
                <p className="text-center">Choose from our curated collection of premium digital products designed <br></br> to boost your productivity and creativity.</p>
                <div className='flex justify-center items-center gap-4'>
                    {/* button 1 */}
                    <button 
                    onClick={()=>setProductBuy('buy')}
                    className={`btn ${productBuy === 'buy' ? "bg-linear-to-r from-[#4F39F6] to-[#9514FA] text-white" : "bg-linear-to-r from-[#4F39F6] to-[#9514FA] bg-clip-text text-transparent"} rounded-2xl`}>Products</button>
                    


                    {/* button 2 */}
                    <button 
                    onClick={()=>setProductBuy('cart')}
                    className={`btn ${productBuy === 'cart' ? "bg-linear-to-r from-[#4F39F6] to-[#9514FA] text-white" : "bg-linear-to-r from-[#4F39F6] to-[#9514FA] bg-clip-text text-transparent"} rounded-2xl`}>Cart {addCart.length}</button>
                </div>
                <div>
                    {
                        productBuy === 'buy' ? <Products tools={tools} addCart={addCart} setAddCart={setAddCart}></Products> : <Cart addCart = {addCart} setAddCart={setAddCart}></Cart>
                    }
                </div>
            </div>
        </div>
    );
};

export default DigitalsTools;