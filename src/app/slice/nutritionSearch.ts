import { createSlice, PayloadAction } from "@reduxjs/toolkit";

const nutritionSlice = createSlice({
    name: "nutrionSlice",
    initialState: '',
    reducers: {
        getNutritionDataFromDB(state, action: PayloadAction<string>) {
            return state = action.payload
        }
    }
})

export const {getNutritionDataFromDB} = nutritionSlice.actions

export default nutritionSlice.reducer