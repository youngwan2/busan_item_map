import {PayloadAction, createSlice} from '@reduxjs/toolkit'

interface InitialState {
    isChange:boolean
}
const initialState:InitialState = {
    isChange: false
}

export const headerThemeSlice = createSlice({
    name:'headerTheme',
    initialState,
    reducers : {
        setHeaderTheme: (state, action:PayloadAction<boolean>) => {
            state.isChange = action.payload
        }
    }
})

export const {setHeaderTheme} = headerThemeSlice.actions

export default headerThemeSlice.reducer