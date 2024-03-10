import React from 'react';
import Devider from '../../../components/Elements/Devider';

const CartItem = ({ item, onDecreaseQuantity, onIncreaseQuantity }) => {
    return (
        <div className='w-full'>
            <li className='flex gap-8 w-full px-10'>
                <img src={item.image} className='w-32 shadow-middle shadow-primary rounded-sm' />
                <div className='flex-grow flex justify-between items-center'>
                    <div className='w-full'>
                        <h3 className='text-xl'>
                            {item.name}
                        </h3>
                        <div className='flex w-full justify-between items-center'>
                            <div>
                                {
                                    "Storlek: " + item.size
                                }
                            </div>
                            <div>
                                {
                                    "Pris: " + item.price
                                } 
                            </div>
                            <div className='flex items-center gap-4'>
                                <button onClick={() => onDecreaseQuantity(item)} className='bg-primary text-white px-4 py-2 rounded-md mr-2'>
                                    -
                                </button>
                                {item.quantity}
                                <button onClick={() => onIncreaseQuantity(item)} className='bg-primary text-white px-4 py-2 rounded-md ml-2'>
                                    +
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </li>
            <div className='mt-8'>
                <Devider custom="w-full" />
            </div>
        </div>
    );
}

export default CartItem;
