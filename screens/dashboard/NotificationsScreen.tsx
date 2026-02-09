import React from 'react';
import { useNavigate } from 'react-router-dom';
import BackArrowIcon from '../../components/icons/BackArrowIcon.tsx';

const NotificationsScreen = () => {
    const navigate = useNavigate();

    const notifications = [
        {
            date: 'Today',
            items: [
                { id: 1, type: 'success', title: 'Payment Received', message: 'You received ₦25,500 from Jane D.', time: '10:15 AM', icon: '💰' },
                { id: 2, type: 'warning', title: 'Security Alert', message: 'New login from Chrome on Windows.', time: '08:30 AM', icon: '🛡️' },
            ]
        },
        {
            date: 'Yesterday',
            items: [
                { id: 3, type: 'info', title: 'Goal Update', message: 'Your "Family Vacation" circle reached 80%!', time: '04:20 PM', icon: '🎯' },
                { id: 4, type: 'success', title: 'Card Topped Up', message: '₦100,000 successfully added via Card.', time: '01:10 PM', icon: '💳' },
            ]
        }
    ];

    return (
        <div className="min-h-screen bg-caelum-gray flex flex-col">
            <header className="p-6 bg-white flex items-center justify-between shadow-sm sticky top-0 z-10">
                <button onClick={() => navigate(-1)} className="p-2 -ml-2 text-gray-500">
                    <BackArrowIcon />
                </button>
                <h1 className="text-lg font-bold text-gray-800">Notifications</h1>
                <button className="text-xs font-bold text-caelum-vibrant-blue uppercase">Clear All</button>
            </header>

            <main className="flex-1 p-6 space-y-8">
                {notifications.map((group) => (
                    <div key={group.date} className="space-y-4">
                        <h2 className="text-xs font-bold text-gray-400 uppercase tracking-widest px-2">{group.date}</h2>
                        <div className="space-y-3">
                            {group.items.map((item) => (
                                <div key={item.id} className="bg-white p-4 rounded-3xl shadow-sm flex items-start space-x-4">
                                    <div className={`h-12 w-12 rounded-2xl flex items-center justify-center text-xl flex-shrink-0
                                        ${item.type === 'success' ? 'bg-emerald-50' : item.type === 'warning' ? 'bg-orange-50' : 'bg-blue-50'}`}>
                                        {item.icon}
                                    </div>
                                    <div className="flex-grow">
                                        <div className="flex justify-between items-start">
                                            <h3 className="font-bold text-gray-800 text-sm">{item.title}</h3>
                                            <span className="text-[10px] font-bold text-gray-400 uppercase">{item.time}</span>
                                        </div>
                                        <p className="text-xs text-gray-500 mt-1 leading-relaxed">{item.message}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                ))}
            </main>
        </div>
    );
};

export default NotificationsScreen;