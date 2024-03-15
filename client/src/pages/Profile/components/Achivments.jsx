import React from 'react';
import Heading from '../../../components/Elements/Heading/Heading';
import { IoLockClosedOutline } from "react-icons/io5";

const Achivments = ({ data, achivment }) => {
    
    let hasAchievement = (name) => {
        return data.achivments.some((achievement) => achievement.name === name);
    };

    return (
        <div className='h-full w-full items-center flex flex-col gap-8 p-2'>
            <Heading heading="Prestationer" />

            <div className='max-w-7xl w-full flex flex-wrap gap-12 justify-center'>
                {
                    achivment && (
                        achivment.achivments.map((achivment, index) => (
                            <div key={index} className='w-60 shadow-middle shadow-primary items-center flex flex-col group'>
                                <div className='w-full h-full relative'>
                                    <img className={`w-full h-full`} src={achivment.image} />
                                    <div className={`${hasAchievement(achivment.name) ? "hidden" : ""} flex justify-center items-center absolute h-full w-full top-0 bg-black bg-opacity-60`}>
                                        <IoLockClosedOutline className='text-white text-7xl font-bold'/>
                                    </div>
                                </div>
                                <div className='flex flex-grow gap-2 p-2 text-sm'>
                                    <span>
                                        {
                                            achivment.name.charAt(0).toUpperCase() + achivment.name.slice(1)
                                        }
                                    </span>
                                    <span>
                                        -
                                    </span>
                                    <span>
                                        {achivment.points} p
                                    </span>
                                </div>
                            </div>
                        ))
                    )
                }
            </div>
        </div>
    );
}

export default Achivments;
