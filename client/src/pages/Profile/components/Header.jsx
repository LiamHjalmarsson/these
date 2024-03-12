import React from 'react';
import ProgressBar from './Progressbar';
import Heading from '../../../components/Elements/Heading/Heading';
import Image from '../../../components/Elements/Image';
import img from "/images/x.jpg"
import useFetch from '../../../hooks/useFetch';

const Header = ({ user }) => {
    let { data } = useFetch(`/api/rank/${user.rank}`);

    return (
        <div className='w-full h-96 flex justify-start items-center relative'>
            <div className='h-full w-full bg-slate-950 absolute'>
                <Image img={img} custom='w-full h-full opacity-60 group-hover:scale-105 group-hover:opacity-90 w-full h-full object-cover' />
            </div>

            <div className='w-96 flex lg:mx-auto p-4 z-10'>
                <Heading heading={`Hej ${user.name} Välkommen till ditt account`} custom="text-white text-2xl md:text-3xl lg:text-4xl w-96" />
            </div>

            <div className='absolute w-1/4 min-w-96 flex flex-col gap-4 p-4 -bottom-1/4 left-1/4 lg:left-1/2 bg-white bg-opacity-90 shadow-middle shadow-primary rounded-md'>
                <h3 className='text-lg font-bold'>
                    {
                        data && data.rank.rank
                    }
                </h3>

                <div className='flex'>
                    <div className='flex-grow'>
                        Samlade poäng
                    </div>
                    <div>
                        {
                            user.activePoints + " kr"
                        }
                    </div>
                </div>

                {
                    data && <ProgressBar points={user.totalPointsEarned} rank={data.rank} />
                }
            </div>
        </div>
    );
}

export default Header;
