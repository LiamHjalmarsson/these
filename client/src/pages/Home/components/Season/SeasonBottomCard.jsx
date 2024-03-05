import React from 'react';
import { Link } from 'react-router-dom';
import { FaArrowRight } from "react-icons/fa";

const SeasonBottomCard = ({link}) => {
    return (
        <div className='flex items-center gap-8 text-xl absolute -bottom-4 -right-4 shadow-md shadow-black bg-opacity-90 bg-white rounded-md px-8 py-6' >
            <div className=''>
                Upptäck våren
            </div>
            <div>
                <FaArrowRight />
            </div>
        </div>
    );
}

export default SeasonBottomCard;
