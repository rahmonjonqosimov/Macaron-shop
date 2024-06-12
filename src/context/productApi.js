import { api } from "./api";

export const productApi = api.injectEndpoints({
  endpoints: (build) => ({
    // Get request
    getProducts: build.query({
      query: ({ params, path }) => ({
        url: `/products${path}`,
        params,
      }),
      providesTags: ["Product"],
    }),
    // Get category request
    getCategoryProducts: build.query({
      query: () => ({
        url: "/products/category-list",
      }),
      providesTags: ["Product"],
    }),
    // Get detail request
    getDetailProduct: build.query({
      query: ({ id }) => ({
        url: `/products/${id}`,
      }),
      providesTags: ["Product"],
    }),
    // Get search request
    getSearchProducts: build.query({
      query: ({ value }) => ({
        url: `/products/search?q=${value}`,
      }),
      providesTags: ["Product"],
    }),
  }),
});

export const {
  useGetProductsQuery,
  useGetCategoryProductsQuery,
  useGetDetailProductQuery,
  useGetSearchProductsQuery,
} = productApi;
