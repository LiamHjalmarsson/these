import React from 'react';
import { Link } from 'react-router-dom';

const Category = ({item}) => {
    return (
        <Link to={`/products/${item.id}`} className='group flex-grow h-64 lg:h-96 mb-8 relative'>
            <div className='flex items-center text-xl absolute -bottom-4 right-4 px-8 py-6 rounded-md shadow-md shadow-black bg-opacity-90 bg-white'>
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

export default Category;
