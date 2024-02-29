import React from 'react';

const TitleCard = ({title}) => {
    return (
        <div className='text-xl absolute -top-4 -left-4 px-8 py-6 rounded-md shadow-md shadow-black bg-opacity-90 bg-white'>
            {
                title
            }
        </div>
    );
}

export default TitleCard;
