import React from 'react';
import { useNavigate } from 'react-router-dom';
import CheckCircleIcon from '../../components/icons/CheckCircleIcon.tsx';

const MenuItem = ({ icon, title, subtitle, onClick, color = 'blue' }: any) => {
    const iconColors: any = {
        blue: 'bg-blue-50 text-caelum-vibrant-blue',
        emerald: 'bg-emerald-50 text-emerald-500',
        orange: 'bg-orange-50 text-orange-500',
        pink: 'bg-pink-50 text-pink-500',
        red: 'bg-red-50 text-red-500',
    };

    return (
        <button onClick={onClick} className="w-full flex items-center p-4 bg-white hover:bg-gray-50 transition-colors border-b border-gray-50 group">
            <div className={`h-11 w-11 rounded-2xl flex items-center justify-center text-xl mr-4 ${iconColors[color]}`}>
                {icon}
            </div>
            <div className="flex-grow text-left">
                <p className="font-bold text-gray-800 text-[15px]">{title}</p>
                {subtitle && <p className="text-[10px] text-gray-400 font-bold uppercase mt-0.5">{subtitle}</p>}
            </div>
            <div className="text-gray-300 transition-transform group-hover:translate-x-1">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd" /></svg>
            </div>
        </button>
    );
};

const ProfileScreen = () => {
    const navigate = useNavigate();

    return (
        <div className="min-h-screen bg-[#FAFAFA]">
            {/* Blue Header Section: Prominent and on top */}
            <header className="p-10 pb-16 bg-caelum-vibrant-blue rounded-b-[48px] text-center relative overflow-hidden">
                <div className="absolute inset-0 opacity-10">
                    <div className="absolute -top-10 -left-10 w-40 h-40 bg-white rounded-full blur-3xl" />
                    <div className="absolute top-20 right-0 w-60 h-60 bg-white rounded-full blur-3xl" />
                </div>
                
                <div className="relative">
                    <div className="relative inline-block">
                        <img src="https://i.pravatar.cc/150?u=chris" alt="Chris" className="h-24 w-24 rounded-[32px] border-4 border-white/20 shadow-2xl" />
                        <button onClick={() => navigate('/app/profile/edit')} className="absolute -bottom-1 -right-1 bg-caelum-vibrant-blue p-2 rounded-xl border-4 border-white shadow-lg text-white">
                            <svg className="w-3 h-3" fill="currentColor" viewBox="0 0 20 20"><path d="M13.586 3.586a2 2 0 112.828 2.828l-.793.793-2.828-2.828.793-.793zM11.379 5.793L3 14.172V17h2.828l8.38-8.379-2.83-2.828z" /></svg>
                        </button>
                    </div>
                    <h1 className="mt-4 text-2xl font-bold text-white tracking-tight">Chris Chizobam</h1>
                    <p className="text-blue-100/70 font-medium text-sm">chrischizobam@gmail.com</p>
                </div>
            </header>

            <main className="px-6 pb-32 space-y-6 -mt-6">
                {/* Green Verified Section: Pushed below the blue profile header for clear hierarchy */}
                <div className="bg-emerald-50 p-5 rounded-[32px] border border-emerald-100 flex items-center space-x-4 shadow-sm relative z-10">
                    <div className="bg-emerald-500 h-10 w-10 rounded-full flex items-center justify-center text-white shadow-sm">
                        <CheckCircleIcon />
                    </div>
                    <div>
                        <p className="text-emerald-800 font-bold text-sm">Verified Account</p>
                        <p className="text-[10px] text-emerald-600/70 font-bold uppercase tracking-wider">Identity Confirmed</p>
                    </div>
                </div>

                <div className="space-y-3 px-2">
                    <div className="flex justify-between items-center">
                         <span className="text-gray-400 text-[10px] font-bold uppercase tracking-widest">Phone number</span>
                         <span className="text-gray-800 text-[11px] font-bold">+234 800 000 0000</span>
                    </div>
                    <div className="flex justify-between items-center">
                         <span className="text-gray-400 text-[10px] font-bold uppercase tracking-widest">Email</span>
                         <span className="text-gray-800 text-[11px] font-bold">chrischizobam@gmail.com</span>
                    </div>
                </div>

                <div className="bg-white rounded-[32px] shadow-sm border border-gray-100 overflow-hidden">
                    <MenuItem icon="👤" title="Personal Information" onClick={() => navigate('/app/profile/info')} color="blue" />
                    <MenuItem icon="🛡️" title="Security & Privacy" onClick={() => navigate('/app/profile/security')} color="emerald" />
                    <MenuItem icon="🔔" title="Notifications" onClick={() => navigate('/app/profile/notification-settings')} color="orange" />
                    <MenuItem icon="🔗" title="Linked Bank Accounts" onClick={() => navigate('/app/profile/accounts')} color="blue" />
                    <MenuItem icon="❓" title="Help & Support" onClick={() => navigate('/app/profile/help')} color="blue" />
                    <MenuItem icon="🚪" title="Log Out" onClick={() => navigate('/welcome')} color="red" />
                </div>

                <button className="w-full mt-4 py-5 bg-red-50 text-red-500 font-bold rounded-[24px] active:scale-[0.98] transition-all text-sm">
                    Delete Account
                </button>
            </main>
        </div>
    );
};

export default ProfileScreen;