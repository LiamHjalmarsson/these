import React from 'react';
import SecondaryHeading from '../../../components/Elements/Heading/SecondaryHeading';

const SidebarRewards = () => {
    return (
        <div className='w-64'>
            <div className='flex flex-col gap-8 p-4'>

                <div>
                    <SecondaryHeading heading="Belöningar" />
                    <div className='mt-4'>
                            check
                    </div>
                </div>

                <div>
                    <SecondaryHeading heading="Nivå förmåner" />
                    <div className='mt-4'>
                            check
                    </div>
                </div>

            </div>
        </div>
    );
}

export default SidebarRewards;
