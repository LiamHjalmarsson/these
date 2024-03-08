import React from 'react';
import Category from './Category';
import Section from '../../../components/Layouts/Section/Section';
import Heading from '../../../components/Elements/Heading/Heading';

const Categories = ({ heading, items }) => {
    return (
        <Section>
            <Heading heading={heading} />
            <div className='w-full flex justify-center items-center'>
                <div className='flex flex-wrap gap-12 w-full mt-8 px-10'>
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
