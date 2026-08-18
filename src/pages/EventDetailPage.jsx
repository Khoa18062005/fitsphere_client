import React from 'react';

export default function EventDetailPage() {
  return (
    <div className="bg-background text-on-surface font-body-md antialiased overflow-x-hidden min-h-screen flex">
      {/* SideNavBar */}
      <aside className="bg-surface-container-low dark:bg-surface-container-lowest h-screen w-64 fixed left-0 top-0 border-r border-outline-variant/30 shadow-lg shadow-black/5 flex-col p-4 gap-2 z-50 hidden md:flex">
        {/* Header */}
        <div className="flex items-center gap-3 mb-6 px-2">
          <div className="w-10 h-10 rounded-full bg-primary flex items-center justify-center text-on-primary font-headline-md font-bold shadow-md shadow-primary/20">
            <span className="material-symbols-outlined" style={{ fontSize: '24px' }}>school</span>
          </div>
          <div>
            <h1 className="font-headline-md text-headline-md font-extrabold text-primary" style={{ fontSize: '16px', lineHeight: '20px' }}>Quản lý Đoàn - Hội</h1>
            <p className="font-label-sm text-label-sm text-on-surface-variant">Hệ thống điều hành</p>
          </div>
        </div>

        {/* Navigation Links */}
        <nav className="flex-1 flex flex-col gap-1">
          <a className="text-on-surface-variant hover:bg-surface-container-high rounded-lg flex items-center gap-3 px-3 py-2.5 transition-colors group" href="/home">
            <span className="material-symbols-outlined group-hover:text-primary transition-colors">dashboard</span>
            <span className="font-label-md text-label-md">Trang Chủ</span>
          </a>
          <a className="bg-primary-container text-on-primary-container font-bold rounded-lg flex items-center gap-3 px-3 py-2.5 shadow-sm shadow-primary/10" href="/event-detail">
            <span className="material-symbols-outlined" style={{ fontVariationSettings: "'FILL' 1" }}>event</span>
            <span className="font-label-md text-label-md">Sự Kiện</span>
          </a>
          <a className="text-on-surface-variant hover:bg-surface-container-high rounded-lg flex items-center gap-3 px-3 py-2.5 transition-colors group" href="#">
            <span className="material-symbols-outlined group-hover:text-primary transition-colors">group</span>
            <span className="font-label-md text-label-md">Sinh Viên</span>
          </a>
          <a className="text-on-surface-variant hover:bg-surface-container-high rounded-lg flex items-center gap-3 px-3 py-2.5 transition-colors group" href="#">
            <span className="material-symbols-outlined group-hover:text-primary transition-colors">badge</span>
            <span className="font-label-md text-label-md">Cán Bộ</span>
          </a>
          <a className="text-on-surface-variant hover:bg-surface-container-high rounded-lg flex items-center gap-3 px-3 py-2.5 transition-colors group" href="#">
            <span className="material-symbols-outlined group-hover:text-primary transition-colors">analytics</span>
            <span className="font-label-md text-label-md">Báo Cáo</span>
          </a>
        </nav>

        {/* CTA */}
        <div className="mt-auto mb-4">
          <button className="w-full bg-primary text-on-primary rounded-xl py-3 px-4 font-label-md text-label-md hover:bg-primary/90 transition-all active:scale-95 shadow-md shadow-primary/20 flex justify-center items-center gap-2">
            <span className="material-symbols-outlined">add</span>
            Tạo Sự Kiện Mới
          </button>
        </div>

        {/* Footer Links */}
        <div className="border-t border-outline-variant/30 pt-4 flex flex-col gap-1">
          <a className="text-on-surface-variant hover:bg-surface-container-high rounded-lg flex items-center gap-3 px-3 py-2 transition-colors" href="#">
            <span className="material-symbols-outlined text-[20px]">help</span>
            <span className="font-label-sm text-label-sm">Trợ giúp</span>
          </a>
          <a className="text-on-surface-variant hover:bg-surface-container-high rounded-lg flex items-center gap-3 px-3 py-2 transition-colors" href="/welcome">
            <span className="material-symbols-outlined text-[20px]">logout</span>
            <span className="font-label-sm text-label-sm">Đăng xuất</span>
          </a>
        </div>
      </aside>

      {/* Main Content Area */}
      <main className="flex-1 md:ml-64 relative min-h-screen">
        {/* TopNavBar */}
        <header className="bg-surface/70 backdrop-blur-xl dark:bg-inverse-surface/70 border-b border-white/20 dark:border-outline/20 shadow-md shadow-primary/10 sticky top-0 z-40 flex justify-between items-center w-full px-6 py-3">
          <div className="flex items-center gap-4">
            {/* Mobile Menu Trigger */}
            <button className="md:hidden text-on-surface hover:bg-primary/10 p-2 rounded-full transition-colors">
              <span className="material-symbols-outlined">menu</span>
            </button>
            <div className="font-headline-md text-headline-md font-bold text-primary dark:text-primary-fixed-dim hidden md:block">
              Đoàn - Hội Portal
            </div>
          </div>

          <div className="flex-1 flex justify-center max-w-md mx-4">
            {/* Search Bar */}
            <div className="relative w-full">
              <span className="material-symbols-outlined absolute left-3 top-1/2 -translate-y-1/2 text-on-surface-variant">search</span>
              <input className="w-full bg-surface-container-highest/50 border border-outline-variant/50 rounded-full py-2 pl-10 pr-4 text-body-md focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-all" placeholder="Tìm kiếm sự kiện, sinh viên..." type="text" />
            </div>
          </div>

          <div className="flex items-center gap-2">
            <button className="text-on-surface-variant hover:bg-primary/10 p-2 rounded-full transition-colors relative">
              <span className="material-symbols-outlined">notifications</span>
              <span className="absolute top-1.5 right-1.5 w-2 h-2 bg-error rounded-full"></span>
            </button>
            <button className="text-on-surface-variant hover:bg-primary/10 p-2 rounded-full transition-colors hidden sm:block">
              <span className="material-symbols-outlined">settings</span>
            </button>
            <div className="ml-2 w-9 h-9 rounded-full overflow-hidden border-2 border-primary-container cursor-pointer shadow-sm">
              <img alt="User profile" className="w-full h-full object-cover" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBKPBdSTcPL_r4n_glK33TLXxR01QzCsbZEL0GAW0XstcpWX43X8TFWzH6Kj_jKNkpZ5hh8g-w19NhCrvdZn-wfw55K1lm_690myFdfpTKt6Yh4RXowqS1qIpjYJWhOLqsDYw5yMRVacD5mk1MIcLTuAbrXFScreUghQvWU_vNSWXUBlVBVMD2kjQk7l3SZsWGYDGslCogR3FZjh56r0qnVpk7Hhpu4V09B9CqO47oWt7maQR2pHVC_hw" />
            </div>
          </div>
        </header>

        {/* Page Content */}
        <div className="max-w-[1200px] mx-auto p-4 md:p-8 space-y-section-gap">
          {/* Hero Section */}
          <section className="relative rounded-[24px] overflow-hidden shadow-2xl shadow-primary/10 bg-surface-container-highest">
            <div className="aspect-[16/9] md:aspect-[21/9] w-full relative">
              <img alt="Chiến dịch Xuân Tình Nguyện 2024" className="w-full h-full object-cover" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCKNbhiE-fBcOk1Gz9LaOEdIROijZ6VsFDVUa7k3_F0JYmduSmQN_jSw4RRD5qEJYv3ciJfzSmlRea1qfKv25GK1WG306rMBzgBqafzRL4MYb1hUmH5-2GBKIu-rWhG2QzeP5W53EJP7kHpZUwmdJ762Ixd0ZflpjMJeK6wgBZa6cml1ikDIRZVMyuBqJDn8SG-cjc0YOHolK-k4BDw5sorj-FiF29JpXyHJcU4L4SJz62915z4Li3tAw" />
              {/* Overlay Gradient */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent"></div>
              
              {/* Hero Content */}
              <div className="absolute bottom-0 left-0 right-0 p-6 md:p-10 flex flex-col justify-end">
                <div className="flex flex-wrap gap-2 mb-4">
                  <span className="px-3 py-1 rounded-full bg-primary/20 backdrop-blur-md border border-primary/30 text-primary-fixed-dim font-label-sm text-label-sm font-semibold flex items-center gap-1">
                    <span className="material-symbols-outlined text-[16px]">campaign</span>
                    Chiến Dịch Lớn
                  </span>
                  <span className="px-3 py-1 rounded-full bg-white/20 backdrop-blur-md border border-white/30 text-white font-label-sm text-label-sm font-semibold flex items-center gap-1">
                    <span className="material-symbols-outlined text-[16px]">volunteer_activism</span>
                    Tình Nguyện
                  </span>
                </div>
                <h1 className="font-display-lg text-display-lg text-white mb-2 leading-tight">Chiến dịch Xuân Tình Nguyện 2024</h1>
                <p className="font-body-lg text-body-lg text-white/90 max-w-2xl mb-6">Hành trình mang mùa xuân ấm áp đến với trẻ em vùng sâu vùng xa, lan tỏa tinh thần nhiệt huyết của tuổi trẻ.</p>
                <div className="flex flex-wrap gap-4 items-center mt-2">
                  <button className="bg-primary text-white rounded-xl py-3 px-8 font-label-md text-label-md font-bold hover:bg-primary/90 transition-all active:scale-95 shadow-lg shadow-primary/40 flex items-center gap-2">
                    Đăng ký tham gia ngay
                    <span className="material-symbols-outlined">arrow_forward</span>
                  </button>
                  <button className="bg-white/10 backdrop-blur-md border border-white/30 text-white rounded-xl py-3 px-6 font-label-md text-label-md font-bold hover:bg-white/20 transition-all active:scale-95 flex items-center gap-2">
                    <span className="material-symbols-outlined">share</span>
                    Chia sẻ
                  </button>
                </div>
              </div>
            </div>
          </section>

          {/* Main Content Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mt-8">
            {/* Left Column (Details & Schedule) */}
            <div className="lg:col-span-2 space-y-8">
              
              {/* Quick Info Glass Card */}
              <div className="glass-card rounded-[20px] p-6 grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-full bg-surface-container-high flex items-center justify-center text-primary">
                    <span className="material-symbols-outlined">calendar_today</span>
                  </div>
                  <div>
                    <h3 className="font-label-md text-label-md text-on-surface-variant mb-1">Thời gian</h3>
                    <p className="font-body-md text-body-md font-semibold text-on-surface">15/01/2024 - 28/01/2024</p>
                    <p className="text-sm text-on-surface-variant">Lễ ra quân: 07:00, 15/01</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-full bg-surface-container-high flex items-center justify-center text-primary">
                    <span className="material-symbols-outlined">location_on</span>
                  </div>
                  <div>
                    <h3 className="font-label-md text-label-md text-on-surface-variant mb-1">Địa điểm</h3>
                    <p className="font-body-md text-body-md font-semibold text-on-surface">Cơ sở chính & Các tỉnh miền Tây</p>
                    <a className="text-sm text-primary hover:underline flex items-center gap-1 mt-1" href="#">
                      Xem bản đồ <span className="material-symbols-outlined text-[14px]">open_in_new</span>
                    </a>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-full bg-surface-container-high flex items-center justify-center text-primary">
                    <span className="material-symbols-outlined">corporate_fare</span>
                  </div>
                  <div>
                    <h3 className="font-label-md text-label-md text-on-surface-variant mb-1">Đơn vị tổ chức</h3>
                    <p className="font-body-md text-body-md font-semibold text-on-surface">Hội Sinh Viên Trường</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-full bg-surface-container-high flex items-center justify-center text-primary">
                    <span className="material-symbols-outlined">group</span>
                  </div>
                  <div>
                    <h3 className="font-label-md text-label-md text-on-surface-variant mb-1">Số lượng tuyển</h3>
                    <p className="font-body-md text-body-md font-semibold text-on-surface">500 Chiến sĩ</p>
                    <p className="text-sm text-on-surface-variant">Đã đăng ký: 342</p>
                  </div>
                </div>
              </div>

              {/* Description */}
              <div className="glass-card rounded-[20px] p-6 md:p-8">
                <h2 className="font-headline-md text-headline-md text-primary mb-4 flex items-center gap-2">
                  <span className="material-symbols-outlined">info</span>
                  Thông tin chi tiết
                </h2>
                <div className="prose prose-blue max-w-none text-on-surface font-body-md space-y-4">
                  <p>
                    Chiến dịch <strong>Xuân Tình Nguyện 2024</strong> là một trong những hoạt động trọng điểm của Hội Sinh viên trường, nhằm phát huy tinh thần xung kích, tình nguyện của hội viên, sinh viên trong việc tham gia phát triển kinh tế - xã hội, giải quyết các vấn đề dư luận xã hội quan tâm; xây dựng nông thôn mới, đô thị văn minh; đảm bảo an sinh xã hội, quốc phòng, an ninh ở những địa bàn khó khăn.
                  </p>
                  <p>Năm nay, chiến dịch tập trung vào các đội hình chuyên:</p>
                  <ul className="list-disc pl-5 space-y-2 text-on-surface-variant">
                    <li><strong>Đội hình Dấu chân thanh xuân:</strong> Tổ chức các hoạt động an sinh xã hội, thăm hỏi mẹ VNAH, gia đình chính sách.</li>
                    <li><strong>Đội hình Nụ cười trẻ thơ:</strong> Tổ chức sân chơi, trao học bổng, áo ấm cho trẻ em vùng cao.</li>
                    <li><strong>Đội hình Xuân yêu thương:</strong> Gói bánh chưng, dọn dẹp vệ sinh khuôn viên trường, ký túc xá.</li>
                  </ul>
                  <div className="mt-6 p-4 bg-surface-container-low rounded-xl border border-outline-variant/30 border-l-4 border-l-primary">
                    <p className="font-semibold text-on-surface mb-1">Quyền lợi khi tham gia:</p>
                    <p className="text-sm text-on-surface-variant">Được cấp giấy chứng nhận, cộng điểm rèn luyện (Mục 2 & 3), hỗ trợ chi phí đi lại và sinh hoạt trong quá trình tham gia mặt trận.</p>
                  </div>
                </div>
              </div>

              {/* Schedule Timeline */}
              <div className="glass-card rounded-[20px] p-6 md:p-8">
                <h2 className="font-headline-md text-headline-md text-primary mb-6 flex items-center gap-2">
                  <span className="material-symbols-outlined">schedule</span>
                  Lịch trình dự kiến
                </h2>
                <div className="relative border-l-2 border-outline-variant/30 ml-4 space-y-8 pb-4">
                  {/* Timeline Item 1 */}
                  <div className="relative pl-8">
                    <div className="absolute w-4 h-4 bg-primary rounded-full -left-[9px] top-1 border-4 border-surface shadow-sm"></div>
                    <div className="font-label-sm text-label-sm text-primary font-bold mb-1">01/12/2023 - 15/12/2023</div>
                    <h3 className="font-label-md text-label-md font-bold text-on-surface">Mở link đăng ký</h3>
                    <p className="font-body-md text-body-md text-on-surface-variant mt-1">Sinh viên điền form đăng ký online và chọn đội hình mong muốn tham gia.</p>
                  </div>
                  {/* Timeline Item 2 */}
                  <div className="relative pl-8">
                    <div className="absolute w-4 h-4 bg-primary rounded-full -left-[9px] top-1 border-4 border-surface shadow-sm"></div>
                    <div className="font-label-sm text-label-sm text-primary font-bold mb-1">18/12/2023 - 20/12/2023</div>
                    <h3 className="font-label-md text-label-md font-bold text-on-surface">Phỏng vấn tuyển tình nguyện viên</h3>
                    <p className="font-body-md text-body-md text-on-surface-variant mt-1">Tổ chức phỏng vấn trực tiếp tại văn phòng Đoàn - Hội để chọn lọc ứng viên phù hợp.</p>
                  </div>
                  {/* Timeline Item 3 */}
                  <div className="relative pl-8">
                    <div className="absolute w-4 h-4 bg-secondary rounded-full -left-[9px] top-1 border-4 border-surface shadow-sm"></div>
                    <div className="font-label-sm text-label-sm text-secondary font-bold mb-1">15/01/2024 (07:00)</div>
                    <h3 className="font-label-md text-label-md font-bold text-on-surface">Lễ Ra Quân</h3>
                    <p className="font-body-md text-body-md text-on-surface-variant mt-1">Tập trung toàn bộ chiến sĩ tại Sân vận động trường, làm lễ xuất quân tiến về các mặt trận.</p>
                  </div>
                </div>
              </div>

            </div>

            {/* Right Column (Sidebar) */}
            <div className="space-y-6">
              
              {/* Speakers / Guests */}
              <div className="glass-card rounded-[20px] p-6">
                <h2 className="font-headline-md text-headline-md text-primary mb-4 flex items-center gap-2" style={{ fontSize: '20px' }}>
                  <span className="material-symbols-outlined">stars</span>
                  Ban Chỉ Huy
                </h2>
                <div className="space-y-4">
                  <div className="flex items-center gap-4 p-3 rounded-xl hover:bg-surface-container transition-colors cursor-pointer">
                    <div className="w-14 h-14 rounded-full overflow-hidden border-2 border-primary/20">
                      <img alt="Nguyễn Văn A" className="w-full h-full object-cover" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBfQ_uvlzngifF-B_x0ZTMI1eVWO702yZqE7MTe_Ah2HYMGgXk5En8Lor_jUn77zddiuFVs7oMdAXlaX03qHCEnWve8h7zp802MMf_CcxZHVFJZ6XUOzI3-E_366SFZC_BVmu--yHkxeqT_XbwjmVg-7Jdmg3bmRV6o_-3oxaOMw6sKB9ljykeb6TfOXWcL2MSdv13aWw2aZQ975Xmha3GUuhHpLyzhYNYr8LkTbypIfW2rdXr6yEI9xQ" />
                    </div>
                    <div>
                      <h4 className="font-label-md text-label-md font-bold text-on-surface">Nguyễn Văn A</h4>
                      <p className="font-label-sm text-label-sm text-on-surface-variant">Chỉ huy trưởng</p>
                      <span className="inline-block mt-1 px-2 py-0.5 rounded text-[10px] font-semibold bg-tertiary-container/20 text-tertiary">BCH Hội SV</span>
                    </div>
                  </div>
                  
                  <div className="flex items-center gap-4 p-3 rounded-xl hover:bg-surface-container transition-colors cursor-pointer">
                    <div className="w-14 h-14 rounded-full overflow-hidden border-2 border-primary/20">
                      <img alt="Trần Thị B" className="w-full h-full object-cover" src="https://lh3.googleusercontent.com/aida-public/AB6AXuAMkmaePI0U6f11q9tT_Wt6qUyTBYhC9twEHaUorubPD57-XV3_Bv6RD8L_gQjS_y5zAQR7qnaKYi4OquVed1f8P2pC_SDBPUwR8G9d2azL4ZmEPvUxYJUJs4413jPaDhk3WFfZEBdaX2EOhHrYDM1sTEaiY-82JH_9FvUDBi5hgvAfqgds7DSg5JVZLuF_HF1CMcSG3oE0dAplUM445yEbf3wyYVoWFMYDgflW4V5ZW0qVZaJVuSii0Q" />
                    </div>
                    <div>
                      <h4 className="font-label-md text-label-md font-bold text-on-surface">Trần Thị B</h4>
                      <p className="font-label-sm text-label-sm text-on-surface-variant">Chỉ huy phó</p>
                      <span className="inline-block mt-1 px-2 py-0.5 rounded text-[10px] font-semibold bg-tertiary-container/20 text-tertiary">BCH Đoàn Trường</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Related Events */}
              <div className="glass-card rounded-[20px] p-6">
                <h2 className="font-headline-md text-headline-md text-on-surface mb-4" style={{ fontSize: '18px' }}>Sự kiện liên quan</h2>
                <div className="space-y-4">
                  {/* Related Event Card */}
                  <a className="group block bg-surface rounded-xl overflow-hidden border border-outline-variant/30 hover:border-primary/50 transition-all hover:shadow-md" href="#">
                    <div className="h-24 w-full relative">
                      <img alt="Ngày Chủ Nhật Xanh" className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" src="https://lh3.googleusercontent.com/aida-public/AB6AXuD-pc1GxJ6Z_isYZsi6Omec4i3wXwvK0lVZP44J9-6l0B5S_WYJNF_8AAAg1_bugVrrsVhAWCBrQjs_urXBi-ZEu_oG7GWP-Zt2v8H__KXsblDlDu8WlVuuVP8ribvD99bBffQjQpunkyDTlonVkgajp9zkmcPwLuZiDjCgq-kflNGcSBeY7ttVaaAN0YDsR9j6v99rzYJeRw0T6SjH2iSXM06C8COiCHlDLBdvIA0jV9FcefnY1d-0yw" />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                      <div className="absolute bottom-2 left-2 text-white font-label-sm text-label-sm">
                        Đang mở đăng ký
                      </div>
                    </div>
                    <div className="p-3">
                      <h4 className="font-label-md text-label-md font-bold text-on-surface group-hover:text-primary transition-colors line-clamp-2">Ngày Chủ Nhật Xanh - Làm sạch khuôn viên trường</h4>
                      <p className="text-[12px] text-on-surface-variant mt-1 flex items-center gap-1">
                        <span className="material-symbols-outlined text-[14px]">event</span> 05/12/2023
                      </p>
                    </div>
                  </a>

                  {/* Related Event Card */}
                  <a className="group block bg-surface rounded-xl overflow-hidden border border-outline-variant/30 hover:border-primary/50 transition-all hover:shadow-md" href="#">
                    <div className="h-24 w-full relative">
                      <img alt="Chung kết Hội diễn Văn nghệ" className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBsPXJWvUTODWD-gK_J8NR6-hnhIzQdU7mkNvzFTrs_hjuPwgX-7Zj7lA8HMspL8SD5wu5SKoRe4UQr7HR_xwiDCiAbQkPK508YPC1c53Bx5dqES2yvS0qbO5t_-HmMgE5f8HOr71MPb3Vid1LXeIcCMIE5Vytww6vM-wBlx2iHv9v3wsmOnrMLKwfpGiWJfQNo-qp-p0gCy2MKgz6KOgkiNsBxKucbnp6r9ZIjX9jAPFfCO09lKPlC0Q" />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                    </div>
                    <div className="p-3">
                      <h4 className="font-label-md text-label-md font-bold text-on-surface group-hover:text-primary transition-colors line-clamp-2">Chung kết Hội diễn Văn nghệ Chào Tân sinh viên</h4>
                      <p className="text-[12px] text-on-surface-variant mt-1 flex items-center gap-1">
                        <span className="material-symbols-outlined text-[14px]">event</span> 10/11/2023
                      </p>
                    </div>
                  </a>
                </div>
                <button className="w-full mt-4 text-primary font-label-sm text-label-sm font-semibold hover:bg-primary/5 py-2 rounded-lg transition-colors border border-primary/20">
                  Xem tất cả sự kiện
                </button>
              </div>

            </div>
          </div>
        </div>
        
        {/* Footer spacing */}
        <div className="h-12"></div>
      </main>
    </div>
  );
}
