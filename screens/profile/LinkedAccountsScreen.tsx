import React from 'react';
import { useNavigate } from 'react-router-dom';
import BackArrowIcon from '../../components/icons/BackArrowIcon.tsx';

const LinkedAccountsScreen = () => {
    const navigate = useNavigate();

    const AccountCard = ({ icon, bankName, accountNumber, type }: any) => (
        <div className="bg-white p-5 rounded-[24px] shadow-sm border border-gray-50 flex items-center justify-between mb-4">
            <div className="flex items-center space-x-4">
                <div className={`h-12 w-12 rounded-xl flex items-center justify-center font-bold text-white ${bankName === 'GTBank' ? 'bg-orange-600' : 'bg-blue-600'}`}>
                    {bankName === 'GTBank' ? 'GT' : 'AC'}
                </div>
                <div>
                    <p className="font-bold text-gray-800 text-sm">{bankName}</p>
                    <p className="text-xs text-gray-400 font-medium">•••• {accountNumber} • {type}</p>
                </div>
            </div>
            <div className="h-6 w-6 bg-emerald-500 rounded-full flex items-center justify-center text-white">
                <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M5 13l4 4L19 7" /></svg>
            </div>
        </div>
    );

    return (
        <div className="min-h-screen bg-[#FAFAFA] flex flex-col">
            <header className="p-6 bg-white flex items-center space-x-4 shadow-sm sticky top-0 z-10">
                <button onClick={() => navigate(-1)} className="p-2 -ml-2 bg-gray-50 rounded-full text-gray-400">
                    <BackArrowIcon />
                </button>
                <h1 className="text-xl font-bold text-gray-900">Linked Accounts</h1>
            </header>

            <main className="flex-1 p-6">
                <div className="bg-blue-50 p-5 rounded-[32px] border border-blue-100 flex items-start space-x-4 mb-8">
                    <div className="text-2xl">🔒</div>
                    <div>
                        <p className="font-bold text-blue-900 text-sm">Your accounts are secure</p>
                        <p className="text-xs text-blue-700/70 font-medium leading-relaxed">Bank-level encryption protects all linked accounts</p>
                    </div>
                </div>

                <div className="mb-8">
                    <h2 className="text-lg font-bold text-gray-800 mb-4 px-2">Bank Accounts</h2>
                    <AccountCard bankName="GTBank" accountNumber="5678" type="Savings Account" />
                    <AccountCard bankName="Access Bank" accountNumber="1234" type="Current Account" />
                </div>

                <div className="mb-8">
                    <h2 className="text-lg font-bold text-gray-800 mb-4 px-2">Debit/Credit Cards</h2>
                    <div className="bg-white p-5 rounded-[24px] shadow-sm border border-gray-50 flex items-center justify-between mb-4">
                        <div className="flex items-center space-x-4">
                             <div className="h-12 w-12 bg-gray-900 rounded-xl flex items-center justify-center">
                                 <div className="flex -space-x-2">
                                     <div className="h-5 w-5 rounded-full bg-orange-500"></div>
                                     <div className="h-5 w-5 rounded-full bg-red-500 opacity-80"></div>
                                 </div>
                             </div>
                             <div>
                                <p className="font-bold text-gray-800 text-sm">Mastercard</p>
                                <p className="text-xs text-gray-400 font-medium">•••• 4567 • Expires 12/26</p>
                             </div>
                        </div>
                        <div className="h-6 w-6 bg-emerald-500 rounded-full flex items-center justify-center text-white">
                            <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M5 13l4 4L19 7" /></svg>
                        </div>
                    </div>
                </div>

                <button className="w-full py-6 bg-blue-50 border-2 border-dashed border-caelum-vibrant-blue rounded-[32px] flex items-center justify-center space-x-3 group">
                    <div className="h-10 w-10 bg-caelum-vibrant-blue rounded-full flex items-center justify-center text-white shadow-lg shadow-caelum-vibrant-blue/20 group-active:scale-90 transition-transform">
                        <span className="text-2xl font-bold">+</span>
                    </div>
                    <span className="font-bold text-caelum-vibrant-blue">Add Bank Account or Card</span>
                </button>

                <div className="mt-10 bg-gray-50 p-5 rounded-[32px] flex items-start space-x-4 border border-gray-100">
                     <div className="text-2xl">🛡️</div>
                     <div>
                         <p className="font-bold text-gray-800 text-sm">Your data is protected</p>
                         <p className="text-xs text-gray-400 font-medium leading-relaxed">We never store your full card number or PIN. All connections are encrypted with 256-bit SSL security.</p>
                     </div>
                </div>
            </main>
        </div>
    );
};

export default LinkedAccountsScreen;