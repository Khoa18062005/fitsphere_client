import React from 'react';

export default function ProfilePage() {
  return (
    <div className="text-on-background min-h-screen flex flex-col">

      {/* TopNavBar */}
      <header className="docked full-width top-0 sticky z-50 bg-surface/70 backdrop-blur-lg border-b border-white/20 shadow-sm flex justify-between items-center px-gutter w-full max-w-[1200px] mx-auto h-16 hidden md:flex">
        <div className="font-headline-md text-headline-md font-bold text-primary">Đoàn - Hội Khoa</div>
        <div className="flex items-center gap-4">
          <span className="material-symbols-outlined text-on-surface-variant hover:bg-primary/10 transition-colors p-2 rounded-full cursor-pointer">notifications</span>
          <span className="material-symbols-outlined text-on-surface-variant hover:bg-primary/10 transition-colors p-2 rounded-full cursor-pointer">apps</span>
          <img className="w-8 h-8 rounded-full border border-outline-variant object-cover ml-2" data-alt="A small circular avatar of a student for the top navigation bar, well-lit, professional." src="https://lh3.googleusercontent.com/aida-public/AB6AXuDwuyYPAAlUT_L2iGNFkupswAkVLp6m-RTNJNWCsfYyT6A0xNVkRtos3ZgyZm7ZzcQAiabuNb-wZsA5Gw65VHUaEZNsPkNoL5XJrXIskVr-og1wSNe9GJ74A_Tr78HoUtsh5UZQh11-yBte5VcJZeXfeAkgEei7hzmLb18WC43NlqkPDE-zwpO7g2zH2UBgCuoXhs64OlseQLvR4b0fYKx0XyNj3OXNLWLlmZpWKjpo5JbavkgEg26OKg" />
        </div>
      </header>
      <main className="flex-1 w-full max-w-[1200px] mx-auto px-gutter py-container-margin pb-32 md:pb-12 flex flex-col gap-section-gap">
        {/* Profile Header */}
        <section className="glass-card rounded-xl p-6 md:p-8 flex flex-col md:flex-row items-center md:items-start gap-6 relative overflow-hidden">
          {/* Decorative background element */}
          <div className="absolute -top-24 -right-24 w-64 h-64 bg-primary/10 rounded-full blur-3xl pointer-events-none"></div>
          <div className="relative shrink-0">
            <img className="w-32 h-32 md:w-40 md:h-40 rounded-full object-cover border-4 border-surface shadow-md" data-alt="Close up portrait of a young Vietnamese university student, smiling confidently, bright natural lighting, modern campus background, shallow depth of field, high quality professional photography, corporate university aesthetic." src="https://lh3.googleusercontent.com/aida-public/AB6AXuD5kEp81S7bzVCWYw7EwUaRz9dgvENf6Er2fZb-gqeTzywwKAyVdky9TVZz0fkw3mGIBTUd0r0Lyk4yZyqs9XUZmJB1C_jn8KJIeGWTNgXlFQxINgW_8Dkzyvg6UtFGreFJ6ll71-4m1jlvgieac4Q7lrj8kthZkl1ENng56JH3BjnVwl6mgn7ToxbSTPt_IyziTq5jo1ZPE8_FlwFkwAigxCnCmyPffEhn6oA0RGDYWzntIp_4ESoXlA" />
            <div className="absolute bottom-1 right-1 bg-primary text-on-primary rounded-full p-1 border-2 border-surface flex items-center justify-center">
              <span className="material-symbols-outlined text-[16px]">verified</span>
            </div>
          </div>
          <div className="flex-1 text-center md:text-left flex flex-col items-center md:items-start gap-2 z-10">
            <div className="inline-flex items-center gap-1 bg-primary/15 text-primary font-label-sm text-label-sm px-3 py-1 rounded-full font-semibold">
              <span className="material-symbols-outlined text-[14px]">school</span> Sinh viên
            </div>
            <h1 className="font-headline-lg-mobile text-headline-lg-mobile md:font-display-lg md:text-display-lg text-on-surface mt-1">Nguyễn Văn A</h1>
            <p className="font-body-md text-body-md text-on-surface-variant flex items-center gap-1 mt-1">
              <span className="material-symbols-outlined text-[18px]">badge</span> MSSV: 21520001
            </p>
          </div>
          <div className="mt-4 md:mt-0 shrink-0 z-10">
            <button className="bg-error text-on-error font-label-md text-label-md px-6 py-3 rounded-lg hover:bg-error/90 transition-colors flex items-center gap-2 shadow-sm shadow-error/20">
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
              Sinh viên năm 3 khoa Công nghệ Phần mềm. Tích cực tham gia các hoạt động Đoàn - Hội để rèn luyện kỹ năng mềm và mở rộng mối quan hệ. Đam mê lập trình web và các công nghệ mới.
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
                <div className="font-label-sm text-label-sm text-on-surface-variant">Email (Google SSO)</div>
                <div className="font-body-md text-body-md text-on-surface truncate">21520001@gm.uit.edu.vn</div>
              </div>
            </div>
            <div className="flex items-center gap-4">
              <div className="w-10 h-10 rounded-full bg-surface-container-highest flex items-center justify-center text-primary shrink-0">
                <span className="material-symbols-outlined text-[20px]">call</span>
              </div>
              <div>
                <div className="font-label-sm text-label-sm text-on-surface-variant">Số điện thoại</div>
                <div className="font-body-md text-body-md text-on-surface">090 123 4567</div>
              </div>
            </div>
            <div className="flex items-center gap-4">
              <div className="w-10 h-10 rounded-full bg-surface-container-highest flex items-center justify-center text-primary shrink-0">
                <span className="material-symbols-outlined text-[20px]">domain</span>
              </div>
              <div>
                <div className="font-label-sm text-label-sm text-on-surface-variant">Khoa/Đơn vị</div>
                <div className="font-body-md text-body-md text-on-surface">Công nghệ Phần mềm</div>
              </div>
            </div>
          </div>
        </section>
      </main>
      {/* BottomNavBar (Mobile Only) */}
      <nav className="fixed bottom-0 left-0 w-full flex justify-around items-end pb-4 px-6 md:hidden z-50 rounded-t-xl bg-surface/80 dark:bg-surface-container/80 backdrop-blur-xl border-t border-white/20 shadow-[0_-4px_16px_rgba(0,0,0,0.05)]">
        <div className="flex flex-col items-center justify-center text-on-surface-variant p-2 cursor-pointer">
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


    </div>
  );
}
