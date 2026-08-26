import React from 'react';
import { useNavigate } from 'react-router-dom';
import SideNavBar from '../components/SideNavBar';
import TopNavBar from '../components/TopNavBar';

export default function HomePage() {
    const navigate = useNavigate();

    return (
        <div className="bg-background text-on-background font-body-md text-body-md h-screen overflow-hidden flex selection:bg-primary-container selection:text-on-primary-container">

            {/* SideNavBar (Desktop) */}
            <SideNavBar activeTab="home" />
            {/* Main Content Wrapper */}
            <div className="flex-1 flex flex-col h-full md:ml-72 w-full relative z-10">
                {/* TopNavBar */}
                <TopNavBar />
                {/* Scrollable Canvas */}
                <main className="flex-1 overflow-y-auto w-full p-4 md:p-8">
                    <div className="max-w-[1200px] mx-auto flex flex-col gap-section-gap pb-24 md:pb-8">
                        {/* Hero Section */}
                        <section className="w-full relative rounded-2xl overflow-hidden glass-card min-h-[400px] flex items-center p-8 md:p-12">
                            {/* Background Image Overlay */}
                            <div className="absolute inset-0 z-0">
                                <img className="w-full h-full object-cover opacity-20" data-alt="A highly detailed, vibrant digital illustration of a spring volunteer campaign poster. The scene features energetic young students planting trees and painting walls in a rural village. The color palette is dominated by bright primary blue, fresh green, and warm sunlight, creating a dynamic, youthful, and inspiring atmosphere in a modern vector art style." src="https://lh3.googleusercontent.com/aida-public/AB6AXuDV1FXZOwVKCka83T_AIZ1ovvdupL7GOAYknZAonzIw6jmK4GRlRL35embZLE1sHEDfUB5QPVH_ZFhRsdiQMBUpMyEyGWXw5wqk-I_E3g0s4QH7GINBi6GVcFgVPb5imyN2rXRDsEXE39YWu4Y93ITTLIMaWMSO9wCB_u4y2uH2RYzWLFTaQMOmrvsD_qz93J4GqKK8M2jfxU6Mu3z07n82wnkLAO7nD3nMAeFpNlPme6Z82MnZB1Z12g" />
                                <div className="absolute inset-0 bg-gradient-to-r from-surface via-surface/80 to-transparent"></div>
                            </div>
                            <div className="relative z-10 max-w-2xl flex flex-col gap-6">
                                <div className="inline-flex items-center gap-2 px-3 py-1 bg-primary/10 text-primary rounded-full font-label-sm text-label-sm w-fit border border-primary/20">
                                    <span className="material-symbols-outlined text-[16px]">campaign</span>
                                    Chiến dịch trọng điểm
                                </div>
                                <h2 className="font-display-lg text-display-lg text-on-primary-fixed">Chiến dịch Xuân Tình Nguyện 2024</h2>
                                <p className="font-body-lg text-body-lg text-on-surface-variant">Hành trình mang mùa xuân ấm áp đến với mọi miền tổ quốc. Hãy cùng Đoàn - Hội Khoa tạo nên những kỷ niệm khó quên trong thanh xuân của bạn.</p>
                                <div className="flex items-center gap-4 mt-2">
                                    <button className="px-6 py-3 bg-primary text-on-primary rounded-xl font-label-md text-label-md hover:bg-surface-tint transition-all shadow-md shadow-primary/20 hover:scale-[1.02]">
                                        Đăng ký ngay
                                    </button>
                                    <button className="px-6 py-3 bg-transparent text-primary border border-primary rounded-xl font-label-md text-label-md hover:bg-primary/5 transition-all">
                                        Xem chi tiết
                                    </button>
                                </div>
                            </div>
                        </section>
                        {/* Sự kiện đang diễn ra */}
                        <section className="w-full flex flex-col gap-6">
                            <div className="flex items-center justify-between">
                                <h3 className="font-headline-lg text-headline-lg text-on-surface">Sự kiện đang diễn ra</h3>
                                <a className="text-primary font-label-md text-label-md hover:underline flex items-center gap-1" href="#">Xem tất cả <span className="material-symbols-outlined text-[18px]">arrow_forward</span></a>
                            </div>
                            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                                {/* Card 1 */}
                                <div className="glass-card rounded-2xl overflow-hidden flex flex-col group hover:-translate-y-1 transition-transform duration-300">
                                    <div className="h-48 relative overflow-hidden">
                                        <img className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" data-alt="A vivid photograph of a crowded university auditorium during a youth leadership seminar. The stage is brightly lit with modern LED panels displaying a tech-themed presentation. The audience of students is engaged, capturing the energetic and academic mood of the event." src="https://lh3.googleusercontent.com/aida-public/AB6AXuD2QPKIu9N1t3kZfaAHHYRRoPvfW80LhNeTIHI9eX6Y7flDV_f5vyWndcEFRHE20i_BvIhstA39qh1lkUzzmZk-noOf_XHsAyEGZxVKKlYSiWwnKSdOdof9tnlVZ8qSLQ3N6uEOmE0k1BjxKyZPZ15Gb3_EV6y2uKEXkSCHHbQouDXZiPY_z-lgqvWYCdaNwYqDqTZLztSR2tJPjK3Z2iEk1EbsBGMJC7qQinO7Y7J7QORdhiaSn-A9BA" />
                                        <div className="absolute top-4 left-4 px-2 py-1 bg-blue-500/15 text-blue-700 backdrop-blur-md rounded border border-blue-500/30 font-label-sm text-label-sm font-semibold">Sinh viên</div>
                                    </div>
                                    <div className="p-6 flex flex-col gap-4 flex-1">
                                        <h4 className="font-headline-md text-headline-md text-on-surface line-clamp-2">Hội thảo Kỹ năng Lãnh đạo Thanh niên thời đại số</h4>
                                        <div className="flex items-center gap-2 text-on-surface-variant font-label-sm text-label-sm">
                                            <span className="material-symbols-outlined text-[16px]">calendar_today</span>
                                            15/10/2023 - 20/10/2023
                                        </div>
                                        <div className="mt-auto flex flex-col gap-2">
                                            <div className="flex justify-between font-label-sm text-label-sm text-on-surface-variant">
                                                <span>Tiến độ đăng ký</span>
                                                <span className="text-primary font-bold">85%</span>
                                            </div>
                                            <div className="h-2 w-full bg-surface-variant rounded-full overflow-hidden">
                                                <div className="h-full bg-primary rounded-full w-[85%]"></div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                {/* Card 2 */}
                                <div className="glass-card rounded-2xl overflow-hidden flex flex-col group hover:-translate-y-1 transition-transform duration-300">
                                    <div className="h-48 relative overflow-hidden">
                                        <img className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" data-alt="An engaging close-up shot of hands working on a collaborative tech project, surrounded by laptops and sticky notes on a bright wooden table. The lighting is natural and bright, conveying a sense of teamwork, innovation, and academic focus within a modern university lab setting." src="https://lh3.googleusercontent.com/aida-public/AB6AXuC4VdEmWoeBccHS0TaGp9eOFrnCbDILX-SGB3YV7KL2x3YKMuJhaXcvbPoL4dp5YmnTchpgUur2y853MUa3XIuHKxc2qHbV_OtndfkkmcuRrI35QMf83452lh8MWESnPeTvu5LqwBJ6QFSPInDrvme3WwkKXrs5kr-xumt1KJLwpC_LZnkoYd09t7qRsH6ddt9FjHB7vqdot-UhylTQUAcaNnc_TluAtN8VXk6kICoom95FidhqgKa_kg" />
                                        <div className="absolute top-4 left-4 px-2 py-1 bg-green-500/15 text-green-700 backdrop-blur-md rounded border border-green-500/30 font-label-sm text-label-sm font-semibold">CTV</div>
                                    </div>
                                    <div className="p-6 flex flex-col gap-4 flex-1">
                                        <h4 className="font-headline-md text-headline-md text-on-surface line-clamp-2">Cuộc thi Ý tưởng Sáng tạo Khởi nghiệp Sinh viên</h4>
                                        <div className="flex items-center gap-2 text-on-surface-variant font-label-sm text-label-sm">
                                            <span className="material-symbols-outlined text-[16px]">calendar_today</span>
                                            01/11/2023 - Vòng Sơ khảo
                                        </div>
                                        <div className="mt-auto flex flex-col gap-2">
                                            <div className="flex justify-between font-label-sm text-label-sm text-on-surface-variant">
                                                <span>Tiến độ nộp bài</span>
                                                <span className="text-primary font-bold">40%</span>
                                            </div>
                                            <div className="h-2 w-full bg-surface-variant rounded-full overflow-hidden">
                                                <div className="h-full bg-primary rounded-full w-[40%]"></div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </section>
                        {/* Sự kiện sắp tới & Tin tức (Bento Grid Layout) */}
                        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                            {/* Sự kiện sắp tới (Takes 1 column) */}
                            <section className="flex flex-col gap-6 lg:col-span-1">
                                <h3 className="font-headline-md text-headline-md text-on-surface border-b border-outline-variant/30 pb-2">Sự kiện sắp tới</h3>
                                <div className="flex flex-col gap-4">
                                    {/* List Item 1 */}
                                    <div className="glass-card p-4 rounded-xl flex items-center gap-4 hover:bg-surface-container-low transition-colors cursor-pointer">
                                        <div className="w-16 h-16 rounded-lg bg-primary-container/30 flex flex-col items-center justify-center text-primary border border-primary/20">
                                            <span className="font-bold text-[18px] leading-tight">25</span>
                                            <span className="font-label-sm text-[10px]">Tháng 11</span>
                                        </div>
                                        <div className="flex-1">
                                            <h5 className="font-label-md text-label-md text-on-surface line-clamp-1">Đại hội Đại biểu Đoàn khoa</h5>
                                            <div className="flex gap-2 mt-2">
                                                <div className="px-2 py-0.5 bg-error-container text-on-error-container rounded text-[10px] font-bold flex items-center gap-1">
                                                    <span className="material-symbols-outlined text-[12px]">timer</span>
                                                    Còn 5 ngày
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    {/* List Item 2 */}
                                    <div className="glass-card p-4 rounded-xl flex items-center gap-4 hover:bg-surface-container-low transition-colors cursor-pointer">
                                        <div className="w-16 h-16 rounded-lg bg-surface-variant flex flex-col items-center justify-center text-on-surface-variant border border-outline-variant/30">
                                            <span className="font-bold text-[18px] leading-tight">02</span>
                                            <span className="font-label-sm text-[10px]">Tháng 12</span>
                                        </div>
                                        <div className="flex-1">
                                            <h5 className="font-label-md text-label-md text-on-surface line-clamp-1">Gala Chào Tân Sinh Viên</h5>
                                            <div className="flex gap-2 mt-2">
                                                <div className="px-2 py-0.5 bg-surface-container-highest text-on-surface-variant rounded text-[10px] font-bold flex items-center gap-1">
                                                    <span className="material-symbols-outlined text-[12px]">timer</span>
                                                    Còn 12 ngày
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </section>
                            {/* Tin tức nổi bật (Takes 2 columns) */}
                            <section className="flex flex-col gap-6 lg:col-span-2">
                                <div className="flex items-center justify-between border-b border-outline-variant/30 pb-2">
                                    <h3 className="font-headline-md text-headline-md text-on-surface">Tin tức nổi bật</h3>
                                    <a className="text-primary font-label-md text-label-md hover:underline" href="#">Xem thêm</a>
                                </div>
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                    {/* Large News Item */}
                                    <div className="md:col-span-2 glass-card rounded-xl p-4 flex flex-col sm:flex-row gap-4 items-center hover:shadow-md transition-shadow cursor-pointer">
                                        <div className="w-full sm:w-48 h-32 rounded-lg overflow-hidden shrink-0">
                                            <img className="w-full h-full object-cover" data-alt="A bright, wide-angle photograph of a university campus during a vibrant student festival. Colorful banners hang between modern buildings, and groups of students are walking and chatting. The mood is lively and optimistic, perfectly capturing the essence of student life in clear daylight." src="https://lh3.googleusercontent.com/aida-public/AB6AXuBFP66KY3Dwn8T4kuXdvi3w_i0hD6Bn1W6FijB3dW7fP5SNcpd9hskfZnDjKjzg1vTqAqHm3sb6fvN3UwicZcMgLR5-52H7cBvI-9t1WnxtvmDmmXQ4Eth9qijmniAst5pRXnVDxfoFcMB0LcKu48-Xrm-_jLmI0zOMsf5auG78QOK5ET1_5SmYpIUC1GiBWl4u7GygIVZ9M-1Tqq5hMjENtlvuFkBs2qMh1dnVgez0Ln30UobqCZNJRQ" />
                                        </div>
                                        <div className="flex flex-col gap-2">
                                            <span className="text-primary font-label-sm text-label-sm">Hoạt động Đoàn</span>
                                            <h4 className="font-headline-md text-headline-md text-on-surface hover:text-primary transition-colors">Tổng kết công tác Đoàn và phong trào thanh niên năm học 2022-2023</h4>
                                            <p className="font-body-md text-body-md text-on-surface-variant line-clamp-2">Sáng ngày 10/10, tại Hội trường lớn, BCH Đoàn Khoa đã tổ chức thành công lễ tổng kết và vinh danh các cá nhân xuất sắc...</p>
                                        </div>
                                    </div>
                                    {/* Small News Item 1 */}
                                    <div className="glass-card rounded-xl p-4 flex flex-col gap-3 hover:shadow-md transition-shadow cursor-pointer">
                                        <span className="text-secondary font-label-sm text-label-sm">Thông báo</span>
                                        <h5 className="font-label-md text-label-md text-on-surface">Danh sách sinh viên nhận học bổng "Thắp sáng ước mơ" kỳ I</h5>
                                    </div>
                                    {/* Small News Item 2 */}
                                    <div className="glass-card rounded-xl p-4 flex flex-col gap-3 hover:shadow-md transition-shadow cursor-pointer">
                                        <span className="text-tertiary font-label-sm text-label-sm">Tuyển nhân sự</span>
                                        <h5 className="font-label-md text-label-md text-on-surface">Mở đơn tuyển Cộng tác viên các Ban chuyên môn nhiệm kỳ mới</h5>
                                    </div>
                                </div>
                            </section>
                        </div>
                    </div>
                </main>
            </div>
            {/* BottomNavBar (Mobile) */}
            <nav className="md:hidden fixed bottom-0 w-full z-50 rounded-t-xl bg-surface/80 dark:bg-surface-container/80 backdrop-blur-xl border-t border-white/20 shadow-[0_-4px_16px_rgba(0,0,0,0.05)] pb-4 px-6 flex justify-around items-end">
                {/* Active: Trang chủ */}
                <a className="flex flex-col items-center justify-center bg-primary text-on-primary rounded-full p-2 w-12 h-12 mb-4 shadow-md scale-90 duration-150 relative" href="#">
                    <span className="material-symbols-outlined" style={{ fontVariationSettings: "'FILL' 1" }}>home</span>
                    <span className="font-label-sm-mobile text-label-sm-mobile absolute -bottom-5 text-primary whitespace-nowrap">Trang chủ</span>
                </a>
                <a className="flex flex-col items-center justify-center text-on-surface-variant p-2 hover:bg-primary-container/30 rounded-lg" href="#">
                    <span className="material-symbols-outlined">calendar_today</span>
                    <span className="font-label-sm-mobile text-label-sm-mobile mt-1">Sự kiện</span>
                </a>
                <a className="flex flex-col items-center justify-center text-on-surface-variant p-2 hover:bg-primary-container/30 rounded-lg" href="#">
                    <span className="material-symbols-outlined">notifications</span>
                    <span className="font-label-sm-mobile text-label-sm-mobile mt-1">Thông báo</span>
                </a>
                <a className="flex flex-col items-center justify-center text-on-surface-variant p-2 hover:bg-primary-container/30 rounded-lg" href="#">
                    <span className="material-symbols-outlined">person</span>
                    <span className="font-label-sm-mobile text-label-sm-mobile mt-1">Cá nhân</span>
                </a>
            </nav>

        </div>
    );
}
