import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import WelcomePage from './pages/WelcomePage';
import HomePage from './pages/HomePage';
import UserProfilePage from './pages/UserProfilePage';
import AdminPage from './pages/AdminPage';
import PersonnelPage from './pages/PersonnelPage';
import EventDetailPage from './pages/EventDetailPage';
import ForgotPasswordPage from './pages/ForgotPasswordPage';
import OtpPage from './pages/OtpPage';
import ResetPasswordPage from './pages/ResetPasswordPage';
import UpdatePasswordPage from './pages/UpdatePasswordPage';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Navigate to="/welcome" replace />} />
        <Route path="/welcome" element={<WelcomePage />} />
        <Route path="/home" element={<HomePage />} />
        <Route path="/user-profile" element={<UserProfilePage />} />
        <Route path="/admin" element={<AdminPage />} />
        <Route path="/personnel" element={<PersonnelPage />} />
        <Route path="/event-detail" element={<EventDetailPage />} />
        <Route path="/forgot-password" element={<ForgotPasswordPage />} />
        <Route path="/otp" element={<OtpPage />} />
        <Route path="/reset-password" element={<ResetPasswordPage />} />
        <Route path="/update-password" element={<UpdatePasswordPage />} />
        {/* Missing YouthLeadershipPage since it has no code.html, adding fallback to home */}
        <Route path="*" element={<Navigate to="/welcome" replace />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
