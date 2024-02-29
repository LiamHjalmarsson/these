import React from 'react';
import { Link, NavLink } from 'react-router-dom';

const NavItem = ({link}) => {
    return (
        <li>
            <NavLink to={link === "start" ? "/" : link }>
                {link}
            </NavLink>
        </li>
    );
}

export default NavItem;
