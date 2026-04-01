import React from 'react';

const Cart = ({ addedToCart, totalPrice, removeItem }) => {
    const emptyCart = () => {
        addedToCart = [];
    }

    return (
        <div className='p-5 shadow rounded-xl'>
            <h3 className='text-2xl font-bold mb-3'>Your Cart</h3>
            {
                addedToCart.length === 0
                    ? <p className='text-gray-500 mt-2'>Cart is empty</p>
                    : addedToCart.map((product) => (
                        <div className='flex justify-between items-center px-3 py-2 shadow rounded-2xl mb-3'>
                            <div className='flex gap-2 items-center'>
                                <div>
                                    <p>{product.icon}</p>
                                </div>
                                <div>
                                    <p className='text-xl font-bold'>{product.name}</p>
                                    <p className='text-[#627382]'>${product.price}</p>
                                </div>
                            </div>

                            <div><button onClick={() => removeItem(product)} className='btn text-[#FF3980]'>Remove</button></div>
                        </div>
                    ))
            }
            <div className='shadow px-3 py-3 rounded-xl'>
                <div className='flex justify-between mb-5'>
                    <p className='text-xl font-medium'>Total</p>
                    <p className='text-xl font-bold'>$<span>{totalPrice}</span></p>
                </div>
                <div><button onClick={emptyCart} className='w-full btn bg-linear-to-r from-[#4F39F6] to-[#9514FA] text-white font-semibold rounded-full'>Proceed to Checkout</button></div>
            </div>

        </div>
    );
};

export default Cart;