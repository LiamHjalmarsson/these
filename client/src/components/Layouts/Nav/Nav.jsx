import React, { useEffect, useState } from 'react';
import { RiShoppingBagLine } from "react-icons/ri";
import { FaUserAlt } from "react-icons/fa";
import { Link, NavLink, useParams } from 'react-router-dom';
import { useSelector } from 'react-redux';
import Cart from './components/Cart';

const Nav = () => {
    let [isCartOpen, setIsCartOpen] = useState(false);

    let cartItems = useSelector(state => state.cart.cartItems);

    let links = ["herr", "dam", "nyhetsbrev"];

    let cartShow = () => {
        setIsCartOpen(!isCartOpen);
    }

    return (
        <nav className="flex w-full items-center text-xl p-8 z-50 bg-primary text-white">

            <NavLink to="/">
                <h2 className='text-3xl tracking-wider font-bold hover:text-amber-400  duration-300 transition'>
                    LD Klädder
                </h2>
            </NavLink>

            <ul className="flex flex-grow justify-center items-center gap-4">
                {
                    links.map((link) => (
                        <NavLink to={`${link === "nyhetsbrev" ? `/${link}` : `/gender/${link}`}`} key={link} className={`px-4 hover:text-amber-400  duration-300 transition`}>
                            {
                                link.charAt(0).toUpperCase() + link.slice(1)

                            }
                        </NavLink>
                    ))
                }

            </ul>

            <div className="flex relative">
                <div className='p-4 cursor-pointer' onClick={cartShow}>
                    <RiShoppingBagLine className={` hover:text-amber-400  duration-300 transition ${isCartOpen ? "text-amber-400" : ""}`} />
                </div>
                <Link to="/profile" className='p-4 cursor-pointer'>
                    <FaUserAlt className=' hover:text-amber-400  duration-300 transition' />
                </Link>
                <Cart cartItems={cartItems} open={isCartOpen} />
            </div>

        </nav >
    );
}

export default Nav;
