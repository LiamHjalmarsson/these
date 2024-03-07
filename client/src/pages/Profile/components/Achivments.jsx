import React from 'react';
import Heading from '../../../components/Elements/Heading/Heading';
import useFetch from '../../../hooks/useFetch';

const Achivments = ({ data }) => {
    let { data: achivmentsData } = useFetch("/api/achivments");

    let hasAchievement = (achievementId) => {
        return data.achivments.some((achievement) => achievement._id === achievementId);
    };

    return (
        <div className='h-full w-full items-center flex flex-col gap-8 p-2'>
            <Heading heading="Achivments" />

            <div className='max-w-6xl w-full grid grid-cols-4 gap-12'>
                {
                    achivmentsData && (
                        achivmentsData.achivments.map((achivment, index) => (
                            <div key={index} className='w-full items-center flex flex-col group'>
                                <div className={`w-full h-48 ${hasAchievement(achivment._id) ? "bg-green-500" : "bg-gray-300"} relative`}>
                                    <div className=' group-hover:opacity-100 opacity-0 bg-slate-500 absolute h-full w-full'> </div>
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
