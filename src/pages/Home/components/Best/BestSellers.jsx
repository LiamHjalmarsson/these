import React from 'react';
import Section from '../../../../components/Layouts/Section/Section';
import BestSeller from './BestSeller';
import Heading from '../../../../components/Heading/Heading';

const BestSellers = ({heading, items}) => {
    return (
        <Section>
            <Heading heading={heading} />
            <div className='flex flex-wrap justify-center gap-8 w-full mt-8'>
                {
                    items.map((item, index) => (
                        <BestSeller item={item} key={index} />
                    ))
                }
            </div>
        </Section>
    );
}

export default BestSellers;
