import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

export default function TopNavBar() {
    const navigate = useNavigate();
    const [user, setUser] = useState(null);
    const [showDropdown, setShowDropdown] = useState(false);

    useEffect(() => {
        const storedUser = localStorage.getItem('user');
        if (storedUser) {
            setUser(JSON.parse(storedUser));
        }
    }, []);

    const handleLogout = () => {
        localStorage.removeItem('token');
        localStorage.removeItem('user');
        navigate('/welcome');
    };

    return (
        <header className="bg-surface/70 dark:bg-surface-variant/70 backdrop-blur-lg docked full-width top-0 sticky z-50 border-b border-white/20 shadow-sm flex justify-between items-center px-gutter w-full mx-auto h-16">
            <div className="flex items-center gap-4">
                <button className="md:hidden text-on-surface p-2">
                    <span className="material-symbols-outlined">menu</span>
                </button>
                <div className="ml-4 text-[22px] font-bold text-primary dark:text-primary-fixed hidden md:block cursor-pointer" onClick={() => navigate('/home')}>
                    Đoàn - Hội Khoa
                </div>
            </div>
            <div className="flex items-center gap-4">
                {/* Actions */}
                <button className="p-2 text-on-surface-variant hover:bg-primary/10 transition-colors rounded-full">
                    <span className="material-symbols-outlined">notifications</span>
                </button>
                <button className="p-2 text-on-surface-variant hover:bg-primary/10 transition-colors rounded-full hidden sm:block">
                    <span className="material-symbols-outlined">apps</span>
                </button>
                {/* Profile */}
                <div className="relative">
                    <div 
                        className="flex items-center gap-2 cursor-pointer hover:bg-surface-variant/50 p-1 pr-3 rounded-full transition-colors"
                        onClick={() => setShowDropdown(!showDropdown)}
                    >
                        <div className="w-8 h-8 rounded-full overflow-hidden border border-outline-variant/50">
                            <img 
                                className="w-full h-full object-cover" 
                                alt="User Avatar" 
                                referrerPolicy="no-referrer"
                                src={user?.avatarUrl || "https://lh3.googleusercontent.com/aida-public/AB6AXuDymyhyp9xfH5_cyBVazCITdEB89IhlHyfXjd1KfnhO5bJvBV_s6FY0SaFVd4OxhJGSDe_IZXdifHjbKfsofJ7Bpc2HyP_9GKg4dH4LgC74gfRwt_WkSy76J-sdZPeQ9LIe9AfyjUwveIg_rVQZ8PHnOsX0mLzYkEELYmOm115ELHkY2_bQcwtR9KwY7F8WbCM3MtqZiG3zQNOVcKiPiY29LCOWpsmk7n-5d6pbsA2rc6MIb6uB9G9VIA"} 
                            />
                        </div>
                        <span className="font-label-md text-label-md text-on-surface hidden sm:block">
                            {user?.fullName || "Khách"}
                        </span>
                        <span className="material-symbols-outlined text-[18px] text-on-surface-variant">
                            arrow_drop_down
                        </span>
                    </div>

                    {/* Dropdown Menu */}
                    {showDropdown && (
                        <div className="absolute right-0 mt-2 w-48 bg-surface rounded-xl shadow-lg border border-outline-variant/20 py-2 z-50">
                            <div className="px-4 py-2 border-b border-outline-variant/20 mb-2 flex items-center gap-2">
                                <span className="material-symbols-outlined text-[20px] text-on-surface-variant">badge</span>
                                <p className="font-label-md text-on-surface truncate">{user?.studentId || "Chưa cập nhật MSSV"}</p>
                            </div>
                            <button 
                                onClick={() => navigate('/user-profile')}
                                className="w-full text-left px-4 py-2 text-on-surface hover:bg-primary/10 transition-colors flex items-center gap-2 font-label-md"
                            >
                                <span className="material-symbols-outlined text-[20px]">person</span>
                                Hồ sơ cá nhân
                            </button>
                            <button 
                                onClick={handleLogout}
                                className="w-full text-left px-4 py-2 text-error hover:bg-error/10 transition-colors flex items-center gap-2 font-label-md mt-1"
                            >
                                <span className="material-symbols-outlined text-[20px]">logout</span>
                                Đăng xuất
                            </button>
                        </div>
                    )}
                </div>
            </div>
        </header>
    );
}
