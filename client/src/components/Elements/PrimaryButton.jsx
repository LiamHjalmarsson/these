import React from 'react';

const PrimaryButton = ({custom, children, onClick}) => {
    return (
        <button className={`${custom ? custom : ""} text-xl px-6 py-3 border-2 flex-grow text-center rounded-md border-primary bg-primary hover:bg-opacity-90 transition duration-300 text-white`} >
            {children}
        </button>
    );
}

export default PrimaryButton;
