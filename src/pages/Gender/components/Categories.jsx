import React from 'react';
import Category from './Category';
import Section from '../../../components/Layouts/Section/Section';
import Heading from '../../../components/Elements/Heading/Heading';

const Categories = ({heading, items}) => {
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
