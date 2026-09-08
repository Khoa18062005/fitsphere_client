import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useSidebar } from '../hooks/useSidebar';
import { organizationService } from '../services/organizationService';
import SideNavBar from '../components/SideNavBar';
import TopNavBar from '../components/TopNavBar';
import logo from '../assets/logo.png';

export default function PersonnelPage() {
    const navigate = useNavigate();
    const { isCollapsed } = useSidebar();
    const [units, setUnits] = useState([]);
    const [members, setMembers] = useState([]);
    const [loading, setLoading] = useState(true);
    const [currentSlide, setCurrentSlide] = useState(0);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const [unitsData, membersData] = await Promise.all([
                    organizationService.getAllUnits(),
                    organizationService.getMembers()
                ]);

                setUnits(unitsData);
                setMembers(membersData);
            } catch (error) {
                console.error("Failed to fetch organization data", error);
            } finally {
                setLoading(false);
            }
        };
        fetchData();
    }, []);

    // Carousel logic
    useEffect(() => {
        const timer = setInterval(() => {
            setCurrentSlide((prev) => (prev + 1) % SLIDES.length);
        }, 5000);
        return () => clearInterval(timer);
    }, []);

    const SLIDES = [
        {
            id: 1,
            tag: 'Chiến dịch trọng điểm',
            tagIcon: 'campaign',
            title: 'Chiến dịch Mùa Hè Xanh 2024',
            description: 'Phát huy tinh thần xung kích, tình nguyện của tuổi trẻ Khoa CNTT trong việc tham gia phát triển kinh tế - xã hội, giải quyết các vấn đề dư luận quan tâm.',
            image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDV1FXZOwVKCka83T_AIZ1ovvdupL7GOAYknZAonzIw6jmK4GRlRL35embZLE1sHEDfUB5QPVH_ZFhRsdiQMBUpMyEyGWXw5wqk-I_E3g0s4QH7GINBi6GVcFgVPb5imyN2rXRDsEXE39YWu4Y93ITTLIMaWMSO9wCB_u4y2uH2RYzWLFTaQMOmrvsD_qz93J4GqKK8M2jfxU6Mu3z07n82wnkLAO7nD3nMAeFpNlPme6Z82MnZB1Z12g',
            primaryAction: 'Đăng ký ngay',
            secondaryAction: 'Xem chi tiết'
        },
        {
            id: 2,
            tag: 'Hoạt động chào mừng',
            tagIcon: 'celebration',
            title: 'Gala Chào Tân Sinh Viên Khóa 2024',
            description: 'Đêm hội ngộ bùng nổ cảm xúc, chào đón các bạn tân sinh viên chính thức gia nhập ngôi nhà chung FITSphere. Đừng bỏ lỡ những tiết mục đặc sắc nhất!',
            image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuD2QPKIu9N1t3kZfaAHHYRRoPvfW80LhNeTIHI9eX6Y7flDV_f5vyWndcEFRHE20i_BvIhstA39qh1lkUzzmZk-noOf_XHsAyEGZxVKKlYSiWwnKSdOdof9tnlVZ8qSLQ3N6uEOmE0k1BjxKyZPZ15Gb3_EV6y2uKEXkSCHHbQouDXZiPY_z-lgqvWYCdaNwYqDqTZLztSR2tJPjK3Z2iEk1EbsBGMJC7qQinO7Y7J7QORdhiaSn-A9BA',
            primaryAction: 'Nhận vé ngay',
            secondaryAction: 'Thông tin'
        }
    ];

    // Helper: Lấy danh sách thành viên của một unit
    const getUnitMembers = (unitId) => {
        return members
            .filter(m => m.positions && m.positions.some(p => p.unitId === unitId))
            .map(m => {
                const position = m.positions.find(p => p.unitId === unitId);
                return { ...m, currentPosition: position };
            })
            .sort((a, b) => (a.currentPosition.positionPriority || 99) - (b.currentPosition.positionPriority || 99));
    };

    // Helper: Tạo icon đại diện cho đơn vị chưa có nhân sự
    const getUnitIcon = (unitName) => {
        const icons = ['campaign', 'event_available', 'folder_open', 'directions_run', 'menu_book', 'science', 'volunteer_activism', 'model_training'];
        const hash = (unitName || '').split('').reduce((acc, char) => acc + char.charCodeAt(0), 0);
        return icons[hash % icons.length];
    };

    // Chuẩn bị dữ liệu các khối hiển thị từ Database
    const doanKhoaUnit = units.find(u => u.unitType === 'UNION' || u.id === 1);
    const hoiSVUnit = units.find(u => u.unitType === 'ASSOCIATION' || u.id === 2);

    // Thành viên Đoàn khoa tách thành 2 cấp: Thường vụ & Ủy viên BCH
    const doanKhoaMembers = doanKhoaUnit ? getUnitMembers(doanKhoaUnit.id) : [];
    const thuongVuDoan = doanKhoaMembers.filter(m => m.currentPosition.positionPriority <= 3);
    const uyVienDoan = doanKhoaMembers.filter(m => m.currentPosition.positionPriority > 3);

    // Thành viên Hội SV tách thành 2 cấp: Thường trực LCH & Ủy viên BCH LCH
    const hoiSVMembers = hoiSVUnit ? getUnitMembers(hoiSVUnit.id) : [];
    const thuongTrucHoi = hoiSVMembers.filter(m => m.currentPosition.positionPriority <= 2);
    const uyVienHoi = hoiSVMembers.filter(m => m.currentPosition.positionPriority > 2);

    // Các Ban chuyên môn (parentId = 3)
    const departments = units.filter(u => u.unitType === 'DEPARTMENT' && u.parentId === 3);

    // Các Mảng chuyên môn (parentId = 4)
    const areas = units.filter(u => u.unitType === 'AREA' && u.parentId === 4);

    // Render 1 Member Card
    const renderMemberCard = (member) => {
        return (
            <div 
                key={member.userId} 
                onClick={() => navigate(`/user-profile/${member.userId}`, { state: { member } })}
                className="flex-none w-72 bg-surface-container-lowest rounded-2xl p-4 flex items-center gap-4 border border-primary/20 shadow-sm hover:shadow-md hover:-translate-y-0.5 transition-all duration-300 cursor-pointer group relative"
            >
                <div className="w-14 h-14 rounded-full bg-surface-variant overflow-hidden shrink-0 border-2 border-primary/20 group-hover:border-primary transition-colors shadow-sm">
                    <img 
                        alt={member.fullName} 
                        className="w-full h-full object-cover" 
                        src={member.avatarUrl || "https://ui-avatars.com/api/?name=" + encodeURIComponent(member.fullName)} 
                    />
                </div>
                <div className="truncate flex-1">
                    <h5 className="font-label-md text-label-md text-on-surface truncate font-bold">{member.fullName}</h5>
                    <p className="text-[12px] text-primary font-semibold truncate mt-0.5">
                        {member.currentPosition.positionName}
                    </p>
                    {member.studentId && (
                        <p className="text-[11px] text-on-surface-variant font-mono mt-0.5">
                            MSSV: {member.studentId}
                        </p>
                    )}
                </div>
            </div>
        );
    };

    // Render Empty Member Card
    const renderEmptyCard = (unitName) => (
        <div className="flex-none w-72 bg-surface-container-lowest rounded-2xl p-4 flex items-center gap-4 border border-primary/20 shadow-sm transition-all cursor-pointer group">
            <div className="w-14 h-14 rounded-full flex items-center justify-center shrink-0 border-2 border-primary/20 bg-primary/5 group-hover:border-primary transition-colors">
                <span className="material-symbols-outlined text-primary">{getUnitIcon(unitName)}</span>
            </div>
            <div className="truncate">
                <h5 className="font-label-md text-label-md text-on-surface truncate font-medium">Nhân sự {unitName}</h5>
                <span className="inline-block mt-0.5 text-[12px] text-outline truncate font-medium">
                    Đang cập nhật
                </span>
            </div>
        </div>
    );

    // Render a Sub-section with a title and horizontal scrollable list of members
    const renderSubSection = (title, memberList, fallbackUnitName) => (
        <div className="flex flex-col gap-3 min-w-0 w-full">
            <div className="flex items-center border-b border-outline-variant/30 pb-2">
                <h4 className="font-headline-md text-[17px] md:text-[19px] font-bold text-on-surface tracking-tight border-l-[4px] border-primary pl-3 py-1">
                    {title}
                </h4>
            </div>
            
            <div className="flex gap-4 overflow-x-auto pb-4 pr-4 scrollbar-hide min-w-0 w-full">
                {memberList.length > 0 ? (
                    memberList.map(m => renderMemberCard(m))
                ) : (
                    renderEmptyCard(fallbackUnitName || title)
                )}
            </div>
        </div>
    );

    return (
        <div className="bg-background text-on-background font-body-md min-h-screen overflow-hidden flex">
            {/* SideNavBar (Desktop) */}
            <SideNavBar activeTab="personnel" />

            {/* Main Content Wrapper */}
            <div className={`flex flex-col h-full relative z-10 transition-all duration-300 ${isCollapsed ? 'md:ml-20 w-full md:w-[calc(100%-5rem)]' : 'md:ml-72 w-full md:w-[calc(100%-18rem)]'}`}>
                <TopNavBar />

                {/* Main Content */}
                <main className="flex-1 overflow-y-auto overflow-x-hidden scrollbar-hide w-full p-4 md:pl-8 md:pr-7 md:py-8 min-w-0">
                    <div className="w-full mx-auto flex flex-col gap-6 pb-24 md:pb-8 min-w-0 w-full">
                
                        <style>{`
                            @keyframes gradient-x {
                                0%, 100% { background-size: 200% 200%; background-position: left center; }
                                50% { background-size: 200% 200%; background-position: right center; }
                            }
                            .animate-gradient-x { animation: gradient-x 15s ease infinite; }
                            .scrollbar-hide::-webkit-scrollbar { display: none; }
                            .scrollbar-hide { -ms-overflow-style: none; scrollbar-width: none; }
                        `}</style>

                        {/* Hero Section Carousel */}
                        <section className="w-full relative rounded-2xl overflow-hidden glass-card min-h-[400px] flex items-center justify-center mt-4 md:mt-0 transition-all duration-500">
                            <button className="absolute top-4 right-4 z-30 flex items-center gap-2 bg-primary hover:bg-primary/90 text-white px-4 py-2 rounded-lg shadow-sm hover:shadow transition-all font-label-md font-bold cursor-pointer">
                                <span className="material-symbols-outlined text-[18px]">edit</span>
                                <span className="hidden sm:inline">Điều chỉnh</span>
                            </button>

                            {SLIDES.map((slide, index) => (
                                <div key={slide.id} className={`absolute inset-0 w-full h-full flex items-center transition-opacity duration-1000 ${index === currentSlide ? 'opacity-100 z-0' : 'opacity-0 z-0'}`}>
                                    <div className="absolute inset-0 w-full h-full bg-surface/40">
                                        <img className="w-full h-full object-cover opacity-50 mix-blend-overlay" src={slide.image} alt={slide.title} />
                                        <div className="absolute inset-0 bg-gradient-to-t from-primary/30 via-transparent to-transparent"></div>
                                    </div>
                                </div>
                            ))}

                            {/* Static Text Overlay */}
                            <div className="relative z-10 p-4 md:p-12 w-full max-w-[1000px] flex flex-col items-center justify-center gap-3 text-center mx-auto">
                                <img src={logo} alt="Logo Khoa" className="h-24 md:h-28 w-auto drop-shadow-xl mb-1 object-contain" />
                                <h2 className="font-display-lg text-[22px] md:text-[34px] lg:text-[38px] md:whitespace-nowrap leading-tight font-black uppercase text-transparent bg-clip-text bg-gradient-to-r from-blue-700 from-[35%] via-red-600 via-[50%] to-blue-700 to-[65%] animate-gradient-x drop-shadow-md">
                                    Đoàn thanh niên - Hội sinh viên Khoa CNTT
                                </h2>
                                <p className="font-body-lg text-body-lg md:text-[18px] text-primary font-bold mt-1 drop-shadow-sm uppercase tracking-wide">
                                    TIÊN PHONG, BẢN LĨNH, SÁNG TẠO, HỘI NHẬP
                                </p>
                            </div>

                            {/* Carousel Indicators */}
                            <div className="absolute bottom-6 left-1/2 -translate-x-1/2 z-20 flex gap-2">
                                {SLIDES.map((_, index) => (
                                    <button 
                                        key={index} 
                                        onClick={() => setCurrentSlide(index)}
                                        className={`h-2 rounded-full transition-all duration-300 ${index === currentSlide ? 'w-8 bg-primary' : 'w-2 bg-outline-variant/50 hover:bg-primary/50'}`}
                                    />
                                ))}
                            </div>
                        </section>

                        {loading ? (
                            <div className="flex flex-col items-center justify-center p-12 gap-3">
                                <div className="w-8 h-8 border-4 border-primary border-t-transparent rounded-full animate-spin"></div>
                                <span className="font-label-lg text-primary font-medium">Đang tải dữ liệu tổ chức từ hệ thống...</span>
                            </div>
                        ) : (
                            <div className="flex flex-col gap-8 min-w-0 w-full">

                                {/* KHỐI 1: ĐOÀN THANH NIÊN KHOA CNTT */}
                                <section className="flex flex-col gap-4 min-w-0 w-full">
                                    <div className="flex items-stretch rounded-xl overflow-hidden shadow-sm bg-primary/5">
                                        <div className="w-16 md:w-20 shrink-0 flex items-center justify-center text-white bg-primary">
                                            <span className="material-symbols-outlined text-[32px]">domain</span>
                                        </div>
                                        <h3 className="flex-1 flex items-center px-4 md:px-6 py-3.5 font-headline-lg text-[22px] md:text-[26px] font-black tracking-wide text-primary">
                                            Đoàn thanh niên khoa CNTT
                                        </h3>
                                    </div>
                                    <div className="flex flex-col gap-4 min-w-0 w-full">
                                        {renderSubSection('Ban Thường vụ Đoàn khoa', thuongVuDoan, 'Thường vụ Đoàn khoa')}
                                        {renderSubSection('Ủy viên Ban Chấp hành Đoàn khoa', uyVienDoan, 'Ủy viên BCH Đoàn khoa')}
                                    </div>
                                </section>

                                {/* KHỐI 2: HỘI SINH VIÊN KHOA CNTT */}
                                <section className="flex flex-col gap-4 min-w-0 w-full">
                                    <div className="flex items-stretch rounded-xl overflow-hidden shadow-sm bg-primary/5">
                                        <div className="w-16 md:w-20 shrink-0 flex items-center justify-center text-white bg-primary">
                                            <span className="material-symbols-outlined text-[32px]">groups</span>
                                        </div>
                                        <h3 className="flex-1 flex items-center px-4 md:px-6 py-3.5 font-headline-lg text-[22px] md:text-[26px] font-black tracking-wide text-primary">
                                            Hội sinh viên khoa CNTT
                                        </h3>
                                    </div>
                                    <div className="flex flex-col gap-4 min-w-0 w-full">
                                        {renderSubSection('Thường trực Liên chi Hội Khoa', thuongTrucHoi, 'Thường trực Hội')}
                                        {renderSubSection('Ủy viên Ban Chấp hành Liên chi Hội Khoa', uyVienHoi, 'Ủy viên BCH Hội')}
                                    </div>
                                </section>

                                {/* KHỐI 3: CÁC BAN CHUYÊN MÔN */}
                                {departments.map(dept => {
                                    const deptMembers = getUnitMembers(dept.id);
                                    // Tìm các tổ trực thuộc ban này (parentId = dept.id)
                                    const teams = units.filter(u => u.unitType === 'TEAM' && u.parentId === dept.id);

                                    return (
                                        <section key={dept.id} className="flex flex-col gap-4 min-w-0 w-full">
                                            <div className="flex items-stretch rounded-xl overflow-hidden shadow-sm bg-primary/5">
                                                <div className="w-16 md:w-20 shrink-0 flex items-center justify-center text-white bg-primary">
                                                    <span className="material-symbols-outlined text-[32px]">folder_special</span>
                                                </div>
                                                <h3 className="flex-1 flex items-center px-4 md:px-6 py-3.5 font-headline-lg text-[22px] md:text-[26px] font-black tracking-wide text-primary">
                                                    {dept.name}
                                                </h3>
                                            </div>
                                            <div className="flex flex-col gap-4 min-w-0 w-full">
                                                {renderSubSection('Thường trực điều hành Ban', deptMembers, dept.name)}
                                                {teams.map(team => {
                                                    const teamMembers = getUnitMembers(team.id);
                                                    return renderSubSection(team.name, teamMembers, team.name);
                                                })}
                                            </div>
                                        </section>
                                    );
                                })}

                                {/* KHỐI 4: CÁC MẢNG CHUYÊN MÔN */}
                                {areas.length > 0 && (
                                    <section className="flex flex-col gap-4 min-w-0 w-full">
                                        <div className="flex items-stretch rounded-xl overflow-hidden shadow-sm bg-primary/5">
                                            <div className="w-16 md:w-20 shrink-0 flex items-center justify-center text-white bg-primary">
                                                <span className="material-symbols-outlined text-[32px]">hub</span>
                                            </div>
                                            <h3 className="flex-1 flex items-center px-4 md:px-6 py-3.5 font-headline-lg text-[22px] md:text-[26px] font-black tracking-wide text-primary">
                                                Các Mảng Chuyên môn
                                            </h3>
                                        </div>
                                        <div className="flex flex-col gap-4 min-w-0 w-full">
                                            {areas.map(area => {
                                                const areaMembers = getUnitMembers(area.id);
                                                return renderSubSection(area.name, areaMembers, area.name);
                                            })}
                                        </div>
                                    </section>
                                )}

                            </div>
                        )}
                    </div>
                </main>
            </div>

            {/* Mobile Bottom NavBar */}
            <nav className="md:hidden fixed bottom-0 w-full z-50 rounded-t-xl bg-surface/80 backdrop-blur-xl border-t border-white/20 shadow-[0_-4px_16px_rgba(0,0,0,0.05)] flex justify-around items-end pb-4 px-6 pt-2">
                <a className="flex flex-col items-center justify-center text-on-surface-variant p-2 w-12 hover:bg-primary-container/30 rounded-lg transition-colors" href="/home">
                    <span className="material-symbols-outlined mb-1">home</span>
                    <span className="font-label-sm-mobile text-[10px]">Trang chủ</span>
                </a>
                <a className="flex flex-col items-center justify-center text-on-surface-variant p-2 w-12 hover:bg-primary-container/30 rounded-lg transition-colors" href="#">
                    <span className="material-symbols-outlined mb-1">calendar_today</span>
                    <span className="font-label-sm-mobile text-[10px]">Sự kiện</span>
                </a>
                <a className="flex flex-col items-center justify-center bg-primary text-on-primary rounded-full p-2 w-12 h-12 mb-2 shadow-md active:scale-90 duration-150" href="/personnel">
                    <span className="material-symbols-outlined" style={{ fontVariationSettings: "'FILL' 1" }}>corporate_fare</span>
                </a>
                <a className="flex flex-col items-center justify-center text-on-surface-variant p-2 w-12 hover:bg-primary-container/30 rounded-lg transition-colors" href="#">
                    <span className="material-symbols-outlined mb-1">notifications</span>
                    <span className="font-label-sm-mobile text-[10px]">Thông báo</span>
                </a>
                <a className="flex flex-col items-center justify-center text-on-surface-variant p-2 w-12 hover:bg-primary-container/30 rounded-lg transition-colors" href="/user-profile">
                    <span className="material-symbols-outlined mb-1">person</span>
                    <span className="font-label-sm-mobile text-[10px]">Cá nhân</span>
                </a>
            </nav>
        </div>
    );
}
