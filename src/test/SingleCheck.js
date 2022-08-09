import React, { useState } from 'react';


export const SingleCheck = () => {
    const [isChecked, setIsChecked] = useState(false);
    // Submit
    const handleOnChange = () => {
        setIsChecked(!isChecked);
    };
    return (
        <div>
            <input
                type="checkbox"
                checked={isChecked}
                onChange={handleOnChange}
            />

            <p>{
                isChecked ? 'check' : 'uncheck'
            }</p>
        </div>
    )
}
