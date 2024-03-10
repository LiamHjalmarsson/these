import React from 'react';
import { Link, useParams } from 'react-router-dom';
import Image from '../../../components/Elements/Image';
import { capitalizeFirstLetter } from '../../../utils/stringUtils';

const Category = ({ item }) => {
    let { id } = useParams()

    return (
        <Link to={`/gender/${id}/${item._id}`} className='group flex-grow max-w-sm mb-8 relative'>
            <div className='flex items-center text-xl absolute -bottom-4 right-4 px-8 py-6 z-10 rounded-md shadow-middle shadow-primary bg-opacity-90 bg-white'>
                <div>
                    {
                        capitalizeFirstLetter(item.category)
                    }
                </div>
            </div>
            <div className=' absolute p-4 flex justify-center items-center -top-2 z-10 -left-4 bg-white bg-opcaity-90 shadow-middle rounded-md shadow-primary '>
                {
                    item.itemCount
                }
            </div>
            <div className='h-full w-full overflow-hidden shadow-middle shadow-black rounded-md'>
                <Image img={item.image} custom='group-hover:scale-105 group-hover:opacity-90' />
            </div>
        </Link>
    );
}

export default Category;
