import React from 'react';
import { useNavigate } from 'react-router-dom';
import SearchBar from '../../components/ui/SearchBar.tsx';
import BeneficiaryCard from '../../components/pay/BeneficiaryCard.tsx';
import ContactListItem from '../../components/pay/ContactListItem.tsx';

const PayScreen = () => {
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
    ];

    const handleSelectContact = (contact: any) => {
        navigate('/app/transfer', { state: { contact } });
    };

    const PayOption = ({ icon, title, subtitle, onClick, colorClass }: any) => (
        <button 
            onClick={onClick}
            className="w-full bg-white p-5 rounded-[32px] border border-gray-100 shadow-sm flex items-center group active:scale-[0.98] transition-all mb-4"
        >
            <div className={`h-14 w-14 ${colorClass} rounded-2xl flex items-center justify-center text-3xl mr-6 transition-colors`}>{icon}</div>
            <div className="text-left flex-grow">
                <p className="font-bold text-gray-800 text-lg">{title}</p>
                <p className="text-xs text-gray-400 font-medium">{subtitle}</p>
            </div>
            <span className="text-gray-300">❯</span>
        </button>
    );

    return (
        <div className="min-h-screen bg-[#FAFAFA] flex flex-col">
            <header className="p-6 bg-white flex justify-between items-center shadow-sm sticky top-0 z-20">
                <h1 className="text-2xl font-bold text-gray-900 tracking-tight">Send Money</h1>
                <button onClick={() => navigate('/app/dashboard')} className="text-caelum-vibrant-blue font-bold text-sm">Cancel</button>
            </header>
            
            <main className="p-6 flex-1 overflow-y-auto pb-24">
                <div className="mb-10">
                    <PayOption 
                        icon="👤" 
                        title="CaelumPay User" 
                        subtitle="Send instantly via username or tag" 
                        colorClass="bg-blue-50"
                    />
                    <PayOption 
                        icon="🏦" 
                        title="Local Bank Account" 
                        subtitle="Send to any Nigerian bank account" 
                        colorClass="bg-emerald-50"
                        onClick={() => navigate('/app/pay/bank')}
                    />
                    <PayOption 
                        icon="🌍" 
                        title="International Transfer" 
                        subtitle="Send money across borders globally" 
                        colorClass="bg-orange-50"
                        onClick={() => navigate('/app/pay/international')}
                    />
                </div>

                <div className="mb-8">
                    <h2 className="px-2 text-[10px] font-bold text-gray-400 uppercase tracking-widest mb-4">Recent Beneficiaries</h2>
                    <div className="flex space-x-6 overflow-x-auto pb-4 scrollbar-hide">
                        {beneficiaries.map(b => (
                            <div key={b.name} onClick={() => handleSelectContact(b)} className="cursor-pointer active:scale-95 transition-transform">
                                <BeneficiaryCard name={b.name} avatar={b.avatar} />
                            </div>
                        ))}
                    </div>
                </div>

                <div className="mb-8">
                    <h2 className="px-2 text-[10px] font-bold text-gray-400 uppercase tracking-widest mb-4">Quick Search</h2>
                    <SearchBar placeholder="Name, @username, or phone number" />
                </div>

                <div className="bg-white rounded-[32px] p-2 shadow-sm border border-gray-100 divide-y divide-gray-50">
                    {contacts.map((contact, index) => {
                        if (contact.section) {
                            return <p key={index} className="text-caelum-vibrant-blue font-bold px-6 py-4 text-xs tracking-widest uppercase">{contact.section}</p>
                        }
                        return (
                            <div key={contact.name} onClick={() => handleSelectContact(contact)} className="cursor-pointer">
                                <ContactListItem name={contact.name} username={contact.username} avatar={contact.avatar} isUser={contact.isUser} />
                            </div>
                        )
                    })}
                </div>
            </main>
        </div>
    );
};

export default PayScreen;