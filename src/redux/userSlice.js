import { createSlice } from '@reduxjs/toolkit';

// Thử lấy user từ localStorage ra trước nếu người dùng f5 lại trang
const savedUser = JSON.parse(localStorage.getItem('user'));

const initialState = {
  currentUser: savedUser || null,
  isAuthenticated: !!savedUser,
};

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    loginSuccess: (state, action) => {
      state.currentUser = action.payload; // action.payload chứa thông tin user (email, name, token, v.v.)
      state.isAuthenticated = true;
    },
    logout: (state) => {
      state.currentUser = null;
      state.isAuthenticated = false;
      localStorage.removeItem('user');
      localStorage.removeItem('token');
    },
    updateUser: (state, action) => {
      // Cập nhật một số thông tin (ví dụ user vừa thiết lập mật khẩu)
      if (state.currentUser) {
        state.currentUser = { ...state.currentUser, ...action.payload };
      }
    }
  },
});

export const { loginSuccess, logout, updateUser } = userSlice.actions;
export default userSlice.reducer;
