import { createSlice } from "@reduxjs/toolkit";
import AsyncStorage from "@react-native-async-storage/async-storage";
const AuthenticationSlice = createSlice({
  name: "Authentication",
  initialState: {
    token: "",
    isAuthenticated: false,
  },
  reducers: {
    addToken: (state, action) => {
      state.token = action.payload.token;
      AsyncStorage.setItem("token", action.payload.token);
      state.isAuthenticated = true;
    },
    logout: (state) => {
      state.token = null;
      AsyncStorage.removeItem("token");
      state.isAuthenticated = false;
    },
  },
});
export const logout = AuthenticationSlice.actions.logout;
export const addToken = AuthenticationSlice.actions.addToken;
export const AuthenticationReducer = AuthenticationSlice.reducer;
