import React from 'react';

const ScreenContainer: React.FC<{ children: React.ReactNode; className?: string }> = ({ children, className = '' }) => (
    <div className={`min-h-screen w-full max-w-md mx-auto bg-white flex flex-col p-6 ${className}`}>
        {children}
    </div>
);

export default ScreenContainer;