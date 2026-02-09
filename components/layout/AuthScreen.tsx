import React from 'react';
import { useNavigate } from 'react-router-dom';
import ScreenContainer from './ScreenContainer.tsx';
import BackArrowIcon from '../icons/BackArrowIcon.tsx';

const AuthScreen: React.FC<{ title: string; subTitle: React.ReactNode; children: React.ReactNode }> = ({ title, subTitle, children }) => {
    const navigate = useNavigate();

    const handleBack = () => {
        // Force navigation to welcome screen for consistent behavior
        navigate('/welcome');
    };

    return (
        <ScreenContainer>
            <button 
                type="button"
                onClick={handleBack} 
                className="self-start text-gray-500 mb-8 p-2 -ml-2 hover:bg-gray-100 rounded-full transition-colors active:scale-95 flex items-center justify-center" 
                aria-label="Go back"
            >
                <BackArrowIcon />
            </button>
            <h1 className="text-3xl font-bold text-gray-800">{title}</h1>
            <div className="text-gray-500 mt-2 mb-8 leading-relaxed">{subTitle}</div>
            {children}
        </ScreenContainer>
    );
};

export default AuthScreen;