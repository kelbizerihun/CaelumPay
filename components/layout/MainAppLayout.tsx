import React from 'react';
import { Outlet } from 'react-router-dom';
import BottomNav from '../../navigation/BottomNav.tsx';

const MainAppLayout = () => (
    <div className="min-h-screen w-full max-w-md mx-auto bg-caelum-gray pb-20">
        <Outlet />
        <BottomNav />
    </div>
);

export default MainAppLayout;