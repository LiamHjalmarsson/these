import React from 'react';
import { BrowserRouter, Route, Router, Routes } from 'react-router-dom';
import Home from '../pages/Home/Home';
import Gender from '../pages/Gender/Gender';
import Newsletter from '../pages/Newsletter/Newsletter';
import Cart from '../pages/Cart/Cart';
import Dam from '../pages/Gender/Dam';

const AllRoutes = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path='/' element={<Home/>} />
                <Route path='/gender' element={<Gender/>} />
                <Route path='/newsletter' element={<Newsletter/>} />
                <Route path='/dam' element={<Dam/>} />
                <Route path='/cart' element={<Cart/>} />
            </Routes>
        </BrowserRouter>
    );
}

export default AllRoutes;
