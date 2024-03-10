import React from 'react';
import Image from '../../../components/Elements/Image';

const Images = ({ imges }) => {
    return (
        <div className='max-w-lg mt-10 h-full p-4 flex justify-center items-center flex-col'>
            <Image img={imges[0]} custom="" />
        </div>
    );
}

export default Images;
