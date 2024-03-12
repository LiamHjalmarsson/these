import React from 'react';
import Heading from '../Elements/Heading/Heading';
import img from "/images/newsletter.jpg";
import LinkButton from '../Elements/LinkButton';
import Image from '../Elements/Image';

const Newsletter = () => {
    return (
        <div className='w-full h-[500px] flex gap-8 relative'>
            <div className='h-full w-full bg-slate-950'>
                <Image img={img} custom='w-full h-full object-cover opacity-60' />
            </div>

            <div className='h-full w-full flex flex-col gap-8 justify-center items-center absolute '>
                <div className='p-6 rounded-md bg-secondary bg-opacity-40 gap-4 text-white flex flex-col justify-center items-center max-w-md shadow-middle shadow-secondary'>
                    <Heading heading="Gå med i vårt nyhetsbrev" custom="text-white text-3xl" />
                    <div className='text-center'>
                        Gå med i vårt nyhetsbrev & få möjligheten att skrapa bilden för att få en belöning
                    </div>
                    <LinkButton title="Gå med" link="/nyhetsbrev" />
                </div>
            </div>

        </div>
    );
}

export default Newsletter;
