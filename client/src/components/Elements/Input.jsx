import React, { useState } from 'react';

const Input = ({input, onChange, value, custom}) => {
    let [isActive, setIsActive] = useState(false);

    let handleFocus = () => {
        setIsActive(true);
    };

    let handleBlur = () => {
        if (!value) {
            setIsActive(false);
        }
    };

    return (
        <div className={`w-full relative`}>
            <label
                htmlFor={input.id}
                className={`absolute transition-all text-black duration-300 ${isActive || value ? 'text-sm -top-2' : 'text-base top-4'
                    }`}
            >
                {
                    input.id
                }
            </label>
            <input
                {...input}
                onFocus={handleFocus}
                onBlur={handleBlur}
                className={` ${custom ? custom : "border-b-primary text-primary"} p-2 w-full mt-1 border-b-2 outline-none bg-transparent `}
                value={value}
                onChange={onChange}
            />
        </div>
    );
}

export default Input;
