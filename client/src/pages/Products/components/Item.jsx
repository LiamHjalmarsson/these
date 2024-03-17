import React from 'react';
import { Link } from 'react-router-dom';
import Image from '../../../components/Elements/Image';
import { textUtilUpper } from '../../../utils/textUtil';

const Item = ({ item }) => {
    return (
        <Link to={`/products/${item._id}`} className='group max-w-xs h-96 mb-8 relative'>
            <div className='flex items-center z-40 text-xl absolute -bottom-4 right-4 px-8 py-6 rounded-md shadow-md shadow-black bg-opacity-90 bg-white'>
                {
                    textUtilUpper(item.category)
                }
            </div>
            <div className=' absolute p-4 flex justify-center items-center -top-2 z-10 -left-4 bg-white bg-opcaity-90 shadow-middle rounded-md shadow-primary '>
                {
                    item.price + " -: Sek"
                }
            </div>
            <div className='h-full w-full overflow-hidden shadow-middle shadow-black rounded-md'>
                <Image img={item.image} custom='h-full  w-full group-hover:scale-105 group-hover:opacity-90' />
            </div>
        </Link>
    );
}

export default Item;
