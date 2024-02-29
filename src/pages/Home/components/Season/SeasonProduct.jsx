import React from 'react';
import TitleCard from '../../../../components/Elements/TitleCard';
import SeasonBottomCard from './SeasonBottomCard';
import Image from '../../../../components/Elements/Image';

const SeasonProduct = ({item}) => {
    return (
        <div className='relative h-fit w-[300px] group cursor-pointer'>
            <div className='h-[450px] overflow-hidden shadow-middle shadow-black rounded-md'>
                <Image img={item.img} custom='group-hover:scale-105 group-hover:opacity-90' />
            </div>

            <TitleCard title={item.title} />

            <SeasonBottomCard />
        </div>
    );
}

export default SeasonProduct;
