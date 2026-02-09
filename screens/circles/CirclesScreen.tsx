import React from 'react';
import { useNavigate } from 'react-router-dom';

const CircleCard = ({ title, goal, current, members, progress, color }: any) => {
    const colorMap: any = {
        emerald: 'bg-emerald-500',
        orange: 'bg-orange-500',
        purple: 'bg-purple-500',
    };

    return (
        <div className="bg-white rounded-[32px] p-6 shadow-sm border border-gray-100 relative overflow-hidden group">
            <div className="flex justify-between items-start mb-4">
                <div>
                    <h4 className="text-lg font-bold text-gray-800">{title}</h4>
                    <p className="text-xs font-bold text-gray-400 uppercase tracking-widest mt-0.5">Goal Amount: ₦{goal.toLocaleString()}</p>
                </div>
                <button className="text-gray-300 hover:text-gray-500">
                    <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24"><path d="M12 8c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2zm0 2c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm0 6c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2z" /></svg>
                </button>
            </div>

            <div className="flex items-center space-x-2 mb-2">
                <div className="flex -space-x-2">
                    {members.map((m: any, i: number) => (
                        <div key={i} className={`h-7 w-7 rounded-full border-2 border-white flex items-center justify-center text-[10px] font-bold text-white ${['bg-red-400', 'bg-blue-400', 'bg-emerald-400', 'bg-orange-400'][i % 4]}`}>{m}</div>
                    ))}
                    <div className="h-7 w-7 rounded-full border-2 border-white bg-gray-100 flex items-center justify-center text-[10px] font-bold text-gray-400">+3</div>
                </div>
                <span className="text-xs font-bold text-gray-400">{members.length + 3} members</span>
            </div>

            <div className="space-y-3 mt-6">
                <div className="flex justify-between text-xs font-bold">
                    <span className="text-gray-800">₦{current.toLocaleString()} saved</span>
                    <span className={`${color === 'emerald' ? 'text-emerald-500' : color === 'orange' ? 'text-orange-500' : 'text-purple-500'}`}>{progress}% complete</span>
                </div>
                <div className="h-2.5 w-full bg-gray-100 rounded-full overflow-hidden">
                    <div className={`h-full rounded-full transition-all duration-1000 ${colorMap[color]}`} style={{ width: `${progress}%` }}></div>
                </div>
            </div>

            <div className="flex space-x-3 mt-6">
                <button className="flex-1 bg-caelum-vibrant-blue text-white py-2.5 rounded-xl font-bold text-xs shadow-lg shadow-caelum-vibrant-blue/20">Add Funds</button>
                <button className="flex-1 bg-white border border-gray-200 text-gray-600 py-2.5 rounded-xl font-bold text-xs">View Details</button>
            </div>
        </div>
    );
};

const CirclesScreen = () => {
    const navigate = useNavigate();

    return (
        <div className="p-6 bg-[#FAFAFA] min-h-screen">
            <header className="flex justify-between items-center mb-8">
                <h1 className="text-2xl font-bold text-gray-900 tracking-tight">Trust Circles</h1>
                <button 
                    onClick={() => navigate('/app/circles/create')}
                    className="bg-caelum-vibrant-blue text-white px-5 py-2.5 rounded-2xl font-bold text-sm shadow-lg shadow-caelum-vibrant-blue/20"
                >
                    + New Circle
                </button>
            </header>

            <div className="grid grid-cols-2 gap-4 mb-10">
                <div className="bg-white p-5 rounded-[32px] border border-gray-100 shadow-sm flex flex-col items-center text-center">
                    <div className="h-12 w-12 bg-pink-50 rounded-full flex items-center justify-center mb-3 text-2xl">🐷</div>
                    <p className="text-gray-400 text-[10px] font-bold uppercase tracking-wider">Total in Circles</p>
                    <p className="text-lg font-bold text-gray-900 mt-1">₦125,000</p>
                    <p className="text-emerald-500 text-[10px] font-bold mt-1">+12.5% this month</p>
                </div>
                <div className="bg-white p-5 rounded-[32px] border border-gray-100 shadow-sm flex flex-col items-center text-center">
                    <div className="h-12 w-12 bg-blue-50 rounded-full flex items-center justify-center mb-3 text-2xl">👥</div>
                    <p className="text-gray-400 text-[10px] font-bold uppercase tracking-wider">Active Circles</p>
                    <p className="text-4xl font-bold text-gray-900 mt-1">3</p>
                    <p className="text-gray-400 text-[10px] font-bold mt-1">Saving groups</p>
                </div>
            </div>

            <div className="space-y-6 pb-24">
                <h3 className="text-lg font-bold text-gray-800">My Circles</h3>
                <CircleCard title="Family Savings Pool" goal={500000} current={225000} members={['JD', 'MO', 'AO']} progress={45} color="emerald" />
                <CircleCard title="Wedding Savings" goal={2000000} current={600000} members={['JD', 'NN', 'CH']} progress={30} color="orange" />
                <CircleCard title="Emergency Fund" goal={200000} current={160000} members={['JD', 'NN', 'AO']} progress={80} color="purple" />
            </div>
        </div>
    );
};

export default CirclesScreen;