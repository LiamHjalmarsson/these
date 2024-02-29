import React from 'react';
import NavItem from './components/navItem';
import { RiShoppingBagLine } from "react-icons/ri";
import { FaUserAlt } from "react-icons/fa";
import { NavLink } from 'react-router-dom';

const Nav = () => {
    let links = ["gender", "dam", "nyhetsbrev"];
    return (
        <nav className="flex w-full items-center p-8 fixed z-50 bg-primary text-white bg-opacity-80">

            <NavLink to="/" className="">
                <h2 className='text-2xl tracking-wider font-bold'>
                    LD Klädder
                </h2>
            </NavLink>

            <ul className="flex flex-grow justify-center items-center gap-4">
                {
                    links.map(link => (
                        <NavItem link={link} key={link} />
                    ))
                }
            </ul>

            <div className="flex gap-4">
                <div>
                    <RiShoppingBagLine />
                </div>
                <div>
                    <FaUserAlt />
                </div>
            </div>

        </nav>
    );
}

export default Nav;
