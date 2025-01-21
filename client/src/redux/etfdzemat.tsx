import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

export interface InitialStateType {
  prijavljen: boolean;
}

const initialState: InitialStateType = {
  prijavljen: false,
};

export const etfdzematSlice = createSlice({
  name: "etfdzemat",
  initialState,
  reducers: {
    setPrijavljen: (state, action: PayloadAction<boolean>) => {
      state.prijavljen = action.payload;
    },
  },
});

export const { setPrijavljen } = etfdzematSlice.actions;

export default etfdzematSlice.reducer;
