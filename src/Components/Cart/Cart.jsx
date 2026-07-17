// import React from 'react';

const Cart = ({ addCart, setAddCart }) => {
    // console.log(addCart);


    const handleDeleteTool = (tool) => {
        const filteredTool = addCart.filter((deleteTool) => tool.name !== deleteTool.name);
        // console.log(filteredTool);
        setAddCart(filteredTool)

    }
    const handleResetButton =()=>{
        setAddCart([])
    }


    return (
        <div className="space-y-6">
            <h2 className="text-6 font-bold capitalize">your cart</h2>
            {
                addCart.map((tool) => {
                    return <div className="card w-full bg-base-100 card-sm shadow-sm">
                        <div className="flex justify-between items-center p-6">
                            <div className="flex justify-center items-center gap-2">
                                <img src={tool.icon} alt="" />
                                <div>
                                    <h2 className="text-xl font-semibold">{tool.name}</h2>
                                    <p className="text-[16px] font-medium">${tool.price}</p>
                                </div>
                            </div>
                            <button
                                onClick={() => handleDeleteTool(tool)}
                                className="text-red-500 cursor-pointer">Remove</button>
                        </div>
                    </div>
                })
            }
            {/* <button className="btn bg-linear-to-r from-[#4F39F6] to-[#9514FA] rounded-2xl text-white">Explore Products</button> */}
            <div className="flex justify-between items-center border-t pt-4">
                <p className="text-lg text-gray-600">Total</p>

                <h2 className="text-3xl font-bold">
                    $
                    {addCart.reduce((total, item) => total + item.price, 0)}
                </h2>
            </div>

            {/* Button */}
            <button 
            onClick={()=>handleResetButton()}
            className="w-full py-2 rounded-full bg-linear-to-r from-[#4F39F6] to-[#9514FA] text-white font-semibold text-lg hover:opacity-90 transition">
                Proceed To Checkout
            </button>

        </div>
    );
};

export default Cart;