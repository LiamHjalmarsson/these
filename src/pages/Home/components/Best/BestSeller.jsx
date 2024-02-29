import React from 'react';
import { Link } from 'react-router-dom';

const BestSeller = ({item}) => {
    return (
        <Link to={`/products/${item.id}`} className='h-[450px] group max-w-96 min-w-64 flex-grow relative rounded-md'>
            <div className='flex items-center text-xl absolute -bottom-4 left-28 px-8 py-6 rounded-md shadow-md shadow-black bg-opacity-90 bg-white'>
                <div>
                    {
                        item.title
                    }
                </div>
            </div>
            <img src={item.img} className='w-full h-full object-cover shadow-md shadow-black rounded-md' />
        </Link>
    );
}

export default BestSeller;
