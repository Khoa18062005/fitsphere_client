import React from 'react';
import { useNavigate } from 'react-router-dom';

export default function EventDetailPage() {
  const navigate = useNavigate();

  return (
    <div className="bg-background text-on-surface font-body-md antialiased overflow-x-hidden min-h-screen">
      {/* Back Button Bar */}
      <div className="w-full max-w-7xl mx-auto px-4 md:px-8 pt-6">
        <button 
          onClick={() => navigate(-1)}
          className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-surface-container-low hover:bg-surface-container-high text-on-surface transition-all font-label-md text-label-md shadow-sm border border-outline-variant/30 group cursor-pointer"
        >
          <span className="material-symbols-outlined text-[20px] group-hover:-translate-x-1 transition-transform">arrow_back</span>
          <span>Quay lại</span>
        </button>
      </div>

      {/* Main Content Area */}
      <main className="w-full relative min-h-screen">
        {/* Page Content */}
        <div className="w-full max-w-7xl mx-auto p-4 md:px-8 py-6 space-y-section-gap">
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
              <div className="glass-card rounded-[20px] p-6 md:pl-8 md:pr-7 md:py-8">
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
              <div className="glass-card rounded-[20px] p-6 md:pl-8 md:pr-7 md:py-8">
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
