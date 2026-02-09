import React, { useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import BackArrowIcon from '../../components/icons/BackArrowIcon.tsx';
import Button from '../../components/ui/Button.tsx';

const TransferAmountScreen = () => {
    const navigate = useNavigate();
    const location = useLocation();
    const [amount, setAmount] = useState('');
    const [note, setNote] = useState('');
    const [error, setError] = useState('');
    
    const { contact } = location.state || { contact: { name: 'User', avatar: 'https://i.pravatar.cc/48' } };

    const handleSend = () => {
        const amountValue = parseFloat(amount);
        if (!amount || isNaN(amountValue) || amountValue <= 0) {
            setError('Please enter a valid amount');
            return;
        }
        if (amountValue > 350750) {
            setError('Insufficient balance');
            return;
        }

        navigate('/success', { 
            state: { 
                title: 'Money Sent!', 
                message: `₦${amountValue.toLocaleString()} successfully sent to ${contact.name}.`, 
                redirectTo: '/app/dashboard' 
            } 
        });
    };

    return (
        <div className="min-h-screen bg-caelum-gray flex flex-col">
            <header className="p-6 bg-white flex items-center justify-between shadow-sm">
                <button onClick={() => navigate(-1)} className="p-2 -ml-2 text-gray-500">
                    <BackArrowIcon />
                </button>
                <h1 className="text-lg font-bold text-gray-800">Send Money</h1>
                <div className="w-10"></div>
            </header>

            <main className="flex-1 p-6 flex flex-col items-center">
                <div className="flex flex-col items-center mb-10 animate-fade-in-up">
                    <div className="relative">
                        <img src={contact.avatar} alt={contact.name} className="h-20 w-20 rounded-3xl border-4 border-white shadow-lg" />
                        <div className="absolute -bottom-1 -right-1 bg-green-500 h-5 w-5 rounded-full border-2 border-white"></div>
                    </div>
                    <h2 className="mt-4 text-xl font-bold text-gray-800">{contact.name}</h2>
                    <p className="text-sm text-gray-400 font-medium">@{contact.name.toLowerCase().replace(' ', '')}</p>
                </div>

                <div className="w-full bg-white rounded-[40px] p-10 shadow-sm text-center">
                    <label className="block text-xs font-bold text-gray-400 uppercase tracking-widest mb-4">Transfer Amount</label>
                    <div className="flex items-center justify-center relative">
                        <span className={`text-2xl font-bold mr-2 ${error ? 'text-red-300' : 'text-gray-400'}`}>₦</span>
                        <input 
                            autoFocus
                            type="number"
                            value={amount}
                            onChange={(e) => {
                                setAmount(e.target.value);
                                setError('');
                            }}
                            placeholder="0.00"
                            className={`bg-transparent text-5xl font-bold outline-none w-full text-center placeholder:text-gray-100 ${error ? 'text-red-500' : 'text-gray-800'}`}
                        />
                    </div>
                    {error && <p className="text-red-500 text-xs mt-4 font-bold uppercase tracking-wider">{error}</p>}
                    
                    <div className="mt-10 border-t border-gray-50 pt-8">
                        <input 
                            type="text"
                            value={note}
                            onChange={(e) => setNote(e.target.value)}
                            placeholder="Add a note (e.g. For dinner 🍕)"
                            className="w-full text-center bg-gray-50 py-4 px-6 rounded-[20px] text-sm text-gray-600 font-medium outline-none focus:ring-2 focus:ring-caelum-vibrant-blue/10 transition-all"
                        />
                    </div>
                </div>
                
                <div className="mt-8 flex flex-col items-center">
                    <p className="text-xs text-gray-400 font-medium px-4 text-center">
                        Available Balance: <span className="text-gray-800 font-bold">₦350,750.00</span>
                    </p>
                </div>
            </main>

            <div className="p-8 bg-white border-t border-gray-100">
                <Button onClick={handleSend} variant="primary">Confirm & Send</Button>
            </div>
        </div>
    );
};

export default TransferAmountScreen;