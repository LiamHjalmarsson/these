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
                <div className='flex w-full justify-around max-w-4xl gap-4 mt-2'>
                    <div>
                        <h3>
                            Butiker
                        </h3>
                    </div>
                    <div>
                        <h3>
                            KundService
                        </h3>
                    </div>
                </div>
            </div>
        </footer>
    );
}

export default Footer;
