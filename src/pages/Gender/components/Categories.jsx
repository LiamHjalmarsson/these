import React from 'react';
import Section from '../../../../components/Layouts/Section/Section';
import Heading from '../../../../components/Heading/Heading';
import Category from './Category';

const Categories = () => {
    return (
        <Section>
            <Heading heading={heading} />
            <div className='w-full flex justify-center items-center'>
                <div className='flex flex-wrap gap-8 w-full mt-8 max-w-4xl'>
                    {
                        items.map((item, index) => (
                            <Category item={item} key={index} />
                        ))
                    }
                </div>
            </div>
        </Section>
    );
}

export default Categories;
