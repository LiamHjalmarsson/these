import React from 'react';

const PrimaryButton = ({custom, children}) => {
    return (
        <button className={`${custom ? custom : ""} text-xl px-6 py-3 border-2 flex-grow text-center rounded-md bg-primary  text-white`} >
            {children}
        </button>
    );
}

export default PrimaryButton;
