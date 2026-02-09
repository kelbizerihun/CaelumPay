import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import BackArrowIcon from '../../components/icons/BackArrowIcon.tsx';
import Button from '../../components/ui/Button.tsx';

const BankTransferFlow = () => {
    const navigate = useNavigate();
    const [step, setStep] = useState(1);
    const [bank, setBank] = useState('');
    const [account, setAccount] = useState('');
    const [amount, setAmount] = useState('');

    const banks = ['GTBank', 'Access Bank', 'Zenith Bank', 'UBA', 'First Bank', 'Kuda Bank'];

    const renderStep = () => {
        switch(step) {
            case 1:
                return (
                    <div className="space-y-8 animate-fade-in-up">
                        <div className="text-center">
                            <h2 className="text-2xl font-bold text-gray-900">Transfer to Bank</h2>
                            <p className="text-gray-500 mt-2">Send money to any Nigerian bank</p>
                        </div>

                        <div className="space-y-6">
                            <div className="bg-white rounded-[32px] p-6 shadow-sm border border-gray-100 space-y-6">
                                <div className="space-y-2">
                                    <label className="text-[10px] font-bold text-gray-400 uppercase tracking-widest px-2">Select Bank</label>
                                    <select 
                                        value={bank}
                                        onChange={(e) => setBank(e.target.value)}
                                        className="w-full bg-gray-50 p-4 rounded-2xl font-bold text-gray-800 outline-none appearance-none border border-gray-100"
                                    >
                                        <option value="">Choose a bank...</option>
                                        {banks.map(b => <option key={b} value={b}>{b}</option>)}
                                    </select>
                                </div>
                                <div className="space-y-2">
                                    <label className="text-[10px] font-bold text-gray-400 uppercase tracking-widest px-2">Account Number</label>
                                    <input 
                                        type="number"
                                        maxLength={10}
                                        value={account}
                                        onChange={(e) => setAccount(e.target.value)}
                                        placeholder="0000000000"
                                        className="w-full bg-gray-50 p-4 rounded-2xl font-bold text-gray-800 outline-none border border-gray-100"
                                    />
                                </div>
                            </div>

                            {account.length === 10 && (
                                <div className="bg-emerald-50 p-4 rounded-2xl border border-emerald-100 flex items-center justify-between">
                                    <div>
                                        <p className="text-[10px] font-bold text-emerald-600 uppercase tracking-widest">Account Name</p>
                                        <p className="text-sm font-bold text-gray-800">CHIDI AFAM OKAFOR</p>
                                    </div>
                                    <div className="bg-emerald-500 rounded-full p-1">
                                        <svg className="w-3 h-3 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M5 13l4 4L19 7" /></svg>
                                    </div>
                                </div>
                            )}
                        </div>
                    </div>
                );
            case 2:
                return (
                    <div className="space-y-8 animate-fade-in-up">
                        <div className="text-center">
                            <h2 className="text-2xl font-bold text-gray-900">Enter Amount</h2>
                            <p className="text-gray-500 mt-2">How much are you sending to {bank}?</p>
                        </div>

                        <div className="bg-white rounded-[40px] p-10 shadow-sm border border-gray-100 text-center relative overflow-hidden">
                            <div className="relative z-10">
                                <label className="text-[10px] font-bold text-gray-400 uppercase tracking-widest block mb-4">Amount to Send</label>
                                <div className="flex items-center justify-center space-x-2">
                                    <span className="text-3xl font-bold text-gray-400">₦</span>
                                    <input 
                                        autoFocus
                                        type="number"
                                        value={amount}
                                        onChange={(e) => setAmount(e.target.value)}
                                        placeholder="0.00"
                                        className="bg-transparent text-5xl font-bold text-gray-900 outline-none w-full text-center placeholder:text-gray-100"
                                    />
                                </div>
                                <div className="mt-10 pt-6 border-t border-gray-50">
                                    <p className="text-xs font-bold text-gray-400">Balance: ₦350,750.00</p>
                                </div>
                            </div>
                        </div>

                        <div className="space-y-4">
                            <h3 className="text-[10px] font-bold text-gray-400 uppercase tracking-widest px-2">Recent Notes</h3>
                            <div className="flex space-x-3">
                                {['Family support', 'Business payment', 'Rent'].map(note => (
                                    <button key={note} className="px-4 py-2 bg-white border border-gray-100 rounded-xl text-xs font-bold text-gray-600 shadow-sm">{note}</button>
                                ))}
                            </div>
                        </div>
                    </div>
                );
            default:
                return null;
        }
    };

    return (
        <div className="min-h-screen bg-[#FAFAFA] flex flex-col">
            <header className="p-6 bg-white flex items-center justify-between shadow-sm">
                <button onClick={() => step > 1 ? setStep(step - 1) : navigate(-1)} className="p-2 -ml-2 text-gray-400">
                    <BackArrowIcon />
                </button>
                <h1 className="text-xl font-bold text-gray-900">Bank Transfer</h1>
                <div className="w-10"></div>
            </header>

            <main className="flex-1 p-6">
                {renderStep()}
            </main>

            <div className="p-6">
                <Button 
                    onClick={() => step < 2 ? setStep(step + 1) : navigate('/success', { 
                        state: { 
                            title: 'Transfer Success!', 
                            message: `₦${parseFloat(amount).toLocaleString()} sent to ${bank} account ${account}.`, 
                            redirectTo: '/app/dashboard' 
                        } 
                    })} 
                    variant="primary"
                    disabled={step === 1 && (!bank || account.length !== 10)}
                >
                    {step === 1 ? 'Next' : 'Send Money'}
                </Button>
            </div>
        </div>
    );
};

export default BankTransferFlow;