import React from 'react';
import Heading from '../../../components/Elements/Heading/Heading';
import SecondaryButton from '../../../components/Elements/SecondaryButton';

const Recensioner = ({data}) => {
    let db = [
        {
            user: "first purchase",
            points: 100,
            comment: "true",
            date: "2022-03-05",
            starRating: 5
        },
        {
            user: "second purchase",
            points: 80,
            comment: "good product",
            date: "2022-03-06",
            starRating: 4
        },
    ];

    return (
        <div className='h-full w-full items-center flex flex-col gap-8 p-2'>
            <Heading heading="Recensioner" />

            <div className='max-w-6xl w-full grid grid-cols-2 gap-12'>
                {
                    db.map((item, index) => (
                        <div key={index} className='w-full items-center flex flex-col group p-6 border border-primary rounded-lg'>
                            <div className='flex justify-between w-full'>
                                <div>
                                    Date: {item.date}
                                </div>
                                <div>
                                    Star Rating: {item.starRating}
                                </div>
                            </div>
                            <div className='w-full mt-2'>
                                Comment: {item.comment}
                            </div>
                            <div className='flex gap-6 mt-4'>
                                <SecondaryButton custom="border-primary text-primary">
                                    Radera
                                </SecondaryButton>
                                <SecondaryButton custom="border-primary text-primary">
                                    Uppdatera
                                </SecondaryButton>
                            </div>
                        </div>
                    ))
                }
            </div>
        </div>
    );
}

export default Recensioner;
