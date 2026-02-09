import React from 'react';

const ContactListItem: React.FC<{ name: string; username: string; avatar: string; isUser: boolean; }> = ({ name, username, avatar, isUser }) => {
    return (
        <div className="flex items-center py-4 px-3 rounded-2xl hover:bg-white/60 transition-colors">
            <img src={avatar} alt={name} className="h-12 w-12 rounded-2xl border-2 border-white shadow-sm mr-4" />
            <div className="flex-grow">
                <p className="font-bold text-gray-800 text-sm">{name}</p>
                <p className="text-xs text-gray-400 font-medium">{username}</p>
            </div>
            {!isUser ? (
                <button className="bg-caelum-vibrant-blue/10 text-caelum-vibrant-blue font-bold py-2 px-4 rounded-xl text-xs hover:bg-caelum-vibrant-blue/20 transition-colors">
                    Invite
                </button>
            ) : (
                <div className="text-caelum-vibrant-blue">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                        <path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd" />
                    </svg>
                </div>
            )}
        </div>
    );
};

export default ContactListItem;