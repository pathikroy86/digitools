import React, { use, useState } from 'react';
import Product from './Product/Product';

const Products = ({ prductsResponse }) => {
    const products = use(prductsResponse);

    const [selectedCount, setSelectedCount] = useState(0);
    const handleSelectedCount = () => {
        setSelectedCount(selectedCount + 1);

    }
    const [activeBtn, setActiveBtn] = useState(!true);
    const handleButtonToggle = () => {
        setActiveBtn(!activeBtn);
    }

    const [addedToCart, setAddedToCart] = useState([]);
    const handleCart = (element) => {
        const newArr = [...addedToCart, element];
        console.log(addedToCart);
        handleSelectedCount();
        setAddedToCart(newArr);
    }
    return (
        <div className='w-11/12 md:w-10/12 mx-auto mb-5 md:mb-10'>
            <div className='flex justify-center mb-5 md:mb-10'>
                <button onClick={handleButtonToggle} className={`btn rounded-full font-semibold ${activeBtn ? 'text-white bg-linear-to-r from-[#4F39F6] to-[#9514FA]' : ''}`}>Products</button>
                <button onClick={handleButtonToggle} className={`btn rounded-full font-semibold ${activeBtn ? '' : 'text-white bg-linear-to-r from-[#4F39F6] to-[#9514FA]'}`}>Cart(<span>{selectedCount}</span>)</button>
            </div>
            <div className='grid md:grid-cols-3 gap-5'>
                {
                    products.map(product => <Product key={product.id} product={product} handleSelectedCount={handleSelectedCount}
                        handleCart={handleCart}
                    ></Product>)
                }
            </div>

        </div>
    );
};

export default Products;