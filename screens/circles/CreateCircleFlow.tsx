import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import BackArrowIcon from '../../components/icons/BackArrowIcon.tsx';
import Button from '../../components/ui/Button.tsx';

const CreateCircleFlow = () => {
    const navigate = useNavigate();
    const [step, setStep] = useState(1);
    const [name, setName] = useState('');
    const [goal, setGoal] = useState('500000');
    const [error, setError] = useState('');
    
    const steps = [
        { id: 1, label: 'Name' },
        { id: 2, label: 'Goal' },
        { id: 3, label: 'Members' },
        { id: 4, label: 'Review' }
    ];

    const validateStep = () => {
        if (step === 1) {
            if (!name.trim()) {
                setError('Please enter a name for your circle');
                return false;
            }
        }
        setError('');
        return true;
    };

    const handleNext = () => {
        if (validateStep()) {
            if (step < 4) setStep(step + 1);
            else {
                navigate('/success', { 
                    state: { 
                        title: 'Circle Created!', 
                        message: `Your "${name}" fund is ready for contributions.`, 
                        redirectTo: '/app/circles' 
                    } 
                });
            }
        }
    };

    const renderStep = () => {
        switch(step) {
            case 1:
                return (
                    <div className="space-y-10 animate-fade-in-up">
                        <div className="text-center">
                            <h2 className="text-2xl font-bold text-gray-900">Name Your Circle</h2>
                            <p className="text-gray-500 mt-2">Give your savings circle a memorable name</p>
                        </div>
                        <div className="space-y-4">
                            <input 
                                value={name}
                                onChange={(e) => {
                                    setName(e.target.value);
                                    setError('');
                                }}
                                className={`w-full bg-white border-2 rounded-3xl p-6 text-xl font-bold text-gray-800 outline-none transition-all ${error ? 'border-red-300' : 'border-caelum-vibrant-blue/30 focus:border-caelum-vibrant-blue'}`}
                                placeholder="e.g., Family Vacation Fund"
                                autoFocus
                            />
                            {error && <p className="text-red-500 text-xs font-bold px-4">{error}</p>}
                            <p className="text-right text-xs text-gray-400 font-bold px-4">{name.length}/50</p>
                        </div>
                        <div>
                            <p className="text-xs font-bold text-gray-400 uppercase tracking-widest mb-4 px-4">Suggestions</p>
                            <div className="grid grid-cols-2 gap-3 px-2">
                                {['💰 Emergency Fund', '🏡 Home Savings', '🎓 Education Fund', '💼 Business Capital'].map(s => (
                                    <button 
                                        key={s} 
                                        onClick={() => {
                                            setName(s.split(' ').slice(1).join(' '));
                                            setError('');
                                        }} 
                                        className="p-4 bg-white rounded-2xl border border-gray-100 text-sm font-bold text-gray-700 shadow-sm text-left active:bg-gray-50 transition-colors"
                                    >
                                        {s}
                                    </button>
                                ))}
                            </div>
                        </div>
                    </div>
                );
            case 2:
                return (
                    <div className="space-y-10 animate-fade-in-up">
                        <div className="text-center">
                            <h2 className="text-2xl font-bold text-gray-900">Set Your Goal</h2>
                            <p className="text-gray-500 mt-2">How much does your circle want to save?</p>
                        </div>
                        <div className="text-center py-6 border-b border-gray-100">
                             <p className="text-xs font-bold text-gray-400 uppercase tracking-widest mb-2">Target Amount</p>
                             <div className="text-5xl font-bold text-gray-900 tracking-tight">₦{parseInt(goal).toLocaleString()}</div>
                        </div>
                        <div className="grid grid-cols-3 gap-3 px-2">
                            {['100000', '250000', '500000', '1000000', '2000000', '5000000'].map(g => (
                                <button 
                                    key={g} 
                                    onClick={() => setGoal(g)}
                                    className={`p-5 rounded-2xl font-bold text-sm transition-all ${goal === g ? 'bg-caelum-vibrant-blue text-white shadow-lg shadow-caelum-vibrant-blue/30 scale-105' : 'bg-white border border-gray-100 text-gray-700 shadow-sm'}`}
                                >
                                    ₦{(parseInt(g)/1000) >= 1000 ? (parseInt(g)/1000000) + 'M' : (parseInt(g)/1000) + 'K'}
                                </button>
                            ))}
                        </div>
                        <div className="bg-emerald-50 p-6 rounded-[32px] border border-emerald-100 text-center mx-2">
                            <p className="text-emerald-800 text-sm font-bold">With 5 members contributing equally:</p>
                            <p className="text-emerald-500 text-2xl font-bold mt-1">₦{(parseInt(goal)/5).toLocaleString()} per member</p>
                        </div>
                    </div>
                );
            case 3:
                return (
                    <div className="space-y-8 animate-fade-in-up">
                        <div className="text-center">
                            <h2 className="text-2xl font-bold text-gray-900">Add Members</h2>
                            <p className="text-gray-500 mt-2">Invite people to join your circle</p>
                        </div>
                        <div className="relative px-2">
                            <input className="w-full bg-white border border-gray-100 shadow-sm rounded-2xl py-4 pl-12 pr-4 text-sm font-medium" placeholder="Search contacts..." />
                            <span className="absolute left-6 top-4 text-gray-400">🔍</span>
                        </div>
                        <div className="bg-emerald-50/50 p-6 rounded-[32px] border border-emerald-100/50 mx-2">
                            <p className="text-xs font-bold text-gray-400 uppercase tracking-widest mb-4">Selected (3)</p>
                            <div className="flex flex-wrap gap-2">
                                {['Ada', 'Chidi', 'Nneka'].map(n => (
                                    <div key={n} className="bg-white border border-emerald-200 px-4 py-2 rounded-full flex items-center space-x-2 shadow-sm">
                                        <div className="h-6 w-6 rounded-full bg-emerald-100 text-[10px] font-bold flex items-center justify-center text-emerald-500">{n[0]}O</div>
                                        <span className="text-xs font-bold text-gray-800">{n}</span>
                                    </div>
                                ))}
                                <div className="h-10 w-10 rounded-full border-2 border-dashed border-emerald-300 flex items-center justify-center text-emerald-500 cursor-pointer hover:bg-emerald-50">+</div>
                            </div>
                        </div>
                        <div className="space-y-4 px-2">
                            <p className="text-xs font-bold text-gray-400 uppercase tracking-widest px-2">Contacts</p>
                            {['Emeka Johnson', 'Oluchi Kalu', 'Ibrahim Musa'].map(n => (
                                <div key={n} className="flex items-center justify-between p-4 bg-white border border-gray-100 rounded-[24px] shadow-sm">
                                    <div className="flex items-center space-x-4">
                                        <div className="h-12 w-12 bg-orange-50 rounded-full flex items-center justify-center font-bold text-orange-400">{n[0]}{n.split(' ')[1][0]}</div>
                                        <div>
                                            <p className="font-bold text-gray-800 text-sm">{n}</p>
                                            <p className="text-xs text-gray-400">+234 807 890 1234</p>
                                        </div>
                                    </div>
                                    <button className="h-10 w-10 border border-gray-100 rounded-full flex items-center justify-center text-gray-300 hover:text-caelum-vibrant-blue hover:border-caelum-vibrant-blue transition-colors">＋</button>
                                </div>
                            ))}
                        </div>
                    </div>
                );
            case 4:
                return (
                    <div className="space-y-8 animate-fade-in-up">
                        <div className="text-center">
                            <h2 className="text-2xl font-bold text-gray-900">Review Circle</h2>
                            <p className="text-gray-500 mt-2">Check details before creating</p>
                        </div>
                        <div className="bg-emerald-500 rounded-[40px] p-10 text-white relative overflow-hidden shadow-xl shadow-emerald-500/20">
                            <div className="relative z-10">
                                <h3 className="text-2xl font-bold leading-tight">{name || 'Family Vacation Fund'}</h3>
                                <p className="text-emerald-100 font-bold text-xl mt-2 tracking-tight">₦{parseInt(goal).toLocaleString()}</p>
                                <div className="mt-8 flex items-center space-x-4">
                                    <div className="flex -space-x-3">
                                        {['JD', 'AO', 'CH', 'NN'].map((m, i) => <div key={i} className="h-9 w-9 rounded-full border-2 border-emerald-500 bg-white/20 backdrop-blur-md flex items-center justify-center text-xs font-bold">{m}</div>)}
                                        <div className="h-9 w-9 rounded-full border-2 border-emerald-500 bg-white/20 backdrop-blur-md flex items-center justify-center text-xs font-bold">+1</div>
                                    </div>
                                    <p className="text-xs font-bold opacity-80 uppercase tracking-widest">5 members • Monthly</p>
                                </div>
                            </div>
                            <div className="absolute -top-6 -right-6 text-9xl opacity-10">🛡️</div>
                        </div>
                        <div className="grid grid-cols-2 gap-4">
                            <div className="bg-white p-6 rounded-[32px] border border-gray-100 shadow-sm">
                                <p className="text-[10px] font-bold text-gray-400 uppercase tracking-widest">First Payment</p>
                                <p className="text-lg font-bold text-gray-800 mt-1">Feb 15</p>
                            </div>
                            <div className="bg-white p-6 rounded-[32px] border border-gray-100 shadow-sm">
                                <p className="text-[10px] font-bold text-gray-400 uppercase tracking-widest">Time to Goal</p>
                                <p className="text-lg font-bold text-gray-800 mt-1">~1 month</p>
                            </div>
                        </div>
                        <div className="bg-white p-6 rounded-[32px] border border-gray-100 shadow-sm flex items-start space-x-4">
                            <input type="checkbox" id="agree" className="mt-1 h-5 w-5 rounded border-gray-300 text-caelum-vibrant-blue focus:ring-caelum-vibrant-blue cursor-pointer" />
                            <label htmlFor="agree" className="text-xs text-gray-500 leading-relaxed font-medium cursor-pointer">I agree to the Circle Terms and understand that contributions are binding and will be automatically charged on the set dates.</label>
                        </div>
                    </div>
                )
            default:
                return null;
        }
    };

    return (
        <div className="min-h-screen bg-[#FAFAFA] flex flex-col">
            <header className="p-6 bg-caelum-vibrant-blue text-white flex flex-col items-center shadow-lg">
                <div className="w-full flex justify-between items-center mb-6">
                    <button onClick={() => step > 1 ? setStep(step - 1) : navigate(-1)} className="p-2 bg-white/20 rounded-full hover:bg-white/30 transition-colors">
                        <BackArrowIcon />
                    </button>
                    <h1 className="text-lg font-bold">Create Circle</h1>
                    <div className="w-10"></div>
                </div>
                <div className="w-full flex justify-between px-6 pb-2">
                    {steps.map(s => (
                        <div key={s.id} className="flex flex-col items-center">
                            <div className={`h-2 w-2 rounded-full mb-1.5 transition-all duration-300 ${step >= s.id ? 'bg-white scale-150 shadow-[0_0_10px_white]' : 'bg-white/30'}`}></div>
                            <span className={`text-[8px] font-bold uppercase tracking-widest transition-opacity duration-300 ${step >= s.id ? 'opacity-100' : 'opacity-30'}`}>{s.label}</span>
                        </div>
                    ))}
                </div>
            </header>

            <main className="flex-1 p-6">
                {renderStep()}
            </main>

            <div className="p-8 bg-white border-t border-gray-50 flex space-x-4">
                {step === 4 && <button onClick={() => setStep(1)} className="flex-1 py-4 font-bold text-gray-400 hover:text-gray-600 transition-colors">Start Over</button>}
                <Button 
                    onClick={handleNext} 
                    variant="primary"
                >
                    {step === 4 ? 'Create Circle' : 'Continue'}
                </Button>
            </div>
        </div>
    );
};

export default CreateCircleFlow;