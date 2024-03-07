import React from 'react';

const ProgressBar = ({ points }) => {
    let fillWidth = (points / 1000) * 100;

    return (
        <div>
            <div className="w-full h-8 bg-gray-500 rounded-md">
                <div className="h-full bg-blue-500 rounded-md" style={{ width: `${fillWidth}%` }}></div>
            </div>
            <div className='flex justify-between px-2'>
                <div>
                    0
                </div>
                <div>
                    1000
                </div>
            </div>
        </div>
    );
};

export default ProgressBar;