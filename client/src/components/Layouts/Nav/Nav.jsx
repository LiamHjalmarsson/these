import React, { useState } from 'react';
import NavItem from './components/navItem';
import { RiShoppingBagLine } from "react-icons/ri";
import { FaUserAlt } from "react-icons/fa";
import { Link, NavLink } from 'react-router-dom';
import { useSelector } from 'react-redux';
import Cart from './components/Cart';


const Nav = () => {
    let [isCartOpen, setIsCartOpen] = useState(false);
    let links = ["Herr", "dam", "nyhetsbrev"];
    let cartItems = useSelector(state => state.cart.cartItems);

    let cartShow = () => {
        console.log(cartItems);
        setIsCartOpen(!isCartOpen);
    }

    return (
        <nav className="flex w-full items-center p-8 z-50 bg-primary text-white bg-opacity-80">
            <NavLink to="/" className="">
                <h2 className='text-2xl tracking-wider font-bold'>
                    LD Klädder
                </h2>
            </NavLink>

            <ul className="flex flex-grow justify-center items-center gap-4">
                {links.map(link => {
                    if (link === "nyhetsbrev") {
                        return (
                            <NavLink to="/Newsletter" key={link}>
                                <li>{link}</li>
                            </NavLink>
                        );
                    } else {
                        return <NavItem link={link} key={link} />;
                    }
                })}
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
        </nav>
    );
}

export default Nav;
