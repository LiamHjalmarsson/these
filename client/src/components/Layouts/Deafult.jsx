import React from 'react';
import Nav from './Nav/Nav';
import Footer from './Footer/Footer';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Deafult = ({ children }) => {
    return (
        <>
            <Nav />
            <ToastContainer
                pauseOnHover={false}
                closeOnClick
                className={"absolute top-24"}
            />
            {
                children
            }
            <Footer />
        </>
    );
}

export default Deafult;
