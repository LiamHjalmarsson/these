import React from 'react';
import Section from '../../../../components/Layouts/Section/Section';
import BestSeller from './BestSeller';
import Heading from '../../../../components/Heading/Heading';

const BestSellers = ({ heading, items }) => {
    return (
        <Section>
            <Heading heading={heading} />
            <div className='w-full flex justify-center items-center'>
                <div className='flex flex-wrap gap-8 w-full mt-8 max-w-4xl'>
                    {
                        items.map((item, index) => (
                            <BestSeller item={item} key={index} />
                        ))
                    }
                </div>
            </div>
        </Section>
    );
}

export default BestSellers;
