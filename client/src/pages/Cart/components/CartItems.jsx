import React from 'react';
import CartItem from './CartItem';

const CartItems = ({ cartItems, onDecreaseQuantity, onIncreaseQuantity }) => {
    return (
        <div className='flex flex-col w-full'>
            <div className='w-full flex justify-end flex-col gap-8 mb-12'>
                <div className='flex gap-8 w-full px-10'>
                    <div className='w-32'></div>
                    <div className='flex-grow flex justify-between items-center'>
                        <div className='w-1/3'>
                            Product
                        </div>
                        <div className='w-1/3 text-center'>
                            Pris
                        </div>
                        <div className='w-1/3 text-center'>
                            <div className=' ml-10'>
                                Antal
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <ul className='w-full flex justify-end flex-col gap-8'>
                {
                    cartItems.map((item, index) => (
                        <CartItem key={index} item={item} onDecreaseQuantity={onDecreaseQuantity} onIncreaseQuantity={onIncreaseQuantity} />
                    ))
                }
            </ul>
        </div>
    );
}

export default CartItems;
