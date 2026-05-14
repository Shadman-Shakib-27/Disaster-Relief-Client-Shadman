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
      transformResponse: (response: any) => response?.data ?? response,
      providesTags: ["post"],
    }),
    getSinglePost: builder.query({
      query: (query) => ({
        url: `/posts/${query}`,
        method: "GET",
      }),
      transformResponse: (response: any) => response?.data ?? response,
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
