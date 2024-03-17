import React, { useEffect, useState } from 'react';
import Heading from '../../../components/Elements/Heading/Heading';
import ProgressBar from './Progressbar';
import useFetch from '../../../hooks/useFetch';

const Rewards = ({ data }) => {
    let { data: ranksData } = useFetch(`/api/rank`);
    let [unlockedRanks, setUnlockedRanks] = useState([]);
    let [lockedRanks, setLockedRanks] = useState([]);

    useEffect(() => {
        if (ranksData) {
            let unlockedRanks = ranksData.ranks.filter(rank => data.rank.includes(rank._id));
            let lockedRanks = ranksData.ranks.filter(rank => !data.rank.includes(rank._id));
            setUnlockedRanks(unlockedRanks);
            setLockedRanks(lockedRanks);
        }
    }, [ranksData, data]);


    return (
        <div className='h-1/2 flex flex-col justify-between p-2'>

            <div className='flex flex-col gap-4 w-full items-center'>
                <Heading heading="Din insamlade poäng" />

                <div className='mt-4 w-96 flex flex-col gap-4'>
                    <div className='flex w-full gap-8 mt-4'>
                        <h3 className='flex-grow'>
                            Insamlade poäng
                        </h3>
                        <div>
                            {data.activePoints}
                        </div>
                    </div>
                    <div className='flex w-full gap-8'>
                        <h3 className='flex-grow'>
                            Poäng värde
                        </h3>
                        <div>
                            {data.activePoints / 10} kr 
                        </div>
                    </div>


                    <h3 className='text-4xl font-bold mt-8'>
                        Insamlade rabbater
                    </h3>
                    {
                        data.discounts.length > 0 && (
                            <div className='flex w-full flex-col gap-2 mt-4'>
                                {
                                    data.discounts.map((discount, index) => (
                                        <div key={index} className='flex gap-8'>
                                            <div className='flex-grow'>
                                                {discount.category}
                                            </div>
                                            <div>
                                                {discount.code}
                                            </div>
                                        </div>
                                    ))
                                }
                            </div>
                        )
                    }
                </div>
            </div>

            <div className='flex flex-wrap justify-center gap-8 w-full my-12 overflow-x-auto p-8'>

                {
                    unlockedRanks.map((rank, index) => (
                        <div className='p-4 shadow-middle shadow-primary rounded-md w-96' key={index}>
                            <Heading heading={`Uppnåt ${rank.rank}`} />
                            <div className='mt-4 overflow-hidden rounded-md'>
                                <ProgressBar points={data.totalPointsEarned} nextRank={rank.nextRank} />
                            </div>
                            <div className='flex flex-col gap-4 mt-4'>
                                {
                                    rank.benefits.map((benefit, index) => (
                                        <div className='p-4 shadow-middle shadow-primary rounded-md hover:bg-primary hover:bg-opacity-10 transition duration-300 cursor-pointer ' key={index}>
                                            <h3 className='text-lg text-center'>
                                                {benefit.name}
                                            </h3>
                                            <p className='text-sm mt-2 text-center'>
                                                {
                                                    benefit.description
                                                }
                                            </p>
                                        </div>
                                    ))
                                }
                            </div>
                        </div>
                    ))
                }

                {
                    lockedRanks.map((rank, index) => (
                        <div className='p-4 shadow-middle shadow-primary rounded-md w-96 opacity-50' key={index}>
                            <Heading heading={`${rank.rank}`} />
                            <div className='mt-4 overflow-hidden rounded-md'>
                                <ProgressBar points={data.totalPointsEarned} nextRank={rank.nextRank} />
                            </div>
                            <div className='flex flex-col gap-4 mt-4'>
                                {rank.benefits.map((benefit, index) => (
                                    <div className='p-4 shadow-middle shadow-primary rounded-md' key={index}>
                                        <h3 className='text-lg text-center'>
                                            {benefit.name}
                                        </h3>
                                    </div>
                                ))}
                            </div>
                        </div>
                    ))
                }
            </div>
        </div>
    );
}

export default Rewards;
