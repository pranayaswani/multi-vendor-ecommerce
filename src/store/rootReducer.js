// src/store/reducers/authReducer.js
import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  successMessage: '',
  errorMessage: '',
  loader: false,
  userInfo: '',
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    // add reducers here if needed
    setUserInfo(state, action) {
      state.userInfo = action.payload;
    },
    // ...
  },
  extraReducers: (builder) => {
    // builder.addCase(...) if needed
  },
}); 

export const { setUserInfo } = authSlice.actions;
export default authSlice.reducer;
