import React from 'react';

const Image = ({img, alt, custom}) => {
    return (
        <img src={img} alt={alt} className={`${custom ? custom : ""} transition duration-500 rounded-md object-cover object-center`}/>
    );
}

export default Image;
