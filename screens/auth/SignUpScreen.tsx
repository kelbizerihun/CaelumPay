import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import AuthScreen from '../../components/layout/AuthScreen.tsx';
import Button from '../../components/ui/Button.tsx';
import SocialButton from '../../components/ui/SocialButton.tsx';
import GoogleIcon from '../../components/icons/GoogleIcon.tsx';
import AppleIcon from '../../components/icons/AppleIcon.tsx';

const SignUpScreen = () => {
    const navigate = useNavigate();
    const [formData, setFormData] = useState({ username: '', email: '', password: '' });
    const [errors, setErrors] = useState<{ username?: string; email?: string; password?: string }>({});

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { id, value } = e.target;
        setFormData({ ...formData, [id]: value });
        if (errors[id as keyof typeof errors]) {
            setErrors({ ...errors, [id]: undefined });
        }
    };

    const validate = () => {
        const newErrors: typeof errors = {};
        if (!formData.username) newErrors.username = 'Username is required';
        
        if (!formData.email) newErrors.email = 'Email is required';
        else if (!/\S+@\S+\.\S+/.test(formData.email)) newErrors.email = 'Email is invalid';
        
        if (!formData.password) newErrors.password = 'Password is required';
        else if (formData.password.length < 8) newErrors.password = 'Password must be at least 8 characters';
        
        setErrors(newErrors);
        return Object.keys(newErrors).length === 0;
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        if (validate()) {
            navigate('/success', { 
                state: { 
                    title: 'Account Created!', 
                    message: 'Please check your email for a verification code.', 
                    redirectTo: '/otp' 
                } 
            });
        }
    };

    return (
        <AuthScreen title="Create Account" subTitle={<>Let's get you started with <span className="text-caelum-vibrant-blue font-semibold">CaelumPay</span>.</>}>
            <form onSubmit={handleSubmit} noValidate>
                <div className="mb-4">
                    <label htmlFor="username" className="block text-sm font-medium text-gray-700 mb-1">Username</label>
                    <input
                        type="text"
                        id="username"
                        value={formData.username}
                        onChange={handleInputChange}
                        className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-caelum-blue focus:border-transparent transition ${errors.username ? 'border-red-500' : 'border-gray-300'}`}
                        placeholder="e.g., alex_jones"
                    />
                    {errors.username && <p className="text-red-500 text-xs mt-1 font-medium">{errors.username}</p>}
                </div>

                <div className="mb-4">
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">Email Address</label>
                    <input
                        type="email"
                        id="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-caelum-blue focus:border-transparent transition ${errors.email ? 'border-red-500' : 'border-gray-300'}`}
                        placeholder="you@example.com"
                    />
                    {errors.email && <p className="text-red-500 text-xs mt-1 font-medium">{errors.email}</p>}
                </div>

                <div className="mb-4">
                    <label htmlFor="password" className="block text-sm font-medium text-gray-700 mb-1">Password</label>
                    <input
                        type="password"
                        id="password"
                        value={formData.password}
                        onChange={handleInputChange}
                        className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-caelum-blue focus:border-transparent transition ${errors.password ? 'border-red-500' : 'border-gray-300'}`}
                        placeholder="••••••••"
                    />
                    {errors.password && <p className="text-red-500 text-xs mt-1 font-medium">{errors.password}</p>}
                </div>

                <p className="text-xs text-gray-500 my-6">
                    By creating an account, you agree to our <a href="#" className="font-semibold text-caelum-vibrant-blue">Terms of Service</a> and <a href="#" className="font-semibold text-caelum-vibrant-blue">Privacy Policy</a>.
                </p>
                <Button type="submit" variant="primary">Create Account</Button>
            </form>
            
            <div className="flex items-center my-8">
                <hr className="flex-grow border-t border-gray-200" />
                <span className="px-4 text-[10px] font-bold text-gray-400 uppercase tracking-widest">Or sign up with</span>
                <hr className="flex-grow border-t border-gray-200" />
            </div>
            
            <div className="flex space-x-4 mb-8">
                <SocialButton icon={<GoogleIcon />}>Google</SocialButton>
                <SocialButton icon={<AppleIcon />}>Apple</SocialButton>
            </div>

            <p className="text-center text-gray-500 text-sm font-medium">
                Already have an account? <Link to="/login" className="text-caelum-vibrant-blue font-bold">Log In</Link>
            </p>
        </AuthScreen>
    );
};

export default SignUpScreen;