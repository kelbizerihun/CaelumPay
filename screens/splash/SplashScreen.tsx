import React, { useState, useEffect } from 'react';

interface SplashScreenProps {
    onComplete?: () => void;
}

const SplashScreen: React.FC<SplashScreenProps> = ({ onComplete }) => {
    const [animationState, setAnimationState] = useState('spinningCoin');

    useEffect(() => {
        const logoTimer = setTimeout(() => {
            setAnimationState('finalLogo');
        }, 1800);

        const navigateTimer = setTimeout(() => {
            if (onComplete) onComplete();
        }, 4500);

        return () => {
            clearTimeout(logoTimer);
            clearTimeout(navigateTimer);
        };
    }, [onComplete]);

    return (
        <div className="fixed inset-0 z-[9999] w-full max-w-md mx-auto bg-caelum-vibrant-blue flex justify-center items-center overflow-hidden">
            {/* Decorative background circles */}
            <div className="absolute w-[600px] h-[600px] -top-40 -left-60 bg-white/5 rounded-full animate-pulse" />
            <div className="absolute w-[500px] h-[500px] -bottom-40 -right-40 bg-white/5 rounded-full animate-pulse" style={{ animationDelay: '1s' }} />

            {/* Animated Logo Container */}
            <div className="relative w-full flex items-center justify-center">
                {/* Spinning Coin Container */}
                <div className={`absolute inset-0 flex items-center justify-center transition-all duration-1000 ease-out ${animationState === 'spinningCoin' ? 'opacity-100 scale-100' : 'opacity-0 scale-150'}`}>
                    <div className="relative w-32 h-32 flex items-center justify-center">
                        <svg className="absolute w-full h-full -rotate-45" viewBox="0 0 100 100">
                             <defs>
                                <linearGradient id="c-gradient" x1="0%" y1="0%" x2="100%" y2="100%">
                                    <stop offset="0%" style={{ stopColor: '#8EBBFF', stopOpacity: 1 }} />
                                    <stop offset="100%" style={{ stopColor: '#0A70F5', stopOpacity: 0.1 }} />
                                </linearGradient>
                            </defs>
                            <path d="M 95,50 A 45,45 0 1 1 50,5" fill="none" stroke="url(#c-gradient)" strokeWidth="8" strokeLinecap="round" />
                        </svg>
                        <div className="w-20 h-20 animate-spin-y">
                             <svg viewBox="0 0 56 56" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <defs>
                                    <radialGradient id="gold-gradient" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(28 28) rotate(90) scale(28)">
                                        <stop stopColor="#FDE047"/>
                                        <stop offset="1" stopColor="#F59E0B"/>
                                    </radialGradient>
                                </defs>
                                <circle cx="28" cy="28" r="28" fill="url(#gold-gradient)"/>
                                <path d="M28 16C34.6274 16 40 21.3726 40 28C40 34.6274 34.6274 40 28 40C21.3726 40 16 34.6274 16 28C16 21.3726 21.3726 16 28 16Z" stroke="white" strokeOpacity="0.3" strokeWidth="2"/>
                                <path d="M32.5 24C32.5 22.6193 31.3807 21.5 30 21.5H26C24.6193 21.5 23.5 22.6193 23.5 24V32C23.5 33.3807 24.6193 34.5 26 34.5H30C31.3807 34.5 32.5 33.3807 32.5 32" stroke="#FBBF24" strokeWidth="2.5" strokeLinecap="round"/>
                                <line x1="28" y1="26" x2="28" y2="30" stroke="#FBBF24" strokeWidth="2.5" strokeLinecap="round"/>
                            </svg>
                        </div>
                    </div>
                </div>

                {/* Final Logo Container */}
                <div className={`flex flex-col items-center transition-all duration-1000 cubic-bezier(0.34, 1.56, 0.64, 1) ${animationState === 'finalLogo' ? 'opacity-100 scale-100' : 'opacity-0 scale-50'}`}>
                    {/* Logo Image - Inverted to white for visibility on the vibrant blue background */}
                    <img
                        src="https://i.imgur.com/yAy2trR.png"
                        alt="CaelumPay Logo"
                        className="w-auto"
                        style={{ 
                            height: '190px', 
                            filter: 'drop-shadow(0 15px 35px rgba(0,0,0,0.3)) brightness(0) invert(1)' 
                        }}
                    />
                </div>
            </div>
        </div>
    );
};

export default SplashScreen;