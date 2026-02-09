
import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import AuthScreen from '../../components/layout/AuthScreen.tsx';
import Input from '../../components/ui/Input.tsx';
import Button from '../../components/ui/Button.tsx';

const LoginScreen = () => {
    const navigate = useNavigate();
    const [formData, setFormData] = useState({ email: '', password: '' });
    const [errors, setErrors] = useState<{ email?: string; password?: string }>({});

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { id, value } = e.target;
        setFormData({ ...formData, [id]: value });
        if (errors[id as keyof typeof errors]) {
            setErrors({ ...errors, [id]: undefined });
        }
    };

    const validate = () => {
        const newErrors: typeof errors = {};
        if (!formData.email) newErrors.email = 'Email is required';
        else if (!/\S+@\S+\.\S+/.test(formData.email)) newErrors.email = 'Email is invalid';
        
        if (!formData.password) newErrors.password = 'Password is required';
        else if (formData.password.length < 6) newErrors.password = 'Password must be at least 6 characters';
        
        setErrors(newErrors);
        return Object.keys(newErrors).length === 0;
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        if (validate()) {
            navigate('/app/dashboard');
        }
    };

    return (
        <AuthScreen title="Welcome Back!" subTitle={<>Log in to your <span className="text-caelum-vibrant-blue font-semibold">CaelumPay</span> account.</>}>
            <form onSubmit={handleSubmit}>
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

                <div className="text-right mb-6">
                    {/* FIX: Removed 'size' prop from Link component as it is not a valid attribute for react-router-dom Link */}
                    <Link to="/forgot-password" className="text-sm font-semibold text-caelum-vibrant-blue hover:underline">Forgot Password?</Link>
                </div>
                
                <Button type="submit" variant="primary">Log In</Button>
            </form>
            <p className="text-center text-gray-500 mt-8 text-sm font-medium">
                Don't have an account? <Link to="/signup" className="text-caelum-vibrant-blue font-bold">Sign Up</Link>
            </p>
        </AuthScreen>
    );
};

export default LoginScreen;
