import React, { useState } from 'react';

const Input = (props) => {
    let [isActive, setIsActive] = useState(false);

    let handleFocus = () => {
        setIsActive(true);
    };

    let handleBlur = () => {
        if (!props.input.value) {
            setIsActive(false);
        }
    };

    return (
        <div className={`w-full relative`}>
            <label
                htmlFor={props.input.id}
                className={`absolute transition-all text-black duration-300 ${isActive || props.input.value ? 'text-sm -top-2' : 'text-base top-4'
                    }`}
            >
                {
                    props.input.id
                }
            </label>
            <input
                {...props.input}
                onFocus={handleFocus}
                onBlur={handleBlur}
                className="w-full mt-1 border-b-2 border-b-primary outline-none bg-transparent text-primary p-2"
            />
        </div>
    );
}

export default Input;
