import React from 'react';

const Image = ({img, alt, custom}) => {
    return (
        <img src={img} alt={alt} className={`${custom ? custom : "object-cover object-center"} transition duration-500`}/>
    );
}

export default Image;
