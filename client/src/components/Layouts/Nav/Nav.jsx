import React, { useState } from 'react';
import { RiShoppingBagLine } from "react-icons/ri";
import { FaUserAlt } from "react-icons/fa";
import { Link, NavLink } from 'react-router-dom';
import { useSelector } from 'react-redux';
import Cart from './components/Cart';
import { capitalizeFirstLetter } from '../../../utils/stringUtils';

const Nav = () => {
    let cartItems = useSelector(state => state.cart.cartItems);
    let [isCartOpen, setIsCartOpen] = useState(false);
    let links = ["herr", "dam", "nyhetsbrev"];

    let cartShow = () => {
        setIsCartOpen(!isCartOpen);
    }

    return (
        <nav className="flex w-full items-center text-xl p-8 z-50 bg-primary text-white">
            
            <NavLink to="/" className="">
                <h2 className='text-3xl tracking-wider font-bold'>
                    LD Klädder
                </h2>
            </NavLink>

            <ul className="flex flex-grow justify-center items-center gap-4">
                {
                    links.map((link) => (
                        <NavLink to={`${link === "nyhetsbrev" ? `/${link}` : `/gender/${link}`}`} key={link}>
                            {
                                capitalizeFirstLetter(link)
                            }
                        </NavLink>
                    ))
                }

            </ul>

            <div className="flex gap-4 relative">
                <div>
                    <RiShoppingBagLine onClick={cartShow} />
                </div>
                <Link to="/profile">
                    <FaUserAlt />
                </Link>
                {
                    isCartOpen && (
                        <Cart cartItems={cartItems} />
                    )
                }
            </div>

        </nav >
    );
}

export default Nav;
