import React from 'react';

// FIX: Update component to use React.FC for proper prop typing, resolving 'key' prop error.
const ContactListItem: React.FC<{ name: string; username: string; avatar: string; isUser: boolean; }> = ({ name, username, avatar, isUser }) => {
    return (
        <div className="flex items-center py-3">
            <img src={avatar} alt={name} className="h-12 w-12 rounded-full mr-4" />
            <div className="flex-grow">
                <p className="font-semibold text-gray-800">{name}</p>
                <p className="text-sm text-gray-500">{username}</p>
            </div>
            {!isUser && (
                <button className="bg-caelum-light-blue text-caelum-dark-blue font-semibold py-2 px-4 rounded-lg text-sm">
                    Request
                </button>
            )}
        </div>
    );
};

export default ContactListItem;
