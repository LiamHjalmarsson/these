import React from 'react';
import ProgressBar from './Progressbar';
import Heading from '../../../components/Elements/Heading/Heading';

const Header = ({ data }) => {
    console.log(data);
    return (
        <div className='w-full h-96 flex justify-start items-center bg-indigo-900 relative'>
            <div className='w-1/2 m-auto p-4'>
                <Heading heading={`Hej ${data.name} Välkommen till ditt account`} custom="text-white text-4xl w-96" />
            </div>

            <div className='absolute w-1/4  flex flex-col gap-4 p-4 -bottom-1/4 left-1/2 bg-white bg-opacity-90 shadow-middle shadow-primary rounded-md'>

                <h3 className='text-lg font-bold'>
                    Nivå 1
                </h3>

                <div className='flex'>
                    <div className='flex-grow'>
                        Aktiva poäng
                    </div>
                    <div>
                        {
                            data.activePoints
                        }
                    </div>
                </div>

                <div className='flex'>
                    <div className='flex-grow'>
                        Värde
                    </div>
                    <div>
                        {
                            data.activePoints + " kr"
                        }
                    </div>
                </div>

                <ProgressBar points={data.activePoints} />
            </div>
        </div>
    );
}

export default Header;
