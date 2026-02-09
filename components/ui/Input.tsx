import React, { useState } from 'react';
import EyeOpenIcon from '../icons/EyeOpenIcon.tsx';
import EyeClosedIcon from '../icons/EyeClosedIcon.tsx';

const Input = ({ id, type, label, placeholder }: { id: string; type: string; label: string; placeholder: string; }) => {
    const [isPasswordVisible, setIsPasswordVisible] = useState(false);
    const isPasswordField = type === 'password';

    const togglePasswordVisibility = () => {
        if (isPasswordField) {
            setIsPasswordVisible(!isPasswordVisible);
        }
    };

    return (
        <div className="mb-4">
            <label htmlFor={id} className="block text-sm font-medium text-gray-700 mb-1">{label}</label>
            <div className="relative">
                <input
                    type={isPasswordField && !isPasswordVisible ? 'password' : 'text'}
                    id={id}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-caelum-blue focus:border-transparent transition"
                    placeholder={placeholder}
                />
                {isPasswordField && (
                    <button type="button" onClick={togglePasswordVisibility} className="absolute inset-y-0 right-0 px-4 text-gray-500" aria-label={isPasswordVisible ? 'Hide password' : 'Show password'}>
                        {isPasswordVisible ? <EyeOpenIcon /> : <EyeClosedIcon />}
                    </button>
                )}
            </div>
        </div>
    );
};

export default Input;
