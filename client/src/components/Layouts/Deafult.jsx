import React from 'react';
import Nav from './Nav/Nav';
import Footer from './Footer/Footer';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Deafult = ({ children }) => {
    return (
        <div>
            <Nav />
            <ToastContainer
                pauseOnHover={false}
                closeOnClick
            />
            {
                children
            }
            <Footer />
        </div>
    );
}

export default Deafult;
