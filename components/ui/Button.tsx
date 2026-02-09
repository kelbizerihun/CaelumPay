
import React from 'react';

// Added disabled prop to the Button component to support form validation states
const Button: React.FC<{ 
    children: React.ReactNode; 
    onClick?: (e: React.MouseEvent<HTMLButtonElement>) => void; 
    variant?: 'primary' | 'secondary' | 'outline'; 
    type?: 'button' | 'submit' | 'reset'; 
    disabled?: boolean;
}> = ({ children, onClick, variant = 'primary', type = 'button', disabled = false }) => {
    const baseClasses = "w-full text-center py-4 rounded-xl font-semibold transition duration-300 ease-in-out focus:outline-none focus:ring-2 focus:ring-offset-2";
    
    // Conditional classes for disabled state
    const stateClasses = disabled 
        ? "opacity-50 cursor-not-allowed pointer-events-none" 
        : "active:scale-[0.98]";

    const variants = {
        primary: 'bg-caelum-blue text-white hover:bg-caelum-dark-blue focus:ring-caelum-blue shadow-lg shadow-caelum-blue/20',
        secondary: 'bg-gray-200 text-gray-800 hover:bg-gray-300 focus:ring-gray-400',
        outline: 'bg-transparent border-2 border-caelum-blue text-caelum-blue hover:bg-caelum-blue/5 focus:ring-caelum-blue',
    };

    return (
        <button 
            type={type} 
            onClick={onClick} 
            disabled={disabled}
            className={`${baseClasses} ${variants[variant]} ${stateClasses}`}
        >
            {children}
        </button>
    );
};

export default Button;
