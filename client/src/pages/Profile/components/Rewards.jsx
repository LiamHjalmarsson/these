import React from 'react';
import Heading from '../../../components/Elements/Heading/Heading';
import ProgressBar from './Progressbar';

const Rewards = ({data, nextRank}) => {
    return (
        <div className='h-1/2 flex flex-col justify-between gap-8 p-2 w-1/2'>
            <div className='flex flex-col gap-4 w-full items-center'>
                <Heading heading="Din insamlade poäng" />
                <div className='flex flex-col w-96'>
                    {/* <ProgressBar points={data.activePoints} /> */}
                    <div className='w-full flex justify-between px-2'>
                        <div>
                            0
                        </div>
                        <div>
                            1000
                        </div>
                    </div>
                </div>
            </div>

            <div className='flex flex-col gap-4 w-full items-center'>
                <Heading heading={`Din ${"H"}`} />
                <div className='flex flex-col w-96'>
                    {/* <ProgressBar points={data.totalPointsEarned} nextRank={nextRank} /> */}
                    <div className='w-full flex justify-between px-2'>
                        <div>
                            0
                        </div>
                        <div>
                            2000
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Rewards;
