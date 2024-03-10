import React from 'react';

const CartOrderDetail = ({text, detail}) => {
    return (
        <div className='flex'>
            <div className='flex-grow'>
                {text}
            </div>
            <div>
                {detail}
            </div>
        </div>
    );
}

export default CartOrderDetail;
