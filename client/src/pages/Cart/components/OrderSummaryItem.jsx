import React from 'react';

const OrderSummaryItem = ({ label, value }) => (
    <div className='flex'>
        <div className='flex-grow'>{label}</div>
        <div>{value}</div>
    </div>
);

export default OrderSummaryItem;
