import { baseApi } from "@/redux/api/baseApi";

const postsApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    createPost: builder.mutation({
      query: (data) => ({
        url: "/posts",
        method: "POST",
        body: data,
      }),
      invalidatesTags: ["post"],
    }),
    getAllPost: builder.query({
      query: () => ({
        url: "/posts",
        method: "GET",
      }),
      providesTags: ["post"],
    }),
    getSinglePost: builder.query({
      query: (query) => ({
        url: `/posts/${query}`,
        method: "GET",
      }),
    }),
    removePost: builder.mutation({
      query: (query) => ({
        url: `/posts/${query}`,
        method: "DELETE",
      }),
      invalidatesTags: ["post"],
    }),
  }),
});

export const {
  useCreatePostMutation,
  useGetAllPostQuery,
  useGetSinglePostQuery,
  useRemovePostMutation,
} = postsApi;
