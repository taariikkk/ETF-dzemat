import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

export interface UserInfo {
  username: string | null;
  role: "admin" | "basic_user" | null;
}
export interface Notification {
  text: string;
  show: boolean;
  type: "error" | "success" | undefined;
}
export interface InitialStateType {
  prijavljen: boolean;
  userInfo: UserInfo;
  notification: Notification;
}

const initialState: InitialStateType = {
  prijavljen: false,
  userInfo: {
    username: null,
    role: null,
  },
  notification: { text: "", show: false, type: undefined },
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
    setNotification: (state, action: PayloadAction<Omit<Notification, "show">>) => {
      state.notification = { show: true, ...action.payload };
    },
    closeNotification: (state) => {
      state.notification = {
        ...state.notification,
        show: false,
      };
    },
  },
});

export const { setPrijavljen, setUserInfo, setNotification, closeNotification } = etfdzematSlice.actions;

export default etfdzematSlice.reducer;
