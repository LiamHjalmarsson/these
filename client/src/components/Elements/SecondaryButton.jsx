import React from 'react';
const SecondaryButton = ({ custom, children, onClick }) => {
    return (
        <button className={`text-xl px-6 py-3 border-2 flex-grow text-center rounded-md duration-300 transition ${custom ? custom : "border-white text-white hover:border-primary hover:text-primary"} transition duration-500`} 
            onClick={onClick ? onClick : () => {}} 
        >
            {children}
        </button>
    );
}
export default SecondaryButton;
