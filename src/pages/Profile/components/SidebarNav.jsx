import React from 'react';
import { Link } from 'react-router-dom';

const SidebarNav = ({ id, links }) => {
    return (
        <div className='w-64'>
            <nav className='flex flex-col gap-8 w-fit'>
                {
                    links.map((link) => (
                        <Link to={`/profile/${link}`} key={link} className={`${id === link ? "font-bold tracking-wider border-2 border-primary" : ""} text-xl p-4`}>
                            {link}
                        </Link>
                    ))
                }
            </nav>
        </div>
    );
}

export default SidebarNav;
