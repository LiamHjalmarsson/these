import React from 'react';

const SecondaryHeading = ({ heading, custom }) => {
    return (
        <h1 className={`font-bold tracking-wider ${custom ? custom : "text-black text-2xl"}  text-center`}>
            {heading}
        </h1>
    );
}

export default SecondaryHeading;
