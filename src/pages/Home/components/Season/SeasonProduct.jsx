import React from 'react';
import TitleCard from '../../../../components/Elements/TitleCard';
import SeasonBottomCard from './SeasonBottomCard';

const SeasonProduct = ({item}) => {
    return (
        <div className='relative h-fit w-[300px] group cursor-pointer'>
            <div className='h-[450px] overflow-hidden shadow-middle shadow-black'>
                <img src={item.img} className='group-hover:scale-105 group-hover:opacity-90 transition duration-500' />
            </div>

            <TitleCard title={item.title} />

            <SeasonBottomCard />
        </div>
    );
}

export default SeasonProduct;
