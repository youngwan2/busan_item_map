import { createSlice } from "@reduxjs/toolkit";
import { PayloadAction } from "@reduxjs/toolkit";

type InitialStateType = string[]
const initialState: InitialStateType = [""];

/* HACCP 인증을 받은 음식 데이터를 검색하여 들고 온다. */
const haccpSearchSlice = createSlice({
  name: "haccp",
  initialState,
  reducers: {
    haccpDataTemp(state, action: PayloadAction<string[]>) {
      state = action.payload;
    },
  },
});

export default haccpSearchSlice.reducer
export const { haccpDataTemp } = haccpSearchSlice.actions;
