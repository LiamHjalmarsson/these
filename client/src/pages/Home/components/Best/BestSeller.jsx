import React from 'react';
import { Link } from 'react-router-dom';
import Image from '../../../../components/Elements/Image';

const BestSeller = ({item}) => {
    return (
        <Link to={`/products/${item._id}`} className='group flex-grow w-80 h-sm max-h-[600px] mb-8 relative'>
            <div className='flex items-center text-xl absolute z-10 rounded-md -bottom-4 right-4 px-8 py-6 shadow-md shadow-black bg-opacity-90 bg-white'>
                <div>
                    {
                        item.name
                    }
                </div>
            </div>
            <div className='h-full w-full overflow-hidden shadow-middle shadow-black rounded-md'>
                <Image img={item.image[0]} custom='group-hover:scale-105 group-hover:opacity-90 w-full h-full object-cover' />
            </div>
        </Link>
    );
}

export default BestSeller;
