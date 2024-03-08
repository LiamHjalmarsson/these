import React from 'react';
import Heading from '../../Elements/Heading/Heading';

const Footer = () => {
    return (
        <footer className='w-full bg-primary p-8 text-white'>
            <div className='flex flex-col justify-center items-center gap-4 my-4'>
                <Heading heading="LD Klädder" custom="text-4xl text-white" />
                <p className='text-sm text-center'>
                    Stil, kvalitet och komfort i varenda detalj.
                </p>
            </div>
        </footer>
    );
}

export default Footer;
