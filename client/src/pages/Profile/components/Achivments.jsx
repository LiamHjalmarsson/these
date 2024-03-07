import React from 'react';
import Heading from '../../../components/Elements/Heading/Heading';
import useFetch from '../../../hooks/useFetch';
import { IoLockClosedOutline } from "react-icons/io5";

const Achivments = ({ data }) => {
    let { data: achivmentsData } = useFetch("/api/achivments");

    let hasAchievement = (name) => {
        return data.achivments.some((achievement) => achievement.name === name);
    };

    return (
        <div className='h-full w-full items-center flex flex-col gap-8 p-2'>
            <Heading heading="Achivments" />

            <div className='max-w-6xl w-full grid grid-cols-4 gap-12'>
                {
                    achivmentsData && (
                        achivmentsData.achivments.map((achivment, index) => (
                            <div key={index} className='w-full items-center flex flex-col group'>
                                <div className='w-full h-full relative'>
                                    <img className={`w-full h-full`} src={achivment.image} />
                                    <div className={`${hasAchievement(achivment.name) ? "hidden" : ""} flex justify-center items-center absolute h-full w-full top-0 bg-black bg-opacity-60`}>
                                        <IoLockClosedOutline className='text-white text-7xl font-bold'/>
                                    </div>
                                </div>
                                <div className='flex flex-grow gap-2'>
                                    <span>
                                        {achivment.name}
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
