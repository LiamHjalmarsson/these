import React from 'react';
import { FaArrowRight } from "react-icons/fa";

const SeasonBottomCard = () => {
    return (
        <div className='text-xl absolute -bottom-4 -right-4 shadow-middle shadow-primary bg-opacity-90 bg-white rounded-md px-8 py-6' >
            <div className='flex items-center gap-8 group'>
                <div className='flex-grow'>
                    Upptäck våren
                </div>
                <div>
                    <FaArrowRight />
                </div>
            </div>
        </div>
    );
}

export default SeasonBottomCard;
