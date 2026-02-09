
import React, { useState, useRef, ChangeEvent, KeyboardEvent } from 'react';
import { useNavigate } from 'react-router-dom';
import AuthScreen from '../../components/layout/AuthScreen.tsx';
import Button from '../../components/ui/Button.tsx';

const OTPScreen = () => {
    const navigate = useNavigate();
    const [otp, setOtp] = useState(['', '', '', '']);
    const inputsRef = useRef<(HTMLInputElement | null)[]>([]);

    const handleInput = (e: ChangeEvent<HTMLInputElement>, index: number) => {
        const value = e.target.value;
        if (/[^0-9]/.test(value)) return;

        const newOtp = [...otp];
        newOtp[index] = value;
        setOtp(newOtp);

        if (value && index < otp.length - 1) {
            inputsRef.current[index + 1]?.focus();
        }
    };
    
    const handleKeyDown = (e: KeyboardEvent<HTMLInputElement>, index: number) => {
        if (e.key === 'Backspace' && !otp[index] && index > 0) {
            inputsRef.current[index - 1]?.focus();
        }
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        // In a real app, you would verify the OTP here.
        navigate('/success', { 
            state: { 
                title: 'Email Verified!', 
                message: 'Welcome to CaelumPay. You are now logged in.', 
                redirectTo: '/app/dashboard' 
            } 
        });
    };
    
    return (
        // FIX: The AuthScreen component requires children. The form and other elements are now passed as children.
        <AuthScreen title="Verify your email" subTitle="We've sent a 4-digit code to your email address.">
            <form onSubmit={handleSubmit}>
                <div className="flex justify-center space-x-4 my-8">
                    {otp.map((digit, index) => (
                        <input
                            key={index}
                            // FIX: Ensure the ref callback returns void to avoid TypeScript errors where the result of an assignment is returned.
                            ref={el => { inputsRef.current[index] = el; }}
                            type="tel"
                            maxLength={1}
                            value={digit}
                            onChange={(e) => handleInput(e, index)}
                            onKeyDown={(e) => handleKeyDown(e, index)}
                            className="w-14 h-16 text-center text-3xl font-semibold border-2 border-gray-300 rounded-lg focus:ring-2 focus:ring-caelum-blue focus:border-transparent transition"
                            aria-label={`OTP digit ${index + 1}`}
                        />
                    ))}
                </div>
                {/* FIX: The Button component requires children. Added "Verify & Continue" as the button text. */}
                <Button type="submit" variant="primary">Verify &amp; Continue</Button>
            </form>
            <p className="text-center text-gray-500 mt-6">Didn't receive code? <button className="font-semibold text-caelum-blue">Resend</button></p>
        </AuthScreen>
    );
};

export default OTPScreen;
