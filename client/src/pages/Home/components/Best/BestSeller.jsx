import React from 'react';
import { Link } from 'react-router-dom';
import Image from '../../../../components/Elements/Image';
import { textUtilUpper } from '../../../../utils/textUtil';

const BestSeller = ({ item }) => {
    return (
        <div className='flex-grow flex flex-col max-w-sm'>
            <Link to={`/products/${item._id}`} className='group w-full mb-8 relative flex h-80 '>
                <div className='flex items-center flex-col text-xl absolute z-10 rounded-md -bottom-4 right-4 px-6 py-4  shadow-middle shadow-primary bg-opacity-90 bg-white'>
                    <div>
                        {
                            textUtilUpper(item.name)
                        }
                    </div>
                    <div className='text-sm'>
                        {
                            item.price + " kr"
                        }
                    </div>
                </div>
                <div className='h-full w-full overflow-hidden shadow-middle shadow-black rounded-md'>
                    <Image img={item.image[0]} custom='group-hover:scale-105 group-hover:opacity-90 w-full h-full object-cover' />
                </div>
            </Link>
        </div>
    );
}

export default BestSeller;
