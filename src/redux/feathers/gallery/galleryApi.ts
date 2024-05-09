import { baseApi } from "@/redux/api/baseApi";

const galleryApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    getGallery: builder.query({
      query: () => ({
        url: "gallery",
        method: "GET",
      }),
    }),
  }),
});

export const { useGetGalleryQuery } = galleryApi;
