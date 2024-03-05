import React from 'react';

const SecondaryButton = ({custom, children}) => {
    return (
        <button className={`text-xl px-6 py-3 border-2 flex-grow text-center rounded-md ${custom ? custom : "border-white text-white "}`} >
            {children}
        </button>
    );
}

export default SecondaryButton;
