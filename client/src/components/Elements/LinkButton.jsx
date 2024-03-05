import React from 'react';
import { Link } from 'react-router-dom';

const LinkButton = ({link, title, custom}) => {
    return (
        <Link to={link} className={`max-w-80 p-3 flex-grow border-2 text-center rounded-md ${custom ? custom : "px-6 py-3 border-white text-white"}`}>
            {title}
        </Link>
    );
}

export default LinkButton;
