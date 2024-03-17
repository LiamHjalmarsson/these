import React from 'react';
import { textUtilUpper } from '../../../../utils/textUtil';

const CartItem = ({ item }) => {
    return (
        <li className='flex pr-4'>
            <div className='flex-grow'>
                <span>
                    {
                        textUtilUpper(item.name) + " - "
                    }
                </span>
                <span>
                    {
                        item.size.toUpperCase() + " - " 
                    }
                </span>
                <span>
                    {item.price} kr
                </span>
            </div>
            <div>
                {item.quantity}
            </div>
        </li>
    );
}

export default CartItem;
