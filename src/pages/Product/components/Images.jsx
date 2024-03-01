import React from 'react';
import Image from '../../../components/Elements/Image';

const Images = ({img}) => {
    return (
        <div className='w-full h-full p-4 flex flex-col'>
            <Image img={img} custom="w-full h-full" />
            <div className='flex gap-4 h-40 mt-4'>
                <Image img={img} custom="w-1/3 h-full" />
                <Image img={img} custom="w-1/3 h-full" />
                <Image img={img} custom="w-1/3 h-full" />
            </div>
        </div>
    );
}

export default Images;
