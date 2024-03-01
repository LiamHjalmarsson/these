import React from 'react';

const ProgressBar = ({ points }) => {
    let progressWidth = points + '%';

    let fillWidth = Math.min(points, 100) + '%';

    return (
        <div className="w-64 h-8 bg-gray-500 relative">
            <div className="h-full bg-blue-500" style={{ width: progressWidth }}></div>

            <div className={`h-full absolute top-0 left-0 bg-blue-500`} style={{ width: fillWidth }}></div>
        </div>
    );
};

export default ProgressBar;