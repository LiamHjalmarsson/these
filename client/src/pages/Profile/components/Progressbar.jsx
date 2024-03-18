import React from 'react';

const ProgressBar = ({ points, nextRank }) => {
    let fillWidth = (points / nextRank) * 100;

    return (
        <div className='p-4'>
            <div className="w-full h-8 bg-white bg-opacity-80 rounded-md shadow-primary shadow-middle">
                <div className="h-full bg-green-400 max-w-full rounded-md" style={{ width: `${fillWidth}%` }}></div>
            </div>
            <div className='flex justify-between px-2'>
                <div>
                    0
                </div>
                <div>
                    {
                        nextRank
                    }
                </div>
            </div>
        </div>
    );
};

export default ProgressBar;