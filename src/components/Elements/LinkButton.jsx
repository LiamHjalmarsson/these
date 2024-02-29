import React from 'react';
import { Link } from 'react-router-dom';

const LinkButton = ({link, title}) => {
    return (
        <Link to="#" className='text-xl px-6 py-3 border-2 flex-grow text-center rounded-md border-white'>
            {title}
        </Link>
    );
}

export default LinkButton;
