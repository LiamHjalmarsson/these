import React from 'react';
import { Link } from 'react-router-dom';

const LinkButton = ({link, title, custom}) => {
    return (
        <Link to={link} className={`max-w-80 p-3 border-2 text-center rounded-md ${custom ? custom : "px-6 py-3 flex-grow border-white text-white border-opcaity-75 hover:bg-white hover:text-primary duration-300 transtion hover:bg-opacity-75 font-bold" }`}>
            {title}
        </Link>
    );
}

export default LinkButton;
