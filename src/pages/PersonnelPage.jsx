import React from 'react';

export default function PersonnelPage() {
    return (
        <div className="bg-background text-on-background font-body-md min-h-screen flex flex-col md:flex-row">

            {/* TopNavBar (Mobile Only) */}
            <header className="md:hidden flex justify-between items-center px-gutter w-full mx-auto h-16 bg-surface/70 dark:bg-surface-variant/70 backdrop-blur-lg border-b border-white/20 shadow-sm sticky top-0 z-50">
                <div className="font-headline-md text-headline-md font-bold text-primary dark:text-primary-fixed">Đoàn - Hội Khoa</div>
                <div className="flex items-center gap-4">
                    <span className="material-symbols-outlined text-primary dark:text-inverse-primary" data-icon="notifications">notifications</span>
                    <span className="material-symbols-outlined text-primary dark:text-inverse-primary" data-icon="apps">apps</span>
                    <img alt="User profile avatar" className="w-8 h-8 rounded-full object-cover" data-alt="A detailed headshot portrait of a professional university student in a bright, modern light-mode environment. The lighting is soft and even, highlighting their youthful energy and professional demeanor. The color palette features clean whites and subtle blue accents, aligning with a corporate glassmorphic aesthetic. The mood is confident and welcoming." src="https://lh3.googleusercontent.com/aida-public/AB6AXuCE4n1DrrMn6AjA8PtTA0geQDVvYriHv84okvSBQarnSxa2rlNK8zXo3Li55yfLhf3v5sKUHlCz6uLNJu1iVLQl5iaE4OW2btAK9cCFeRKJw0VabSMQcI91w8loBxHFlLRJ9Vkjn3CGiN6plKayppHcr8jK2ifiG-AgOjzBJsLFBpAnp0UWX8qQpJCTnQciTXIn1l3s-CSkIqv9wtPkPDs-ARksO9_xhDWmTx7RioPhONGiMPt54ipAeg" />
                </div>
            </header>
            {/* SideNavBar (Desktop Only) */}
            <nav className="hidden md:flex flex-col gap-2 py-6 px-4 bg-surface-container-low dark:bg-surface-container-lowest border-r border-outline-variant/30 shadow-lg shadow-primary/5 h-screen w-72 fixed left-0 top-0 overflow-y-auto z-40">
                <div className="flex items-center gap-3 mb-8 px-2">
                    <img alt="Faculty Logo" className="w-10 h-10 rounded-full object-cover" data-alt="A modern, high-quality university faculty logo designed with a clean, light-mode aesthetic. The logo utilizes a palette of primary blue and crisp white, embodying a professional and youthful spirit. It is presented on a minimalist background, conveying clarity and academic prestige." src="https://lh3.googleusercontent.com/aida-public/AB6AXuBwK2PCqBEoCGMZ34HsjwNgUlxFYne2ZsRczeX4oHxHF4crdiGcAeXbmCauxrRL8GQKZW2tRHVAWsHiTwdN6NlkubW4aV45lO1cXf5mToPSxosuzDjbUqExwmLiHh5w2pjnv2apTaiPi3RLsReQm21dvpfZw3TuSnPl-ROBKyaPTm3lesLoq5i-tf5nPGs_knmQu0hm6OWihuydTav4YLGujY6TSesIc8QLBRTyo8RdZNv2q5TSqviHYA" />
                    <div>
                        <div className="font-headline-md text-headline-md font-black text-on-surface">Quản lý Đoàn - Hội</div>
                        <div className="font-label-md text-label-md text-on-surface-variant">Hệ thống quản trị</div>
                    </div>
                </div>
                <button className="bg-primary text-on-primary font-label-md text-label-md rounded-lg py-3 px-4 mb-6 hover:bg-primary-fixed-dim transition-colors flex items-center justify-center gap-2">
                    <span className="material-symbols-outlined" data-icon="add">add</span>
                    Tạo sự kiện mới
                </button>
                <a className="flex items-center gap-3 p-3 text-on-surface-variant hover:bg-surface-container-highest rounded-lg mx-2 transition-all hover:translate-x-1 font-label-md text-label-md" href="#">
                    <span className="material-symbols-outlined" data-icon="dashboard">dashboard</span>
                    Trang chủ
                </a>
                <a className="flex items-center gap-3 p-3 text-on-surface-variant hover:bg-surface-container-highest rounded-lg mx-2 transition-all hover:translate-x-1 font-label-md text-label-md" href="#">
                    <span className="material-symbols-outlined" data-icon="event">event</span>
                    Sự kiện
                </a>
                <a className="flex items-center gap-3 p-3 bg-primary-container text-on-primary-container font-bold rounded-lg mx-2 transition-all hover:translate-x-1 font-label-md text-label-md" href="#">
                    <span className="material-symbols-outlined" data-icon="groups">groups</span>
                    Quản lý đoàn viên
                </a>
                <a className="flex items-center gap-3 p-3 text-on-surface-variant hover:bg-surface-container-highest rounded-lg mx-2 transition-all hover:translate-x-1 font-label-md text-label-md" href="#">
                    <span className="material-symbols-outlined" data-icon="account_balance_wallet">account_balance_wallet</span>
                    Tài chính
                </a>
                <a className="flex items-center gap-3 p-3 text-on-surface-variant hover:bg-surface-container-highest rounded-lg mx-2 transition-all hover:translate-x-1 font-label-md text-label-md" href="#">
                    <span className="material-symbols-outlined" data-icon="military_tech">military_tech</span>
                    Thi đua
                </a>
                <a className="flex items-center gap-3 p-3 text-on-surface-variant hover:bg-surface-container-highest rounded-lg mx-2 transition-all hover:translate-x-1 font-label-md text-label-md mt-auto" href="#">
                    <span className="material-symbols-outlined" data-icon="settings">settings</span>
                    Cài đặt
                </a>
            </nav>
            {/* Main Content */}
            <main className="flex-1 md:ml-72 w-full max-w-[1200px] mx-auto px-4 md:px-gutter py-8 pb-32 md:pb-8">
                {/* Header Section */}
                <section className="mb-section-gap text-center max-w-2xl mx-auto">
                    <h1 className="font-display-lg text-display-lg md:text-display-lg text-on-surface mb-4">Sơ đồ Tổ chức</h1>
                    <p className="font-body-lg text-body-lg text-on-surface-variant">Giới thiệu về cơ cấu tổ chức và các thành viên cốt cán của Đoàn - Hội Khoa.</p>
                </section>
                {/* Department Tabs */}
                <div className="flex overflow-x-auto pb-4 mb-8 gap-2 no-scrollbar justify-start md:justify-center">
                    <button className="px-6 py-2 rounded-full bg-primary text-on-primary font-label-md text-label-md shadow-md whitespace-nowrap">Tất cả</button>
                    <button className="px-6 py-2 rounded-full bg-surface-container-highest text-on-surface-variant font-label-md text-label-md hover:bg-surface-container-low transition-colors whitespace-nowrap">Ban Thường vụ</button>
                    <button className="px-6 py-2 rounded-full bg-surface-container-highest text-on-surface-variant font-label-md text-label-md hover:bg-surface-container-low transition-colors whitespace-nowrap">Ban Truyền thông</button>
                    <button className="px-6 py-2 rounded-full bg-surface-container-highest text-on-surface-variant font-label-md text-label-md hover:bg-surface-container-low transition-colors whitespace-nowrap">Ban Phong trào</button>
                    <button className="px-6 py-2 rounded-full bg-surface-container-highest text-on-surface-variant font-label-md text-label-md hover:bg-surface-container-low transition-colors whitespace-nowrap">Ban Học tập &amp; NCKH</button>
                </div>
                {/* Leadership Core Grid */}
                <h2 className="font-headline-lg text-headline-lg text-on-surface mb-6 border-b-2 border-primary-fixed inline-block pb-2">Ban Thường vụ</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-section-gap">
                    {/* Profile Card 1 */}
                    <div className="glass-card rounded-[16px] p-6 flex flex-col items-center text-center">
                        <div className="relative w-24 h-24 mb-4">
                            <img alt="Nguyễn Văn A" className="w-full h-full rounded-full object-cover border-4 border-surface shadow-sm" data-alt="A clear, professional studio portrait of a young Vietnamese university student leader. They are wearing a neat, light-colored shirt against a pristine white background. The lighting is crisp and bright, accentuating their confident, approachable expression. The overall style is clean, modern, and aligned with a corporate light-mode design system." src="https://lh3.googleusercontent.com/aida-public/AB6AXuBUVtaIhQhCHJI01aUwDIrqyJYYU-hsUL0iyAc1yznrN2J_zg0TjyMXoGRuj4xqDWOqUML5ZGIDIVJFNE2e9K3D6BAZVdpkow_Vwa61bMWtQFuvjpQoYsZDhRQ8kzHzjeEsVwIczeRdvqg_WqsDplZTv5XwUREDQHyAjR28bvP_1ZYDH34a9XxumZz6iNwGH5-1nbl-hL0KIZ10slTQ2qSm31m_0aOGhzsctaFZFY5Mjd7jxKzGp4Ib0Q" />
                            <span className="absolute bottom-0 right-0 bg-tertiary text-on-tertiary font-label-sm text-label-sm px-2 py-1 rounded-full border-2 border-surface">BCH</span>
                        </div>
                        <h3 className="font-headline-md text-headline-md text-on-surface mb-1">Nguyễn Văn A</h3>
                        <p className="font-label-md text-label-md text-primary mb-3">Bí thư Đoàn Khoa</p>
                        <p className="font-body-md text-body-md text-on-surface-variant text-sm line-clamp-3">Chịu trách nhiệm điều hành chung mọi hoạt động của Đoàn Khoa. Sinh viên xuất sắc nhiều năm liền.</p>
                        <div className="mt-4 flex gap-2">
                            <button className="text-outline-variant hover:text-primary transition-colors"><span className="material-symbols-outlined" data-icon="mail">mail</span></button>
                            <button className="text-outline-variant hover:text-primary transition-colors"><span className="material-symbols-outlined" data-icon="call">call</span></button>
                        </div>
                    </div>
                    {/* Profile Card 2 */}
                    <div className="glass-card rounded-[16px] p-6 flex flex-col items-center text-center">
                        <div className="relative w-24 h-24 mb-4">
                            <img alt="Trần Thị B" className="w-full h-full rounded-full object-cover border-4 border-surface shadow-sm" data-alt="A clear, professional studio portrait of a young Vietnamese female university student leader. She is dressed professionally in a modern, light-mode setting. The bright, high-key lighting creates a soft yet clear visual, emphasizing her energetic and capable demeanor. The background is simple and uncluttered." src="https://lh3.googleusercontent.com/aida-public/AB6AXuAbsQLtfnyG62-jQn5JpmSk4RE8VJJBX2VHl2QRce2Vh5WcXVtx4K9rHm7JaBIVblSBI8wuNJcrsfVpOWGMbgAhOSltbg_tvLIE9cFZKM6kbs_PGGGeCvY1ETL9FnZWtPe76rhAo7yf4lXqnVqtIFjElmnWONk7IqYa-YSzDmaKbhQ7tQECBqXHymXghBeR-sZ06VO7HeE5Usk7SWHQ8QLotYGpFRsHgb-DgekXhq3dA58euQE2v4VZkQ" />
                            <span className="absolute bottom-0 right-0 bg-tertiary text-on-tertiary font-label-sm text-label-sm px-2 py-1 rounded-full border-2 border-surface">BCH</span>
                        </div>
                        <h3 className="font-headline-md text-headline-md text-on-surface mb-1">Trần Thị B</h3>
                        <p className="font-label-md text-label-md text-primary mb-3">Phó Bí thư</p>
                        <p className="font-body-md text-body-md text-on-surface-variant text-sm line-clamp-3">Phụ trách công tác tổ chức và tài chính. Luôn tận tâm và chi tiết trong mọi công việc.</p>
                        <div className="mt-4 flex gap-2">
                            <button className="text-outline-variant hover:text-primary transition-colors"><span className="material-symbols-outlined" data-icon="mail">mail</span></button>
                        </div>
                    </div>
                    {/* Profile Card 3 */}
                    <div className="glass-card rounded-[16px] p-6 flex flex-col items-center text-center">
                        <div className="relative w-24 h-24 mb-4">
                            <img alt="Lê Hoàng C" className="w-full h-full rounded-full object-cover border-4 border-surface shadow-sm" data-alt="A professional headshot of a male Vietnamese university student in a bright, modern studio. He wears a smart-casual outfit suitable for a youth leadership role. The lighting is soft and even, casting minimal shadows to maintain a clean, corporate light-mode aesthetic. He has a friendly, engaged expression." src="https://lh3.googleusercontent.com/aida-public/AB6AXuD88rHFdwPmSU7Nwxb8PJJJB6HvF6Sri3jONWqLryKthcqNrr-DRfsI9NJjKO2ZzAWxrez4wjVg1ukK5PD0CCOCetfqT_iV7cr-nB0FD5fG-7UUR4bLBc0gbn5aIExigGxOQqV301hbGppfOJ7CYlpw9PgVTl6Zdt5PaWKzPAFMpZyq36IWvc6XANA-xXbcrfDydMiSffcliy2PnO_tQQi8lJvSDuI2DZ5utGVrix3XX9E7cx5OGxL1jA" />
                            <span className="absolute bottom-0 right-0 bg-tertiary text-on-tertiary font-label-sm text-label-sm px-2 py-1 rounded-full border-2 border-surface">BCH</span>
                        </div>
                        <h3 className="font-headline-md text-headline-md text-on-surface mb-1">Lê Hoàng C</h3>
                        <p className="font-label-md text-label-md text-primary mb-3">Ủy viên BTV</p>
                        <p className="font-body-md text-body-md text-on-surface-variant text-sm line-clamp-3">Phụ trách kiểm tra, giám sát các hoạt động đoàn thể. Trưởng ban Kiểm tra.</p>
                        <div className="mt-4 flex gap-2">
                            <button className="text-outline-variant hover:text-primary transition-colors"><span className="material-symbols-outlined" data-icon="mail">mail</span></button>
                        </div>
                    </div>
                </div>
                {/* Members Grid */}
                <h2 className="font-headline-lg text-headline-lg text-on-surface mb-6 border-b-2 border-primary-fixed inline-block pb-2 mt-8">Thành viên các Ban</h2>
                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6">
                    {/* Member Card 1 */}
                    <div className="glass-card rounded-[12px] p-4 flex flex-col items-center text-center">
                        <div className="relative w-16 h-16 md:w-20 md:h-20 mb-3">
                            <img alt="Phạm D" className="w-full h-full rounded-full object-cover border-2 border-surface" data-alt="A bright, cheerful portrait of a female university student in a light-mode setting. She looks professional yet approachable. The image is crisp, with high-contrast lighting that highlights her features against a clean, white background, fitting a modern corporate design system." src="https://lh3.googleusercontent.com/aida-public/AB6AXuCe5zR-73Y-9qDuahg8hkVjfOaWIGIXeFZlFQdG-kkjQMgZUZIX0dbI23WdE6DMfDTnvn2qEVSNR3kw_MCdlMMmOc0nvFTKHJYUsawT3KrASHVMtCgIznZEi2oZ-bY8bEV_NctaPzbIqsykrFbNECq8g5nfL6bMehPh0b09143d_265wRfzpfpvSo14JfGGB0xhk7gAf2u-qfDvVBmuuNiNhIt1mqStxhyYpSkOkQXSUjTParejBhc5Bg" />
                            <span className="absolute -bottom-2 left-1/2 -translate-x-1/2 bg-secondary text-on-secondary font-label-sm text-label-sm px-2 py-0.5 rounded-sm text-[10px] whitespace-nowrap">CTV</span>
                        </div>
                        <h4 className="font-label-md text-label-md text-on-surface font-semibold truncate w-full">Phạm D</h4>
                        <p className="font-body-md text-body-md text-on-surface-variant text-xs mb-2">Ban Truyền thông</p>
                        <p className="font-body-md text-body-md text-on-surface-variant text-xs line-clamp-2 opacity-80">Designer nhiệt huyết với các ấn phẩm sáng tạo.</p>
                    </div>
                    {/* Member Card 2 */}
                    <div className="glass-card rounded-[12px] p-4 flex flex-col items-center text-center">
                        <div className="relative w-16 h-16 md:w-20 md:h-20 mb-3">
                            <img alt="Hoàng E" className="w-full h-full rounded-full object-cover border-2 border-surface" data-alt="A portrait of a young male student in a bright, modern academic environment. The lighting is high-key and clean, with soft shadows. He is dressed smartly, embodying the energy of a student governance member. The overall aesthetic is light, crisp, and professional." src="https://lh3.googleusercontent.com/aida-public/AB6AXuD7eTkhU1E89eWeY0gGBwXiua9vV0GJtb0L57ZM4v42qAaN64zT5WYT4Yp0Dkuv8xjjwPU-d9Ae8C_piZkDcXWd8JOOJDaQ9lWe32xo0TZYnMPhAlxWtdcLQs6eionqwIsZ9BqxC6-axaqAS4SJbC_ih5gfFU6mdogQtYZoJDWd2MTnn-FJdjiwtPvX93jEXZIbnxOWhqLi_l7C2Da1LWmxevdHfa1CP20hxG1WftvY7dPJaDxXajq0Jw" />
                            <span className="absolute -bottom-2 left-1/2 -translate-x-1/2 bg-primary text-on-primary font-label-sm text-label-sm px-2 py-0.5 rounded-sm text-[10px] whitespace-nowrap">Sinh viên</span>
                        </div>
                        <h4 className="font-label-md text-label-md text-on-surface font-semibold truncate w-full">Hoàng E</h4>
                        <p className="font-body-md text-body-md text-on-surface-variant text-xs mb-2">Ban Phong trào</p>
                        <p className="font-body-md text-body-md text-on-surface-variant text-xs line-clamp-2 opacity-80">Chuyên viên tổ chức sự kiện năng động.</p>
                    </div>
                    {/* Member Card 3 */}
                    <div className="glass-card rounded-[12px] p-4 flex flex-col items-center text-center">
                        <div className="relative w-16 h-16 md:w-20 md:h-20 mb-3">
                            <img alt="Vũ F" className="w-full h-full rounded-full object-cover border-2 border-surface" data-alt="A bright, professional headshot of a female university student leader. She is positioned against a clean, light-colored backdrop with soft, even lighting that emphasizes her approachable and capable expression. The aesthetic aligns with a modern, glassmorphic UI design system." src="https://lh3.googleusercontent.com/aida-public/AB6AXuAtID6posDA_OtddhlWfDcwGRY4ay0PpO8KHwvnALIR-g9qe9MoiY-7Q2J8pwvJisiYOTl-yP3DU3GdwHvKyuRY6j0EGzo4-sb-UoFn3qMbpGg9pBKDbeTJdbVIXgjNRT5OuyVQIIhCIzxhduay2BntSG6xQKT3EVNOpVFVtKjmP2JhuDdN58FHEmH-zBXahAWNYddl3lJBClSh_beVtGQ4_rBBoHCEqaccNMTCbSnw4aqH9UO6lmZxig" />
                            <span className="absolute -bottom-2 left-1/2 -translate-x-1/2 bg-secondary text-on-secondary font-label-sm text-label-sm px-2 py-0.5 rounded-sm text-[10px] whitespace-nowrap">CTV</span>
                        </div>
                        <h4 className="font-label-md text-label-md text-on-surface font-semibold truncate w-full">Vũ F</h4>
                        <p className="font-body-md text-body-md text-on-surface-variant text-xs mb-2">Ban Học tập</p>
                        <p className="font-body-md text-body-md text-on-surface-variant text-xs line-clamp-2 opacity-80">Hỗ trợ các hoạt động NCKH của sinh viên.</p>
                    </div>
                </div>
            </main>
            {/* BottomNavBar (Mobile Only) */}
            <nav className="md:hidden fixed bottom-0 left-0 w-full flex justify-around items-end pb-4 px-6 bg-surface/80 dark:bg-surface-container/80 backdrop-blur-xl border-t border-white/20 shadow-[0_-4px_16px_rgba(0,0,0,0.05)] z-50 rounded-t-xl">
                <a className="flex flex-col items-center justify-center text-on-surface-variant p-2 active:bg-primary-container/30 transition-transform" href="#">
                    <span className="material-symbols-outlined" data-icon="home">home</span>
                    <span className="font-label-sm-mobile text-label-sm-mobile mt-1">Trang chủ</span>
                </a>
                <a className="flex flex-col items-center justify-center text-on-surface-variant p-2 active:bg-primary-container/30 transition-transform" href="#">
                    <span className="material-symbols-outlined" data-icon="calendar_today">calendar_today</span>
                    <span className="font-label-sm-mobile text-label-sm-mobile mt-1">Sự kiện</span>
                </a>
                <a className="flex flex-col items-center justify-center bg-primary text-on-primary rounded-full p-2 w-12 h-12 mb-4 shadow-md scale-90 duration-150" href="#">
                    <span className="material-symbols-outlined" data-icon="groups">groups</span>
                    {/* No label text here for active state based on provided BottomNavBar style logic, though the JSON shows a different active style. Adapting to fit semantic 'Quản lý đoàn viên' equivalent */}
                </a>
                <a className="flex flex-col items-center justify-center text-on-surface-variant p-2 active:bg-primary-container/30 transition-transform" href="#">
                    <span className="material-symbols-outlined" data-icon="notifications">notifications</span>
                    <span className="font-label-sm-mobile text-label-sm-mobile mt-1">Thông báo</span>
                </a>
            </nav>

        </div>
    );
}
