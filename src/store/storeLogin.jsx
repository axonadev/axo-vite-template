import { createSlice } from "@reduxjs/toolkit";

export const storeLogin = createSlice({
  name: "auth",
  initialState: {
    value: {
      token: "",
    },
  },
  reducers: {
    reset: (state) => {
      state.value = {
        token: "",
      };
    },
    setToken: (state, action) => {
      state.value.token = action.payload;
    },
    login: (state, action) => {
      state.value.token = action.payload;
    },
    logout: (state) => {
      state.value.token = "";
    },
  },
});

export const { reset, setToken, login, logout } = storeLogin.actions;

export default storeLogin.reducer;
