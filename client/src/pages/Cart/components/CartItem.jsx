import React from 'react';
import Devider from '../../../components/Elements/Devider';

const CartItem = ({ item }) => {
    return (
        <div className='w-full'>
            <li className='flex gap-8 w-full px-10'>
                <img src={item.image} className=' w-40 h-40' />
                <div className='flex-grow flex justify-between items-center px-10'>
                    <h3>
                        {item.name}
                    </h3>
                    <div>
                        {
                            item.price
                        }
                    </div>
                    <div>
                        {
                            item.quantity
                        }
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
