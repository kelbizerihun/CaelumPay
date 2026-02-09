import React from 'react';
import { useNavigate } from 'react-router-dom';
import Button from '../../components/ui/Button.tsx';
import BackArrowIcon from '../../components/icons/BackArrowIcon.tsx';

const WelcomeScreen = () => {
    const navigate = useNavigate();
    
    const handleBackToOnboarding = () => {
        localStorage.removeItem('hasCompletedOnboarding');
        navigate('/onboarding');
    };

    return (
        <div className="min-h-screen w-full max-w-md mx-auto bg-caelum-gray flex flex-col justify-between p-8 text-center relative">
            <div className="flex justify-start">
                <button 
                    onClick={handleBackToOnboarding} 
                    className="p-2 -ml-4 text-gray-400 hover:text-caelum-blue transition-colors"
                    aria-label="Back to onboarding"
                >
                    <BackArrowIcon />
                </button>
            </div>
            
            <div className="flex flex-col items-center">
                {/* Enlarged logo for high visibility (110px) */}
                <img 
                    src="https://i.imgur.com/yAy2trR.png" 
                    alt="CaelumPay Logo" 
                    className="h-[110px] w-auto drop-shadow-md mb-8" 
                />
                <h1 className="text-3xl font-bold text-gray-800 mt-2">Payment Beyond Borders!</h1>
                <p className="text-gray-500 mt-4 px-2 leading-relaxed">Simple, fast, and secure cross-border payments powered by modern technology.</p>
            </div>
            
            <div className="space-y-4 mb-4">
                <Button onClick={() => navigate('/signup')} variant="primary">Create a free account</Button>
                <Button onClick={() => navigate('/login')} variant="secondary">Log in</Button>
            </div>
        </div>
    );
};

export default WelcomeScreen;