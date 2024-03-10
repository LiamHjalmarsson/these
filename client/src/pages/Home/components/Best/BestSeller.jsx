import React from 'react';
import { Link } from 'react-router-dom';
import Image from '../../../../components/Elements/Image';

const BestSeller = ({item}) => {
    return (
        <Link to={`/products/${item._id}`} className='group flex-grow max-w-sm mb-8 relative'>
            <div className='flex items-center text-xl absolute z-10 rounded-md -bottom-4 right-4 px-8 py-6 shadow-middle shadow-primary bg-opacity-90 bg-white'>
                <div>
                    {
                        item.name.charAt(0).toUpperCase() + item.name.slice(1)
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
