import React from 'react';
import { useNavigate } from 'react-router-dom';
import SearchBar from '../../components/ui/SearchBar.tsx';
import BeneficiaryCard from '../../components/send/BeneficiaryCard.tsx';
import ContactListItem from '../../components/send/ContactListItem.tsx';

const SendScreen = () => {
    const navigate = useNavigate();

    const beneficiaries = [
        { name: 'Jane D.', avatar: 'https://i.pravatar.cc/48?u=1' },
        { name: 'John A.', avatar: 'https://i.pravatar.cc/48?u=2' },
        { name: 'Michael B.', avatar: 'https://i.pravatar.cc/48?u=3' },
        { name: 'Sarah K.', avatar: 'https://i.pravatar.cc/48?u=4' },
        { name: 'David L.', avatar: 'https://i.pravatar.cc/48?u=5' },
    ];

    const contacts = [
        { section: 'A' },
        { name: 'AnnaBelle', username: '@annabelle', avatar: 'https://i.pravatar.cc/48?u=6', isUser: true },
        { name: 'Anthony', username: '@anthony', avatar: 'https://i.pravatar.cc/48?u=7', isUser: false },
        { section: 'B' },
        { name: 'Beatrice', username: '@beatrice', avatar: 'https://i.pravatar.cc/48?u=8', isUser: true },
        { section: 'C' },
        { name: 'Chris', username: '@chris', avatar: 'https://i.pravatar.cc/48?u=9', isUser: true },
        { name: 'Cynthia', username: '@cynthia', avatar: 'https://i.pravatar.cc/48?u=10', isUser: false },
    ];


    return (
        <div className="min-h-screen w-full max-w-md mx-auto bg-white flex flex-col">
            <header className="p-6 flex justify-between items-center">
                <h1 className="text-2xl font-bold text-gray-800">Send Money</h1>
                <button onClick={() => navigate('/app/dashboard')} className="text-caelum-blue font-semibold">Cancel</button>
            </header>
            
            <div className="px-6 mb-6">
                <SearchBar placeholder="Name, @username, email" />
            </div>

            <div className="mb-6">
                <h2 className="px-6 text-lg font-semibold text-gray-800 mb-3">My Beneficiaries</h2>
                <div className="flex space-x-4 overflow-x-auto pb-3 px-6">
                    {beneficiaries.map(b => <BeneficiaryCard key={b.name} name={b.name} avatar={b.avatar} />)}
                </div>
            </div>

            <div className="flex-1 overflow-y-auto">
                 <h2 className="px-6 text-lg font-semibold text-gray-800 mb-3">All Contacts</h2>
                 <div className="px-6">
                    {contacts.map((contact, index) => {
                        if (contact.section) {
                            return <p key={index} className="text-caelum-blue font-bold bg-caelum-gray p-2 mt-2 -mx-2 sticky top-0">{contact.section}</p>
                        }
                        return <ContactListItem key={contact.name} name={contact.name} username={contact.username} avatar={contact.avatar} isUser={contact.isUser} />
                    })}
                 </div>
            </div>
        </div>
    );
};

export default SendScreen;
