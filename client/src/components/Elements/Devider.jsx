import React from 'react';

const Devider = ({custom}) => {
    return (
        <div className={`h-0.5 mt-2 bg-primary ${custom ? custom : "w-48 "}`}></div>
    );
}

export default Devider;

