import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import type { RootState } from "../store";



// 초기 state 의 타입을 지정한다.
interface InitialState {
    value: string[]
}

// 초기 state 를 지정한다.
const initialState: InitialState = {
    value: []
}

// 슬라이스를 생성한다.
const searchSlice = createSlice({
    name: 'search',
    initialState,
    reducers: {
        getSearchData(state, action: PayloadAction<string[]>) {
            state.value = action.payload
            console.log("페이로드:", action.payload)
        }
    }
})

// 사용한 레듀서를 내보낸다.
export const { getSearchData } = searchSlice.actions
export const searchGetData = (state: RootState) => state.search.value

// store로 전달할 슬라이스를 내보낸다.
export default searchSlice;
