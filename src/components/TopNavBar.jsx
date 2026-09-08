import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const getRoleLabel = (user) => {
    const role = user?.roles?.[0];
    const roleName = role?.name;
    const description = role?.description || (
        roleName === 'ROLE_BCH' ? 'Ban Chấp Hành' :
        roleName === 'ROLE_CTV' ? 'Cộng Tác Viên' :
        'Sinh Viên'
    );

    if (roleName === 'ROLE_BCH') {
        return {
            description,
            colorClass: 'text-red-600 font-bold'
        };
    } else if (roleName === 'ROLE_CTV') {
        return {
            description,
            colorClass: 'text-blue-600 font-bold'
        };
    } else {
        return {
            description,
            colorClass: 'text-slate-500 font-medium'
        };
    }
};

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

    const roleLabel = getRoleLabel(user);

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
                        className="flex items-center gap-3 cursor-pointer hover:bg-surface-variant/60 p-1 pl-1.5 pr-3.5 rounded-full transition-all duration-200 select-none group"
                        onClick={() => setShowDropdown(!showDropdown)}
                    >
                        <div className="w-8 h-8 rounded-full overflow-hidden border border-outline-variant/60 shadow-xs shrink-0 mr-0.5">
                            <img 
                                className="w-full h-full object-cover" 
                                alt="User Avatar" 
                                referrerPolicy="no-referrer"
                                src={user?.avatarUrl || "https://lh3.googleusercontent.com/aida-public/AB6AXuDymyhyp9xfH5_cyBVazCITdEB89IhlHyfXjd1KfnhO5bJvBV_s6FY0SaFVd4OxhJGSDe_IZXdifHjbKfsofJ7Bpc2HyP_9GKg4dH4LgC74gfRwt_WkSy76J-sdZPeQ9LIe9AfyjUwveIg_rVQZ8PHnOsX0mLzYkEELYmOm115ELHkY2_bQcwtR9KwY7F8WbCM3MtqZiG3zQNOVcKiPiY29LCOWpsmk7n-5d6pbsA2rc6MIb6uB9G9VIA"} 
                            />
                        </div>
                        <div className="hidden sm:flex flex-col text-left">
                            <span className="font-label-md text-label-md text-on-surface font-bold leading-tight">
                                {user?.fullName || "Khách"}
                            </span>
                            <span className={`text-[11px] leading-tight mt-0.5 ${roleLabel.colorClass}`}>
                                {roleLabel.description}
                            </span>
                        </div>
                        <span className={`material-symbols-outlined text-[20px] text-on-surface-variant transition-transform duration-300 ease-in-out ${showDropdown ? 'rotate-180 text-primary' : 'rotate-0'}`}>
                            arrow_drop_down
                        </span>
                    </div>

                    {/* Dropdown Menu */}
                    {showDropdown && (
                        <div className="absolute right-0 mt-2 w-48 bg-surface rounded-xl shadow-lg border border-outline-variant/20 py-2 z-50">
                            <div className="px-4 py-2 border-b border-outline-variant/20 mb-2 flex items-center gap-2">
                                <span className="material-symbols-outlined text-[20px] text-on-surface-variant">badge</span>
                                <p className="font-label-md text-on-surface truncate font-mono font-medium">{user?.studentId || "Chưa cập nhật MSSV"}</p>
                            </div>
                            <button 
                                onClick={() => { setShowDropdown(false); navigate('/user-profile'); }}
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
