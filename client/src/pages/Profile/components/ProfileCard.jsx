import React from 'react';
import LinkButton from '../../../components/Elements/LinkButton';

const ProfileCard = ({ heading, details, icon, link }) => {

    return (
        <div className='p-2 relative'>
            <div className=' bg-primary p-4 text-white rounded-md shadow-middle shadow-primary absolute -top-4 left-10'>
                {
                    icon
                }
            </div>

            <div className='p-4 border border-primary rounded-md h-full flex flex-col gap-4 justify-center items-center'>
                <h2 className='text-2xl text-center'>
                    {heading}
                </h2>
                <div className='flex-grow text-center'>
                    {
                        details
                    }
                </div>
                <LinkButton link={`/profile/${link}`} title="Visa mer" custom="border-primary text-primary w-1/2 hover:bg-primary hover:text-white transtion duration-300" />
            </div>
        </div>
    );
}

export default ProfileCard;
