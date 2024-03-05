import React from 'react';

const ProgressBar = ({ points }) => {
    let progressWidth = points + '%';

    let fillWidth = Math.min(points, 100) + '%';

    return (
        <div className="w-full h-8 bg-gray-500 relative rounded-md">
            <div className="h-full bg-blue-500 rounded-md" style={{ width: progressWidth }}></div>

            <div className={`h-full absolute top-0 left-0 bg-blue-500 rounded-l-md`} style={{ width: fillWidth }}></div>
        </div>
    );
};

export default ProgressBar;