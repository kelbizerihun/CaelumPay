import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import BackArrowIcon from '../../components/icons/BackArrowIcon.tsx';
import Button from '../../components/ui/Button.tsx';

const InternationalTransferScreen = () => {
    const navigate = useNavigate();
    const [step, setStep] = useState(1);
    const [sendAmount, setSendAmount] = useState('100000');
    const [selectedCountry, setSelectedCountry] = useState({ name: 'United Kingdom', code: 'GB', flag: '🇬🇧', currency: 'GBP', rate: 0.00052 });

    const countries = [
        { name: 'United Kingdom', code: 'GB', flag: '🇬🇧', currency: 'GBP', rate: 0.00052 },
        { name: 'United States', code: 'US', flag: '🇺🇸', currency: 'USD', rate: 0.00065 },
        { name: 'Ghana', code: 'GH', flag: '🇬🇭', currency: 'GHS', rate: 0.0082 },
        { name: 'Kenya', code: 'KE', flag: '🇰🇪', currency: 'KES', rate: 0.084 },
    ];

    const receiveAmount = (parseFloat(sendAmount) * selectedCountry.rate).toFixed(2);

    const renderStep = () => {
        switch(step) {
            case 1:
                return (
                    <div className="space-y-8 animate-fade-in-up">
                        <div className="text-center">
                            <h2 className="text-2xl font-bold text-gray-900">International Transfer</h2>
                            <p className="text-gray-500 mt-2">Send money across borders instantly</p>
                        </div>

                        <div className="space-y-4">
                            <h3 className="text-[10px] font-bold text-gray-400 uppercase tracking-widest px-2">Select Destination</h3>
                            <div className="grid grid-cols-2 gap-4">
                                {countries.map(c => (
                                    <button 
                                        key={c.code}
                                        onClick={() => setSelectedCountry(c)}
                                        className={`p-4 rounded-[24px] border-2 text-left transition-all ${selectedCountry.code === c.code ? 'border-caelum-vibrant-blue bg-blue-50' : 'border-white bg-white shadow-sm'}`}
                                    >
                                        <span className="text-3xl block mb-2">{c.flag}</span>
                                        <p className="font-bold text-gray-800 text-sm">{c.name}</p>
                                        <p className="text-[10px] text-gray-400 font-bold uppercase">{c.currency}</p>
                                    </button>
                                ))}
                            </div>
                        </div>

                        <div className="bg-white rounded-[32px] p-8 shadow-sm border border-gray-100 space-y-8">
                            <div className="relative">
                                <label className="text-[10px] font-bold text-gray-400 uppercase tracking-widest block mb-2">You Send</label>
                                <div className="flex items-center justify-between">
                                    <input 
                                        type="number" 
                                        value={sendAmount} 
                                        onChange={(e) => setSendAmount(e.target.value)}
                                        className="text-3xl font-bold text-gray-900 outline-none w-1/2"
                                    />
                                    <div className="flex items-center space-x-2 bg-gray-50 px-4 py-2 rounded-xl">
                                        <span className="text-xl">🇳🇬</span>
                                        <span className="font-bold text-gray-800">NGN</span>
                                    </div>
                                </div>
                            </div>

                            <div className="flex justify-center -my-4 relative z-10">
                                <div className="bg-caelum-vibrant-blue p-3 rounded-full text-white shadow-lg">
                                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 14l-7 7m0 0l-7-7m7 7V3" /></svg>
                                </div>
                            </div>

                            <div className="relative pt-4">
                                <label className="text-[10px] font-bold text-gray-400 uppercase tracking-widest block mb-2">They Receive</label>
                                <div className="flex items-center justify-between">
                                    <p className="text-3xl font-bold text-emerald-500">{receiveAmount}</p>
                                    <div className="flex items-center space-x-2 bg-gray-50 px-4 py-2 rounded-xl">
                                        <span className="text-xl">{selectedCountry.flag}</span>
                                        <span className="font-bold text-gray-800">{selectedCountry.currency}</span>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="bg-blue-50 p-4 rounded-2xl border border-blue-100 text-center">
                            <p className="text-xs font-bold text-blue-800">Exchange Rate: 1 NGN = {selectedCountry.rate} {selectedCountry.currency}</p>
                            <p className="text-[10px] text-blue-600 mt-1">Fee: ₦500.00 • Delivery: Within 24 hours</p>
                        </div>
                    </div>
                );
            case 2:
                return (
                    <div className="space-y-8 animate-fade-in-up">
                        <div className="text-center">
                            <h2 className="text-2xl font-bold text-gray-900">Recipient Details</h2>
                            <p className="text-gray-500 mt-2">Enter {selectedCountry.name} bank info</p>
                        </div>

                        <div className="bg-white rounded-[32px] p-6 shadow-sm border border-gray-100 space-y-6">
                            <div className="space-y-1">
                                <label className="text-[10px] font-bold text-gray-400 uppercase tracking-widest">Full Legal Name</label>
                                <input className="w-full text-lg font-bold text-gray-800 outline-none border-b border-gray-100 pb-2" placeholder="Recipient's Name" />
                            </div>
                            <div className="space-y-1">
                                <label className="text-[10px] font-bold text-gray-400 uppercase tracking-widest">Bank Name</label>
                                <input className="w-full text-lg font-bold text-gray-800 outline-none border-b border-gray-100 pb-2" placeholder="e.g. Barclays Bank" />
                            </div>
                            <div className="space-y-1">
                                <label className="text-[10px] font-bold text-gray-400 uppercase tracking-widest">Account Number / IBAN</label>
                                <input className="w-full text-lg font-bold text-gray-800 outline-none border-b border-gray-100 pb-2" placeholder="GB12 3456 7890..." />
                            </div>
                            <div className="space-y-1">
                                <label className="text-[10px] font-bold text-gray-400 uppercase tracking-widest">Swift / BIC Code</label>
                                <input className="w-full text-lg font-bold text-gray-800 outline-none border-b border-gray-100 pb-2" placeholder="BARCGB22" />
                            </div>
                        </div>

                        <div className="bg-orange-50 p-6 rounded-[24px] border border-orange-100 flex items-start space-x-4">
                            <span className="text-2xl">⚠️</span>
                            <p className="text-[11px] text-orange-800 font-bold leading-relaxed">Ensure the name matches the bank record perfectly to avoid delays or reversals.</p>
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
                <h1 className="text-xl font-bold text-gray-900">Send International</h1>
                <div className="w-10"></div>
            </header>

            <main className="flex-1 p-6">
                {renderStep()}
            </main>

            <div className="p-6">
                <Button 
                    onClick={() => step < 2 ? setStep(step + 1) : navigate('/success', { 
                        state: { 
                            title: 'Transfer Scheduled!', 
                            message: `Your transfer of ₦${parseFloat(sendAmount).toLocaleString()} is being processed.`, 
                            redirectTo: '/app/dashboard' 
                        } 
                    })} 
                    variant="primary"
                >
                    {step === 1 ? 'Continue' : 'Confirm & Send'}
                </Button>
            </div>
        </div>
    );
};

export default InternationalTransferScreen;