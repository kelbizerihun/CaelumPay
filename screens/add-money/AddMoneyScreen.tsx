import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import BackArrowIcon from '../../components/icons/BackArrowIcon.tsx';
import Button from '../../components/ui/Button.tsx';

const AddMoneyScreen = () => {
    const navigate = useNavigate();
    const [step, setStep] = useState('selection'); // 'selection', 'bankDetails', 'cardForm'
    const [amount, setAmount] = useState('');
    const [cardDetails, setCardDetails] = useState({ number: '', expiry: '', cvv: '' });

    const presets = ['5000', '10000', '20000', '50000'];

    const handleCardPayment = () => {
        if (!amount || parseFloat(amount) <= 0) return;
        navigate('/success', { 
            state: { 
                title: 'Funds Added!', 
                message: `₦${parseFloat(amount).toLocaleString()} has been added to your balance via Card.`, 
                redirectTo: '/app/dashboard' 
            } 
        });
    };

    if (step === 'bankDetails') {
        return (
            <div className="min-h-screen bg-[#FAFAFA] flex flex-col animate-fade-in-up">
                <header className="p-6 bg-white flex items-center space-x-4 shadow-sm">
                    <button onClick={() => setStep('selection')} className="p-2 -ml-2 text-gray-400">
                        <BackArrowIcon />
                    </button>
                    <h1 className="text-xl font-bold text-gray-900">Bank Transfer</h1>
                </header>
                <main className="p-6 space-y-8">
                    <div className="bg-caelum-vibrant-blue rounded-[32px] p-8 text-white text-center shadow-xl shadow-caelum-vibrant-blue/20">
                        <p className="text-xs font-bold uppercase tracking-widest opacity-70 mb-2">CaelumPay Virtual Account</p>
                        <p className="text-sm font-medium mb-6">Transfer funds to the details below to top up your wallet instantly.</p>
                        
                        <div className="bg-white/10 backdrop-blur-md rounded-2xl p-6 border border-white/20 space-y-4">
                            <div>
                                <p className="text-[10px] font-bold uppercase opacity-60">Bank Name</p>
                                <p className="text-lg font-bold">Wema Bank / Caelum</p>
                            </div>
                            <div>
                                <p className="text-[10px] font-bold uppercase opacity-60">Account Number</p>
                                <div className="flex items-center justify-center space-x-3">
                                    <p className="text-3xl font-bold tracking-wider">8023456789</p>
                                    <button className="p-2 bg-white/20 rounded-lg text-xs font-bold active:scale-90 transition-transform">Copy</button>
                                </div>
                            </div>
                            <div>
                                <p className="text-[10px] font-bold uppercase opacity-60">Account Name</p>
                                <p className="text-lg font-bold">Caelum-Alex Jones</p>
                            </div>
                        </div>
                    </div>

                    <div className="bg-orange-50 p-6 rounded-[24px] border border-orange-100 flex items-start space-x-4">
                        <span className="text-2xl">⚡</span>
                        <p className="text-xs text-orange-800 font-bold leading-relaxed">Transfers to this account are usually instant. Minimum deposit is ₦100.</p>
                    </div>

                    <Button onClick={() => navigate('/app/dashboard')} variant="outline">I've made the transfer</Button>
                </main>
            </div>
        );
    }

    if (step === 'cardForm') {
        return (
            <div className="min-h-screen bg-[#FAFAFA] flex flex-col animate-fade-in-up">
                <header className="p-6 bg-white flex items-center space-x-4 shadow-sm">
                    <button onClick={() => setStep('selection')} className="p-2 -ml-2 text-gray-400">
                        <BackArrowIcon />
                    </button>
                    <h1 className="text-xl font-bold text-gray-900">Top up with Card</h1>
                </header>
                <main className="p-6 space-y-6">
                    <div className="bg-white rounded-[32px] p-6 shadow-sm border border-gray-100">
                        <label className="block text-[10px] font-bold text-gray-400 uppercase tracking-widest mb-4">Enter Amount</label>
                        <div className="flex items-center space-x-2 border-b-2 border-gray-50 pb-4">
                            <span className="text-2xl font-bold text-gray-400">₦</span>
                            <input 
                                type="number" 
                                value={amount} 
                                onChange={(e) => setAmount(e.target.value)}
                                className="w-full text-4xl font-bold text-gray-900 outline-none placeholder:text-gray-100"
                                placeholder="0.00"
                            />
                        </div>
                    </div>

                    <div className="space-y-4">
                         <h2 className="text-sm font-bold text-gray-400 uppercase tracking-widest px-2">Card Details</h2>
                         <div className="bg-white rounded-[32px] p-6 shadow-sm border border-gray-100 space-y-6">
                            <div className="space-y-1">
                                <label className="text-[10px] font-bold text-gray-400 uppercase tracking-widest">Card Number</label>
                                <input 
                                    className="w-full text-lg font-bold text-gray-800 outline-none border-b border-gray-100 pb-2" 
                                    placeholder="0000 0000 0000 0000"
                                    value={cardDetails.number}
                                    onChange={(e) => setCardDetails({...cardDetails, number: e.target.value})}
                                />
                            </div>
                            <div className="grid grid-cols-2 gap-6">
                                <div className="space-y-1">
                                    <label className="text-[10px] font-bold text-gray-400 uppercase tracking-widest">Expiry</label>
                                    <input 
                                        className="w-full text-lg font-bold text-gray-800 outline-none border-b border-gray-100 pb-2" 
                                        placeholder="MM/YY"
                                        value={cardDetails.expiry}
                                        onChange={(e) => setCardDetails({...cardDetails, expiry: e.target.value})}
                                    />
                                </div>
                                <div className="space-y-1">
                                    <label className="text-[10px] font-bold text-gray-400 uppercase tracking-widest">CVV</label>
                                    <input 
                                        className="w-full text-lg font-bold text-gray-800 outline-none border-b border-gray-100 pb-2" 
                                        placeholder="123"
                                        value={cardDetails.cvv}
                                        onChange={(e) => setCardDetails({...cardDetails, cvv: e.target.value})}
                                    />
                                </div>
                            </div>
                         </div>
                    </div>
                </main>
                <div className="p-6 mt-auto">
                    <Button onClick={handleCardPayment} variant="primary">Add Funds</Button>
                </div>
            </div>
        );
    }

    return (
        <div className="min-h-screen bg-[#FAFAFA] flex flex-col">
            <header className="p-6 bg-white flex items-center justify-between shadow-sm">
                <button onClick={() => navigate(-1)} className="p-2 -ml-2 text-gray-500">
                    <BackArrowIcon />
                </button>
                <h1 className="text-xl font-bold text-gray-900">Add Money</h1>
                <div className="w-10"></div>
            </header>

            <main className="p-6 space-y-8">
                <div className="bg-white rounded-[32px] p-8 shadow-sm border border-gray-100 text-center">
                    <p className="text-[10px] font-bold text-gray-400 uppercase tracking-widest mb-2">Available Balance</p>
                    <h2 className="text-4xl font-bold text-gray-900">₦350,750.00</h2>
                </div>

                <div className="space-y-4">
                    <h3 className="text-sm font-bold text-gray-400 uppercase tracking-widest px-2">Funding Methods</h3>
                    
                    <button 
                        onClick={() => setStep('bankDetails')}
                        className="w-full bg-white p-6 rounded-[32px] border border-gray-100 shadow-sm flex items-center group active:scale-[0.98] transition-all"
                    >
                        <div className="h-14 w-14 bg-blue-50 rounded-2xl flex items-center justify-center text-3xl mr-6 group-hover:bg-blue-100 transition-colors">🏦</div>
                        <div className="text-left flex-grow">
                            <p className="font-bold text-gray-800 text-lg">Bank Transfer</p>
                            <p className="text-xs text-gray-400 font-medium">Fund via virtual account number</p>
                        </div>
                        <span className="text-gray-300">❯</span>
                    </button>

                    <button 
                        onClick={() => setStep('cardForm')}
                        className="w-full bg-white p-6 rounded-[32px] border border-gray-100 shadow-sm flex items-center group active:scale-[0.98] transition-all"
                    >
                        <div className="h-14 w-14 bg-orange-50 rounded-2xl flex items-center justify-center text-3xl mr-6 group-hover:bg-orange-100 transition-colors">💳</div>
                        <div className="text-left flex-grow">
                            <p className="font-bold text-gray-800 text-lg">Debit Card</p>
                            <p className="text-xs text-gray-400 font-medium">Instant funding via card payment</p>
                        </div>
                        <span className="text-gray-300">❯</span>
                    </button>

                    <button className="w-full bg-white p-6 rounded-[32px] border border-gray-100 shadow-sm flex items-center group active:scale-[0.98] transition-all opacity-50 cursor-not-allowed">
                        <div className="h-14 w-14 bg-purple-50 rounded-2xl flex items-center justify-center text-3xl mr-6">🔗</div>
                        <div className="text-left flex-grow">
                            <p className="font-bold text-gray-800 text-lg">External Link</p>
                            <p className="text-xs text-gray-400 font-medium">Connect external wallet (Coming soon)</p>
                        </div>
                    </button>
                </div>
            </main>
        </div>
    );
};

export default AddMoneyScreen;