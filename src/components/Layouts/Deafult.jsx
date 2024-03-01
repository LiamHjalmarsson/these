import React from 'react';
import Nav from './Nav/Nav';
import Footer from './Footer/Footer';

const Deafult = ({children}) => {
    return (
        <div className=''>
            <Nav />
            <main className=''>
                {
                    children
                }
            </main>
            <Footer />
        </div>
    );
}

export default Deafult;
