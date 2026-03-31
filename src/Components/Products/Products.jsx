import React, { use, useState } from 'react';
import Product from './Product/Product';

const Products = ({ prductsResponse }) => {
    const products = use(prductsResponse);

    const [selectedCount, setSelectedCount] = useState(0);
    const handleSelectedCount = () => {
        setSelectedCount(selectedCount + 1);
    }
    return (
        <div className='w-11/12 md:w-10/12 mx-auto'>
            <div className='flex justify-center mb-5 md:mb-10'>
                <button className='btn rounded-full'>Products</button>
                <button className='btn rounded-full'>Cart(<span>{selectedCount}</span>)</button>
            </div>
            <div className='grid md:grid-cols-3 gap-5'>
                {
                    products.map(product => <Product key={product.id} product={product} handleSelectedCount={handleSelectedCount}></Product>)
                }
            </div>

        </div>
    );
};

export default Products;