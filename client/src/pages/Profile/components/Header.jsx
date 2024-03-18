import React from 'react';
import ProgressBar from './Progressbar';
import Heading from '../../../components/Elements/Heading/Heading';
import useFetch from '../../../hooks/useFetch';

const Header = ({ user, nextRank, updatedUser }) => {
    let lastRankId = updatedUser.user ? updatedUser.user.rank[updatedUser.user.rank.length - 1] : user.rank[user.rank.length - 1];

    let { data } = useFetch(`/api/rank/${lastRankId}`);

    return (
        <>
            {
                data && (
                    <div className='w-full h-96 flex justify-start items-center relative'>
                        <div className='h-full w-full  absolute'>
                            <div className={`bg-gradient-to-br to-primary h-full w-full ${data.rank.rank === "Nivå 1" ? "from-orange-500" : ""} ${data.rank.rank === "Nivå 2" ? "from-slate-500" : ""} ${data.rank.rank === "Nivå 3" ? "from-yellow-500" : ""} ${data.rank.rank === "Nivå 4" ? "from-blue-500" : ""} `}></div>
                        </div>

                        <div className='w-96 flex lg:w-1/2 justify-center p-4 z-10'>
                            <Heading heading={`Hej ${user.name}, Välkommen till ditt konto`} custom="text-white text-2xl md:text-3xl lg:text-4xl w-96" />
                        </div>

                        <div className={`absolute w-1/4 min-w-80 font-bold flex flex-col gap-4 p-4 -bottom-1/4 left-1/4 lg:left-1/2 bg-opacity-80 shadow-middle shadow-primary rounded-md ${data.rank.rank === "Nivå 1" ? "bg-orange-200" : ""} ${data.rank.rank === "Nivå 2" ? "bg-slate-300" : ""} ${data.rank.rank === "Nivå 3" ? "bg-yellow-400" : ""} ${data.rank.rank === "Nivå 4" ? "bg-blue-200" : ""}`}>
                            <h3 className='text-2xl'>
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
                                        user.activePoints + " poäng"
                                    }
                                </div>
                            </div>

                            <div className='flex'>
                                <div className='flex-grow'>
                                    Värde av poäng
                                </div>
                                <div>
                                    {
                                        Math.round(user.activePoints / 10) + " kr"
                                    }
                                </div>
                            </div>

                            <ProgressBar points={user.totalPointsEarned} nextRank={nextRank.thresholdPoints ? nextRank.thresholdPoints : " Max "} />
                        </div>
                    </div>
                )
            }
        </>
    );
}

export default Header;
