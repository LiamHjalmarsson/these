import React from 'react';
import Section from '../../../../components/Layouts/Section/Section';
import BestSeller from './BestSeller';
import Heading from '../../../../components/Elements/Heading/Heading';

const BestSellers = ({ heading, items }) => {

    return (
        <Section>
            <Heading heading={heading} />
            <div className='w-full flex justify-center items-center my-8'>
                <div className='flex flex-wrap justify-center gap-12 w-full mt-8 px-10'>
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
