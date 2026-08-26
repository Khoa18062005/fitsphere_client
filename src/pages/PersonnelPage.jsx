import React, { useState, useEffect } from 'react';
import { organizationService } from '../services/organizationService';
import SideNavBar from '../components/SideNavBar';
import TopNavBar from '../components/TopNavBar';
import logo from '../assets/logo.png';

export default function PersonnelPage() {
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

                // Mock/override dữ liệu hiển thị theo yêu cầu UI
                const updatedUnits = unitsData.map(u => {
                    if (u.name === 'Ban Chấp hành Đoàn thanh niên') {
                        return { ...u, name: 'Thường trực Đoàn khoa' };
                    }
                    if (u.name === 'Ban Chấp hành Hội sinh viên' || u.name === 'Hội sinh viên khoa') {
                        return { ...u, name: 'Thường trực Hội sinh viên khoa' };
                    }
                    return u;
                });
                
                // Thêm Unit "Ủy viên BCH Đoàn khoa" nếu chưa có
                if (!updatedUnits.some(u => u.name === 'Ủy viên BCH Đoàn khoa')) {
                    updatedUnits.push({
                        id: 'mock_uy_vien', // Tạo ID giả
                        name: 'Ủy viên BCH Đoàn khoa',
                        unitType: 'UNION',
                        description: 'Ủy viên Ban Chấp hành Đoàn khoa'
                    });
                }

                // Thêm Unit "Thường trực Hội sinh viên khoa" nếu chưa có
                if (!updatedUnits.some(u => u.name === 'Thường trực Hội sinh viên khoa')) {
                    updatedUnits.push({
                        id: 'mock_thuong_truc_hoi',
                        name: 'Thường trực Hội sinh viên khoa',
                        unitType: 'ASSOCIATION',
                        description: 'Thường trực Hội sinh viên khoa'
                    });
                }

                // Thêm Unit "Ủy viên BCH Hội sinh viên khoa" nếu chưa có
                if (!updatedUnits.some(u => u.name === 'Ủy viên BCH Hội sinh viên khoa')) {
                    updatedUnits.push({
                        id: 'mock_uy_vien_hoi',
                        name: 'Ủy viên BCH Hội sinh viên khoa',
                        unitType: 'ASSOCIATION',
                        description: 'Ủy viên Ban Chấp hành Hội sinh viên khoa'
                    });
                }

                // Mock cho các Ban Chuyên môn
                const mockDepts = [
                    'Ban Sự kiện và Truyền thông',
                    'Ban Phát triển phong trào Sinh viên 5 tốt',
                    'Ban Văn phòng',
                    'Ban Văn nghệ'
                ];
                mockDepts.forEach((deptName, idx) => {
                    if (!updatedUnits.some(u => u.name === deptName)) {
                        updatedUnits.push({
                            id: `mock_dept_${idx}`,
                            name: deptName,
                            unitType: 'DEPARTMENT',
                            description: deptName
                        });
                    }
                });

                // Mock cho các Tổ thuộc Ban Sự kiện và Truyền thông
                const mockEventTeams = ['Tổ Truyền thông', 'Tổ Vận hành', 'Tổ Tiếp ứng'];
                mockEventTeams.forEach((teamName, idx) => {
                    if (!updatedUnits.some(u => u.name === teamName)) {
                        updatedUnits.push({
                            id: `mock_event_team_${idx}`,
                            name: teamName,
                            unitType: 'DEPT_TEAM',
                            description: teamName
                        });
                    }
                });

                // Mock cho các Tổ thuộc Ban Văn phòng
                const mockOfficeTeams = ['Tổ Chuyên môn', 'Tổ Quản trị'];
                mockOfficeTeams.forEach((teamName, idx) => {
                    if (!updatedUnits.some(u => u.name === teamName)) {
                        updatedUnits.push({
                            id: `mock_office_team_${idx}`,
                            name: teamName,
                            unitType: 'DEPT_TEAM',
                            description: teamName
                        });
                    }
                });

                // Mock cho các Mảng Chuyên môn
                const mockAreas = [
                    'Mảng Phát triển và Xây dựng Đoàn - Hội',
                    'Mảng Tuyên giáo',
                    'Mảng Học tập và Nghiên cứu khoa học',
                    'Mảng Phong trào',
                    'Mảng Thi đua khen thưởng'
                ];
                mockAreas.forEach((areaName, idx) => {
                    if (!updatedUnits.some(u => u.name === areaName)) {
                        updatedUnits.push({
                            id: `mock_area_${idx}`,
                            name: areaName,
                            unitType: 'AREA',
                            description: areaName
                        });
                    }
                    const memberUnitName = `Thành viên ${areaName}`;
                    if (!updatedUnits.some(u => u.name === memberUnitName)) {
                        updatedUnits.push({
                            id: `mock_area_member_${idx}`,
                            name: memberUnitName,
                            unitType: 'AREA_MEMBER',
                            description: memberUnitName
                        });
                    }
                });

                // Mock 10 Ủy viên BCH Đoàn khoa
                for (let i = 1; i <= 10; i++) {
                    membersData.push({
                        userId: `mock_user_uv_${i}`,
                        fullName: `Đồng chí ${i}`,
                        avatarUrl: `https://ui-avatars.com/api/?name=ĐC+${i}&background=random`,
                        positions: [
                            {
                                unitId: 'mock_uy_vien',
                                positionName: 'Ủy viên',
                                positionPriority: 10 + i
                            }
                        ]
                    });
                }

                setUnits(updatedUnits);
                setMembers(membersData);
            } catch (error) {
                console.error("Failed to fetch data", error);
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
        }, 5000); // Tự động chuyển sau 5 giây
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

    const groupedUnits = {
        UNION: units.filter(u => u.unitType === 'UNION'),
        ASSOCIATION: units.filter(u => u.unitType === 'ASSOCIATION'),
        DEPT_EVENT: units.filter(u => u.name === 'Ban Sự kiện và Truyền thông' || ['Tổ Truyền thông', 'Tổ Vận hành', 'Tổ Tiếp ứng'].includes(u.name)),
        DEPT_SV5T: units.filter(u => u.name === 'Ban Phát triển phong trào Sinh viên 5 tốt'),
        DEPT_OFFICE: units.filter(u => u.name === 'Ban Văn phòng' || ['Tổ Chuyên môn', 'Tổ Quản trị'].includes(u.name)),
        DEPT_CULTURE: units.filter(u => u.name === 'Ban Văn nghệ'),
        AREA_BUILD: units.filter(u => u.name === 'Mảng Phát triển và Xây dựng Đoàn - Hội' || u.name === 'Thành viên Mảng Phát triển và Xây dựng Đoàn - Hội'),
        AREA_PROPAGANDA: units.filter(u => u.name === 'Mảng Tuyên giáo' || u.name === 'Thành viên Mảng Tuyên giáo'),
        AREA_STUDY: units.filter(u => u.name === 'Mảng Học tập và Nghiên cứu khoa học' || u.name === 'Thành viên Mảng Học tập và Nghiên cứu khoa học'),
        AREA_MOVEMENT: units.filter(u => u.name === 'Mảng Phong trào' || u.name === 'Thành viên Mảng Phong trào'),
        AREA_REWARD: units.filter(u => u.name === 'Mảng Thi đua khen thưởng' || u.name === 'Thành viên Mảng Thi đua khen thưởng'),
    };

    const getUnitMembers = (unitId) => {
        return members
            .filter(m => m.positions && m.positions.some(p => p.unitId === unitId))
            .map(m => {
                const position = m.positions.find(p => p.unitId === unitId);
                return { ...m, currentPosition: position };
            })
            .sort((a, b) => a.currentPosition.positionPriority - b.currentPosition.positionPriority);
    };

    const SECTION_CONFIG = {
        UNION: {
            title: 'Đoàn thanh niên khoa CNTT',
            themeClasses: {
                borderL: 'border-primary',
                text: 'text-primary',
                bgSolid: 'bg-primary',
                bgLight: 'bg-primary/5',
                borderAvatar: 'border-primary/20',
                borderHover: 'group-hover:border-primary',
            }
        },
        ASSOCIATION: {
            title: 'Hội sinh viên khoa CNTT',
            themeClasses: {
                borderL: 'border-primary',
                text: 'text-primary',
                bgSolid: 'bg-primary',
                bgLight: 'bg-primary/5',
                borderAvatar: 'border-primary/20',
                borderHover: 'group-hover:border-primary',
            }
        },
        DEPT_EVENT: {
            title: 'Ban Sự kiện và Truyền thông',
            themeClasses: {
                borderL: 'border-primary', text: 'text-primary', bgSolid: 'bg-primary', bgLight: 'bg-primary/5', borderAvatar: 'border-primary/20', borderHover: 'group-hover:border-primary',
            }
        },
        DEPT_SV5T: {
            title: 'Ban Phát triển phong trào Sinh viên 5 tốt',
            themeClasses: {
                borderL: 'border-primary', text: 'text-primary', bgSolid: 'bg-primary', bgLight: 'bg-primary/5', borderAvatar: 'border-primary/20', borderHover: 'group-hover:border-primary',
            }
        },
        DEPT_OFFICE: {
            title: 'Ban Văn phòng',
            themeClasses: {
                borderL: 'border-primary', text: 'text-primary', bgSolid: 'bg-primary', bgLight: 'bg-primary/5', borderAvatar: 'border-primary/20', borderHover: 'group-hover:border-primary',
            }
        },
        DEPT_CULTURE: {
            title: 'Ban Văn nghệ',
            themeClasses: {
                borderL: 'border-primary', text: 'text-primary', bgSolid: 'bg-primary', bgLight: 'bg-primary/5', borderAvatar: 'border-primary/20', borderHover: 'group-hover:border-primary',
            }
        },
        AREA_BUILD: {
            title: 'Mảng Phát triển và Xây dựng Đoàn - Hội',
            themeClasses: {
                borderL: 'border-primary', text: 'text-primary', bgSolid: 'bg-primary', bgLight: 'bg-primary/5', borderAvatar: 'border-primary/20', borderHover: 'group-hover:border-primary',
            }
        },
        AREA_PROPAGANDA: {
            title: 'Mảng Tuyên giáo',
            themeClasses: {
                borderL: 'border-primary', text: 'text-primary', bgSolid: 'bg-primary', bgLight: 'bg-primary/5', borderAvatar: 'border-primary/20', borderHover: 'group-hover:border-primary',
            }
        },
        AREA_STUDY: {
            title: 'Mảng Học tập và Nghiên cứu khoa học',
            themeClasses: {
                borderL: 'border-primary', text: 'text-primary', bgSolid: 'bg-primary', bgLight: 'bg-primary/5', borderAvatar: 'border-primary/20', borderHover: 'group-hover:border-primary',
            }
        },
        AREA_MOVEMENT: {
            title: 'Mảng Phong trào',
            themeClasses: {
                borderL: 'border-primary', text: 'text-primary', bgSolid: 'bg-primary', bgLight: 'bg-primary/5', borderAvatar: 'border-primary/20', borderHover: 'group-hover:border-primary',
            }
        },
        AREA_REWARD: {
            title: 'Mảng Thi đua khen thưởng',
            themeClasses: {
                borderL: 'border-primary', text: 'text-primary', bgSolid: 'bg-primary', bgLight: 'bg-primary/5', borderAvatar: 'border-primary/20', borderHover: 'group-hover:border-primary',
            }
        }
    };

    // Helper to get random icon for empty states
    const getUnitIcon = (unitName) => {
        const icons = ['campaign', 'event_available', 'folder_open', 'directions_run', 'menu_book', 'science', 'volunteer_activism', 'model_training'];
        const hash = unitName.split('').reduce((acc, char) => acc + char.charCodeAt(0), 0);
        return icons[hash % icons.length];
    };

    return (
        <div className="bg-background text-on-background font-body-md min-h-screen overflow-hidden flex">
            {/* SideNavBar (Desktop) */}
            <SideNavBar activeTab="personnel" />

            {/* Main Content Wrapper */}
            <div className="flex-1 flex flex-col h-full md:ml-72 relative z-10 min-w-0">
                <TopNavBar />

                {/* Main Content */}
                <main className="flex-1 overflow-y-auto overflow-x-hidden scrollbar-hide w-full p-4 md:p-8 min-w-0">
                    <div className="max-w-[1200px] mx-auto flex flex-col gap-6 pb-24 md:pb-8 min-w-0 w-full">
                
                <style>{`
                    @keyframes gradient-x {
                        0%, 100% {
                            background-size: 200% 200%;
                            background-position: left center;
                        }
                        50% {
                            background-size: 200% 200%;
                            background-position: right center;
                        }
                    }
                    .animate-gradient-x {
                        animation: gradient-x 15s ease infinite;
                    }
                    
                    /* Hide scrollbar for Chrome, Safari and Opera */
                    .scrollbar-hide::-webkit-scrollbar {
                        display: none;
                    }
                    /* Hide scrollbar for IE, Edge and Firefox */
                    .scrollbar-hide {
                        -ms-overflow-style: none;  /* IE and Edge */
                        scrollbar-width: none;  /* Firefox */
                    }
                `}</style>

                {/* Hero Section Carousel */}
                <section className="w-full relative rounded-2xl overflow-hidden glass-card min-h-[400px] flex items-center justify-center mt-4 md:mt-0 transition-all duration-500">
                    {SLIDES.map((slide, index) => (
                        <div key={slide.id} className={`absolute inset-0 w-full h-full flex items-center transition-opacity duration-1000 ${index === currentSlide ? 'opacity-100 z-0' : 'opacity-0 z-0'}`}>
                            {/* Background Image Overlay */}
                            <div className="absolute inset-0 w-full h-full bg-surface/40">
                                <img className="w-full h-full object-cover opacity-50 mix-blend-overlay" src={slide.image} alt={slide.title} />
                                <div className="absolute inset-0 bg-gradient-to-t from-primary/30 via-transparent to-transparent"></div>
                            </div>
                        </div>
                    ))}

                    {/* Static Text Overlay */}
                    <div className="relative z-10 p-4 md:p-12 w-full max-w-[1000px] flex flex-col items-center justify-center gap-3 text-center mx-auto">
                        <img src={logo} alt="Logo Khoa" className="h-24 md:h-28 w-auto drop-shadow-xl mb-1 object-contain" />
                        <h2 
                            className="font-display-lg text-[22px] md:text-[34px] lg:text-[38px] md:whitespace-nowrap leading-tight font-black uppercase text-transparent bg-clip-text bg-gradient-to-r from-blue-700 from-[35%] via-red-600 via-[50%] to-blue-700 to-[65%] animate-gradient-x drop-shadow-md"
                        >
                            Đoàn thanh niên - Hội sinh viên Khoa CNTT
                        </h2>
                        <p 
                            className="font-body-lg text-body-lg md:text-[18px] text-primary font-bold mt-1 drop-shadow-sm uppercase tracking-wide"
                        >
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
                    <div className="flex justify-center p-10">
                        <span className="font-label-lg text-primary">Đang tải dữ liệu tổ chức...</span>
                    </div>
                ) : (
                    <>
                        <div className="flex flex-col gap-2 min-w-0 w-full">
                            {Object.entries(groupedUnits).map(([type, typeUnits]) => {
                                if (typeUnits.length === 0) return null;
                                const config = SECTION_CONFIG[type];
                                const { borderL, text, bgLight, bgSolid, borderAvatar, borderHover } = config.themeClasses;

                                return (
                                    <section key={type} className="flex flex-col gap-4 min-w-0 w-full">
                                        <div className={`flex items-stretch rounded-xl overflow-hidden shadow-sm ${bgLight}`}>
                                            {/* Colored Logo Box */}
                                            <div className={`w-16 md:w-20 shrink-0 flex items-center justify-center text-white ${bgSolid}`}>
                                                <span className="material-symbols-outlined text-[32px]">domain</span>
                                            </div>
                                            {/* Section Title */}
                                            <h3 className={`flex-1 flex items-center px-4 md:px-6 py-3.5 font-headline-lg text-[22px] md:text-[26px] font-black tracking-wide ${text}`}>
                                                {config.title}
                                            </h3>
                                        </div>
                                        <div className="flex flex-col gap-0 min-w-0 w-full">
                                            {typeUnits.map(unit => {
                                                const unitMembers = getUnitMembers(unit.id);
                                                let smallCardTitle = unit.name;
                                                if (unit.unitType === 'DEPARTMENT') {
                                                    smallCardTitle = 'Thường trực điều hành Ban';
                                                } else if (unit.unitType === 'AREA') {
                                                    smallCardTitle = 'Thường trực điều hành Mảng';
                                                } else if (unit.unitType === 'AREA_MEMBER') {
                                                    smallCardTitle = 'Thành viên Mảng';
                                                }
                                                return (
                                                    <div key={unit.id} className="flex flex-col relative gap-3 min-w-0 w-full">
                                                        <div className="flex items-center border-b border-outline-variant/30 pb-2">
                                                            <h4 className={`font-headline-md text-[17px] md:text-[19px] font-bold text-on-surface tracking-tight border-l-[4px] pl-3 py-1 ${borderL}`}>{smallCardTitle}</h4>
                                                        </div>
                                                        
                                                        <div className="flex gap-4 overflow-x-auto pb-4 pr-4 scrollbar-hide min-w-0 w-full">
                                                                {unitMembers.length > 0 ? (
                                                                    unitMembers.map(member => (
                                                                        <div key={member.userId} className={`flex-none w-64 bg-surface-container-lowest rounded-xl p-4 flex items-center gap-4 border ${borderAvatar} shadow-sm hover:shadow-md hover:-translate-y-0.5 transition-all duration-300 cursor-pointer group`}>
                                                                            <div className={`w-14 h-14 rounded-full bg-surface-variant overflow-hidden shrink-0 border-2 transition-colors ${borderAvatar} ${borderHover}`}>
                                                                                <img alt={member.fullName} className="w-full h-full object-cover" src={member.avatarUrl || "https://ui-avatars.com/api/?name=" + encodeURIComponent(member.fullName)} />
                                                                            </div>
                                                                            <div className="truncate">
                                                                                <h5 className="font-label-md text-label-md text-on-surface truncate">{member.fullName}</h5>
                                                                                <span className={`inline-block mt-0.5 px-0 text-[13px] font-bold truncate max-w-full ${text}`}>
                                                                                    {member.currentPosition.positionName}
                                                                                </span>
                                                                            </div>
                                                                        </div>
                                                                    ))
                                                                ) : (
                                                                    <div className={`flex-none w-64 bg-surface-container-lowest rounded-xl p-4 flex items-center gap-4 border ${borderAvatar} shadow-sm transition-all cursor-pointer group`}>
                                                                        <div className={`w-14 h-14 rounded-full flex items-center justify-center shrink-0 border-2 transition-colors ${bgLight} ${borderAvatar} ${borderHover}`}>
                                                                            <span className={`material-symbols-outlined ${text}`}>{getUnitIcon(unit.name)}</span>
                                                                        </div>
                                                                        <div className="truncate">
                                                                            <h5 className="font-label-md text-label-md text-on-surface truncate">Nhân sự Unit</h5>
                                                                            <span className="inline-block mt-0.5 px-0 text-[13px] font-bold text-outline truncate max-w-full">
                                                                                Đang cập nhật
                                                                            </span>
                                                                        </div>
                                                                    </div>
                                                                )}
                                                            </div>
                                                    </div>
                                                );
                                            })}
                                        </div>
                                    </section>
                                );
                            })}
                        </div>
                    </>
                )}
                    </div>
                </main>
            </div>

            {/* Mobile Bottom NavBar */}
            <nav className="md:hidden fixed bottom-0 w-full z-50 rounded-t-xl bg-surface/80 backdrop-blur-xl border-t border-white/20 shadow-[0_-4px_16px_rgba(0,0,0,0.05)] flex justify-around items-end pb-4 px-6 pt-2">
                <a className="flex flex-col items-center justify-center text-on-surface-variant p-2 w-12 hover:bg-primary-container/30 rounded-lg transition-colors" href="#">
                    <span className="material-symbols-outlined mb-1" data-icon="home">home</span>
                    <span className="font-label-sm-mobile text-[10px]">Trang chủ</span>
                </a>
                <a className="flex flex-col items-center justify-center text-on-surface-variant p-2 w-12 hover:bg-primary-container/30 rounded-lg transition-colors" href="#">
                    <span className="material-symbols-outlined mb-1" data-icon="calendar_today">calendar_today</span>
                    <span className="font-label-sm-mobile text-[10px]">Sự kiện</span>
                </a>
                <a className="flex flex-col items-center justify-center bg-primary text-on-primary rounded-full p-2 w-12 h-12 mb-2 shadow-md active:scale-90 duration-150" href="/personnel">
                    <span className="material-symbols-outlined" data-icon="corporate_fare" style={{ fontVariationSettings: "'FILL' 1" }}>corporate_fare</span>
                </a>
                <a className="flex flex-col items-center justify-center text-on-surface-variant p-2 w-12 hover:bg-primary-container/30 rounded-lg transition-colors" href="#">
                    <span className="material-symbols-outlined mb-1" data-icon="notifications">notifications</span>
                    <span className="font-label-sm-mobile text-[10px]">Thông báo</span>
                </a>
                <a className="flex flex-col items-center justify-center text-on-surface-variant p-2 w-12 hover:bg-primary-container/30 rounded-lg transition-colors" href="#">
                    <span className="material-symbols-outlined mb-1" data-icon="person">person</span>
                    <span className="font-label-sm-mobile text-[10px]">Cá nhân</span>
                </a>
            </nav>
        </div>
    );
}
