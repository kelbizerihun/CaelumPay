import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import BackArrowIcon from '../../components/icons/BackArrowIcon.tsx';
import Button from '../../components/ui/Button.tsx';

const EditProfileScreen = () => {
    const navigate = useNavigate();
    const [profile, setProfile] = useState({
        fullName: 'John Doe',
        email: 'john.doe@email.com',
        phone: '+234 800 000 0000',
        dob: 'January 15, 1990',
        address: '123 Main Street, Lagos',
        country: 'Nigeria'
    });

    const handleSave = () => {
        navigate('/success', { 
            state: { 
                title: 'Profile Updated!', 
                message: 'Your changes have been saved successfully', 
                redirectTo: '/app/profile' 
            } 
        });
    };

    const InputField = ({ label, value, id, isReadOnly = false, hasCheck = false, hasArrow = false }: any) => (
        <div className="bg-white border border-gray-200 rounded-3xl p-4 mb-4 shadow-sm relative">
            <label className="block text-[10px] font-bold text-gray-400 uppercase tracking-widest mb-1">{label}</label>
            <div className="flex items-center justify-between">
                <input 
                    readOnly={isReadOnly}
                    className="text-lg font-bold text-gray-800 outline-none w-full bg-transparent"
                    defaultValue={value}
                />
                {hasCheck && (
                    <div className="bg-emerald-500 rounded-full p-1 ml-2">
                        <svg className="w-3 h-3 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M5 13l4 4L19 7" /></svg>
                    </div>
                )}
                {hasArrow && <span className="text-gray-300 ml-2">❯</span>}
            </div>
        </div>
    );

    return (
        <div className="min-h-screen bg-[#FAFAFA] flex flex-col">
            <header className="p-6 bg-white flex items-center space-x-4">
                <button onClick={() => navigate(-1)} className="p-2 -ml-2 bg-gray-50 rounded-full text-gray-400">
                    <BackArrowIcon />
                </button>
                <h1 className="text-xl font-bold text-gray-900">Edit Profile</h1>
            </header>

            <main className="flex-1 p-6">
                <div className="flex flex-col items-center mb-10">
                    <div className="relative">
                        <div className="h-32 w-32 bg-gray-100 rounded-full flex items-center justify-center overflow-hidden border-4 border-white shadow-lg">
                             <img src="https://i.pravatar.cc/150?u=john" alt="Profile" />
                        </div>
                        <button className="absolute bottom-1 right-1 bg-caelum-vibrant-blue p-2.5 rounded-2xl border-4 border-white shadow-md text-white">
                            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                                <path fillRule="evenodd" d="M4 5a2 2 0 00-2 2v8a2 2 0 002 2h12a2 2 0 002-2V7a2 2 0 00-2-2h-1.586a1 1 0 01-.707-.293l-1.121-1.121A2 2 0 0011.172 3H8.828a2 2 0 00-1.414.586L6.293 4.707A1 1 0 015.586 5H4zm6 9a3 3 0 100-6 3 3 0 000 6z" clipRule="evenodd" />
                            </svg>
                        </button>
                    </div>
                    <button className="mt-4 text-caelum-vibrant-blue font-bold text-sm">Change Photo</button>
                </div>

                <div className="mb-6">
                    <h2 className="text-lg font-bold text-gray-800 mb-6">Personal Details</h2>
                    <InputField label="Full Name" value={profile.fullName} />
                    <InputField label="Email Address" value={profile.email} hasCheck />
                    <InputField label="Phone Number" value={profile.phone} hasCheck />
                    <InputField label="Date of Birth" value={profile.dob} />
                    <InputField label="Address" value={profile.address} />
                    <InputField label="Country" value={`${profile.country} 🇳🇬`} hasArrow />
                </div>

                <div className="bg-blue-50 p-4 rounded-3xl border border-blue-100 flex items-start space-x-3 mb-10">
                    <div className="bg-blue-200/50 p-1.5 rounded-lg text-blue-600 font-bold text-sm">ℹ️</div>
                    <div>
                        <p className="text-xs font-bold text-blue-800">Email and phone changes require verification</p>
                        <p className="text-[10px] text-blue-600 font-medium">You'll receive a code to confirm changes</p>
                    </div>
                </div>

                <div className="pb-10">
                    <Button onClick={handleSave} variant="primary">Save Changes</Button>
                </div>
            </main>
        </div>
    );
};

export default EditProfileScreen;