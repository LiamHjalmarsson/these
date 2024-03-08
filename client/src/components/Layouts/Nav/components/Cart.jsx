import React from 'react';

const Cart = ({ cartItems }) => {
    return (
        <div className="absolute top-14 -right-8 bg-white text-black w-96 border border-gray-300 p-2 z-50">
            <h4>Shopping Cart</h4>
            <ul>
                {cartItems.map((item, index) => (
                    <li key={index}>
                        {item.name} - {item.price} kr ({item.quantity})
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default Cart;
