import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

export interface InitialStateType {
  loggedIn: boolean;
}

const initialState: InitialStateType = {
  loggedIn: false,
};

export const etfdzematSlice = createSlice({
  name: "etfdzemat",
  initialState,
  reducers: {
    setLoggedIn: (state, action: PayloadAction<boolean>) => {
      console.log(action);

      state.loggedIn = action.payload;
    },
  },
});

export const { setLoggedIn } = etfdzematSlice.actions;

export default etfdzematSlice.reducer;
