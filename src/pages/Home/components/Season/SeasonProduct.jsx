import React from 'react';
import TitleCard from '../../../../components/Elements/TitleCard';
import SeasonBottomCard from './SeasonBottomCard';

const SeasonProduct = ({item}) => {
    return (
        <div className='relative h-fit w-[500px] group'>
            <div className='h-[600px] overflow-hidden'>
                <img src={item.img} className='group-hover:scale-105 group-hover:opacity-90 transition duration-500 rounded-md shadow-md shadow-black' />
            </div>

            <TitleCard title={item.title} />

            <SeasonBottomCard />
        </div>
    );
}

export default SeasonProduct;
