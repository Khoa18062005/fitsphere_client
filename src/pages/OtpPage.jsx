import React, { useState, useRef, useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';

export default function OtpPage() {
  const navigate = useNavigate();
  const location = useLocation();
  const email = location.state?.email || 'email@example.com';
  
  const [otp, setOtp] = useState(new Array(6).fill(''));
  const inputRefs = useRef([]);

  useEffect(() => {
    if (inputRefs.current[0]) {
      inputRefs.current[0].focus();
    }
  }, []);

  const handleChange = (element, index) => {
    if (isNaN(element.value)) return false;

    setOtp([...otp.map((d, idx) => (idx === index ? element.value : d))]);

    // Focus next input
    if (element.nextSibling && element.value !== '') {
      element.nextSibling.focus();
    }
  };

  const handleKeyDown = (e, index) => {
    // Tự động lùi về ô trước đó khi nhấn Backspace nếu ô hiện tại trống
    if (e.key === 'Backspace' && otp[index] === '' && index > 0) {
      inputRefs.current[index - 1].focus();
    }
  };

  const [isLoading, setIsLoading] = useState(false);
  const [errorMsg, setErrorMsg] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    const otpValue = otp.join('');
    if (otpValue.length === 6) {
      setIsLoading(true);
      setErrorMsg('');
      try {
        const response = await fetch('http://localhost:8080/api/auth/verify-otp', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ email, otp: otpValue })
        });
        
        const data = await response.json();
        
        if (response.ok) {
          // Gửi kèm email sang trang reset-password để dùng
          navigate('/reset-password', { state: { email } });
        } else {
          setErrorMsg(data.error || 'OTP không hợp lệ hoặc đã hết hạn.');
        }
      } catch (err) {
        setErrorMsg('Không thể kết nối đến server.');
      } finally {
        setIsLoading(false);
      }
    } else {
      setErrorMsg("Vui lòng nhập đủ 6 số OTP");
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-600 via-blue-500 to-blue-800 relative overflow-hidden flex items-center justify-center p-4">

      {/* Centered Form Card */}
      <main className="w-full max-w-[540px] relative z-10 animate-fade-in-up">
        <div className="bg-white/95 backdrop-blur-xl rounded-[2.5rem] shadow-[0_20px_60px_-15px_rgba(0,0,0,0.3)] p-8 sm:p-12 flex flex-col items-center text-center selection:bg-blue-500/20 selection:text-blue-900">
          
          <div className="w-20 h-20 bg-blue-50 rounded-3xl flex items-center justify-center mb-8 text-blue-600 shadow-sm border border-blue-100">
            <span className="material-symbols-outlined text-[40px]">mark_email_read</span>
          </div>
          
          <h2 className="font-display-sm text-[32px] leading-tight text-blue-700 font-extrabold tracking-tight mb-3 uppercase">
            Xác thực Mã OTP
          </h2>
          
          <p className="font-body-md text-gray-500 mb-10 px-2 flex flex-col gap-1">
            <span>Chúng tôi đã gửi một mã gồm 6 chữ số đến email</span>
            <span className="font-bold text-blue-600 text-lg">{email}</span>
            <span>Vui lòng kiểm tra hộp thư kể cả hộp thư rác</span>
          </p>
          
          <form onSubmit={handleSubmit} className="w-full flex flex-col gap-8">
            <div className="flex flex-col gap-4">
              <div className="flex justify-between items-center gap-2 sm:gap-3">
                {otp.map((data, index) => {
                  return (
                    <input
                      key={index}
                      type="text"
                      maxLength="1"
                      ref={(el) => (inputRefs.current[index] = el)}
                      value={data}
                      onChange={(e) => handleChange(e.target, index)}
                      onKeyDown={(e) => handleKeyDown(e, index)}
                      className="w-12 h-14 sm:w-[60px] sm:h-[72px] text-center font-display-sm text-2xl font-extrabold rounded-2xl border-2 border-gray-200 bg-gray-50/50 focus:bg-white focus:border-blue-500 focus:ring-4 focus:ring-blue-500/10 outline-none transition-all duration-300 text-gray-800 hover:bg-white hover:border-blue-300 hover:shadow-md shadow-sm"
                    />
                  );
                })}
              </div>
            </div>
            
            {errorMsg && (
              <div className="text-red-500 text-sm bg-red-50 p-3 rounded-xl border border-red-100 flex items-center justify-center gap-2">
                <span className="material-symbols-outlined text-[18px]">error</span>
                {errorMsg}
              </div>
            )}
            
            <button type="submit" disabled={isLoading} className="w-full bg-blue-600 text-white font-label-lg py-4 rounded-2xl hover:bg-blue-700 hover:shadow-lg hover:shadow-blue-600/30 transition-all duration-300 hover:-translate-y-1 active:translate-y-0 flex items-center justify-center gap-2 group font-bold disabled:opacity-70 disabled:pointer-events-none">
              <span>{isLoading ? 'Đang xác thực...' : 'Xác thực OTP'}</span>
              {!isLoading && <span className="material-symbols-outlined text-[20px] group-hover:scale-110 transition-transform">check_circle</span>}
              {isLoading && <span className="material-symbols-outlined text-[20px] animate-spin">progress_activity</span>}
            </button>
            
            <div className="mt-2 flex flex-col items-center gap-4">
              <p className="text-gray-500 font-body-sm flex items-center gap-1 font-medium">
                Chưa nhận được mã?{' '}
                <button type="button" className="text-blue-600 font-bold hover:underline">
                  Gửi lại
                </button>
              </p>
              
              <button
                type="button"
                onClick={() => navigate('/forgot-password')}
                className="text-gray-500 hover:text-blue-600 font-label-md transition-colors flex items-center gap-2 group font-medium"
              >
                <span className="material-symbols-outlined text-[18px] group-hover:-translate-x-1 transition-transform">arrow_back</span>
                Đổi email khác
              </button>
            </div>
          </form>
        </div>
      </main>

    </div>
  );
}
