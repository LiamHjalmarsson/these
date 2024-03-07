import React, { useState } from 'react';

const Input = ({input, onChange, value}) => {
    let [isActive, setIsActive] = useState(false);

    let handleFocus = () => {
        setIsActive(true);
    };

    let handleBlur = () => {
        if (!input.value) {
            setIsActive(false);
        }
    };

    return (
        <div className={`w-full relative`}>
            <label
                htmlFor={input.id}
                className={`absolute transition-all text-black duration-300 ${isActive || input.value ? 'text-sm -top-2' : 'text-base top-4'
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
                className="w-full mt-1 border-b-2 border-b-primary outline-none bg-transparent text-primary p-2"
                value={value}
                onChange={onChange}
            />
        </div>
    );
}

export default Input;
