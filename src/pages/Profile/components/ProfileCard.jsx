import React from 'react';
import PrimaryButton from '../../../components/Elements/PrimaryButton';

const ProfileCard = ({heading, details, icon}) => {
    
    return (
        <div className='p-2 relative'>
            <div className=' bg-primary p-4 text-white rounded-md shadow-middle shadow-primary absolute -top-4 left-10'>
                {
                    icon
                }
            </div>

            <div className='p-4 border border-primary rounded-md'>
                <h2 className='text-2xl text-center'>
                    {heading}
                </h2>
                <div className='flex gap-8 mt-2 items-center'>
                    <div>
                        {
                            details
                        }
                    </div>
                    <PrimaryButton>
                        Visa mer
                    </PrimaryButton>
                </div>
            </div>
        </div>
    );
}

export default ProfileCard;
