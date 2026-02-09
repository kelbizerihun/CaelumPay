import React, { useState, useEffect } from 'react';
import { HashRouter } from 'react-router-dom';
import AppRouter from './navigation/AppRouter.tsx';
import SplashScreen from './screens/splash/SplashScreen.tsx';

const App = () => {
    const [showSplash, setShowSplash] = useState(true);

    const handleSplashComplete = () => {
        setShowSplash(false);
    };

    return (
        <HashRouter>
            {showSplash ? (
                <SplashScreen onComplete={handleSplashComplete} />
            ) : (
                <AppRouter />
            )}
        </HashRouter>
    );
};

export default App;