import React from 'react';
import { Link, useParams } from 'react-router-dom';

const Item = ({item}) => {
    return (
        <Link to={`/products/${item._id}`} className='group flex-grow w-80 h-sm max-h-[600px] mb-8 relative'>
            <div className='flex items-center text-xl absolute -bottom-4 right-4 px-8 py-6 rounded-md shadow-md shadow-black bg-opacity-90 bg-white'>
                <div>
                    {
                        item.category
                    }
                </div>
            </div>
            <div className=' absolute p-4 flex justify-center items-center top-0 left-0 bg-primary text-white'>
                {
                    item.itemCount 
                }
            </div>
            <img src={item.image} className='w-full h-full object-cover shadow-md shadow-black rounded-md' />
        </Link>
    );
}

export default Item;
