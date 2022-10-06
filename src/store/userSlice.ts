import { createSlice } from "@reduxjs/toolkit";
import { User } from "../model/user";

const initialState: User = {
  name: "",
};

export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    login: (state: any) => {
      state.name = "admin";
      return state;
    },
    logout: (state: any) => {
      state.name = "";
      return state;
    },
  },
});

export const { login, logout } = userSlice.actions;
export default userSlice.reducer;
