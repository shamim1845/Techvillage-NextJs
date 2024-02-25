import { configureStore } from "@reduxjs/toolkit";
import searchFilterReducer from "./slice/searchFilterSlice";
import cartSliceReducer from "./slice/cartSlice";

export const store = configureStore({
  reducer: {
    searchFilter: searchFilterReducer,
    cart: cartSliceReducer,
  },
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;
