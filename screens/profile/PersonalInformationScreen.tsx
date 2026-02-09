import React from 'react';
import { useNavigate } from 'react-router-dom';
import BackArrowIcon from '../../components/icons/BackArrowIcon.tsx';
import Button from '../../components/ui/Button.tsx';

const InfoSection = ({ title, items }: any) => (
    <div className="mb-8">
        <h2 className="text-lg font-bold text-gray-800 mb-4 px-2">{title}</h2>
        <div className="bg-white rounded-[32px] shadow-sm border border-gray-100 overflow-hidden divide-y divide-gray-50">
            {items.map((item: any, i: number) => (
                <div key={i} className="p-5 flex justify-between items-center group">
                    <div>
                        <p className="text-[10px] font-bold text-gray-400 uppercase tracking-widest">{item.label}</p>
                        <p className="text-sm font-bold text-gray-800 mt-0.5">{item.value}</p>
                    </div>
                    {item.editable && <button className="text-caelum-vibrant-blue font-bold text-xs px-3 py-1 bg-blue-50 rounded-lg">Edit</button>}
                    {item.verified && (
                        <div className="bg-emerald-500 rounded-full p-1">
                            <svg className="w-3 h-3 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M5 13l4 4L19 7" /></svg>
                        </div>
                    )}
                </div>
            ))}
        </div>
    </div>
);

const PersonalInformationScreen = () => {
    const navigate = useNavigate();

    const basicInfo = [
        { label: 'Full Name', value: 'John Doe', editable: true },
        { label: 'Date of Birth', value: 'January 15, 1990', editable: true },
        { label: 'Gender', value: 'Male', editable: true },
        { label: 'Nationality', value: 'Nigerian 🇳🇬', editable: true },
    ];

    const contactInfo = [
        { label: 'Email Address', value: 'john.doe@email.com', verified: true },
        { label: 'Phone Number', value: '+234 800 000 0000', verified: true },
        { label: 'Address', value: '123 Main Street', subtitle: 'Lagos, Nigeria' },
    ];

    return (
        <div className="min-h-screen bg-[#FAFAFA] flex flex-col">
            <header className="p-6 bg-white flex items-center space-x-4 shadow-sm sticky top-0 z-10">
                <button onClick={() => navigate(-1)} className="p-2 -ml-2 bg-gray-50 rounded-full text-gray-400">
                    <BackArrowIcon />
                </button>
                <h1 className="text-xl font-bold text-gray-900">Personal Information</h1>
            </header>

            <main className="flex-1 p-6">
                <InfoSection title="Basic Information" items={basicInfo} />
                <InfoSection title="Contact Information" items={contactInfo} />

                <div>
                    <h2 className="text-lg font-bold text-gray-800 mb-4 px-2">Identity Verification</h2>
                    <div className="bg-white rounded-[32px] shadow-sm border border-gray-100 p-6 flex justify-between items-center">
                        <div>
                            <p className="text-[10px] font-bold text-gray-400 uppercase tracking-widest">KYC Status</p>
                            <div className="flex items-center space-x-2 mt-1">
                                <div className="h-2 w-2 rounded-full bg-emerald-500"></div>
                                <p className="text-sm font-bold text-gray-800">Verified</p>
                            </div>
                            <p className="text-[10px] text-gray-400 font-medium mt-1">Verified on Feb 1, 2025</p>
                        </div>
                        <div className="h-10 w-10 bg-emerald-50 text-emerald-500 rounded-full flex items-center justify-center">
                             <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                        </div>
                    </div>
                </div>

                <div className="mt-10 pb-10">
                    <button onClick={() => navigate('/app/profile/edit')} className="w-full py-4 bg-transparent border-2 border-caelum-vibrant-blue text-caelum-vibrant-blue rounded-3xl font-bold hover:bg-blue-50 transition-colors">
                        Edit Information
                    </button>
                </div>
            </main>
        </div>
    );
};

export default PersonalInformationScreen;