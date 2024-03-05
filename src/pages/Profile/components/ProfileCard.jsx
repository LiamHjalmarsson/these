import React from 'react';
import LinkButton from '../../../components/Elements/LinkButton';

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
                <div className='flex flex-wrap gap-8 mt-2 justify-center items-center'>
                    <div className='flex-grow text-center'>
                        {
                            details
                        }
                    </div>
                    <LinkButton link="/profile/profile" title="Visa mer" custom="border-primary text-primary " />
                </div>
            </div>
        </div>
    );
}

export default ProfileCard;
