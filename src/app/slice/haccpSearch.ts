import { createSlice } from "@reduxjs/toolkit";
import { PayloadAction } from "@reduxjs/toolkit";

type initialStateType = {
  value: string[];
};

const initialState = [""];

export const haccpSearchSlice = createSlice({
  name: "haccp",
  initialState,
  reducers: {
    haccpDataTemp(state, action: PayloadAction<string[]>) {
      state = action.payload;

      console.log(state)
    },
  },
});

export const { haccpDataTemp } = haccpSearchSlice.actions;
