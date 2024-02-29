import React from 'react';
import Heading from '../Heading/Heading';

const Banner = ({ heading, img }) => {
    return (
        <div className='h-screen w-full relative'>
            <img src={img} className='w-full h-full object-cover object-center' />

            <div className='absolute top-0 left-0 h-full w-full flex justify-center items-center bg-black bg-opacity-40'>
                <Heading heading={heading} custom={true} />
            </div>
        </div>
    );
}

export default Banner;
