import React from 'react';
import Image from '../../../components/Elements/Image';

const Images = ({ imges }) => {
    return (
        <div className='w-full h-full p-4 flex  justify-center items-center flex-col'>
            <Image img={imges[0]} custom="w-full h-1/2" />
            <div className='flex gap-4 h-40 mt-4'>
                {imges.map((img, index) => (
                    <Image key={index} img={img} custom="w-1/3 h-full" />
                ))}
            </div>
        </div>
    );
}

export default Images;
