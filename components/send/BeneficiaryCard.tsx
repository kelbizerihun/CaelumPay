import React from 'react';

// FIX: Update component to use React.FC for proper prop typing, resolving 'key' prop error.
const BeneficiaryCard: React.FC<{ name: string; avatar: string; }> = ({ name, avatar }) => {
    return (
        <div className="flex flex-col items-center space-y-2 flex-shrink-0">
            <img src={avatar} alt={name} className="h-14 w-14 rounded-full" />
            <p className="text-sm font-medium text-gray-700">{name}</p>
        </div>
    );
};

export default BeneficiaryCard;
