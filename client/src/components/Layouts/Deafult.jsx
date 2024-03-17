import React from 'react';
import Nav from './Nav/Nav';
import Footer from './Footer/Footer';

const Deafult = ({ children }) => {
    return (
        <div className='w-full overflow-x-hidden'>
            <Nav />
            {
                children
            }
            <Footer />
        </div>
    );
}

export default Deafult;
