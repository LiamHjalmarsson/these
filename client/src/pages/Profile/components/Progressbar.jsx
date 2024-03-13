import React from 'react';

const ProgressBar = ({ points, nextRank }) => {
    let fillWidth = (points / nextRank.nextRank) * 100;

    return (
        <>
            <div className="w-full h-8 bg-gray-500 rounded-md">
                <div className="h-full bg-blue-500 rounded-md" style={{ width: `${fillWidth}%` }}></div>
            </div>
            <div className='flex justify-between px-2'>
                <div>
                    0
                </div>
                <div>
                    {
                        nextRank.nextRank
                    }
                </div>
            </div>
        </>
    );
};

export default ProgressBar;