import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import AuthScreen from '../../components/layout/AuthScreen.tsx';
import Button from '../../components/ui/Button.tsx';

const ForgotPasswordScreen = () => {
    const navigate = useNavigate();
    const [email, setEmail] = useState('');
    const [error, setError] = useState('');

    const validate = () => {
        if (!email) {
            setError('Email is required');
            return false;
        }
        if (!/\S+@\S+\.\S+/.test(email)) {
            setError('Email is invalid');
            return false;
        }
        return true;
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        if (validate()) {
            navigate('/success', { 
                state: { 
                    title: 'Reset Link Sent!', 
                    message: 'We have sent a password reset link to your email address.', 
                    redirectTo: '/login' 
                } 
            });
        }
    };

    return (
        <AuthScreen title="Forgot Password?" subTitle="Enter your email address to receive a password reset link.">
            <form onSubmit={handleSubmit}>
                <div className="mb-8">
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">Email Address</label>
                    <input
                        type="email"
                        id="email"
                        value={email}
                        onChange={(e) => {
                            setEmail(e.target.value);
                            setError('');
                        }}
                        className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-caelum-blue focus:border-transparent transition ${error ? 'border-red-500' : 'border-gray-300'}`}
                        placeholder="you@example.com"
                    />
                    {error && <p className="text-red-500 text-xs mt-1 font-medium">{error}</p>}
                </div>
                <Button type="submit" variant="primary">Send Reset Link</Button>
            </form>
            <p className="text-center text-gray-500 mt-8 text-sm font-medium">
                Remember your password? <button onClick={() => navigate('/login')} className="text-caelum-vibrant-blue font-bold">Log In</button>
            </p>
        </AuthScreen>
    );
};

export default ForgotPasswordScreen;