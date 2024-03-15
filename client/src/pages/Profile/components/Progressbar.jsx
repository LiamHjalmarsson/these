import React from 'react';

const ProgressBar = ({ points, nextRank }) => {
    let fillWidth = (points / nextRank) * 100;

    return (
        <div>
            <div className="w-full h-8 bg-primary bg-opacity-80 rounded-md">
                <div className="h-full bg-green-400 rounded-md" style={{ width: `${fillWidth}%` }}></div>
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