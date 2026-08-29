import React from 'react';
import { useNavigate } from 'react-router-dom';
import logo from '../assets/logo.png';
import logoSmall from '../assets/logo-small.png';
import { useSidebar } from '../hooks/useSidebar';

export default function SideNavBar({ activeTab }) {
    const navigate = useNavigate();
    const { isCollapsed, toggleSidebar } = useSidebar();

    return (
        <nav className={`hidden md:flex flex-col bg-surface-container-low dark:bg-surface-container-lowest h-screen fixed left-0 top-0 border-r border-outline-variant/30 shadow-lg shadow-primary/5 py-6 z-40 transition-all duration-300 ${isCollapsed ? 'w-20 px-2' : 'w-72 px-4'}`}>
            
            {/* Toggle Button */}
            <button 
                onClick={toggleSidebar}
                className="absolute top-4 -right-3.5 w-7 h-7 bg-surface border border-outline-variant/50 rounded-full flex items-center justify-center text-on-surface hover:bg-surface-variant transition-colors shadow-sm z-50 cursor-pointer"
            >
                <span className="material-symbols-outlined text-[16px]">
                    {isCollapsed ? 'chevron_right' : 'chevron_left'}
                </span>
            </button>

            {/* Header */}
            <div className={`relative flex items-center justify-center mb-8 px-4 cursor-pointer h-16 -mt-6 border-b border-outline-variant/30 shrink-0 transition-all duration-300 ${isCollapsed ? '-mx-2' : '-mx-4'}`} onClick={() => navigate('/home')}>
                <img 
                    className={`absolute transition-all duration-300 ease-in-out object-contain ${isCollapsed ? 'opacity-0 scale-50 pointer-events-none' : 'opacity-100 scale-100 w-[180px]'}`} 
                    alt="Logo" 
                    src={logo} 
                />
                <img 
                    className={`absolute transition-all duration-300 ease-in-out object-contain ${isCollapsed ? 'opacity-100 scale-100 w-12' : 'opacity-0 scale-50 pointer-events-none'}`} 
                    alt="Small Logo" 
                    src={logoSmall} 
                />
            </div>
            
            {/* Navigation Links */}
            <div className="flex flex-col gap-2 flex-1 overflow-y-auto overflow-x-hidden no-scrollbar">
                <a 
                    className={`flex items-center py-3 rounded-lg cursor-pointer transition-all ${isCollapsed ? 'justify-center px-0 mx-1' : 'gap-3 px-4 mx-2'} ${activeTab === 'home' ? 'bg-primary-container text-on-primary-container font-bold' : 'text-on-surface-variant hover:bg-surface-container-highest hover:translate-x-1'}`} 
                    onClick={() => navigate('/home')}
                    title={isCollapsed ? "Trang chủ" : ""}
                >
                    <span className="material-symbols-outlined shrink-0" style={activeTab === 'home' ? { fontVariationSettings: "'FILL' 1" } : {}}>dashboard</span>
                    {!isCollapsed && <span className="font-label-md text-label-md truncate">Trang chủ</span>}
                </a>
                
                <a 
                    className={`flex items-center py-3 rounded-lg cursor-pointer transition-all ${isCollapsed ? 'justify-center px-0 mx-1' : 'gap-3 px-4 mx-2'} ${activeTab === 'profile' ? 'bg-primary-container text-on-primary-container font-bold' : 'text-on-surface-variant hover:bg-surface-container-highest hover:translate-x-1'}`} 
                    onClick={() => navigate('/user-profile')}
                    title={isCollapsed ? "Thông tin cá nhân" : ""}
                >
                    <span className="material-symbols-outlined shrink-0" style={activeTab === 'profile' ? { fontVariationSettings: "'FILL' 1" } : {}}>person</span>
                    {!isCollapsed && <span className="font-label-md text-label-md truncate">Thông tin cá nhân</span>}
                </a>

                <a 
                    className={`flex items-center py-3 rounded-lg cursor-pointer transition-all ${isCollapsed ? 'justify-center px-0 mx-1' : 'gap-3 px-4 mx-2'} text-on-surface-variant hover:bg-surface-container-highest hover:translate-x-1`}
                    title={isCollapsed ? "Sự kiện" : ""}
                >
                    <span className="material-symbols-outlined shrink-0">event</span>
                    {!isCollapsed && <span className="font-label-md text-label-md truncate">Sự kiện</span>}
                </a>
                
                <a 
                    className={`flex items-center py-3 rounded-lg cursor-pointer transition-all ${isCollapsed ? 'justify-center px-0 mx-1' : 'gap-3 px-4 mx-2'} text-on-surface-variant hover:bg-surface-container-highest hover:translate-x-1`}
                    title={isCollapsed ? "Quản lý đoàn viên" : ""}
                >
                    <span className="material-symbols-outlined shrink-0">groups</span>
                    {!isCollapsed && <span className="font-label-md text-label-md truncate">Quản lý đoàn viên</span>}
                </a>
                
                <a 
                    className={`flex items-center py-3 rounded-lg cursor-pointer transition-all ${isCollapsed ? 'justify-center px-0 mx-1' : 'gap-3 px-4 mx-2'} ${activeTab === 'personnel' ? 'bg-primary-container text-on-primary-container font-bold' : 'text-on-surface-variant hover:bg-surface-container-highest hover:translate-x-1'}`} 
                    onClick={() => navigate('/personnel')}
                    title={isCollapsed ? "Tổ chức nhân sự" : ""}
                >
                    <span className="material-symbols-outlined shrink-0" style={activeTab === 'personnel' ? { fontVariationSettings: "'FILL' 1" } : {}}>corporate_fare</span>
                    {!isCollapsed && <span className="font-label-md text-label-md truncate">Tổ chức nhân sự</span>}
                </a>
                
                <a 
                    className={`flex items-center py-3 rounded-lg cursor-pointer transition-all ${isCollapsed ? 'justify-center px-0 mx-1' : 'gap-3 px-4 mx-2'} text-on-surface-variant hover:bg-surface-container-highest hover:translate-x-1`}
                    title={isCollapsed ? "Tài chính" : ""}
                >
                    <span className="material-symbols-outlined shrink-0">account_balance_wallet</span>
                    {!isCollapsed && <span className="font-label-md text-label-md truncate">Tài chính</span>}
                </a>
                
                <a 
                    className={`flex items-center py-3 rounded-lg cursor-pointer transition-all ${isCollapsed ? 'justify-center px-0 mx-1' : 'gap-3 px-4 mx-2'} text-on-surface-variant hover:bg-surface-container-highest hover:translate-x-1`}
                    title={isCollapsed ? "Thi đua" : ""}
                >
                    <span className="material-symbols-outlined shrink-0">military_tech</span>
                    {!isCollapsed && <span className="font-label-md text-label-md truncate">Thi đua</span>}
                </a>
            </div>
            
            {/* Bottom Actions */}
            <div className="mt-4 flex flex-col gap-4 shrink-0">
                <a 
                    className={`flex items-center py-3 rounded-lg cursor-pointer transition-all ${isCollapsed ? 'justify-center px-0 mx-1' : 'gap-3 px-4 mx-2'} text-on-surface-variant hover:bg-surface-container-highest hover:translate-x-1`}
                    title={isCollapsed ? "Cài đặt" : ""}
                >
                    <span className="material-symbols-outlined shrink-0">settings</span>
                    {!isCollapsed && <span className="font-label-md text-label-md truncate">Cài đặt</span>}
                </a>
                <button 
                    className={`w-full py-3 bg-primary text-on-primary rounded-xl font-label-md text-label-md hover:bg-surface-tint transition-colors shadow-sm flex justify-center items-center ${isCollapsed ? 'px-0' : 'px-4 gap-2'}`}
                    title={isCollapsed ? "Tạo sự kiện mới" : ""}
                >
                    <span className="material-symbols-outlined shrink-0 text-[18px]">add</span>
                    {!isCollapsed && "Tạo sự kiện mới"}
                </button>
            </div>
        </nav>
    );
}
