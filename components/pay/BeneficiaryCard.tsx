import React from 'react';

const BeneficiaryCard: React.FC<{ name: string; avatar: string; }> = ({ name, avatar }) => {
    return (
        <div className="flex flex-col items-center space-y-3 flex-shrink-0">
            <div className="h-16 w-16 p-1 bg-white rounded-3xl shadow-sm border border-gray-100 flex items-center justify-center">
                <img src={avatar} alt={name} className="h-14 w-14 rounded-2xl" />
            </div>
            <p className="text-xs font-bold text-gray-700 tracking-tight">{name}</p>
        </div>
    );
};

export default BeneficiaryCard;