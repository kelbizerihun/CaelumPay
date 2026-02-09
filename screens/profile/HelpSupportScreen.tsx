import React from 'react';
import { useNavigate } from 'react-router-dom';
import BackArrowIcon from '../../components/icons/BackArrowIcon.tsx';

const SupportCard = ({ icon, title, onClick }: any) => (
    <button onClick={onClick} className="flex flex-col items-center justify-center p-6 bg-white rounded-[32px] shadow-sm border border-gray-100 hover:bg-gray-50 transition-colors">
        <div className="text-3xl mb-3">{icon}</div>
        <p className="text-xs font-bold text-gray-800 text-center">{title}</p>
    </button>
);

const HelpSupportScreen = () => {
    const navigate = useNavigate();

    return (
        <div className="min-h-screen bg-[#FAFAFA]">
            <header className="p-6 bg-white flex items-center space-x-4 shadow-sm">
                <button onClick={() => navigate(-1)} className="p-2 -ml-2 text-gray-400">
                    <BackArrowIcon />
                </button>
                <h1 className="text-xl font-bold text-gray-900">Help & Support</h1>
            </header>

            <main className="p-6 space-y-8">
                <div className="bg-caelum-vibrant-blue rounded-[32px] p-8 text-white relative overflow-hidden">
                    <div className="relative z-10">
                        <div className="bg-white/20 w-max px-3 py-1 rounded-full text-[8px] font-bold uppercase tracking-widest mb-3">AI Powered</div>
                        <h2 className="text-2xl font-bold">Sky Guide AI</h2>
                        <p className="text-blue-100/70 text-sm mt-1 leading-relaxed">Your 24/7 personal financial assistant. Get instant answers and guidance.</p>
                        <button className="mt-6 bg-white text-caelum-vibrant-blue px-6 py-2.5 rounded-2xl font-bold text-sm">Start Chat 💬</button>
                    </div>
                    <div className="absolute top-8 right-8 text-6xl opacity-20">🤖</div>
                </div>

                <div className="relative">
                    <span className="absolute left-4 top-4 text-gray-400">🔍</span>
                    <input className="w-full bg-white border border-gray-100 rounded-[24px] py-4 pl-12 pr-4 text-sm font-medium shadow-sm" placeholder="Search for help..." />
                </div>

                <div>
                    <h2 className="text-xs font-bold text-gray-400 uppercase tracking-widest mb-4 px-2">Quick Actions</h2>
                    <div className="grid grid-cols-2 gap-4">
                        <SupportCard icon="📦" title="Track Payment" />
                        <SupportCard icon="🔒" title="Report Issue" />
                        <SupportCard icon="📄" title="Statements" />
                        <SupportCard icon="💰" title="Refund Status" />
                    </div>
                </div>

                <div>
                    <h2 className="text-xs font-bold text-gray-400 uppercase tracking-widest mb-4 px-2">Frequently Asked Questions</h2>
                    <div className="bg-white rounded-[32px] shadow-sm border border-gray-50 overflow-hidden divide-y divide-gray-50">
                        {['How do I send money?', 'Transaction limits?', 'Security protocols?'].map(q => (
                            <div key={q} className="p-5 flex justify-between items-center group cursor-pointer">
                                <span className="text-sm font-bold text-gray-700">{q}</span>
                                <span className="text-gray-300 group-hover:text-caelum-vibrant-blue transition-colors">▼</span>
                            </div>
                        ))}
                    </div>
                </div>

                <div className="pb-32">
                    <h2 className="text-xs font-bold text-gray-400 uppercase tracking-widest mb-4 px-2">Contact Us</h2>
                    <div className="space-y-3">
                        <div className="bg-white p-5 rounded-[24px] shadow-sm border border-gray-50 flex items-center space-x-4">
                            <div className="h-12 w-12 bg-blue-50 rounded-2xl flex items-center justify-center text-xl">📧</div>
                            <div>
                                <p className="font-bold text-gray-800 text-sm">Email Support</p>
                                <p className="text-xs text-gray-400">support@caelumpay.com</p>
                            </div>
                        </div>
                        <div className="bg-white p-5 rounded-[24px] shadow-sm border border-gray-50 flex items-center space-x-4">
                            <div className="h-12 w-12 bg-emerald-50 rounded-2xl flex items-center justify-center text-xl">📞</div>
                            <div>
                                <p className="font-bold text-gray-800 text-sm">Phone Support</p>
                                <p className="text-xs text-gray-400">+234 700 CAELUM</p>
                            </div>
                        </div>
                    </div>
                </div>
            </main>
        </div>
    );
};

export default HelpSupportScreen;