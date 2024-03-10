import React from 'react';
import CartItem from './CartItem';

const CartItems = ({ cartItems, onDecreaseQuantity, onIncreaseQuantity }) => {

    return (
        <div className='flex flex-col w-full'>
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
