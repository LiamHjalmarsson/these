import React, { useEffect, useState } from 'react';
import Heading from '../../../components/Elements/Heading/Heading';
import ProgressBar from './Progressbar';
import useFetch from '../../../hooks/useFetch';

const Rewards = ({ data }) => {
    let { data: ranksData } = useFetch(`/api/rank`);
    let [rank, setRank] = useState({});

    useEffect(() => {

        if (ranksData) {
            let lastRank = ranksData.ranks[ranksData.ranks.length - 1];
            setRank(lastRank);
        }
    }, [ranksData]);

    console.log(ranksData);
    return (
        <div className='h-1/2 flex flex-col justify-between p-2'>
            <div className='flex flex-col gap-4 w-full items-center'>
                <Heading heading="Din insamlade poäng" />
                <div className='mt-4 w-96'>
                    <div className='flex w-full gap-8'>
                        <h3 className='flex-grow'>
                            Totalt antal poäng insamlade
                        </h3>
                        <div>
                            {
                                data.totalPointsEarned
                            }
                        </div>
                    </div>
                    <div className='flex w-full gap-8 mt-4'>
                        <h3 className='flex-grow'>
                            Poäng du kan använda på ditt köp
                        </h3>
                        <div>
                            {
                                data.activePoints
                            }
                        </div>
                    </div>
                    {
                        data.discounts.length > 0 && (

                            <div className='flex w-full flex-col gap-2 mt-4'>
                                <h3 className='flex-grow'>
                                    Dina insamlade rabbater
                                </h3>
                                {
                                    data.discounts.map((discount, index) => (
                                        <div key={index}>
                                            {
                                                discount
                                            }
                                        </div>
                                    ))
                                }
                            </div>
                        )
                    }
                </div>
            </div>

            {
                ranksData && rank && (
                    <div className='flex flex-col gap-4 w-full items-center my-12'>
                        <Heading heading={`Din ${rank.rank}`} />
                        <div className='flex flex-col w-96 mt-4 overflow-hidden rounded-md'>
                            <ProgressBar points={data.totalPointsEarned} nextRank={rank.nextRank} />
                        </div>
                        <div className='grid grid-cols-3 gap-12 mt-4'>
                            {
                                ranksData && ranksData.ranks.map((rank, index) => (
                                    <div>
                                        <h3 className='text-center mb-4 text-xl font-semibold'> 
                                            {rank.rank}
                                        </h3>
                                        <div className='flex flex-col gap-4' key={index}>
                                            {
                                                rank.benefits.map((benefit, index) => (
                                                    <div className='p-4 shadow-middle shadow-primary rounded-md' key={index}>
                                                        <h3 className='text-lg text-center'>
                                                            {
                                                                benefit.name
                                                            }
                                                        </h3>
                                                    </div>
                                                ))
                                            }
                                        </div>
                                    </div>
                                ))
                            }
                        </div>
                    </div>
                )
            }
        </div>
    );
}

export default Rewards;
