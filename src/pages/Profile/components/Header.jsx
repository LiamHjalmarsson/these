import React from 'react';
import ProgressBar from './Progressbar';
import PrimaryButton from '../../../components/Elements/PrimaryButton';
import Heading from '../../../components/Elements/Heading/Heading';

const Header = ({ randomPoints }) => {
    return (
        <div className='w-full h-96 flex justify-start items-center bg-indigo-900 relative'>

            <div className='w-1/2 p-4'>
                <Heading heading="Hej Välkommen till ditt account" custom="text-white text-4xl" />
            </div>

            <div className='absolute w-1/4 flex flex-col gap-4 p-4 -bottom-1/4 left-1/2 bg-white bg-opacity-90 shadow-middle shadow-primary rounded-md'>

                <h3 className='text-lg font-bold'>
                    Nivå 1
                </h3>

                <div className='flex'>
                    <div className='flex-grow'>
                        Aktiva poäng
                    </div>
                    <div>
                        350
                    </div>
                </div>

                <div className='flex'>
                    <div className='flex-grow'>
                        Värde
                    </div>
                    <div>
                        30 kr
                    </div>
                </div>

                <ProgressBar points={randomPoints} />
{/* 
                <PrimaryButton custom="mx-auto">
                    Visa mer
                </PrimaryButton> */}
            </div>
        </div>
    );
}

export default Header;
