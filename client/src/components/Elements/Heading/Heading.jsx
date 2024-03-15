import React from 'react';

const Heading = ({ heading, custom, style }) => {
    return (
        <h1 style={style} className={`font-bold tracking-wider ${custom ? custom : "text-black text-4xl"} text-center`}>
            {heading}
        </h1>
    );
}

export default Heading;
