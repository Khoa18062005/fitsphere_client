import React, { useState, useEffect } from 'react';
import { useNavigate, useParams, useLocation } from 'react-router-dom';
import { useSidebar } from '../hooks/useSidebar';
import SideNavBar from '../components/SideNavBar';
import TopNavBar from '../components/TopNavBar';

const getRoleInfo = (user) => {
  let roleName = user?.roles?.[0]?.name || user?.systemRoles?.[0];
  let description = user?.roles?.[0]?.description;

  if (!description) {
    if (roleName === 'ROLE_BCH') description = 'Ban Chấp Hành';
    else if (roleName === 'ROLE_CTV') description = 'Cộng Tác Viên';
    else description = 'Sinh Viên';
  }

  if (roleName === 'ROLE_BCH') {
    return {
      description,
      icon: 'verified_user',
      badgeClass: 'bg-red-500/10 text-red-600 border border-red-500/20'
    };
  } else if (roleName === 'ROLE_CTV') {
    return {
      description,
      icon: 'volunteer_activism',
      badgeClass: 'bg-blue-500/10 text-blue-600 border border-blue-500/20'
    };
  } else {
    return {
      description,
      icon: 'school',
      badgeClass: 'bg-slate-500/10 text-slate-600 border border-slate-500/20'
    };
  }
};

const getUserPositionsList = (user) => {
  if (user?.positions && user.positions.length > 0) {
    return user.positions.map(p => ({
      positionName: p.positionName,
      unitName: p.unitName,
      term: p.term
    }));
  }
  if (user?.userPositions && user.userPositions.length > 0) {
    return user.userPositions.map(up => ({
      positionName: up.position?.name,
      unitName: up.unit?.name,
      term: up.term
    }));
  }
  if (user?.currentPosition?.positionName || user?.position) {
    return [{
      positionName: user.currentPosition?.positionName || user.position,
      unitName: user.currentPosition?.unitName || user.department || "Khoa Công nghệ Thông tin",
      term: null
    }];
  }
  return [];
};

const getUserPosition = (user) => {
  const list = getUserPositionsList(user);
  if (list.length > 0) {
    const uniquePositions = [...new Set(list.map(p => p.positionName).filter(Boolean))];
    return uniquePositions.join(', ');
  }
  return "Chưa cập nhật";
};

const getUserUnit = (user) => {
  const list = getUserPositionsList(user);
  if (list.length > 0) {
    const uniqueUnits = [...new Set(list.map(p => p.unitName).filter(Boolean))];
    return uniqueUnits.join(', ');
  }
  return user?.department || "Khoa Công nghệ Thông tin";
};

const getUserEmail = (user) => {
  if (user?.email) return user.email;
  if (user?.studentId) return `${user.studentId}@student.hcmute.edu.vn`;
  return "Đang cập nhật";
};

