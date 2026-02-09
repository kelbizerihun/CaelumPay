import React from 'react';

const SocialButton: React.FC<{ icon: React.ReactNode; children: React.ReactNode; }> = ({ icon, children }) => (
    <button className="flex-1 flex items-center justify-center space-x-3 py-4 border border-gray-200 rounded-xl text-gray-700 font-medium hover:bg-gray-50 hover:border-gray-300 transition-all active:scale-[0.98]">
        <span className="flex-shrink-0">{icon}</span>
        <span>{children}</span>
    </button>
);

export default SocialButton;