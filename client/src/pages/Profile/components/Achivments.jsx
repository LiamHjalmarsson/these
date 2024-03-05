import React from 'react';
import Heading from '../../../components/Elements/Heading/Heading';

const Achivments = () => {  
    let db = [
        {
            ach: "first purchase",
            points: 100,
            icon: "",
            unlock: true
        },
        {
            ach: "first comment",
            points: 100,
            icon: "",
            unlock: false
        },
        {
            ach: "member",
            points: 100,
            icon: "",
            unlock: false
        }
    ];

    return (
        <div className='h-full w-full items-center flex flex-col gap-8 p-2'>
            <Heading heading="Achivments" />

            <div className='max-w-6xl w-full grid grid-cols-4 gap-12'>
                {
                    db.map((item, index) => (
                        <div key={index} className='w-full items-center flex flex-col group'>
                            <div className={`w-full h-48 ${item.unlock ? "bg-amber-500" : "bg-amber-500 bg-opacity-60"} relative`}>
                                <div className=' group-hover:opacity-100 opacity-0 bg-slate-500 absolute h-full w-full'> </div>
                            </div>
                            <div className='flex flex-grow gap-2'>
                                <span>
                                    {item.ach}
                                </span>
                                <span>
                                    -
                                </span>
                                <span>
                                    {item.points} p
                                </span>
                            </div>
                        </div>
                    ))
                }
            </div>
        </div>
    );
}

export default Achivments;
