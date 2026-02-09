import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import WelcomeScreen from '../screens/auth/WelcomeScreen.tsx';
import SignUpScreen from '../screens/auth/SignUpScreen.tsx';
import OTPScreen from '../screens/auth/OTPScreen.tsx';
import LoginScreen from '../screens/auth/LoginScreen.tsx';
import ForgotPasswordScreen from '../screens/auth/ForgotPasswordScreen.tsx';
import MainAppLayout from '../components/layout/MainAppLayout.tsx';
import DashboardScreen from '../screens/dashboard/DashboardScreen.tsx';
import CirclesScreen from '../screens/circles/CirclesScreen.tsx';
import PayScreen from '../screens/pay/PayScreen.tsx';
import ProfileScreen from '../screens/profile/ProfileScreen.tsx';
import OnboardingScreen from '../screens/onboarding/OnboardingScreen.tsx';
import SuccessScreen from '../screens/auth/SuccessScreen.tsx';
import AddMoneyScreen from '../screens/add-money/AddMoneyScreen.tsx';
import TransferAmountScreen from '../screens/pay/TransferAmountScreen.tsx';
import InternationalTransferScreen from '../screens/pay/InternationalTransferScreen.tsx';
import BankTransferFlow from '../screens/pay/BankTransferFlow.tsx';
import NotificationsScreen from '../screens/dashboard/NotificationsScreen.tsx';
import CreateCircleFlow from '../screens/circles/CreateCircleFlow.tsx';
import EditProfileScreen from '../screens/profile/EditProfileScreen.tsx';
import SecurityPrivacyScreen from '../screens/profile/SecurityPrivacyScreen.tsx';
import NotificationSettingsScreen from '../screens/profile/NotificationSettingsScreen.tsx';
import LinkedAccountsScreen from '../screens/profile/LinkedAccountsScreen.tsx';
import HelpSupportScreen from '../screens/profile/HelpSupportScreen.tsx';
import ChangePINScreen from '../screens/profile/ChangePINScreen.tsx';
import PersonalInformationScreen from '../screens/profile/PersonalInformationScreen.tsx';

const AppRouter = () => {
    const hasCompletedOnboarding = localStorage.getItem('hasCompletedOnboarding');

    return (
        <Routes>
            <Route path="/" element={<Navigate to={hasCompletedOnboarding ? "/welcome" : "/onboarding"} replace />} />
            <Route path="/onboarding" element={<OnboardingScreen />} />
            <Route path="/welcome" element={<WelcomeScreen />} />
            <Route path="/signup" element={<SignUpScreen />} />
            <Route path="/otp" element={<OTPScreen />} />
            <Route path="/login" element={<LoginScreen />} />
            <Route path="/forgot-password" element={<ForgotPasswordScreen />} />
            <Route path="/success" element={<SuccessScreen />} />
            
            <Route path="/app" element={<MainAppLayout />}>
                <Route path="dashboard" element={<DashboardScreen />} />
                <Route path="notifications" element={<NotificationsScreen />} />
                <Route path="circles" element={<CirclesScreen />} />
                <Route path="circles/create" element={<CreateCircleFlow />} />
                <Route path="pay" element={<PayScreen />} />
                <Route path="pay/international" element={<InternationalTransferScreen />} />
                <Route path="pay/bank" element={<BankTransferFlow />} />
                <Route path="add-money" element={<AddMoneyScreen />} />
                <Route path="transfer" element={<TransferAmountScreen />} />
                <Route path="profile" element={<ProfileScreen />} />
                <Route path="profile/edit" element={<EditProfileScreen />} />
                <Route path="profile/info" element={<PersonalInformationScreen />} />
                <Route path="profile/security" element={<SecurityPrivacyScreen />} />
                <Route path="profile/security/pin" element={<ChangePINScreen />} />
                <Route path="profile/notification-settings" element={<NotificationSettingsScreen />} />
                <Route path="profile/accounts" element={<LinkedAccountsScreen />} />
                <Route path="profile/help" element={<HelpSupportScreen />} />
            </Route>
        </Routes>
    );
};

export default AppRouter;