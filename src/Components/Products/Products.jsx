import React, { use, useState } from 'react';
import Product from './Product/Product';
import Cart from '../Cart/Cart';

const Products = ({ prductsResponse }) => {
    const products = use(prductsResponse);

    const [selectedCount, setSelectedCount] = useState(0);
    const handleSelectedCount = () => {
        setSelectedCount(selectedCount + 1);
    }

    const [activeTab, setActiveTab] = useState('products');

    const [addedToCart, setAddedToCart] = useState([]);
    const handleCart = (element) => {
        const newArr = [...addedToCart, element];
        handleSelectedCount();
        setAddedToCart(newArr);
    }
    return (
        <div className='w-11/12 md:w-10/12 mx-auto mb-5 md:mb-10'>
            <div className='flex justify-center mb-5 md:mb-10'>
                <button
                    onClick={() => setActiveTab('products')}
                    className={`btn rounded-full font-semibold ${activeTab === 'products' ? 'text-white bg-linear-to-r from-[#4F39F6] to-[#9514FA]' : ''}`}
                >
                    Products
                </button>
                <button
                    onClick={() => setActiveTab('cart')}
                    className={`btn rounded-full font-semibold ${activeTab === 'cart' ? 'text-white bg-linear-to-r from-[#4F39F6] to-[#9514FA]' : ''}`}
                >
                    Cart(<span>{selectedCount}</span>)
                </button>
            </div>
            {activeTab === 'products' && (
                <div className='grid md:grid-cols-3 gap-5'>
                    {
                        products.map(product => <Product key={product.id} product={product} handleSelectedCount={handleSelectedCount}
                            handleCart={handleCart}
                        ></Product>)
                    }
                </div>
            )}
            {activeTab === 'cart' && (
                <Cart addedToCart={addedToCart}></Cart>
            )}

        </div>
    );
};

export default Products;