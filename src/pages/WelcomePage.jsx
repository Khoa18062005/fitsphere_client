import React from 'react';
import logo from '../assets/logo.png';

export default function WelcomePage() {
  return (
    <div className="min-h-screen bg-surface-bright relative overflow-hidden flex flex-col selection:bg-primary/20 selection:text-primary">

      {/* Atmospheric Dynamic Background Elements */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none z-0">
        <div className="absolute top-[-10%] left-[-10%] w-[600px] h-[600px] bg-primary/15 rounded-full mix-blend-multiply filter blur-[100px] animate-blob"></div>
        <div className="absolute top-[20%] right-[-10%] w-[500px] h-[500px] bg-secondary-container/15 rounded-full mix-blend-multiply filter blur-[100px] animate-blob animation-delay-2000"></div>
        <div className="absolute bottom-[-20%] left-[20%] w-[700px] h-[700px] bg-tertiary-container/10 rounded-full mix-blend-multiply filter blur-[100px] animate-blob animation-delay-4000"></div>
      </div>
      
      {/* Header / Logo Area */}
      <header className="w-full px-8 py-6 relative z-20 flex items-center justify-between max-w-[1400px] mx-auto">
        <div className="flex items-center gap-4 sm:gap-5">
          <div className="flex items-center gap-3">
            <div className="h-12 sm:h-14 flex items-center justify-center flex-shrink-0">
              <img alt="Faculty Logo" className="h-full w-auto object-contain" src={logo} />
            </div>
            {/* Vertical Divider */}
            <div className="h-10 w-[2px] bg-primary rounded-full hidden sm:block"></div>
          </div>
          <div className="flex flex-col">
            <span className="font-label-md text-label-md text-primary font-extrabold tracking-tight uppercase">Trường ĐH Công nghệ Kỹ thuật Thành phố Hồ Chí Minh</span>
            <h1 className="font-headline-md text-[16px] text-primary font-extrabold tracking-tight uppercase">Đoàn - Hội Khoa Công nghệ Thông tin</h1>
          </div>
        </div>
      </header>
      
      {/* Main Content Area */}
      {/* Main Content Area */}
      <main className="flex-1 flex w-full max-w-[1400px] mx-auto justify-center items-center px-8 lg:px-12 relative z-10 py-8 lg:py-12">
        <div className="flex w-full flex-col lg:flex-row gap-16 lg:gap-12 xl:gap-24 items-stretch justify-between">
          
          {/* Hero Section (Left) */}
          <div className="flex-1 flex flex-col justify-center items-center text-center w-full">
            <h2 className="font-display-lg text-[40px] md:text-display-lg leading-[1.2] md:leading-[56px] text-on-surface font-extrabold tracking-tight mb-6">
              Chào mừng đến với <br />
              <span className="text-primary">Cổng thông tin Đoàn - Hội</span>
            </h2>
            <p className="font-body-lg text-body-lg text-on-surface-variant mb-10 max-w-xl">
              Nơi kết nối sức trẻ, khơi dậy tiềm năng lãnh đạo và kiến tạo những giá trị cộng đồng bền vững. Tham gia cùng chúng tôi để phát triển bản thân và lan tỏa yêu thương.
            </p>
            <div className="w-full flex flex-col gap-4 max-w-[500px]">
              <div className="flex flex-col gap-2 text-left">
                <label className="font-label-sm text-on-surface-variant ml-1 flex items-center gap-2" htmlFor="email">
                  <span className="material-symbols-outlined text-[18px]">mail</span>
                  Email
                </label>
                <input className="w-full px-4 py-3 rounded-xl border border-outline-variant/20 bg-white focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-all duration-300 font-body-md text-on-surface" id="email" placeholder="your@email.com" type="email" />
              </div>
              <div className="flex flex-col gap-2 text-left">
                <label className="font-label-sm text-on-surface-variant ml-1 flex items-center gap-2" htmlFor="password">
                  <span className="material-symbols-outlined text-[18px]">lock</span>
                  Mật khẩu
                </label>
                <input className="w-full px-4 py-3 rounded-xl border border-outline-variant/20 bg-white focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-all duration-300 font-body-md text-on-surface" id="password" placeholder="••••••••" type="password" />
              </div>
              <button className="w-full bg-primary text-on-primary font-label-md py-3 rounded-xl hover:shadow-md transition-all duration-300 mt-2 hover:bg-surface-tint">
                Đăng nhập
              </button>
              <div className="text-right">
                <a className="text-label-sm text-primary hover:underline" href="#">Quên mật khẩu?</a>
              </div>
              <div className="flex items-center gap-4 my-2">
                <div className="flex-1 h-[1px] bg-outline-variant/20"></div>
                <span className="text-label-sm text-on-surface-variant/70">Hoặc</span>
                <div className="flex-1 h-[1px] bg-outline-variant/20"></div>
              </div>
              <button className="flex items-center justify-center gap-3 bg-white border border-outline-variant/20 px-8 py-3 rounded-xl shadow-sm hover:shadow-md hover:bg-surface-bright transition-all duration-300 group w-full">
                <svg className="w-5 h-5 group-hover:scale-110 transition-transform" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4"></path>
                  <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-1 .67-2.28 1.07-3.71 1.07-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"></path>
                  <path d="M5.84 14.11c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.09H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.91l3.66-2.8z" fill="#FBBC05"></path>
                  <path d="M12 5.38c1.62 0 3.06.56 4.21 1.66l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.09l3.66 2.8c.87-2.6 3.3-4.51 6.16-4.51z" fill="#EA4335"></path>
                </svg>
                <span className="font-label-md text-on-surface">Đăng nhập bằng Google</span>
              </button>
              <button className="flex items-center justify-center gap-2 border border-primary text-primary px-8 py-3 rounded-xl hover:bg-primary/5 transition-all duration-300 w-full group">
                <span className="material-symbols-outlined text-[20px] group-hover:text-surface-tint">visibility</span>
                <span className="font-label-md group-hover:text-surface-tint">Xem ở chế độ khách</span>
              </button>
            </div>
          </div>

          {/* Login Card (Right) */}
          <div className="w-full max-w-[480px] flex-shrink-0 lg:ml-auto relative group rounded-[32px] overflow-hidden shadow-[0_8px_32px_0_rgba(0,91,191,0.12)] hover:shadow-[0_16px_64px_0_rgba(0,91,191,0.2)] transition-all duration-500 border-4 border-white/60">
            {/* Dynamic overlay gradient on hover */}
            <div className="absolute inset-0 bg-gradient-to-t from-primary/80 via-primary/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-10 pointer-events-none"></div>
            
            {/* Glowing orb effect behind image */}
            <div className="absolute inset-0 bg-primary/20 mix-blend-overlay z-10 group-hover:opacity-0 transition-opacity duration-500 pointer-events-none"></div>

            {/* Image with zoom effect */}
            <img 
              alt="Youth Union Event" 
              className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 ease-out" 
              src="https://lh3.googleusercontent.com/aida/AP1WRLvF0QO9Io0qUZtiT8XBUiSrZiFIZAkAmyEUWyrrUg1qwUCrjx60vRFsPdHrnRAhFmngCvu4XDZ8eIE_DXU4sYO8EMBIILg_nhhlbmRyw5jETXjJ4T6e2w4UA_14X4RTj9qhnBQQ6NUKnaCe3aXrnV18q-Vu-MCRZ01aJLUomDZe1hy3QJ7RktAUfsZTzgZUjggBy0SEhPPWWu0ZFMAhzI_7lecdnfYlPSVN7AjaCTcHnoRAu3H6gkYsapt9" 
            />
            
            {/* Decorative badge that slides up on hover */}
            <div className="absolute bottom-6 left-6 right-6 translate-y-12 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500 ease-out z-20 pointer-events-none">
              <div className="glass-card px-6 py-4 rounded-2xl flex items-center justify-between border border-white/60 shadow-xl backdrop-blur-xl">
                <div className="flex flex-col text-left">
                  <span className="font-label-sm text-primary font-bold uppercase tracking-wider mb-1">Thanh niên</span>
                  <span className="font-headline-md text-[18px] text-on-surface font-semibold leading-tight">Sáng tạo & Đột phá</span>
                </div>
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center text-primary shadow-sm">
                  <span className="material-symbols-outlined text-[24px]">arrow_forward</span>
                </div>
              </div>
            </div>
          </div>

        </div>
      </main>
      
      {/* Footer Area */}
      <footer className="w-full text-center py-6 px-gutter relative z-10 text-on-surface-variant/70 mt-auto">
        <p className="font-label-sm text-label-sm">
          Hệ thống Quản trị Nội bộ © 2024<br className="md:hidden" />
          <span className="hidden md:inline"> • </span> 
          Phát triển bởi Ban Chấp hành Đoàn - Hội Khoa
        </p>
      </footer>

    </div>
  );
}
