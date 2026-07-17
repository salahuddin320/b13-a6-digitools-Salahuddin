// import React from 'react';

import Card from "../Uicomponent/Card";

const Products = ({tools, addCart, setAddCart}) => {
    
    return (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {
                tools.map((tool,ind)=>{
                    return <Card key={ind} tool={tool} addCart={addCart} setAddCart={setAddCart}></Card>
                })
            }
            
        </div>
    );
};

export default Products;