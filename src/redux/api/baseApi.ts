import { auth } from "@/Provider/AuthProvider";
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const rawBaseQuery = fetchBaseQuery({
  baseUrl: "https://l2-b2-frontend-path-assignment-6-se.vercel.app/api/v1",
  prepareHeaders: async (headers) => {
    const token = await auth.currentUser?.getIdToken();

    if (token) {
      headers.set("authorization", `Bearer ${token}`);
    }

    headers.set("content-type", "application/json");
    return headers;
  },
});

export const baseApi = createApi({
  reducerPath: "baseApi",
  baseQuery: rawBaseQuery,
  tagTypes: ["post", "donation"],
  endpoints: () => ({}),
});
