import React from 'react';

const Devider = ({custom}) => {
    return (
        <div className={`h-0.5 w-48 mt-2 bg-primary ${custom ? custom : ""}`}></div>
    );
}

export default Devider;

