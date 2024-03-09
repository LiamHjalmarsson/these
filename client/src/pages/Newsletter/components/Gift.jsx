import React, { useState } from 'react';
import image from "/images/man.jpg"
import { FaQuestion } from "react-icons/fa6";

const Gift = ({ gift, index, handleGiftSelection, selected }) => {
    const handleClick = () => {
        handleGiftSelection(index);
    };

    return (
        <li className={`group w-80 h-sm max-h-[600px] ${selected ? 'bg-blue-500' : ''}`} onClick={handleClick}>
            <div className='flex items-center text-xl h-96 rounded-md shadow-middle relative shadow-black bg-opacity-90 bg-primary'>
                <img src={image} className='w-full h-full object-cover shadow-md shadow-black rounded-md absolute' />
                <div className='w-full h-full flex justify-center items-center text-white font-bold text-7xl rounded-md z-10 bg-primary'>
                    {selected ? <img src={gift.image} alt={`Gift ${gift.category}`} className="w-full h-full object-cover" /> : <FaQuestion />}
                </div>
                <div className=' absolute bottom-0 p-4 text-center w-full bg-white rounded-b-md'>
                    {"Överaskning " + gift.category}
                </div>
            </div>
        </li>
    );
};

export default Gift;
