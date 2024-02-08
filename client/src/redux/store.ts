import { createSlice, configureStore, PayloadAction } from "@reduxjs/toolkit";

// Define the authSlice
const authSlice = createSlice({
  name: "auth",
  initialState: {
    isLogin: false,
  },
  reducers: {
    login(state) {
      state.isLogin = true;
    },
    logout(state) {
      state.isLogin = false;
    },
  },
});

// Export actions from the slice
export const { login, logout } = authSlice.actions;

// Define RootState type using ReturnType
export type RootState = ReturnType<typeof authSlice.reducer>;

// Create the store
export const store = configureStore({
  reducer: authSlice.reducer,
});