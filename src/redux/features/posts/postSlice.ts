import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  posts: [],
};
const postSlice = createSlice({
  name: "posts",
  initialState,
  reducers: {
    // createPost: (state, action) => {
    //   state.posts.push({ ...action.payload });
    // },
  },
});

// export const { createPost } = postSlice.actions;
export default postSlice.reducer;
