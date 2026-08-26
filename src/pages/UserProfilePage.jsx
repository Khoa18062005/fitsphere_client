import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import SideNavBar from '../components/SideNavBar';

export default function UserProfilePage() {
  const navigate = useNavigate();
  const [user, setUser] = useState(null);

  useEffect(() => {
    const storedUser = localStorage.getItem('user');
    if (storedUser) {
        setUser(JSON.parse(storedUser));
    } else {
        // Nếu chưa có user thì đẩy về trang welcome
        navigate('/welcome');
    }
  }, [navigate]);

  const handleLogout = () => {
    localStorage.removeItem('token');
    localStorage.removeItem('user');
    navigate('/welcome');
  };

  return (
    <div className="bg-background text-on-background font-body-md text-body-md h-screen overflow-hidden flex selection:bg-primary-container selection:text-on-primary-container">

      {/* SideNavBar (Desktop) */}
      <SideNavBar activeTab="profile" />

      {/* Main Content Wrapper */}
      <div className="flex-1 flex flex-col h-full md:ml-72 w-full relative z-10">
      
      {/* TopNavBar */}
      <header className="bg-surface/70 dark:bg-surface-variant/70 backdrop-blur-lg docked full-width top-0 sticky z-50 border-b border-white/20 shadow-sm flex justify-between items-center px-gutter w-full mx-auto h-16">
        <div className="flex items-center gap-4">
            <button className="md:hidden text-on-surface p-2">
                <span className="material-symbols-outlined">menu</span>
            </button>
            <div className="text-[22px] font-bold text-primary dark:text-primary-fixed hidden md:block cursor-pointer" onClick={() => navigate('/home')}>
                Đoàn - Hội Khoa
            </div>
        </div>
        <div className="flex items-center gap-4">
          <span className="material-symbols-outlined text-on-surface-variant hover:bg-primary/10 transition-colors p-2 rounded-full cursor-pointer">notifications</span>
          <span className="material-symbols-outlined text-on-surface-variant hover:bg-primary/10 transition-colors p-2 rounded-full cursor-pointer">apps</span>
          <img className="w-8 h-8 rounded-full border border-outline-variant object-cover ml-2 cursor-pointer" onClick={() => navigate('/home')} alt="Avatar" referrerPolicy="no-referrer" src={user?.avatarUrl || "https://lh3.googleusercontent.com/aida-public/AB6AXuDwuyYPAAlUT_L2iGNFkupswAkVLp6m-RTNJNWCsfYyT6A0xNVkRtos3ZgyZm7ZzcQAiabuNb-wZsA5Gw65VHUaEZNsPkNoL5XJrXIskVr-og1wSNe9GJ74A_Tr78HoUtsh5UZQh11-yBte5VcJZeXfeAkgEei7hzmLb18WC43NlqkPDE-zwpO7g2zH2UBgCuoXhs64OlseQLvR4b0fYKx0XyNj3OXNLWLlmZpWKjpo5JbavkgEg26OKg"} />
        </div>
      </header>
      <main className="flex-1 overflow-y-auto w-full p-4 md:p-8">
        <div className="max-w-[1200px] mx-auto flex flex-col gap-section-gap pb-24 md:pb-8">
        {/* Profile Header */}
        <section className="glass-card rounded-xl p-6 md:p-8 flex flex-col md:flex-row items-center md:items-start gap-6 relative overflow-hidden">
          {/* Decorative background element */}
          <div className="absolute -top-24 -right-24 w-64 h-64 bg-primary/10 rounded-full blur-3xl pointer-events-none"></div>
          <div className="relative shrink-0">
            <img className="w-32 h-32 md:w-40 md:h-40 rounded-full object-cover border-4 border-surface shadow-md" alt="Portrait" referrerPolicy="no-referrer" src={user?.avatarUrl || "https://lh3.googleusercontent.com/aida-public/AB6AXuD5kEp81S7bzVCWYw7EwUaRz9dgvENf6Er2fZb-gqeTzywwKAyVdky9TVZz0fkw3mGIBTUd0r0Lyk4yZyqs9XUZmJB1C_jn8KJIeGWTNgXlFQxINgW_8Dkzyvg6UtFGreFJ6ll71-4m1jlvgieac4Q7lrj8kthZkl1ENng56JH3BjnVwl6mgn7ToxbSTPt_IyziTq5jo1ZPE8_FlwFkwAigxCnCmyPffEhn6oA0RGDYWzntIp_4ESoXlA"} />
            <div className="absolute bottom-1 right-1 bg-primary text-on-primary rounded-full p-1 border-2 border-surface flex items-center justify-center">
              <span className="material-symbols-outlined text-[16px]">verified</span>
            </div>
          </div>
          <div className="flex-1 text-center md:text-left flex flex-col items-center md:items-start gap-2 z-10">
            <div className="inline-flex items-center gap-1 bg-primary/15 text-primary font-label-sm text-label-sm px-3 py-1 rounded-full font-semibold">
              <span className="material-symbols-outlined text-[14px]">school</span> Sinh viên
            </div>
            <h1 className="font-headline-lg-mobile text-headline-lg-mobile md:font-display-lg md:text-display-lg text-primary mt-1">{user?.fullName || "Người dùng ẩn danh"}</h1>
            <p className="font-body-md text-body-md text-on-surface-variant flex items-center gap-1 mt-1">
              <span className="material-symbols-outlined text-[18px]">wc</span> Giới tính: {user?.gender || "Chưa cập nhật"}
            </p>
            <p className="font-body-md text-body-md text-on-surface-variant flex items-center gap-1 mt-1">
              <span className="material-symbols-outlined text-[18px]">work</span> Chức vụ: {user?.position || "Chưa cập nhật"}
            </p>
          </div>
          <div className="mt-4 md:mt-0 shrink-0 z-10 flex flex-col gap-2">
            <button className="bg-primary text-on-primary font-label-md text-label-md px-6 py-3 rounded-lg hover:bg-surface-tint transition-colors flex items-center gap-2 shadow-sm shadow-primary/20">
              <span className="material-symbols-outlined text-[20px]">edit</span> Chỉnh sửa
            </button>
            <button onClick={handleLogout} className="bg-error text-on-error font-label-md text-label-md px-6 py-3 rounded-lg hover:bg-error/90 transition-colors flex items-center gap-2 shadow-sm shadow-error/20">
              <span className="material-symbols-outlined text-[20px]">logout</span> Đăng xuất
            </button>
          </div>
        </section>
        {/* Navigation Tabs */}
        <section className="border-b border-outline-variant/30 flex overflow-x-auto hide-scrollbar">
          <button className="px-6 py-3 font-label-md text-label-md text-primary border-b-2 border-primary whitespace-nowrap bg-primary/5 rounded-t-lg">
            Thông tin cá nhân
          </button>
          <button className="px-6 py-3 font-label-md text-label-md text-on-surface-variant hover:bg-surface-variant/50 transition-colors whitespace-nowrap rounded-t-lg">
            Lịch sử hoạt động
          </button>
          <button className="px-6 py-3 font-label-md text-label-md text-on-surface-variant hover:bg-surface-variant/50 transition-colors whitespace-nowrap rounded-t-lg">
            Chứng nhận/Giải thưởng
          </button>
        </section>
        {/* Personal Info Content (Bento Grid) */}
        <section className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Bio */}
          <div className="md:col-span-2 glass-card rounded-xl p-6">
            <h3 className="font-headline-md text-headline-md text-on-surface mb-4 flex items-center gap-2">
              <span className="material-symbols-outlined text-primary">person_book</span> Giới thiệu
            </h3>
            <p className="font-body-md text-body-md text-on-surface-variant leading-relaxed">
              Sinh viên trường Đại học Sư phạm Kỹ thuật TP.HCM. Tích cực tham gia các hoạt động Đoàn - Hội để rèn luyện kỹ năng mềm và mở rộng mối quan hệ. Đam mê học hỏi và ứng dụng công nghệ.
            </p>
          </div>
          {/* Contact/Details */}
          <div className="glass-card rounded-xl p-6 flex flex-col gap-5">
            <h3 className="font-headline-md text-headline-md text-on-surface mb-2 flex items-center gap-2">
              <span className="material-symbols-outlined text-primary">contact_page</span> Liên hệ
            </h3>
            <div className="flex items-center gap-4">
              <div className="w-10 h-10 rounded-full bg-surface-container-highest flex items-center justify-center text-primary shrink-0">
                <span className="material-symbols-outlined text-[20px]">mail</span>
              </div>
              <div className="min-w-0">
                <div className="font-label-sm text-label-sm text-on-surface-variant">Email</div>
                <div className="font-body-md text-body-md text-on-surface truncate">{user?.email || "Đang cập nhật"}</div>
              </div>
            </div>
            <div className="flex items-center gap-4">
              <div className="w-10 h-10 rounded-full bg-surface-container-highest flex items-center justify-center text-primary shrink-0">
                <span className="material-symbols-outlined text-[20px]">call</span>
              </div>
              <div>
                <div className="font-label-sm text-label-sm text-on-surface-variant">Số điện thoại</div>
                <div className="font-body-md text-body-md text-on-surface">{user?.phone || "Đang cập nhật"}</div>
              </div>
            </div>
            <div className="flex items-center gap-4">
              <div className="w-10 h-10 rounded-full bg-surface-container-highest flex items-center justify-center text-primary shrink-0">
                <span className="material-symbols-outlined text-[20px]">domain</span>
              </div>
              <div>
                <div className="font-label-sm text-label-sm text-on-surface-variant">Khoa/Đơn vị</div>
                <div className="font-body-md text-body-md text-on-surface">{user?.department || "Công nghệ Thông tin"}</div>
              </div>
            </div>
          </div>
        </section>
        </div>
      </main>
      {/* BottomNavBar (Mobile Only) */}
      <nav className="fixed bottom-0 left-0 w-full flex justify-around items-end pb-4 px-6 md:hidden z-50 rounded-t-xl bg-surface/80 dark:bg-surface-container/80 backdrop-blur-xl border-t border-white/20 shadow-[0_-4px_16px_rgba(0,0,0,0.05)]">
        <div onClick={() => navigate('/home')} className="flex flex-col items-center justify-center text-on-surface-variant p-2 cursor-pointer">
          <span className="material-symbols-outlined">home</span>
          <span className="font-label-sm-mobile text-[10px] mt-1">Trang chủ</span>
        </div>
        <div className="flex flex-col items-center justify-center text-on-surface-variant p-2 cursor-pointer">
          <span className="material-symbols-outlined">calendar_today</span>
          <span className="font-label-sm-mobile text-[10px] mt-1">Sự kiện</span>
        </div>
        <div className="flex flex-col items-center justify-center text-on-surface-variant p-2 cursor-pointer">
          <span className="material-symbols-outlined">notifications</span>
          <span className="font-label-sm-mobile text-[10px] mt-1">Thông báo</span>
        </div>
        {/* Active Tab */}
        <div className="flex flex-col items-center justify-center bg-primary text-on-primary rounded-full p-2 w-12 h-12 mb-4 shadow-md scale-95 transition-transform cursor-pointer relative">
          <span className="material-symbols-outlined" style={{ fontVariationSettings: "'FILL' 1" }}>person</span>
          <span className="absolute -bottom-5 text-[10px] font-bold text-primary">Cá nhân</span>
        </div>
      </nav>

      </div> {/* End of Main Content Wrapper */}
    </div>
  );
}

