import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Button from '../../components/ui/Button.tsx';

const onboardingSlides = [
    {
        image: 'https://i.imgur.com/qM0D1G8.png',
        title: "Seamless Global Payments",
        description: "Send and receive money across borders with ease. No hidden fees, just pure simplicity."
    },
    {
        image: 'https://i.imgur.com/k6nhnJi.png',
        title: "Your Security is Our Priority",
        description: "State-of-the-art encryption and fraud protection to keep your money safe, always."
    },
    {
        image: 'https://i.imgur.com/kvuOZaS.png',
        title: "Build Trust Circles",
        description: "Create savings and lending groups with people you trust. Achieve your financial goals together."
    }
];

const OnboardingScreen = () => {
    const [currentSlide, setCurrentSlide] = useState(0);
    const navigate = useNavigate();

    const completeOnboarding = () => {
        localStorage.setItem('hasCompletedOnboarding', 'true');
        navigate('/welcome');
    };

    const handleNext = () => {
        if (currentSlide < onboardingSlides.length - 1) {
            setCurrentSlide(currentSlide + 1);
        } else {
            completeOnboarding();
        }
    };

    const handleSkip = () => {
        completeOnboarding();
    };

    return (
        <div className="min-h-screen w-full max-w-md mx-auto bg-white flex flex-col justify-between p-8 text-center overflow-hidden">
            <div className="flex justify-end h-8">
                {currentSlide < onboardingSlides.length - 1 && (
                    <button onClick={handleSkip} className="font-semibold text-caelum-blue hover:text-caelum-dark-blue transition-colors">Skip</button>
                )}
            </div>

            <div className="flex-grow flex flex-col items-center justify-center py-10">
                {/* Wrapper with key to trigger animation on slide change */}
                <div key={currentSlide} className="animate-fade-in-up">
                    <div className="w-full max-w-[280px] aspect-square mb-10 relative">
                        <div className="absolute inset-0 bg-caelum-blue/5 rounded-[40px] rotate-6 transform scale-110"></div>
                        <div className="absolute inset-0 bg-caelum-blue/10 rounded-[40px] -rotate-3 transform"></div>
                        <img 
                            src={onboardingSlides[currentSlide].image} 
                            alt={onboardingSlides[currentSlide].title} 
                            className="w-full h-full object-cover rounded-[40px] shadow-2xl relative z-10 border-4 border-white" 
                        />
                    </div>
                    <h1 className="text-3xl font-bold text-gray-800 leading-tight">{onboardingSlides[currentSlide].title}</h1>
                    <p className="text-gray-500 mt-4 text-lg leading-relaxed">{onboardingSlides[currentSlide].description}</p>
                </div>
            </div>

            <div className="space-y-8">
                <div className="flex justify-center space-x-2">
                    {onboardingSlides.map((_, index) => (
                        <div key={index} className={`h-2.5 rounded-full transition-all duration-300 ${currentSlide === index ? 'w-10 bg-caelum-blue' : 'w-2.5 bg-gray-200'}`}></div>
                    ))}
                </div>
                
                <div className="w-full">
                    <Button onClick={handleNext} variant="primary">
                        {currentSlide === onboardingSlides.length - 1 ? 'Get Started' : 'Next'}
                    </Button>
                </div>
            </div>
        </div>
    );
};

export default OnboardingScreen;