import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  loginUser: null,
  isLogin: false,
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    isLoggedIn: (state, action) => {
      state.loginUser = action.payload;
      state.isLogin = true;
    },
    logOut: (state) => {
      state.isLogin = false;
      state.loginUser = null;
    },
  },
});

export const { isLoggedIn, logOut } = authSlice.actions;
export default authSlice.reducer;
