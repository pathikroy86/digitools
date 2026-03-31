import React from 'react';

const Product = ({ product }) => {
    const { name, description, features, icon, period, price, tag } = product;
    return (
        <div className='shadow-xl'>
            <div className='flex justify-end'>
                <div className={`badge badge-outline ${tag === "popular" ? 'badge-primary' : tag === "best seller" ? 'badge-warning' : 'badge-success'}`}>{tag}</div>
            </div>
            <span className='p-2 border border-gray-300 rounded-full'>{icon}</span>
            <h3>{name}</h3>
            <p>{description}</p>
            <h5>${price}<sub>/Mo</sub></h5>
        </div>
    );
};

export default Product;