import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import BackArrowIcon from '../../components/icons/BackArrowIcon.tsx';

const NotificationSwitch = ({ title, subtitle, enabled, onToggle }: any) => (
    <div className="flex items-center justify-between py-4 border-b border-gray-50 last:border-none">
        <div>
            <p className="font-bold text-gray-800 text-sm">{title}</p>
            <p className="text-[11px] text-gray-400 font-medium">{subtitle}</p>
        </div>
        <button onClick={onToggle} className={`h-6 w-11 rounded-full p-1 transition-all ${enabled ? 'bg-caelum-vibrant-blue' : 'bg-gray-200'}`}>
            <div className={`h-4 w-4 rounded-full bg-white transition-all ${enabled ? 'translate-x-5' : 'translate-x-0'}`} />
        </button>
    </div>
);

const NotificationSettingsScreen = () => {
    const navigate = useNavigate();
    const [settings, setSettings] = useState({
        transactions: true,
        circles: true,
        requests: true,
        security: true,
        weekly: true,
        promos: false,
        updates: true,
        smsConfirm: true,
        smsCode: true
    });

    const toggle = (key: string) => setSettings({ ...settings, [key]: !settings[key] });

    return (
        <div className="min-h-screen bg-[#FAFAFA]">
            <header className="p-6 bg-white flex items-center space-x-4 shadow-sm sticky top-0 z-10">
                <button onClick={() => navigate(-1)} className="p-2 -ml-2 text-gray-400">
                    <BackArrowIcon />
                </button>
                <h1 className="text-xl font-bold text-gray-900">Notifications</h1>
            </header>

            <main className="p-6 space-y-8">
                <div>
                    <h2 className="text-xs font-bold text-gray-400 uppercase tracking-widest mb-4 px-2">Push Notifications</h2>
                    <div className="bg-white rounded-[32px] shadow-sm p-6">
                        <NotificationSwitch title="Transaction Alerts" subtitle="Get notified when money is sent or received" enabled={settings.transactions} onToggle={() => toggle('transactions')} />
                        <NotificationSwitch title="Circle Updates" subtitle="Updates from your Trust Circles" enabled={settings.circles} onToggle={() => toggle('circles')} />
                        <NotificationSwitch title="Payment Requests" subtitle="When someone requests money from you" enabled={settings.requests} onToggle={() => toggle('requests')} />
                        <NotificationSwitch title="Security Alerts" subtitle="Login attempts and security events" enabled={settings.security} onToggle={() => toggle('security')} />
                    </div>
                </div>

                <div>
                    <h2 className="text-xs font-bold text-gray-400 uppercase tracking-widest mb-4 px-2">Email Notifications</h2>
                    <div className="bg-white rounded-[32px] shadow-sm p-6">
                        <NotificationSwitch title="Weekly Summary" subtitle="Get a weekly email of your activity" enabled={settings.weekly} onToggle={() => toggle('weekly')} />
                        <NotificationSwitch title="Promotional Emails" subtitle="Offers, tips, and CaelumPay news" enabled={settings.promos} onToggle={() => toggle('promos')} />
                        <NotificationSwitch title="Account Updates" subtitle="Important account changes" enabled={settings.updates} onToggle={() => toggle('updates')} />
                    </div>
                </div>

                <div>
                    <h2 className="text-xs font-bold text-gray-400 uppercase tracking-widest mb-4 px-2">SMS Notifications</h2>
                    <div className="bg-white rounded-[32px] shadow-sm p-6 mb-20">
                        <NotificationSwitch title="Transaction Confirmations" subtitle="SMS for successful transactions" enabled={settings.smsConfirm} onToggle={() => toggle('smsConfirm')} />
                        <NotificationSwitch title="Security Codes" subtitle="2FA codes via SMS" enabled={settings.smsCode} onToggle={() => toggle('smsCode')} />
                    </div>
                </div>
            </main>
        </div>
    );
};

export default NotificationSettingsScreen;