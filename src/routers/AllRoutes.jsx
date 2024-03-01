import React from 'react';
import { BrowserRouter, Route, Router, Routes } from 'react-router-dom';
import Home from '../pages/Home/Home';
import Herr from '../pages/Gender/Herr';
import Newsletter from '../pages/Newsletter/Newsletter';
import Cart from '../pages/Cart/Cart';
import Dam from '../pages/Gender/Dam';
import Product from '../pages/Product/Product';

const AllRoutes = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path='/' element={<Home/>} />
                <Route path='/herr' element={<Herr/>} />
                <Route path='/dam' element={<Dam/>} />
                <Route path='/products/:id' element={<Product/>} />
            </Routes>
        </BrowserRouter>
    );
}

export default AllRoutes;
