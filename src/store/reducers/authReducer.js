// src/store/reducers/authReducer.js
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

// 1) Define the thunk as a named export
export const admin_login = createAsyncThunk(
  'auth/admin_login',
  async (info) => {
    console.log("INFO",info);
    try {
      // Replace the fake response below with your real API call.
      // e.g. const res = await axios.post('/api/admin/login', formData);
      // return res.data;
      
    } catch (err) {
      
    }
  }
);

// 2) The slice
const authSlice = createSlice({
  name: 'auth',
  initialState: {
    successMessage: '',
    errorMessage: '',
    loader: false,
    userInfo: '',
  },
  reducers: {
    // optional sync actions
    clearAuthState(state) {
      state.successMessage = '';
      state.errorMessage = '';
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(admin_login.pending, (state) => {
        state.loader = true;
        state.errorMessage = '';
      })
      .addCase(admin_login.fulfilled, (state, action) => {
        state.loader = false;
        state.userInfo = action.payload;
        state.successMessage = 'Logged in';
      })
      .addCase(admin_login.rejected, (state, action) => {
        state.loader = false;
        state.errorMessage = action.payload || action.error?.message || 'Login failed';
      });
  },
});

// 3) Exports
export const { clearAuthState } = authSlice.actions;
export default authSlice.reducer;
