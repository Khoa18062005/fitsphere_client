import React from 'react';

export default function AdminPage() {
    return (
        <div className="bg-background text-on-background min-h-screen font-body-md text-body-md overflow-x-hidden selection:bg-primary-container selection:text-on-primary-container">

            {/* Desktop SideNavBar */}
            <nav className="hidden md:flex flex-col bg-surface-container-low h-screen w-72 fixed left-0 top-0 overflow-y-auto border-r border-outline-variant/30 shadow-lg shadow-primary/5 z-40">
                <div className="flex flex-col gap-2 py-6 px-4 h-full">
                    {/* Header */}
                    <div className="flex items-center gap-4 mb-8 px-2">
                        <div className="w-12 h-12 rounded-xl bg-primary-container flex items-center justify-center overflow-hidden shrink-0">
                            <img alt="Faculty Logo" className="w-full h-full object-cover" data-alt="A stylized, modern geometric logo design representing a university faculty or student governance body, featuring abstract shapes in primary blue and vibrant accents, set against a pristine white background. The aesthetic is clean, corporate, and youthful." src="https://lh3.googleusercontent.com/aida-public/AB6AXuAvgfE9E1FA22A3vMx1DtSWv6HRaSa59O-gg9AiBhWMHzqZiq0lH18bhwUANw8TDgQZcsNjYnxj0DOhXfBkws1wGYpesk_2aLn9obluPnmQdT8KNjvJsqVRfFJlhWvFkW9MbqAKnJm3rFxkaGE8D0TPsF2btsYirFA0Bx29vAk0-CDT0FgP5UX8BkKfE1cpjKimYhbvW97ekifd5QPF4WsNSivI9XYtXP1TNWdvQZuv-zIMgbD_NoKXeg" />
                        </div>
                        <div>
                            <h1 className="font-headline-md text-headline-md font-black text-on-surface">Quản lý Đoàn - Hội</h1>
                            <p className="font-label-sm text-label-sm text-on-surface-variant">Hệ thống quản trị</p>
                        </div>
                    </div>
                    {/* CTA */}
                    <button className="mb-6 flex items-center justify-center gap-2 w-full bg-primary text-on-primary font-label-md text-label-md py-3 rounded-xl hover:bg-surface-tint transition-colors shadow-md shadow-primary/20" onclick="toggleEventModal()">
                        <span className="material-symbols-outlined" style={{ fontVariationSettings: "'FILL' 1" }}>add</span>
                        Tạo sự kiện mới
                    </button>
                    {/* Navigation Links */}
                    <div className="flex flex-col gap-1 flex-grow">
                        {/* Active Item */}
                        <a className="flex items-center gap-3 px-4 py-3 bg-primary-container text-on-primary-container font-bold rounded-lg mx-2 transition-transform hover:translate-x-1" href="#">
                            <span className="material-symbols-outlined" style={{ fontVariationSettings: "'FILL' 1" }}>dashboard</span>
                            <span className="font-label-md text-label-md">Trang chủ</span>
                        </a>
                        <a className="flex items-center gap-3 px-4 py-3 text-on-surface-variant hover:bg-surface-container-highest rounded-lg mx-2 transition-all hover:translate-x-1" href="#">
                            <span className="material-symbols-outlined">event</span>
                            <span className="font-label-md text-label-md">Sự kiện</span>
                        </a>
                        <a className="flex items-center gap-3 px-4 py-3 text-on-surface-variant hover:bg-surface-container-highest rounded-lg mx-2 transition-all hover:translate-x-1" href="#">
                            <span className="material-symbols-outlined">groups</span>
                            <span className="font-label-md text-label-md">Quản lý đoàn viên</span>
                        </a>
                        <a className="flex items-center gap-3 px-4 py-3 text-on-surface-variant hover:bg-surface-container-highest rounded-lg mx-2 transition-all hover:translate-x-1" href="#">
                            <span className="material-symbols-outlined">account_balance_wallet</span>
                            <span className="font-label-md text-label-md">Tài chính</span>
                        </a>
                        <a className="flex items-center gap-3 px-4 py-3 text-on-surface-variant hover:bg-surface-container-highest rounded-lg mx-2 transition-all hover:translate-x-1" href="#">
                            <span className="material-symbols-outlined">military_tech</span>
                            <span className="font-label-md text-label-md">Thi đua</span>
                        </a>
                    </div>
                    {/* Settings / Footer */}
                    <div className="mt-auto pt-4 border-t border-outline-variant/30">
                        <a className="flex items-center gap-3 px-4 py-3 text-on-surface-variant hover:bg-surface-container-highest rounded-lg mx-2 transition-all hover:translate-x-1" href="#">
                            <span className="material-symbols-outlined">settings</span>
                            <span className="font-label-md text-label-md">Cài đặt</span>
                        </a>
                    </div>
                </div>
            </nav>
            {/* Mobile BottomNavBar */}
            <nav className="md:hidden fixed bottom-0 w-full z-50 rounded-t-xl bg-surface/80 backdrop-blur-xl border-t border-white/20 shadow-[0_-4px_16px_rgba(0,0,0,0.05)]">
                <div className="fixed bottom-0 left-0 w-full flex justify-around items-end pb-4 px-6 h-[80px]">
                    {/* Active Item */}
                    <a className="flex flex-col items-center justify-center bg-primary text-on-primary rounded-full p-2 w-12 h-12 mb-4 shadow-md transform scale-90 duration-150" href="#">
                        <span className="material-symbols-outlined" style={{ fontVariationSettings: "'FILL' 1" }}>home</span>
                    </a>
                    <a className="flex flex-col items-center justify-center text-on-surface-variant p-2 hover:bg-surface-container-highest rounded-xl transition-colors" href="#">
                        <span className="material-symbols-outlined">calendar_today</span>
                        <span className="font-label-sm-mobile text-label-sm-mobile mt-1">Sự kiện</span>
                    </a>
                    <a className="flex flex-col items-center justify-center text-on-surface-variant p-2 hover:bg-surface-container-highest rounded-xl transition-colors" href="#">
                        <span className="material-symbols-outlined">notifications</span>
                        <span className="font-label-sm-mobile text-label-sm-mobile mt-1">Thông báo</span>
                    </a>
                    <a className="flex flex-col items-center justify-center text-on-surface-variant p-2 hover:bg-surface-container-highest rounded-xl transition-colors" href="#">
                        <span className="material-symbols-outlined">person</span>
                        <span className="font-label-sm-mobile text-label-sm-mobile mt-1">Cá nhân</span>
                    </a>
                </div>
            </nav>
            {/* Main Content Canvas */}
            <main className="md:ml-72 flex flex-col min-h-screen relative pb-24 md:pb-8">
                {/* Background Decorative Element (Shader integration point if needed, using subtle gradient here for layout stability) */}
                <div className="absolute inset-0 pointer-events-none z-0 overflow-hidden">
                    <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-primary/5 rounded-full blur-[100px]"></div>
                    <div className="absolute bottom-[-10%] right-[-10%] w-[50%] h-[50%] bg-tertiary-container/5 rounded-full blur-[120px]"></div>
                </div>
                {/* TopNavBar (Integrated within main area for proper layout flow on desktop, sticky on mobile) */}
                <header className="sticky top-0 z-30 flex justify-between items-center px-gutter w-full max-w-[1200px] mx-auto h-16 bg-surface/70 backdrop-blur-lg border-b border-white/20 shadow-sm">
                    <div className="flex items-center gap-4">
                        <span className="md:hidden font-headline-md text-headline-md font-bold text-primary">Đoàn - Hội Khoa</span>
                        {/* Desktop Search / Breadcrumb could go here */}
                        <div className="hidden md:flex items-center px-4 py-2 bg-surface-container-highest rounded-full border border-outline-variant/30">
                            <span className="material-symbols-outlined text-on-surface-variant mr-2 text-[20px]">search</span>
                            <input className="bg-transparent border-none focus:ring-0 text-body-md font-body-md text-on-surface placeholder:text-outline w-64 outline-none" placeholder="Tìm kiếm sinh viên, sự kiện..." type="text" />
                        </div>
                    </div>
                    <div className="flex items-center gap-4">
                        <button className="w-10 h-10 rounded-full flex items-center justify-center text-on-surface-variant hover:bg-primary/10 transition-colors relative">
                            <span className="material-symbols-outlined">notifications</span>
                            <span className="absolute top-2 right-2 w-2 h-2 bg-error rounded-full border border-surface"></span>
                        </button>
                        <button className="w-10 h-10 rounded-full flex items-center justify-center text-on-surface-variant hover:bg-primary/10 transition-colors">
                            <span className="material-symbols-outlined">apps</span>
                        </button>
                        <div className="w-9 h-9 rounded-full overflow-hidden border-2 border-primary-container cursor-pointer ml-2">
                            <img alt="User profile avatar" className="w-full h-full object-cover" data-alt="A professional headshot of a young vietnamese student leader, smiling confidently, wearing a crisp white shirt. The background is a soft, out-of-focus modern office environment with bright, natural lighting." src="https://lh3.googleusercontent.com/aida-public/AB6AXuDemNE6xmC5G6XqrP3z0LuJvLbp1GGV5ILqlV2L-OctP97VEYrLCQdcE80DEzJA5wnBPRlCp3Cea57EEoakJVeFBjdK0dm_segXhez12Yx-AQmCmyUHvqYqLCaJMTpFLMXtUhDYbNCDN6EkYSmybzUDgZHOP9RMUYLrnZaejZtPhaqW2xcKPTfgyvE3PrGQlsj92t_xK8rLZHFt9c1zDrjBX10AlKvdQ8rBVcD28XDaknGtgBLenAx6mQ" />
                        </div>
                    </div>
                </header>
                {/* Page Content */}
                <div className="relative z-10 w-full max-w-[1200px] mx-auto px-gutter md:px-container-margin py-8 flex flex-col gap-section-gap">
                    {/* Page Header */}
                    <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
                        <div>
                            <h2 className="font-display-lg text-headline-lg md:text-display-lg text-on-surface">Tổng quan Hệ thống</h2>
                            <p className="font-body-lg text-body-lg text-on-surface-variant mt-2">Theo dõi các chỉ số và hoạt động chính của Đoàn - Hội.</p>
                        </div>
                        {/* Optional contextual action */}
                        <button className="hidden md:flex items-center gap-2 px-4 py-2 bg-surface-container-highest text-on-surface rounded-lg font-label-md hover:bg-outline-variant/20 transition-colors border border-outline-variant/30">
                            <span className="material-symbols-outlined text-[20px]">download</span>
                            Xuất báo cáo
                        </button>
                    </div>
                    {/* Statistics Overview (Bento Grid) */}
                    <section className="grid grid-cols-1 md:grid-cols-3 gap-6">
                        {/* Card 1 */}
                        <div className="glass-panel rounded-xl p-6 flex flex-col relative overflow-hidden group">
                            <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-20 transition-opacity">
                                <span className="material-symbols-outlined text-[64px] text-primary">group</span>
                            </div>
                            <span className="font-label-md text-label-md text-on-surface-variant mb-1">Tổng Sinh viên</span>
                            <span className="font-display-lg text-display-lg text-primary mb-4">4,250</span>
                            <div className="flex items-center gap-1 text-sm font-medium text-[rgb(34,197,94)] mt-auto">
                                <span className="material-symbols-outlined text-[16px]">trending_up</span>
                                <span>+12% so với học kỳ trước</span>
                            </div>
                        </div>
                        {/* Card 2 */}
                        <div className="glass-panel rounded-xl p-6 flex flex-col relative overflow-hidden group">
                            <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-20 transition-opacity">
                                <span className="material-symbols-outlined text-[64px] text-secondary">event_available</span>
                            </div>
                            <span className="font-label-md text-label-md text-on-surface-variant mb-1">Sự kiện đang diễn ra</span>
                            <span className="font-display-lg text-display-lg text-secondary mb-4">12</span>
                            <div className="flex items-center gap-1 text-sm font-medium text-on-surface-variant mt-auto">
                                <span className="material-symbols-outlined text-[16px]">schedule</span>
                                <span>3 sự kiện sắp kết thúc</span>
                            </div>
                        </div>
                        {/* Card 3 */}
                        <div className="glass-panel rounded-xl p-6 flex flex-col relative overflow-hidden group">
                            <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-20 transition-opacity">
                                <span className="material-symbols-outlined text-[64px] text-error">assignment_late</span>
                            </div>
                            <span className="font-label-md text-label-md text-on-surface-variant mb-1">Yêu cầu chờ duyệt</span>
                            <span className="font-display-lg text-display-lg text-error mb-4">48</span>
                            <div className="flex items-center gap-1 text-sm font-medium text-error mt-auto">
                                <span className="material-symbols-outlined text-[16px]">priority_high</span>
                                <span>Cần xử lý gấp 5 yêu cầu</span>
                            </div>
                        </div>
                    </section>
                    {/* User Management Table Section */}
                    <section className="glass-panel rounded-[1.25rem] overflow-hidden flex flex-col">
                        <div className="px-6 py-5 border-b border-outline-variant/20 flex justify-between items-center bg-surface-container-lowest/50">
                            <h3 className="font-headline-md text-headline-md text-on-surface">Quản lý Phân quyền</h3>
                            <button className="text-primary font-label-md hover:underline flex items-center gap-1">
                                Xem tất cả <span className="material-symbols-outlined text-[18px]">chevron_right</span>
                            </button>
                        </div>
                        <div className="overflow-x-auto w-full">
                            <table className="w-full text-left border-collapse">
                                <thead className="bg-surface-container-low text-on-surface-variant font-label-md text-label-md sticky top-0">
                                    <tr>
                                        <th className="py-4 px-6 font-semibold w-1/3">Họ và tên</th>
                                        <th className="py-4 px-6 font-semibold w-1/5">MSSV</th>
                                        <th className="py-4 px-6 font-semibold w-1/4">Vai trò hiện tại</th>
                                        <th className="py-4 px-6 font-semibold text-right">Hành động</th>
                                    </tr>
                                </thead>
                                <tbody className="font-body-md text-body-md text-on-surface divide-y divide-outline-variant/10">
                                    {/* Row 1 */}
                                    <tr className="hover:bg-surface-container-highest/30 transition-colors group">
                                        <td className="py-4 px-6 flex items-center gap-3">
                                            <div className="w-8 h-8 rounded-full bg-primary-container text-primary flex items-center justify-center font-bold text-sm">
                                                N
                                            </div>
                                            <span className="font-medium text-on-surface group-hover:text-primary transition-colors">Nguyễn Văn A</span>
                                        </td>
                                        <td className="py-4 px-6 text-on-surface-variant">20123456</td>
                                        <td className="py-4 px-6">
                                            <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-semibold bg-error/15 text-error border border-error/20">
                                                Quản trị viên
                                            </span>
                                        </td>
                                        <td className="py-4 px-6 text-right">
                                            <div className="relative inline-block text-left role-dropdown-container">
                                                <button className="p-2 rounded-lg text-on-surface-variant hover:bg-outline-variant/20 transition-colors" onclick="toggleDropdown(this)" title="Thay đổi vai trò">
                                                    <span className="material-symbols-outlined">manage_accounts</span>
                                                </button>
                                                <div className="origin-top-right absolute right-0 mt-2 w-48 rounded-xl shadow-lg bg-surface-container-lowest ring-1 ring-black ring-opacity-5 focus:outline-none z-20 hidden dropdown-menu border border-outline-variant/20 p-1">
                                                    <div className="py-1">
                                                        <button className="w-full text-left px-4 py-2 text-sm text-on-surface hover:bg-surface-container-high rounded-md">Chỉ định Sinh viên</button>
                                                        <button className="w-full text-left px-4 py-2 text-sm text-on-surface hover:bg-surface-container-high rounded-md">Chỉ định CTV</button>
                                                        <button className="w-full text-left px-4 py-2 text-sm text-on-surface hover:bg-surface-container-high rounded-md">Chỉ định BCH</button>
                                                        <button className="w-full text-left px-4 py-2 text-sm text-error hover:bg-error-container/50 rounded-md font-medium">Chỉ định Quản trị viên</button>
                                                    </div>
                                                </div>
                                            </div>
                                        </td>
                                    </tr>
                                    {/* Row 2 */}
                                    <tr className="hover:bg-surface-container-highest/30 transition-colors group">
                                        <td className="py-4 px-6 flex items-center gap-3">
                                            <div className="w-8 h-8 rounded-full bg-tertiary-container text-tertiary flex items-center justify-center font-bold text-sm">
                                                T
                                            </div>
                                            <span className="font-medium text-on-surface group-hover:text-primary transition-colors">Trần Thị B</span>
                                        </td>
                                        <td className="py-4 px-6 text-on-surface-variant">20123457</td>
                                        <td className="py-4 px-6">
                                            <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-semibold bg-tertiary/15 text-tertiary border border-tertiary/20">
                                                Ban chỉ huy (BCH)
                                            </span>
                                        </td>
                                        <td className="py-4 px-6 text-right">
                                            <div className="relative inline-block text-left role-dropdown-container">
                                                <button className="p-2 rounded-lg text-on-surface-variant hover:bg-outline-variant/20 transition-colors" onclick="toggleDropdown(this)" title="Thay đổi vai trò">
                                                    <span className="material-symbols-outlined">manage_accounts</span>
                                                </button>
                                                <div className="origin-top-right absolute right-0 mt-2 w-48 rounded-xl shadow-lg bg-surface-container-lowest ring-1 ring-black ring-opacity-5 focus:outline-none z-20 hidden dropdown-menu border border-outline-variant/20 p-1">
                                                    <div className="py-1">
                                                        <button className="w-full text-left px-4 py-2 text-sm text-on-surface hover:bg-surface-container-high rounded-md">Chỉ định Sinh viên</button>
                                                        <button className="w-full text-left px-4 py-2 text-sm text-on-surface hover:bg-surface-container-high rounded-md">Chỉ định CTV</button>
                                                        <button className="w-full text-left px-4 py-2 text-sm text-on-surface hover:bg-surface-container-high rounded-md">Chỉ định BCH</button>
                                                        <button className="w-full text-left px-4 py-2 text-sm text-error hover:bg-error-container/50 rounded-md font-medium">Chỉ định Quản trị viên</button>
                                                    </div>
                                                </div>
                                            </div>
                                        </td>
                                    </tr>
                                    {/* Row 3 */}
                                    <tr className="hover:bg-surface-container-highest/30 transition-colors group">
                                        <td className="py-4 px-6 flex items-center gap-3">
                                            <div className="w-8 h-8 rounded-full bg-secondary-container text-on-secondary-container flex items-center justify-center font-bold text-sm">
                                                L
                                            </div>
                                            <span className="font-medium text-on-surface group-hover:text-primary transition-colors">Lê Văn C</span>
                                        </td>
                                        <td className="py-4 px-6 text-on-surface-variant">21123458</td>
                                        <td className="py-4 px-6">
                                            <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-semibold bg-secondary/15 text-secondary border border-secondary/20">
                                                Cộng tác viên (CTV)
                                            </span>
                                        </td>
                                        <td className="py-4 px-6 text-right">
                                            <div className="relative inline-block text-left role-dropdown-container">
                                                <button className="p-2 rounded-lg text-on-surface-variant hover:bg-outline-variant/20 transition-colors" onclick="toggleDropdown(this)" title="Thay đổi vai trò">
                                                    <span className="material-symbols-outlined">manage_accounts</span>
                                                </button>
                                                <div className="origin-top-right absolute right-0 mt-2 w-48 rounded-xl shadow-lg bg-surface-container-lowest ring-1 ring-black ring-opacity-5 focus:outline-none z-20 hidden dropdown-menu border border-outline-variant/20 p-1">
                                                    <div className="py-1">
                                                        <button className="w-full text-left px-4 py-2 text-sm text-on-surface hover:bg-surface-container-high rounded-md">Chỉ định Sinh viên</button>
                                                        <button className="w-full text-left px-4 py-2 text-sm text-on-surface hover:bg-surface-container-high rounded-md">Chỉ định CTV</button>
                                                        <button className="w-full text-left px-4 py-2 text-sm text-on-surface hover:bg-surface-container-high rounded-md">Chỉ định BCH</button>
                                                        <button className="w-full text-left px-4 py-2 text-sm text-error hover:bg-error-container/50 rounded-md font-medium">Chỉ định Quản trị viên</button>
                                                    </div>
                                                </div>
                                            </div>
                                        </td>
                                    </tr>
                                    {/* Row 4 */}
                                    <tr className="hover:bg-surface-container-highest/30 transition-colors group">
                                        <td className="py-4 px-6 flex items-center gap-3">
                                            <div className="w-8 h-8 rounded-full bg-surface-dim text-on-surface-variant flex items-center justify-center font-bold text-sm">
                                                P
                                            </div>
                                            <span className="font-medium text-on-surface group-hover:text-primary transition-colors">Phạm Thị D</span>
                                        </td>
                                        <td className="py-4 px-6 text-on-surface-variant">22123459</td>
                                        <td className="py-4 px-6">
                                            <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-semibold bg-primary/15 text-primary border border-primary/20">
                                                Sinh viên
                                            </span>
                                        </td>
                                        <td className="py-4 px-6 text-right">
                                            <div className="relative inline-block text-left role-dropdown-container">
                                                <button className="p-2 rounded-lg text-on-surface-variant hover:bg-outline-variant/20 transition-colors" onclick="toggleDropdown(this)" title="Thay đổi vai trò">
                                                    <span className="material-symbols-outlined">manage_accounts</span>
                                                </button>
                                                <div className="origin-top-right absolute right-0 mt-2 w-48 rounded-xl shadow-lg bg-surface-container-lowest ring-1 ring-black ring-opacity-5 focus:outline-none z-20 hidden dropdown-menu border border-outline-variant/20 p-1">
                                                    <div className="py-1">
                                                        <button className="w-full text-left px-4 py-2 text-sm text-on-surface hover:bg-surface-container-high rounded-md">Chỉ định Sinh viên</button>
                                                        <button className="w-full text-left px-4 py-2 text-sm text-on-surface hover:bg-surface-container-high rounded-md">Chỉ định CTV</button>
                                                        <button className="w-full text-left px-4 py-2 text-sm text-on-surface hover:bg-surface-container-high rounded-md">Chỉ định BCH</button>
                                                        <button className="w-full text-left px-4 py-2 text-sm text-error hover:bg-error-container/50 rounded-md font-medium">Chỉ định Quản trị viên</button>
                                                    </div>
                                                </div>
                                            </div>
                                        </td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </section>
                    {/* Event Management Section (Asymmetric / Card Layout) */}
                    <section className="flex flex-col gap-6">
                        <div className="flex justify-between items-center">
                            <h3 className="font-headline-md text-headline-md text-on-surface">Sự kiện nổi bật</h3>
                            <button className="flex items-center gap-2 bg-primary text-on-primary px-4 py-2 rounded-xl font-label-md hover:bg-surface-tint transition-all shadow-md shadow-primary/20 hover:shadow-lg hover:-translate-y-0.5" onclick="toggleEventModal()">
                                <span className="material-symbols-outlined text-[20px]">add</span>
                                Thêm sự kiện
                            </button>
                        </div>
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                            {/* Event Card 1 */}
                            <div className="glass-panel rounded-[1rem] overflow-hidden flex flex-col group hover:scale-[1.02] transition-transform duration-300">
                                <div className="relative w-full aspect-video bg-surface-dim overflow-hidden">
                                    <img alt="Event Cover" className="w-full h-full object-cover" data-alt="A vibrant photograph of a university campus event taking place in a large auditorium. Students are gathered, listening attentively to a speaker on stage. The lighting is dynamic with blue and purple stage lights contrasting against the warm glow of the audience area. The atmosphere feels energetic and academic." src="https://lh3.googleusercontent.com/aida-public/AB6AXuBvWq4h-QUMQjZ2btOb5eZVXN7Ji_G53nYsWca7tDTec7yTtCDiLFumVLnS-lIJpFy1bgqqJ4HaMCG1oR7lPtd41Isd34OeuqpWUtJPKk7jGH0kMeGjB80wOnV_hexJKpmwlL8muwZuwrLO2Zxuz7wCG8wJ_N1wlh8PhbpU8mlMTLu4bXw5zlOY2s55YxwfKKXlGRUebUytpeaqtc5ukPSR2pq_VujudwcIMuiEzFSsA0teQ9lticItTQ" />
                                    <div className="absolute top-3 right-3 bg-surface-container-lowest/90 backdrop-blur-sm px-2 py-1 rounded-md text-xs font-bold text-primary border border-white/50">
                                        Đang diễn ra
                                    </div>
                                </div>
                                <div className="p-5 flex flex-col flex-grow">
                                    <h4 className="font-headline-sm text-[18px] font-bold text-on-surface mb-2 leading-tight">Hội thảo Công nghệ và Tương lai</h4>
                                    <p className="font-body-sm text-sm text-on-surface-variant line-clamp-2 mb-4">Khám phá các xu hướng công nghệ mới nhất cùng các chuyên gia hàng đầu trong ngành công nghiệp phần mềm.</p>
                                    <div className="mt-auto pt-4 border-t border-outline-variant/20 flex justify-between items-center">
                                        <div className="flex -space-x-2">
                                            <div className="w-6 h-6 rounded-full bg-primary-container border border-surface"></div>
                                            <div className="w-6 h-6 rounded-full bg-tertiary-container border border-surface"></div>
                                            <div className="w-6 h-6 rounded-full bg-secondary-container border border-surface flex items-center justify-center text-[10px] font-bold text-on-secondary-container">+120</div>
                                        </div>
                                        <div className="flex gap-2">
                                            <button className="w-8 h-8 rounded-full bg-surface-container-high text-primary flex items-center justify-center hover:bg-primary-container transition-colors" title="Chỉnh sửa">
                                                <span className="material-symbols-outlined text-[18px]">edit</span>
                                            </button>
                                            <button className="w-8 h-8 rounded-full bg-error-container/50 text-error flex items-center justify-center hover:bg-error-container transition-colors" title="Xóa">
                                                <span className="material-symbols-outlined text-[18px]">delete</span>
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            {/* Event Card 2 */}
                            <div className="glass-panel rounded-[1rem] overflow-hidden flex flex-col group hover:scale-[1.02] transition-transform duration-300">
                                <div className="relative w-full aspect-video bg-surface-dim overflow-hidden">
                                    <img alt="Event Cover" className="w-full h-full object-cover" data-alt="A bright, outdoor daytime photo showing a group of students participating in a team-building activity on a green campus lawn. They are laughing and wearing matching casual t-shirts. The scene is sunny, cheerful, and embodies youthfulness and community spirit." src="https://lh3.googleusercontent.com/aida-public/AB6AXuDsNpgiwwuODB3VvUrtlYFg-fPZIz4EXtA0Uyhmku4FQeOC3oiJ3q_qsIsSvR6x7D7oiv5E6X2Bd5nOdaPWd4qT-lEdErJn7ffu0U_fkSEztQ6PlURX-Qp0C3KlMWYv4Jbh9yXw40_bf5TjgOJG-WYLFSm74y4oTpgLbl7vy5qiryjzJkF8xzzQsqcMiNWDLH0nTN_9316GbMIkujSmD7MCjzpQjyGyKiSXJdThlIIDql2qZdrOMs9b1w" />
                                    <div className="absolute top-3 right-3 bg-surface-container-lowest/90 backdrop-blur-sm px-2 py-1 rounded-md text-xs font-bold text-secondary border border-white/50">
                                        Sắp tới (3 ngày)
                                    </div>
                                </div>
                                <div className="p-5 flex flex-col flex-grow">
                                    <h4 className="font-headline-sm text-[18px] font-bold text-on-surface mb-2 leading-tight">Ngày hội Thể thao Sinh viên</h4>
                                    <p className="font-body-sm text-sm text-on-surface-variant line-clamp-2 mb-4">Hoạt động ngoại khóa thường niên nhằm nâng cao tinh thần đoàn kết và rèn luyện sức khỏe cho sinh viên.</p>
                                    <div className="mt-auto pt-4 border-t border-outline-variant/20 flex justify-between items-center">
                                        <div className="flex items-center gap-1 text-sm text-on-surface-variant font-medium">
                                            <span className="material-symbols-outlined text-[18px]">group</span>
                                            <span>Đã đăng ký: 45/100</span>
                                        </div>
                                        <div className="flex gap-2">
                                            <button className="w-8 h-8 rounded-full bg-surface-container-high text-primary flex items-center justify-center hover:bg-primary-container transition-colors" title="Chỉnh sửa">
                                                <span className="material-symbols-outlined text-[18px]">edit</span>
                                            </button>
                                            <button className="w-8 h-8 rounded-full bg-error-container/50 text-error flex items-center justify-center hover:bg-error-container transition-colors" title="Xóa">
                                                <span className="material-symbols-outlined text-[18px]">delete</span>
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>
                </div>
            </main>
            {/* Create Event Modal / Side Panel (Implemented as centered modal with glass effect) */}
            <div className="fixed inset-0 z-[100] hidden items-center justify-center px-4" id="createEventModal">
                {/* Backdrop */}
                <div className="absolute inset-0 bg-on-background/40 backdrop-blur-sm transition-opacity" onclick="toggleEventModal()"></div>
                {/* Modal Content */}
                <div className="relative w-full max-w-2xl bg-surface-container-lowest rounded-[1.5rem] shadow-2xl overflow-hidden flex flex-col border border-white/50 transform transition-all scale-95 opacity-0 duration-300 ease-out" id="modalPanel">
                    {/* Header */}
                    <div className="px-6 py-4 border-b border-outline-variant/20 flex justify-between items-center bg-surface/50">
                        <h3 className="font-headline-md text-headline-md text-on-surface">Tạo sự kiện mới</h3>
                        <button className="w-8 h-8 rounded-full flex items-center justify-center text-on-surface-variant hover:bg-surface-container-highest transition-colors" onclick="toggleEventModal()">
                            <span className="material-symbols-outlined">close</span>
                        </button>
                    </div>
                    {/* Form Body */}
                    <div className="p-6 overflow-y-auto max-h-[70vh] custom-scrollbar">
                        <form className="flex flex-col gap-5">
                            {/* Cover Image Upload Area */}
                            <div className="w-full h-40 rounded-xl border-2 border-dashed border-outline-variant/50 bg-surface flex flex-col items-center justify-center text-on-surface-variant hover:border-primary hover:bg-primary/5 transition-colors cursor-pointer group">
                                <span className="material-symbols-outlined text-[32px] group-hover:text-primary mb-2">add_photo_alternate</span>
                                <span className="font-label-md text-sm">Tải ảnh bìa sự kiện lên</span>
                                <span className="text-xs opacity-70 mt-1">PNG, JPG tối đa 5MB</span>
                                <input className="hidden" type="file" />
                            </div>
                            <div className="flex flex-col gap-1.5">
                                <label className="font-label-md text-sm text-on-surface">Tên sự kiện <span className="text-error">*</span></label>
                                <input className="w-full bg-surface-container-lowest border border-outline-variant/50 rounded-lg px-4 py-2.5 text-on-surface focus:border-primary focus:ring-1 focus:ring-primary transition-all outline-none font-body-md placeholder:text-outline-variant" placeholder="Nhập tên sự kiện..." type="text" />
                            </div>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                                <div className="flex flex-col gap-1.5">
                                    <label className="font-label-md text-sm text-on-surface">Thời gian bắt đầu</label>
                                    <input className="w-full bg-surface-container-lowest border border-outline-variant/50 rounded-lg px-4 py-2.5 text-on-surface focus:border-primary focus:ring-1 focus:ring-primary transition-all outline-none font-body-md" type="datetime-local" />
                                </div>
                                <div className="flex flex-col gap-1.5">
                                    <label className="font-label-md text-sm text-on-surface">Địa điểm</label>
                                    <div className="relative">
                                        <span className="material-symbols-outlined absolute left-3 top-1/2 -translate-y-1/2 text-outline-variant text-[20px]">location_on</span>
                                        <input className="w-full bg-surface-container-lowest border border-outline-variant/50 rounded-lg pl-10 pr-4 py-2.5 text-on-surface focus:border-primary focus:ring-1 focus:ring-primary transition-all outline-none font-body-md placeholder:text-outline-variant" placeholder="VD: Hội trường A..." type="text" />
                                    </div>
                                </div>
                            </div>
                            <div className="flex flex-col gap-1.5">
                                <label className="font-label-md text-sm text-on-surface">Mô tả chi tiết</label>
                                <textarea className="w-full bg-surface-container-lowest border border-outline-variant/50 rounded-lg px-4 py-2.5 text-on-surface focus:border-primary focus:ring-1 focus:ring-primary transition-all outline-none font-body-md placeholder:text-outline-variant resize-none" placeholder="Nhập thông tin chi tiết về sự kiện, mục đích, yêu cầu tham gia..." rows="4"></textarea>
                            </div>
                        </form>
                    </div>
                    {/* Footer Actions */}
                    <div className="px-6 py-4 border-t border-outline-variant/20 bg-surface/50 flex justify-end gap-3 rounded-b-[1.5rem]">
                        <button className="px-5 py-2.5 rounded-xl font-label-md text-primary border border-primary/30 hover:bg-primary/5 transition-colors" onclick="toggleEventModal()">
                            Hủy
                        </button>
                        <button className="px-5 py-2.5 rounded-xl font-label-md bg-primary text-on-primary hover:bg-surface-tint shadow-md shadow-primary/20 transition-all">
                            Lưu sự kiện
                        </button>
                    </div>
                </div>
            </div>
            {/* Inline JavaScript for Interactivity */}


        </div>
    );
}
