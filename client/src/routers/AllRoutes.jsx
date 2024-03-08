import React from 'react';
import { BrowserRouter, Route, Router, Routes } from 'react-router-dom';
import Home from '../pages/Home/Home';
import Newsletter from '../pages/Newsletter/Newsletter';
import Cart from '../pages/Cart/Cart';
import Product from '../pages/Product/Product';
import ProfileLanding from '../pages/Profile/ProfileLanding';
import Profile from '../pages/Profile/Profile';
import Register from '../pages/Register/Register';
import Login from '../pages/Auth/Login';
import Gender from '../pages/Gender/Gender';
import Products from '../pages/Products/Products';

const AllRoutes = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path='/' element={<Home/>} />
                <Route path='/register' element={<Register/>} />
                <Route path='/login' element={<Login/>} />
                <Route path='/gender/:id' element={<Gender />} />
                <Route path='/gender/:id/:id' element={<Products />} />
                <Route path='/products/:id' element={<Product/> } />
                <Route path='/profile' element={<ProfileLanding/> } />
                <Route path='/profile/:id' element={<Profile/> } />
            </Routes>
        </BrowserRouter>
    );
}

export default AllRoutes;
