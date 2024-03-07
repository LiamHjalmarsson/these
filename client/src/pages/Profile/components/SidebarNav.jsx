import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { capitalizeFirstLetter } from '../../../utils/stringUtils';

const SidebarNav = ({ id, links }) => {
    let navigate = useNavigate();

    let logoutHandler = async () => {
        let rep = await fetch("/api/auth/logout");
        let res = await rep.json();
        localStorage.removeItem("user");

        navigate("/");
    }

    return (
        <div className='w-64'>
            <nav className='flex flex-col gap-8 w-fit'>
                {
                    links.map((link) => (
                        <Link to={`/profile/${link}`} key={link} className={`${id === link ? "font-bold tracking-wider border-2 border-primary" : ""} text-xl p-4`}>
                            {capitalizeFirstLetter(link)}
                        </Link>
                    ))
                }

                <div className='text-sm text-center  p-4'>
                    <button onClick={logoutHandler}>
                        logga ut
                    </button>
                </div>  
            </nav>
        </div>
    );
}

export default SidebarNav;
