import React from 'react';
import SecondaryHeading from '../../../components/Elements/Heading/SecondaryHeading';

const SidebarRewards = () => {
    return (
        <div className='w-64'>
            <div className='flex justify-end items-end flex-col gap-8 p-4'>

                <div>
                    <SecondaryHeading heading="Belöningar" />
                    <div className='mt-4 text-end'>
                        check
                    </div>
                </div>

                <div>
                    <SecondaryHeading heading="Nivå 1" />
                    <div className='mt-4 text-end'>
                        check
                    </div>
                </div>

            </div>
        </div>
    );
}

export default SidebarRewards;
