import React, { useState } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';

export default function ResetPasswordPage() {
  const navigate = useNavigate();
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  // Password criteria logic
  const hasMinLength = password.length >= 8;
  const hasNumber = /\d/.test(password);
  const hasUppercase = /[A-Z]/.test(password);
  const hasSpecialChar = /[!@#$%^&*(),.?":{}|<>]/.test(password);
  
  const strengthCount = [hasMinLength, hasNumber, hasUppercase, hasSpecialChar].filter(Boolean).length;
  
  const getStrengthColor = (index) => {
    if (strengthCount === 0) return 'bg-gray-200';
    if (strengthCount === 1) return index < 1 ? 'bg-red-500' : 'bg-gray-200';
    if (strengthCount === 2) return index < 2 ? 'bg-orange-500' : 'bg-gray-200';
    if (strengthCount === 3) return index < 3 ? 'bg-yellow-500' : 'bg-gray-200';
    return 'bg-green-500';
  };

  const getStrengthText = () => {
    if (strengthCount === 0) return '';
    if (strengthCount === 1) return 'Yếu';
    if (strengthCount === 2) return 'Trung bình';
    if (strengthCount === 3) return 'Khá';
    return 'Mạnh';
  };

  const location = useLocation();
  const email = location.state?.email || '';
  const [isLoading, setIsLoading] = useState(false);
  const [errorMsg, setErrorMsg] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (strengthCount < 4) {
      setErrorMsg("Vui lòng đáp ứng đủ các tiêu chí mật khẩu mạnh!");
      return;
    }
    if (password !== confirmPassword) {
      setErrorMsg("Mật khẩu xác nhận không khớp!");
      return;
    }
    
    setIsLoading(true);
    setErrorMsg('');
    try {
      const response = await fetch('http://localhost:8080/api/auth/reset-password', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email, newPassword: password })
      });
      
      const data = await response.json();
      
      if (response.ok) {
        alert("Cập nhật mật khẩu thành công! Trở về trang đăng nhập.");
        navigate('/welcome');
      } else {
        setErrorMsg(data.error || 'Có lỗi xảy ra, vui lòng thử lại.');
      }
    } catch (err) {
      setErrorMsg('Không thể kết nối đến server.');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-600 via-blue-500 to-blue-800 relative overflow-hidden flex items-center justify-center p-4">

      {/* Centered Form Card */}
      <main className="w-full max-w-lg relative z-10 animate-fade-in-up">
        <div className="bg-white/95 backdrop-blur-xl rounded-[2.5rem] shadow-[0_20px_60px_-15px_rgba(0,0,0,0.3)] p-8 sm:p-12 flex flex-col items-center text-center selection:bg-blue-500/20 selection:text-blue-900">
          
          <div className="w-20 h-20 bg-blue-50 rounded-3xl flex items-center justify-center mb-8 text-blue-600 shadow-sm border border-blue-100">
            <span className="material-symbols-outlined text-[40px]">key</span>
          </div>
          
          <h2 className="font-display-sm text-[32px] leading-tight text-blue-700 font-extrabold tracking-tight mb-3 uppercase">
            Cập nhật Mật khẩu
          </h2>
          
          <p className="font-body-md text-gray-500 mb-8 px-2">
            Vui lòng nhập mật khẩu mới cho tài khoản của bạn. Đảm bảo mật khẩu đủ mạnh và dễ nhớ.
          </p>
          
          <form onSubmit={handleSubmit} className="w-full flex flex-col gap-6">
            <div className="flex flex-col gap-2 text-left">
              <label className="font-label-sm text-gray-600 ml-1 font-medium" htmlFor="password">
                Mật khẩu mới
              </label>
              <div className="relative group">
                <input 
                  className="w-full pl-12 pr-12 py-4 rounded-2xl border-2 border-gray-200 bg-gray-50/50 focus:bg-white focus:border-blue-500 focus:ring-4 focus:ring-blue-500/10 outline-none transition-all duration-300 font-body-md text-gray-800 hover:bg-white hover:border-blue-300 hover:shadow-md shadow-sm" 
                  id="password" 
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="Nhập mật khẩu mới..." 
                  type={showPassword ? "text" : "password"}
                  required
                />
                <span className="material-symbols-outlined absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 group-hover:text-blue-500 transition-colors duration-300 pointer-events-none">lock</span>
                <button 
                  type="button" 
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400 hover:text-blue-500 transition-colors duration-300 focus:outline-none flex items-center justify-center p-1"
                >
                  <span className="material-symbols-outlined text-[20px]">{showPassword ? 'visibility' : 'visibility_off'}</span>
                </button>
              </div>
              
              {/* Password Strength and Criteria */}
              <div className="flex flex-col gap-2 mt-1">
                <div className="h-1.5 w-full bg-gray-200 rounded-full overflow-hidden">
                  <div 
                    className={`h-full transition-all duration-300 ${
                      strengthCount === 1 ? 'bg-red-500 w-1/4' :
                      strengthCount === 2 ? 'bg-orange-500 w-2/4' :
                      strengthCount === 3 ? 'bg-yellow-500 w-3/4' :
                      strengthCount === 4 ? 'bg-green-500 w-full' : 'w-0'
                    }`} 
                  />
                </div>
                
                <div className="flex justify-between items-center w-full">
                  <div className={`flex items-center gap-1 text-[10px] sm:text-[11px] whitespace-nowrap transition-colors duration-300 ${hasMinLength ? 'text-green-600 font-bold' : 'text-gray-400'}`}>
                    <span className="material-symbols-outlined text-[12px] sm:text-[14px]">
                      {hasMinLength ? 'check_circle' : 'radio_button_unchecked'}
                    </span>
                    8+ ký tự
                  </div>
                  <div className={`flex items-center gap-1 text-[10px] sm:text-[11px] whitespace-nowrap transition-colors duration-300 ${hasUppercase ? 'text-green-600 font-bold' : 'text-gray-400'}`}>
                    <span className="material-symbols-outlined text-[12px] sm:text-[14px]">
                      {hasUppercase ? 'check_circle' : 'radio_button_unchecked'}
                    </span>
                    Chữ hoa
                  </div>
                  <div className={`flex items-center gap-1 text-[10px] sm:text-[11px] whitespace-nowrap transition-colors duration-300 ${hasNumber ? 'text-green-600 font-bold' : 'text-gray-400'}`}>
                    <span className="material-symbols-outlined text-[12px] sm:text-[14px]">
                      {hasNumber ? 'check_circle' : 'radio_button_unchecked'}
                    </span>
                    Chữ số
                  </div>
                  <div className={`flex items-center gap-1 text-[10px] sm:text-[11px] whitespace-nowrap transition-colors duration-300 ${hasSpecialChar ? 'text-green-600 font-bold' : 'text-gray-400'}`}>
                    <span className="material-symbols-outlined text-[12px] sm:text-[14px]">
                      {hasSpecialChar ? 'check_circle' : 'radio_button_unchecked'}
                    </span>
                    Ký tự đặc biệt
                  </div>
                </div>
              </div>
            </div>
            
            <div className="flex flex-col gap-2 text-left">
              <label className="font-label-sm text-gray-600 ml-1 font-medium" htmlFor="confirmPassword">
                Xác nhận mật khẩu
              </label>
              <div className="relative group">
                <input 
                  className="w-full pl-12 pr-12 py-4 rounded-2xl border-2 border-gray-200 bg-gray-50/50 focus:bg-white focus:border-blue-500 focus:ring-4 focus:ring-blue-500/10 outline-none transition-all duration-300 font-body-md text-gray-800 hover:bg-white hover:border-blue-300 hover:shadow-md shadow-sm" 
                  id="confirmPassword" 
                  value={confirmPassword}
                  onChange={(e) => setConfirmPassword(e.target.value)}
                  placeholder="Nhập lại mật khẩu mới..." 
                  type={showConfirmPassword ? "text" : "password"}
                  required
                />
                <span className="material-symbols-outlined absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 group-hover:text-blue-500 transition-colors duration-300 pointer-events-none">password</span>
                <button 
                  type="button" 
                  onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                  className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400 hover:text-blue-500 transition-colors duration-300 focus:outline-none flex items-center justify-center p-1"
                >
                  <span className="material-symbols-outlined text-[20px]">{showConfirmPassword ? 'visibility' : 'visibility_off'}</span>
                </button>
              </div>
            </div>
            
            {errorMsg && (
              <div className="text-red-500 text-sm bg-red-50 p-3 rounded-xl border border-red-100 flex items-center justify-center gap-2">
                <span className="material-symbols-outlined text-[18px]">error</span>
                {errorMsg}
              </div>
            )}

            <button type="submit" disabled={isLoading || strengthCount < 4} className="w-full bg-blue-600 text-white font-label-lg py-4 rounded-2xl hover:bg-blue-700 hover:shadow-lg hover:shadow-blue-600/30 transition-all duration-300 hover:-translate-y-1 active:translate-y-0 flex items-center justify-center gap-2 group font-bold disabled:opacity-70 disabled:pointer-events-none mt-2">
              <span>{isLoading ? 'Đang cập nhật...' : 'Cập nhật Mật khẩu'}</span>
              {!isLoading && <span className="material-symbols-outlined text-[20px] group-hover:scale-110 transition-transform">check_circle</span>}
              {isLoading && <span className="material-symbols-outlined text-[20px] animate-spin">progress_activity</span>}
            </button>
            
          </form>
        </div>
      </main>

    </div>
  );
}
