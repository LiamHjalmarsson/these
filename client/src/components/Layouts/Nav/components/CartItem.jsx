import React from 'react';

const CartItem = ({item}) => {
    return (
        <li className='flex pr-4'>
            <div className='flex-grow'>
                {item.name} - {item.size} - {item.price} kr
            </div>
            <div>
                {item.quantity}
            </div>
        </li>
    );
}

export default CartItem;
