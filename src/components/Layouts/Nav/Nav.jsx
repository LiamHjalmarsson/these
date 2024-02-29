import React from 'react';
import NavItem from './components/navItem';
import { RiShoppingBagLine } from "react-icons/ri";
import { FaUserAlt } from "react-icons/fa";
import styles from "./Nav.module.css"

const Nav = () => {
    let links = ["start", "gender", "dam", "nyhetsbrev"];

    return (
        <nav className={styles.nav}>

            <div>
                <h2>
                    LD Klädder
                </h2>
            </div>

            <ul className={styles.nav__ul}>
                {
                    links.map(link => (
                        <NavItem link={link} key={link} />
                    ))
                }
            </ul>

            <div className={styles.nav__iconContainer}>
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
