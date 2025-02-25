import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

export interface UserInfo {
  username: string | null;
  role: "admin" | "basic_user" | null;
}
export interface InitialStateType {
  prijavljen: boolean;
  userInfo: UserInfo;
}

const initialState: InitialStateType = {
  prijavljen: false,
  userInfo: {
    username: null,
    role: null,
  },
};

export const etfdzematSlice = createSlice({
  name: "etfdzemat",
  initialState,
  reducers: {
    setPrijavljen: (state, action: PayloadAction<boolean>) => {
      state.prijavljen = action.payload;
    },
    setUserInfo: (state, action: PayloadAction<UserInfo>) => {
      state.userInfo = action.payload;
    },
  },
});

export const { setPrijavljen, setUserInfo } = etfdzematSlice.actions;

export default etfdzematSlice.reducer;
