import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import type { PayloadAction } from "@reduxjs/toolkit";
import type { RootState } from "../store";

const asyncGetSearchData = createAsyncThunk(
  "searchSlice/asyncGetSearchData",
  async (item:string) => {
    const response = await axios.get(
      `https://apis.data.go.kr/1471000/FoodNtrIrdntInfoService1/getFoodNtrItdntList1?servicekey=${process.env.REACT_APP_BUSAN_KEY}&type=json&desc_kor=${item}`
    );
    const data = await response.data;

    return data.body.items;
  }
);

// 초기 state 의 타입을 지정한다.
interface InitialState {
  value: string[];
}

// 초기 state 를 지정한다.
const initialState: InitialState = {
  value: [],
};

// 슬라이스를 생성한다.
const searchSlice = createSlice({
  name: "search",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(asyncGetSearchData.pending, (state, action) => {
      state.value = ['데이터를 준비중 입니다.'];
    });
    builder.addCase(
      asyncGetSearchData.fulfilled,
      (state, action: PayloadAction<string[]>) => {
        state.value = action.payload;
      }
    );
    builder.addCase(asyncGetSearchData.rejected, (state, action) => {
      state.value = ['요청이 처리되지 않았습니다.'];
    });
  },
});

// 사용한 레듀서를 내보낸다.

export {asyncGetSearchData}

// store로 전달할 슬라이스를 내보낸다.
export default searchSlice;
