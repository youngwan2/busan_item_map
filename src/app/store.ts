import { configureStore } from '@reduxjs/toolkit';
import haccpSearchSlice from '../features/searchSlice/haccpSearch';
import recipeSearch from '../features/searchSlice/recipeSearch';
import nutritionSearch from '../features/searchSlice/nutritionSearch';
import headerTheme from '../features/theme/headerTheme';

/* 스토어 생성 */
const store = configureStore({
  reducer: {
    haccp: haccpSearchSlice,
    nutrition: nutritionSearch,
    recipe: recipeSearch,
    headerTheme
  },
});

// store의 getState는 각 레듀서가 반환하는 state 값을 담고 있다.
// 해당 반환값을 typeof 로 검사하여 반환된 타입으로
// 반환되는 state의 타입을 동적으로 결정한다.
export type RootState = ReturnType<typeof store.getState>;

// 추론된 타입: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;

export default store;
