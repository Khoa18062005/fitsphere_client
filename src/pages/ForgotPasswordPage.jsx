import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

export default function ForgotPasswordPage() {
  const navigate = useNavigate();
  const [email, setEmail] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Gửi yêu cầu khôi phục mật khẩu cho email:", email);
    navigate('/otp', { state: { email } });
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-600 via-blue-500 to-blue-800 relative overflow-hidden flex items-center justify-center p-4">

      {/* Centered Form Card */}
      <main className="w-full max-w-lg relative z-10 animate-fade-in-up">
        <div className="bg-white/95 backdrop-blur-xl rounded-[2.5rem] shadow-[0_20px_60px_-15px_rgba(0,0,0,0.3)] p-8 sm:p-12 flex flex-col items-center text-center selection:bg-blue-500/20 selection:text-blue-900">
          
          <div className="w-20 h-20 bg-blue-50 rounded-3xl flex items-center justify-center mb-8 text-blue-600 shadow-sm border border-blue-100">
            <span className="material-symbols-outlined text-[40px]">lock_reset</span>
          </div>
          
          <h2 className="font-display-sm text-[32px] leading-tight text-blue-700 font-extrabold tracking-tight mb-3 uppercase">
            Khôi phục Mật khẩu
          </h2>
          
          <p className="font-body-md text-gray-500 mb-8 px-2">
            Đừng lo lắng! Vui lòng nhập địa chỉ email liên kết với tài khoản của bạn. Chúng tôi sẽ gửi một mã OTP để giúp bạn đặt lại mật khẩu.
          </p>
          
          <form onSubmit={handleSubmit} className="w-full flex flex-col gap-6">
            <div className="flex flex-col gap-2 text-left">
              <label className="font-label-sm text-gray-600 ml-1 font-medium" htmlFor="email">
                Địa chỉ Email
              </label>
              <div className="relative group">
                <input 
                  className="w-full pl-12 pr-4 py-4 rounded-2xl border-2 border-gray-200 bg-gray-50/50 focus:bg-white focus:border-blue-500 focus:ring-4 focus:ring-blue-500/10 outline-none transition-all duration-300 font-body-md text-gray-800 hover:bg-white hover:border-blue-300 hover:shadow-md shadow-sm" 
                  id="email" 
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Hãy nhập email của bạn..." 
                  type="email" 
                  required
                />
                <span className="material-symbols-outlined absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 group-hover:text-blue-500 transition-colors duration-300">mail</span>
              </div>
            </div>
            
            <button type="submit" className="w-full bg-blue-600 text-white font-label-lg py-4 rounded-2xl hover:bg-blue-700 hover:shadow-lg hover:shadow-blue-600/30 transition-all duration-300 mt-2 hover:-translate-y-1 active:translate-y-0 flex items-center justify-center gap-2 group font-bold">
              <span>Gửi mã xác nhận</span>
              <span className="material-symbols-outlined text-[20px] group-hover:translate-x-1 transition-transform">arrow_forward</span>
            </button>
            
            <div className="mt-4 text-center">
              <button onClick={() => navigate('/welcome')} type="button" className="text-gray-500 hover:text-blue-600 font-label-md transition-colors flex items-center justify-center gap-2 mx-auto group font-medium">
                <span className="material-symbols-outlined text-[18px] group-hover:-translate-x-1 transition-transform">arrow_back</span>
                <span>Quay lại đăng nhập</span>
              </button>
            </div>
          </form>
        </div>
      </main>

    </div>
  );
}
