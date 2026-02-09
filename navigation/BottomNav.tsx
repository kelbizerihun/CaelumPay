import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import HomeIcon from '../components/icons/HomeIcon.tsx';
import CirclesIcon from '../components/icons/CirclesIcon.tsx';
import PayIcon from '../components/icons/PayIcon.tsx';
import MeIcon from '../components/icons/MeIcon.tsx';

const BottomNav = () => {
    const location = useLocation();
    const navItems = [
        { path: '/app/dashboard', icon: HomeIcon, label: 'Home' },
        { path: '/app/pay', icon: PayIcon, label: 'Pay' },
        { path: '/app/circles', icon: CirclesIcon, label: 'Circles' },
        { path: '/app/profile', icon: MeIcon, label: 'Me' },
    ];

    return (
        <div className="fixed bottom-0 left-0 right-0 w-full max-w-md mx-auto bg-white shadow-[0_-2px_10px_rgba(0,0,0,0.05)]">
            <div className="flex justify-around items-center h-20">
                {navItems.map((item) => {
                    const isActive = location.pathname.startsWith(item.path);
                    return (
                        <Link to={item.path} key={item.path} className="flex flex-col items-center justify-center space-y-1 w-1/4" aria-label={item.label}>
                            <item.icon isActive={isActive} />
                            <span className={`text-xs ${isActive ? 'text-caelum-blue font-semibold' : 'text-gray-400 font-medium'}`}>{item.label}</span>
                        </Link>
                    )
                })}
            </div>
        </div>
    );
};

export default BottomNav;
