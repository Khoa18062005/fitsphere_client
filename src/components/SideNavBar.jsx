import React from 'react';
import { useNavigate } from 'react-router-dom';

export default function SideNavBar({ activeTab }) {
    const navigate = useNavigate();

    return (
        <nav className="hidden md:flex flex-col bg-surface-container-low dark:bg-surface-container-lowest h-screen w-72 fixed left-0 top-0 overflow-y-auto border-r border-outline-variant/30 shadow-lg shadow-primary/5 py-6 px-4 z-40">
            {/* Header */}
            <div className="flex items-center gap-4 mb-8 px-2 cursor-pointer" onClick={() => navigate('/home')}>
                <div className="w-12 h-12 rounded-lg bg-primary-container flex items-center justify-center overflow-hidden">
                    <img className="w-full h-full object-cover" alt="Logo" src="https://lh3.googleusercontent.com/aida-public/AB6AXuD_5FXpzZxtevbaKVJoJt-uxpD4u6XYtcdMqe-vgoBgLLIue1iC0maXZegVhJIk76umhWfLW3QDFhiYsuaHx2sbfk5jyEsuqtyk4QHouQpStbdkBMuJM2pbOTDvlRScEsWrrlQpiWwq0aDXP0PYOJPKcth-Psknq8hdRgSGd8ZVz7h2K3b9hL3XteH1882L2LlB9L0t7reG4XOmW-wxhnbpkZTwx0jE4pcti8m1_ETvTWUFOWkkIuytSg" />
                </div>
                <div>
                    <h1 className="font-headline-md text-headline-md font-black text-on-surface">Quản lý Đoàn - Hội</h1>
                    <p className="font-label-sm text-label-sm text-on-surface-variant">Hệ thống quản trị</p>
                </div>
            </div>
            
            {/* Navigation Links */}
            <div className="flex flex-col gap-2 flex-1">
                <a 
                    className={`flex items-center gap-3 py-3 px-4 rounded-lg mx-2 cursor-pointer transition-all ${activeTab === 'home' ? 'bg-primary-container text-on-primary-container font-bold' : 'text-on-surface-variant hover:bg-surface-container-highest hover:translate-x-1 transition-transform'}`} 
                    onClick={() => navigate('/home')}
                >
                    <span className="material-symbols-outlined" style={activeTab === 'home' ? { fontVariationSettings: "'FILL' 1" } : {}}>dashboard</span>
                    <span className="font-label-md text-label-md">Trang chủ</span>
                </a>
                
                <a 
                    className={`flex items-center gap-3 py-3 px-4 rounded-lg mx-2 cursor-pointer transition-all ${activeTab === 'profile' ? 'bg-primary-container text-on-primary-container font-bold' : 'text-on-surface-variant hover:bg-surface-container-highest hover:translate-x-1 transition-transform'}`} 
                    onClick={() => navigate('/user-profile')}
                >
                    <span className="material-symbols-outlined" style={activeTab === 'profile' ? { fontVariationSettings: "'FILL' 1" } : {}}>person</span>
                    <span className="font-label-md text-label-md">Thông tin cá nhân</span>
                </a>

                <a className="flex items-center gap-3 py-3 px-4 text-on-surface-variant hover:bg-surface-container-highest rounded-lg mx-2 hover:translate-x-1 transition-transform cursor-pointer">
                    <span className="material-symbols-outlined">event</span>
                    <span className="font-label-md text-label-md">Sự kiện</span>
                </a>
                
                <a className="flex items-center gap-3 py-3 px-4 text-on-surface-variant hover:bg-surface-container-highest rounded-lg mx-2 hover:translate-x-1 transition-transform cursor-pointer">
                    <span className="material-symbols-outlined">groups</span>
                    <span className="font-label-md text-label-md">Quản lý đoàn viên</span>
                </a>
                
                <a className="flex items-center gap-3 py-3 px-4 text-on-surface-variant hover:bg-surface-container-highest rounded-lg mx-2 hover:translate-x-1 transition-transform cursor-pointer">
                    <span className="material-symbols-outlined">account_balance_wallet</span>
                    <span className="font-label-md text-label-md">Tài chính</span>
                </a>
                
                <a className="flex items-center gap-3 py-3 px-4 text-on-surface-variant hover:bg-surface-container-highest rounded-lg mx-2 hover:translate-x-1 transition-transform cursor-pointer">
                    <span className="material-symbols-outlined">military_tech</span>
                    <span className="font-label-md text-label-md">Thi đua</span>
                </a>
            </div>
            
            {/* Bottom Actions */}
            <div className="mt-auto flex flex-col gap-4">
                <a className="flex items-center gap-3 py-3 px-4 text-on-surface-variant hover:bg-surface-container-highest rounded-lg mx-2 hover:translate-x-1 transition-transform cursor-pointer">
                    <span className="material-symbols-outlined">settings</span>
                    <span className="font-label-md text-label-md">Cài đặt</span>
                </a>
                <button className="w-full py-3 px-4 bg-primary text-on-primary rounded-xl font-label-md text-label-md hover:bg-surface-tint transition-colors shadow-sm flex justify-center items-center gap-2">
                    <span className="material-symbols-outlined text-[18px]">add</span>
                    Tạo sự kiện mới
                </button>
            </div>
        </nav>
    );
}
