import React, { use, useState } from 'react';
import Product from './Product/Product';
import Cart from '../Cart/Cart';
import { toast } from 'react-toastify';

const Products = ({ prductsResponse, handleTotalPrice, totalPrice }) => {
    const products = use(prductsResponse);

    const [selectedCount, setSelectedCount] = useState(0);
    const handleSelectedCount = () => {
        setSelectedCount(selectedCount + 1);
    }

    const [activeTab, setActiveTab] = useState('products');

    const [addedToCart, setAddedToCart] = useState([]);
    const handleCart = (element) => {
        for (const added of addedToCart) {
            if (element.id === added.id) {
                const notify = () => toast.success("Already in Cart");
                notify();
                return;
            }
        }
        const newArr = [...addedToCart, element];
        const notify = () => toast.success("Added to Cart");
        handleSelectedCount();
        setAddedToCart(newArr);
        notify();
    }

    const removeItem = (product) => {
        const removed = addedToCart.filter(element => element.id !== product.id);
        setAddedToCart(removed);
        setSelectedCount(selectedCount - 1);
        handleTotalPrice(-product.price);
    }

    const clearCart = () => {
        setAddedToCart([]);
        setSelectedCount(0);
        handleTotalPrice(-totalPrice);
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
                            handleTotalPrice={handleTotalPrice}
                        ></Product>)
                    }
                </div>
            )}
            {activeTab === 'cart' && (
                <Cart addedToCart={addedToCart} totalPrice={totalPrice} removeItem={removeItem} clearCart={clearCart}></Cart>
            )}

        </div>
    );
};

export default Products;