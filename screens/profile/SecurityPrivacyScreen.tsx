import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import BackArrowIcon from '../../components/icons/BackArrowIcon.tsx';

const SecurityToggle = ({ icon, title, subtitle, enabled, onToggle }: any) => (
    <div className="flex items-center justify-between p-4 bg-white rounded-[24px] shadow-sm mb-3">
        <div className="flex items-center">
            <div className="h-10 w-10 rounded-2xl bg-gray-50 flex items-center justify-center text-xl mr-4">{icon}</div>
            <div>
                <p className="font-bold text-gray-800 text-sm">{title}</p>
                <p className="text-[10px] text-gray-400 font-bold uppercase">{subtitle}</p>
            </div>
        </div>
        <button onClick={onToggle} className={`h-6 w-11 rounded-full p-1 transition-all ${enabled ? 'bg-caelum-vibrant-blue' : 'bg-gray-200'}`}>
            <div className={`h-4 w-4 rounded-full bg-white transition-all ${enabled ? 'translate-x-5' : 'translate-x-0'}`} />
        </button>
    </div>
);

const SecurityPrivacyScreen = () => {
    const navigate = useNavigate();
    const [fingerprint, setFingerprint] = useState(true);
    const [analytics, setAnalytics] = useState(true);

    return (
        <div className="min-h-screen bg-[#FAFAFA]">
            <header className="p-6 bg-white flex items-center space-x-4 shadow-sm">
                <button onClick={() => navigate(-1)} className="p-2 -ml-2 text-gray-400">
                    <BackArrowIcon />
                </button>
                <h1 className="text-xl font-bold text-gray-900">Security & Privacy</h1>
            </header>

            <main className="p-6 space-y-8">
                <div>
                    <h2 className="text-xs font-bold text-gray-400 uppercase tracking-widest mb-4 px-2">Login Security</h2>
                    <div className="bg-white rounded-[32px] shadow-sm overflow-hidden p-2">
                        <button onClick={() => navigate('/app/profile/security/pin')} className="w-full flex items-center justify-between p-4 hover:bg-gray-50 rounded-2xl transition-colors">
                            <div className="flex items-center">
                                <div className="h-10 w-10 bg-blue-50 text-caelum-vibrant-blue rounded-2xl flex items-center justify-center text-xl mr-4">🔐</div>
                                <div className="text-left">
                                    <p className="font-bold text-gray-800 text-sm">Change PIN</p>
                                    <p className="text-[10px] text-gray-400 font-bold uppercase">Update your 4-digit PIN</p>
                                </div>
                            </div>
                            <span className="text-gray-300">❯</span>
                        </button>
                        <button className="w-full flex items-center justify-between p-4 hover:bg-gray-50 rounded-2xl transition-colors">
                            <div className="flex items-center">
                                <div className="h-10 w-10 bg-orange-50 text-orange-500 rounded-2xl flex items-center justify-center text-xl mr-4">🔑</div>
                                <div className="text-left">
                                    <p className="font-bold text-gray-800 text-sm">Change Password</p>
                                    <p className="text-[10px] text-gray-400 font-bold uppercase">Update your account password</p>
                                </div>
                            </div>
                            <span className="text-gray-300">❯</span>
                        </button>
                        <SecurityToggle 
                            icon="👆" 
                            title="Fingerprint / Face ID" 
                            subtitle="Use biometrics for login" 
                            enabled={fingerprint} 
                            onToggle={() => setFingerprint(!fingerprint)} 
                        />
                    </div>
                </div>

                <div>
                    <h2 className="text-xs font-bold text-gray-400 uppercase tracking-widest mb-4 px-2">Two-Factor Authentication</h2>
                    <div className="bg-white rounded-[32px] shadow-sm p-4 space-y-4">
                        <div className="flex items-center justify-between">
                            <div className="flex items-center">
                                <div className="h-10 w-10 bg-yellow-50 text-yellow-600 rounded-2xl flex items-center justify-center text-xl mr-4">🔔</div>
                                <div>
                                    <p className="font-bold text-gray-800 text-sm">SMS Authentication</p>
                                    <p className="text-[10px] text-gray-400 font-bold uppercase">Codes via text message</p>
                                </div>
                            </div>
                            <div className="h-6 w-6 rounded-full bg-emerald-500 flex items-center justify-center text-white text-[10px]">✓</div>
                        </div>
                    </div>
                </div>

                <div>
                    <h2 className="text-xs font-bold text-gray-400 uppercase tracking-widest mb-4 px-2">Privacy</h2>
                    <SecurityToggle 
                        icon="📊" 
                        title="Data & Analytics" 
                        subtitle="Manage data sharing" 
                        enabled={analytics} 
                        onToggle={() => setAnalytics(!analytics)} 
                    />
                </div>
            </main>
        </div>
    );
};

export default SecurityPrivacyScreen;