export default function UserProfilePage() {
  const navigate = useNavigate();
  const { id } = useParams();
  const location = useLocation();
  const { isCollapsed } = useSidebar();
  const [user, setUser] = useState(null);

  const loggedInUser = JSON.parse(localStorage.getItem('user') || 'null');
  
  // Kiểm tra xem đây có phải trang hồ sơ của chính mình hay không
  const isOwnProfile = !id || (loggedInUser && (String(loggedInUser.id) === String(id) || String(loggedInUser.userId) === String(id)));

  useEffect(() => {
    // 1. Xem trang chính mình (/user-profile)
    if (!id) {
      if (loggedInUser) {
        setUser(loggedInUser);
      } else {
        navigate('/welcome');
      }
      return;
    }

    // 2. ID trên URL chính là bản thân
    if (loggedInUser && (String(loggedInUser.id) === String(id) || String(loggedInUser.userId) === String(id))) {
      setUser(loggedInUser);
      return;
    }

    // 3. Xem đồng chí khác - khởi tạo ngay từ state nếu có truyền qua từ trang Nhân sự
    if (location.state?.member) {
      // Loại bỏ currentPosition cục bộ của card để luôn hiển thị đầy đủ mọi chức danh
      const { currentPosition, ...cleanMember } = location.state.member;
      setUser(cleanMember);
    }

    // 4. Đồng thời gọi API lấy thông tin chi tiết nhất từ Server
    const fetchUserProfile = async () => {
      try {
        const response = await fetch(`http://localhost:8080/api/users/${id}`);
        if (response.ok) {
          const data = await response.json();
          setUser(prev => ({ ...(prev || {}), ...data }));
          return;
        }
      } catch (err) {
        console.warn("Chưa tải được từ /api/users, đang thử qua /api/organization/members:", err);
      }

      // Fallback: lấy từ /api/organization/members để đảm bảo dữ liệu luôn hiển thị đầy đủ ngay cả khi server chưa restart
      try {
        const res = await fetch(`http://localhost:8080/api/organization/members`);
        if (res.ok) {
          const membersList = await res.json();
          const found = membersList.find(m => String(m.userId) === String(id));
          if (found) {
            setUser(prev => ({ ...(prev || {}), ...found }));
          }
        }
      } catch (err) {
        console.error("Lỗi khi tải thông tin nhân sự:", err);
      }
    };

    fetchUserProfile();
  }, [id, location.state]);

  const roleInfo = getRoleInfo(user);

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
      <div className={`flex flex-col h-full relative z-10 transition-all duration-300 ${isCollapsed ? 'md:ml-20 w-full md:w-[calc(100%-5rem)]' : 'md:ml-72 w-full md:w-[calc(100%-18rem)]'}`}>
      
      {/* TopNavBar */}
      <TopNavBar />
      <main className="flex-1 overflow-y-auto w-full p-4 md:pl-8 md:pr-7 md:py-8">
        <div className="w-full mx-auto flex flex-col gap-section-gap pb-24 md:pb-8">
        {/* Profile Header */}
        <section className="glass-card rounded-xl p-6 md:pl-8 md:pr-7 md:py-8 flex flex-col md:flex-row items-center md:items-start gap-6 relative overflow-hidden">
          {/* Decorative background element */}
          <div className="absolute -top-24 -right-24 w-64 h-64 bg-primary/10 rounded-full blur-3xl pointer-events-none"></div>
          <div className="relative shrink-0">
            <img className="w-32 h-32 md:w-40 md:h-40 rounded-full object-cover border-4 border-surface shadow-md" alt="Portrait" referrerPolicy="no-referrer" src={user?.avatarUrl || "https://lh3.googleusercontent.com/aida-public/AB6AXuD5kEp81S7bzVCWYw7EwUaRz9dgvENf6Er2fZb-gqeTzywwKAyVdky9TVZz0fkw3mGIBTUd0r0Lyk4yZyqs9XUZmJB1C_jn8KJIeGWTNgXlFQxINgW_8Dkzyvg6UtFGreFJ6ll71-4m1jlvgieac4Q7lrj8kthZkl1ENng56JH3BjnVwl6mgn7ToxbSTPt_IyziTq5jo1ZPE8_FlwFkwAigxCnCmyPffEhn6oA0RGDYWzntIp_4ESoXlA"} />
            <div className="absolute bottom-1 right-1 bg-primary text-on-primary rounded-full p-1 border-2 border-surface flex items-center justify-center">
              <span className="material-symbols-outlined text-[16px]">verified</span>
            </div>
          </div>
          <div className="flex-1 text-center md:text-left flex flex-col items-center md:items-start gap-2 z-10">
            <div className={`inline-flex items-center gap-1.5 font-label-sm text-label-sm px-3.5 py-1 rounded-full font-bold shadow-xs ${roleInfo.badgeClass}`}>
              <span className="material-symbols-outlined text-[15px]">{roleInfo.icon}</span> {roleInfo.description}
            </div>
            <h1 className="font-headline-lg-mobile text-headline-lg-mobile md:font-display-lg md:text-display-lg text-primary mt-1 font-black">{user?.fullName || "Người dùng ẩn danh"}</h1>
            <p className="font-body-md text-body-md text-on-surface-variant flex items-center gap-1 mt-1">
              <span className="material-symbols-outlined text-[18px]">wc</span> Giới tính: {user?.gender || "Chưa cập nhật"}
            </p>
            <p className="font-body-md text-body-md text-on-surface-variant flex items-center gap-1 mt-1">
              <span className="material-symbols-outlined text-[18px]">work</span> Chức vụ: {getUserPosition(user)}
            </p>
          </div>
          {isOwnProfile ? (
            <div className="mt-4 md:mt-0 shrink-0 z-10 flex flex-col gap-2">
              <button className="bg-primary text-on-primary font-label-md text-label-md px-6 py-3 rounded-lg hover:bg-surface-tint transition-colors flex items-center gap-2 shadow-sm shadow-primary/20 cursor-pointer">
                <span className="material-symbols-outlined text-[20px]">edit</span> Chỉnh sửa
              </button>
              <button onClick={() => navigate('/update-password')} className="bg-white text-primary border border-primary/30 font-label-md text-label-md px-6 py-3 rounded-lg hover:bg-primary/5 transition-colors flex items-center gap-2 shadow-sm cursor-pointer">
                <span className="material-symbols-outlined text-[20px]">password</span> Thiết lập mật khẩu
              </button>
              <button onClick={handleLogout} className="bg-error text-on-error font-label-md text-label-md px-6 py-3 rounded-lg hover:bg-error/90 transition-colors flex items-center gap-2 shadow-sm shadow-error/20 cursor-pointer">
                <span className="material-symbols-outlined text-[20px]">logout</span> Đăng xuất
              </button>
            </div>
          ) : (
            <div className="mt-4 md:mt-0 shrink-0 z-10 flex flex-col gap-2">
              <button 
                onClick={() => navigate(-1)} 
                className="bg-primary hover:bg-primary/90 text-white font-label-md text-label-md px-6 py-3 rounded-xl transition-all flex items-center gap-2 shadow-sm shadow-primary/20 hover:scale-[1.02] cursor-pointer"
              >
                <span className="material-symbols-outlined text-[20px]">arrow_back</span> Quay lại
              </button>
            </div>
          )}
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
              {isOwnProfile ? (
                "Sinh viên trường Đại học Sư phạm Kỹ thuật TP.HCM. Tích cực tham gia các hoạt động Đoàn - Hội để rèn luyện kỹ năng mềm và mở rộng mối quan hệ. Đam mê học hỏi và ứng dụng công nghệ."
              ) : (
                `Đồng chí ${user?.fullName || ""} hiện đang đảm nhiệm chức danh ${getUserPosition(user)} tại ${getUserUnit(user)}. Tích cực tham gia lãnh đạo, tổ chức và cống hiến cho công tác Đoàn và phong trào thanh niên - sinh viên khoa Công nghệ Thông tin.`
              )}
            </p>

            {/* Danh sách các chức vụ đảm nhiệm */}
            {getUserPositionsList(user).length > 0 && (
              <div className="mt-6 pt-5 border-t border-outline-variant/30">
                <h4 className="font-title-sm text-title-sm text-on-surface mb-3 flex items-center gap-2 font-bold">
                  <span className="material-symbols-outlined text-primary text-[20px]">assignment_ind</span>
                  Chức vụ & Đơn vị công tác
                </h4>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {getUserPositionsList(user).map((pos, idx) => (
                    <div key={idx} className="bg-surface-container/60 rounded-xl p-3.5 border border-outline-variant/30 flex flex-col gap-1.5 hover:border-primary/50 transition-colors shadow-xs">
                      <div className="flex items-center justify-between gap-2">
                        <span className="font-bold text-primary text-sm">{pos.positionName}</span>
                        {pos.term && (
                          <span className="text-[11px] bg-primary/10 text-primary px-2.5 py-0.5 rounded-full font-medium shrink-0">
                            {pos.term}
                          </span>
                        )}
                      </div>
                      <div className="text-xs text-on-surface-variant flex items-center gap-1.5">
                        <span className="material-symbols-outlined text-[15px] text-primary/70">domain</span>
                        {pos.unitName}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}
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
                <div className="font-body-md text-body-md text-on-surface truncate">{getUserEmail(user)}</div>
              </div>
            </div>
            {user?.studentId && (
              <div className="flex items-center gap-4">
                <div className="w-10 h-10 rounded-full bg-surface-container-highest flex items-center justify-center text-primary shrink-0">
                  <span className="material-symbols-outlined text-[20px]">badge</span>
                </div>
                <div>
                  <div className="font-label-sm text-label-sm text-on-surface-variant">Mã số sinh viên</div>
                  <div className="font-body-md text-body-md text-on-surface font-mono font-medium">{user.studentId}</div>
                </div>
              </div>
            )}
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
                <div className="font-body-md text-body-md text-on-surface">{getUserUnit(user)}</div>
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
