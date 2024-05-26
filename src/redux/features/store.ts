import { configureStore } from "@reduxjs/toolkit";
import PostSlice from "./posts/postSlice";
import { baseApi } from "../api/baseApi";
import galleryReducer from "./gallery/gallerySlice";

export const store = configureStore({
  reducer: {
    [baseApi.reducerPath]: baseApi.reducer,
    posts: PostSlice,
    gallery: galleryReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(baseApi.middleware),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
