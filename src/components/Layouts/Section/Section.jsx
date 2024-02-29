import React from 'react';

const Section = ({children}) => {
    return (
        <section className='flex px-4 lg:px-20 flex-col my-16'>
            {
                children
            }
        </section>
    );
}

export default Section;
