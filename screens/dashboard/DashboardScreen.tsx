import React from 'react';
import { useNavigate } from 'react-router-dom';
import BellIcon from '../../components/icons/BellIcon.tsx';
import EyeOpenIcon from '../../components/icons/EyeOpenIcon.tsx';

const DashboardScreen = () => {
    const navigate = useNavigate();
    const transactions = [
        { icon: '↗️', type: 'Sent to Ada Obi', amount: '-₦15,000', time: 'Today, 2:30 PM', color: 'red' },
        { icon: '↙️', type: 'Received from Chidi', amount: '+₦25,000', time: 'Today, 9:15 AM', color: 'emerald' },
        { icon: '👥', type: 'Family Savings Pool', amount: '-₦5,000', time: 'Yesterday, 4:20 PM', color: 'blue' },
        { icon: '➕', type: 'Added Money', amount: '+₦50,000', time: 'Jan 30, 11:00 AM', color: 'orange' },
    ];
    
    return (
        <div className="p-6 bg-[#FAFAFA] min-h-screen">
            <header className="flex justify-between items-center mb-6">
                <div>
                    <p className="text-gray-400 text-sm font-medium">Hello</p>
                    <h2 className="text-xl font-bold text-gray-900">Alex Jones</h2>
                </div>
                <div className="flex items-center space-x-3">
                    <button onClick={() => navigate('/app/notifications')} className="relative p-2.5 bg-white rounded-full shadow-sm border border-gray-100">
                        <BellIcon />
                        <span className="absolute top-2.5 right-2.5 h-2 w-2 bg-red-500 rounded-full border-2 border-white"></span>
                    </button>
                    <img onClick={() => navigate('/app/profile')} src="https://i.pravatar.cc/100" alt="Profile" className="h-11 w-11 rounded-full border-2 border-white shadow-sm cursor-pointer" />
                </div>
            </header>

            <main className="space-y-6">
                <div className="bg-caelum-vibrant-blue rounded-[32px] p-8 shadow-xl shadow-caelum-vibrant-blue/20 text-white relative overflow-hidden">
                    <p className="text-sm font-medium opacity-80">Total Balance</p>
                    <div className="flex items-center space-x-3 mt-1 mb-1">
                        <span className="text-4xl font-bold tracking-tight">₦350,750.00</span>
                        <EyeOpenIcon className="w-5 h-5 opacity-60" />
                    </div>
                    <p className="text-sm opacity-60">🌍 ≈ $235.50 USD</p>
                    
                    <div className="flex space-x-4 mt-8">
                        <button onClick={() => navigate('/app/add-money')} className="flex-1 bg-white text-caelum-vibrant-blue py-3.5 rounded-2xl font-bold text-sm transition-transform active:scale-95 flex items-center justify-center space-x-2">
                            <span className="text-xl">+</span> <span>Add money</span>
                        </button>
                        <button onClick={() => navigate('/app/pay')} className="flex-1 bg-white/20 text-white py-3.5 rounded-2xl font-bold text-sm backdrop-blur-md transition-transform active:scale-95 border border-white/20 flex items-center justify-center space-x-2">
                            <span className="text-xl">↗️</span> <span>Send money</span>
                        </button>
                    </div>
                </div>

                <div className="grid grid-cols-2 gap-4">
                    <div className="bg-white p-5 rounded-3xl border border-gray-100 shadow-sm">
                        <div className="h-10 w-10 bg-emerald-50 rounded-2xl flex items-center justify-center mb-3">
                            <span className="text-emerald-500">📈</span>
                        </div>
                        <p className="text-gray-400 text-xs font-bold uppercase tracking-wider">Saved This Month</p>
                        <p className="text-xl font-bold text-emerald-500 mt-1">$45.50</p>
                    </div>
                    <div className="bg-white p-5 rounded-3xl border border-gray-100 shadow-sm">
                        <div className="h-10 w-10 bg-blue-50 rounded-2xl flex items-center justify-center mb-3">
                            <span className="text-caelum-vibrant-blue">👥</span>
                        </div>
                        <p className="text-gray-400 text-xs font-bold uppercase tracking-wider">Trust Circles</p>
                        <p className="text-xl font-bold text-gray-800 mt-1">3 Active</p>
                    </div>
                </div>

                <div className="flex justify-between items-center">
                    <h3 className="text-lg font-bold text-gray-800">Recent Transactions</h3>
                    <button className="text-caelum-vibrant-blue text-sm font-bold">See All</button>
                </div>
                
                <div className="bg-white rounded-[32px] p-4 shadow-sm border border-gray-50 space-y-1">
                    {transactions.map((tx, i) => (
                        <div key={i} className="flex items-center space-x-4 p-3.5 rounded-2xl hover:bg-gray-50 transition-colors">
                            <div className={`h-12 w-12 flex items-center justify-center rounded-2xl text-xl ${tx.color === 'red' ? 'bg-red-50' : tx.color === 'emerald' ? 'bg-emerald-50' : tx.color === 'orange' ? 'bg-orange-50' : 'bg-blue-50'}`}>
                                {tx.icon}
                            </div>
                            <div className="flex-grow">
                                <p className="font-bold text-gray-800 text-[15px]">{tx.type}</p>
                                <p className="text-xs text-gray-400 font-medium">{tx.time}</p>
                            </div>
                            <div className="text-right">
                                <p className={`font-bold text-[15px] ${tx.amount.startsWith('+') ? 'text-emerald-500' : 'text-red-500'}`}>{tx.amount}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </main>
        </div>
    );
};

export default DashboardScreen;