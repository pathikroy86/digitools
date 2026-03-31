import React, { use } from 'react';
import Product from './Product/Product';

const Products = ({ prductsResponse }) => {
    const products = use(prductsResponse);
    return (
        <div className='w-11/12 md:w-10/12 mx-auto grid md:grid-cols-3 gap-5'>
            {
                products.map(product => <Product key={product.id} product={product}></Product>)
            }
        </div>
    );
};

export default Products;