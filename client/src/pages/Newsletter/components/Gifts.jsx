import React, { useState } from 'react';
import Gift from './Gift';

const Gifts = ({ gifts, handleGiftSelection, selectedGift, submitted }) => {

    return (
        <ul className='flex gap-12 w-full px-10 justify-center items-center'>
            {gifts.map((gift, index) => (
                <Gift
                    key={index}
                    gift={gift}
                    handleGiftSelection={handleGiftSelection}
                    selected={gift.category === selectedGift.category}
                    submitted={submitted}
                />
            ))}
        </ul>
    );
};

export default Gifts;