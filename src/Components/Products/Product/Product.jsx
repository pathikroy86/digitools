import React from 'react';
import { TfiCheck } from "react-icons/tfi";
import { toast } from 'react-toastify';

const Product = ({ product, handleCart, handleTotalPrice }) => {
    const { name, description, features, icon, price, tag } = product;

    return (
        <div className='shadow-xl rounded-2xl pt-2 px-3 pb-3 space-y-2'>
            <div className='flex justify-end'>
                <div className={`badge badge-soft ${tag === "popular" ? 'badge-primary' : tag === "best seller" ? 'badge-warning' : 'badge-success'}`}>{tag}</div>
            </div>
            <span className='p-2 border border-gray-300 rounded-full'>{icon}</span>
            <h3 className='mt-2 text-2xl font-bold'>{name}</h3>
            <p className='text-[#627382]'>{description}</p>
            <h5 className='font-bold text-2xl'>${price}<sub className='text-[#627382] text-base'>/Mo</sub></h5>
            {
                features.map(feature => <p className='flex items-center gap-2 text-[#627382] font-medium'><TfiCheck className='text-green-500' /> {feature}</p>)
            }
            <button onClick={() => { handleCart(product); handleTotalPrice(product.price); }} className='btn w-full rounded-full bg-linear-to-r from-[#4F39F6] to-[#9514FA] text-white font-bold'>Buy Now</button>
        </div>
    );
};

export default Product;