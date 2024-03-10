import React from 'react';
import { Link } from 'react-router-dom';
import { capitalizeFirstLetter } from '../../../../utils/stringUtils';

const Cart = ({ cartItems }) => {
    return (
        <div className="absolute top-14 -right-8 bg-primary text-white w-96 p-4 z-50 flex flex-col gap-4">

            <h2 className='text-2xl'>
                Kundvagn
            </h2>

            <ul className='text-lg flex flex-col gap-2'>
                {cartItems.map((item, index) => (
                    <li key={index} className='flex pr-4'>
                        <div className='flex-grow'>
                            {capitalizeFirstLetter(item.name)} - {capitalizeFirstLetter(item.size)} - {item.price} kr
                        </div>
                        <div>
                            {item.quantity}
                        </div>
                    </li>
                ))}
            </ul>

            <div className='text-end p-2'>
                <Link to="/kassa" className='py-2 px-6 border border-white hover:bg-white duration-300 transition hover:text-primary'>
                    Till kassa
                </Link>
            </div>

        </div>
    );
}

export default Cart;
