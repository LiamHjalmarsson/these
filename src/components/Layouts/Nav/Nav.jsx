import React from 'react';
import NavItem from './components/navItem';
import { RiShoppingBagLine } from "react-icons/ri";
import { FaUserAlt } from "react-icons/fa";

const Nav = () => {
    let links = ["gender", "dam", "nyhetsbrev"];
    return (
        <nav className="flex w-full items-center p-8 fixed z-10 bg-primary text-white bg-opacity-80">

            <div>
                <h2>
                    <a href="/">LD Klädder</a>
                </h2>
            </div>

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
