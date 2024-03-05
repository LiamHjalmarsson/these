import React from 'react';
import Heading from '../../../../components/Elements/Heading/Heading';
import SeasonProduct from './SeasonProduct';
import Section from '../../../../components/Layouts/Section/Section';

const SeasonProducts = ({items, heading}) => {
    return (
        <Section>
            <Heading heading={heading} />
            <div className='flex flex-wrap justify-center gap-20 p-8'>
                {
                    items.map((item, index) => (
                        <SeasonProduct item={item} key={index} />
                    ))
                }
            </div>
        </Section>
    );
}

export default SeasonProducts;
