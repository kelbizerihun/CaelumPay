import React, { useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import CheckCircleIcon from '../../components/icons/CheckCircleIcon.tsx';

const SuccessScreen = () => {
    const navigate = useNavigate();
    const location = useLocation();

    // Set default values in case state is not passed
    const { 
        title = 'Success!', 
        message = 'Your operation was successful.', 
        redirectTo = '/' 
    } = location.state || {};

    useEffect(() => {
        const timer = setTimeout(() => {
            navigate(redirectTo, { replace: true });
        }, 2500); // 2.5-second delay

        return () => clearTimeout(timer); // Cleanup timer
    }, [navigate, redirectTo]);

    return (
        <div className="min-h-screen w-full max-w-md mx-auto bg-white flex flex-col justify-center items-center text-center p-8">
            <div className="text-green-500">
                <CheckCircleIcon className="w-24 h-24" />
            </div>
            <h1 className="text-3xl font-bold text-gray-800 mt-6">{title}</h1>
            <p className="text-gray-500 mt-2">{message}</p>
        </div>
    );
};

export default SuccessScreen;
