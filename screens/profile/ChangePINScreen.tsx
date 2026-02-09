import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import BackArrowIcon from '../../components/icons/BackArrowIcon.tsx';
import Button from '../../components/ui/Button.tsx';

const PinGroup = ({ label, length = 4, filledCount = 0 }: any) => (
    <div className="text-center space-y-3">
        <p className="text-xs font-bold text-gray-400 uppercase tracking-widest">{label}</p>
        <div className="flex justify-center space-x-4">
            {Array.from({ length }).map((_, i) => (
                <div key={i} className={`h-12 w-12 rounded-full border-2 transition-all ${i < filledCount ? 'bg-gray-800 border-gray-800' : 'border-caelum-vibrant-blue shadow-[0_0_15px_rgba(10,112,245,0.1)]'}`}>
                    {i < filledCount && <div className="h-2 w-2 bg-white rounded-full m-auto mt-4" />}
                </div>
            ))}
        </div>
    </div>
);

const ChangePINScreen = () => {
    const navigate = useNavigate();
    const [step, setStep] = useState(0); // For demo, just showing the layout

    return (
        <div className="min-h-screen bg-white">
            <header className="p-6 flex items-center space-x-4">
                <button onClick={() => navigate(-1)} className="p-2 -ml-2 bg-gray-50 rounded-full text-gray-400">
                    <BackArrowIcon />
                </button>
                <h1 className="text-xl font-bold text-gray-900">Change PIN</h1>
            </header>

            <main className="p-6 flex flex-col items-center space-y-12">
                <div className="h-24 w-24 bg-blue-50 rounded-[32px] flex items-center justify-center text-4xl shadow-inner mb-4">🔐</div>
                
                <div className="text-center space-y-2">
                    <h2 className="text-2xl font-bold text-gray-900">Create New PIN</h2>
                    <p className="text-gray-500 font-medium">Enter a 4-digit PIN for quick access</p>
                </div>

                <div className="w-full space-y-10">
                    <PinGroup label="Current PIN" filledCount={4} />
                    <PinGroup label="New PIN" filledCount={1} />
                    <PinGroup label="Confirm New PIN" filledCount={0} />
                </div>

                <div className="w-full bg-yellow-50 p-4 rounded-2xl border border-yellow-100 flex items-start space-x-3">
                    <span className="text-lg">💡</span>
                    <p className="text-[11px] text-yellow-700 font-bold leading-relaxed">Choose a PIN that's easy to remember but hard for others to guess.</p>
                </div>

                <div className="w-full pt-6">
                    <Button onClick={() => navigate('/success', { state: { title: 'PIN Updated!', message: 'Your security settings have been successfully updated.', redirectTo: '/app/profile' } })} variant="primary">Update PIN</Button>
                </div>
            </main>
        </div>
    );
};

export default ChangePINScreen;