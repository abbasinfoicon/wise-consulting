// Need to use the React-specific entry point to import createApi
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

// Define a service using a base URL and expected endpoints
// service-api
export const serApi = createApi({
    reducerPath: 'serApi',
    baseQuery: fetchBaseQuery({ baseUrl: 'http://localhost:3000/' }),
    endpoints: (builder) => ({
        getAllService: builder.query({
            query: () => ({
                url: 'services',
                method: 'GET'
            }),
        }),

        getSingleService: builder.query({
            query: (slug) => ({
                url: `services/?slug=${slug}`,
                method: 'GET'
            }),
        }),
    }),
})

// project-api
export const proApi = createApi({
    reducerPath: 'proApi',
    baseQuery: fetchBaseQuery({ baseUrl: 'http://localhost:3000/' }),
    endpoints: (builder) => ({
        getAllProduct: builder.query({
            query: () => ({
                url: 'products',
                method: 'GET'
            }),
        }),
        getLimitProduct: builder.query({
            query: (num) => {
                return {
                    url: `products?_limit=${num}`,
                    method: 'GET'
                }
            },
        }),
        getProductById: builder.query({
            query: (id) => {
                return {
                    url: `products/${id}`,
                    method: 'GET'
                }
            },
        }),
    }),
})

// homeSlider-api
export const sliderApi = createApi({
    reducerPath: 'sliderApi',
    baseQuery: fetchBaseQuery({ baseUrl: 'http://localhost:3000/' }),
    endpoints: (builder) => ({
        getAllSlider: builder.query({
            query: () => ({
                url: 'slider',
                method: 'GET'
            }),
        }),


    }),
})

// blog-api
export const blogApi = createApi({
    reducerPath: 'blogApi',
    baseQuery: fetchBaseQuery({ baseUrl: 'http://localhost:3000/' }),
    endpoints: (builder) => ({
        getAllBlog: builder.query({
            query: () => ({
                url: 'blog',
                method: 'GET'
            }),
        }),
        getSingleBlog: builder.query({
            query: (slug) => ({
                url: `blog/?slug=${slug}`,
                method: 'GET'
            }),
        }),
        getPostById: builder.query({
            query: (id) => {
                return {
                    url: `blog/${id}`,
                    method: 'GET'
                }
            },
        }),
    }),
})

// testimonial-api
export const testimonialApi = createApi({
    reducerPath: 'testimonialApi',
    baseQuery: fetchBaseQuery({ baseUrl: 'http://localhost:3000/' }),
    endpoints: (builder) => ({
        getAllTtal: builder.query({
            query: () => ({
                url: 'testimonials',
                method: 'GET'
            }),
        }),


    }),
})

// partner-api
export const ptnrApi = createApi({
    reducerPath: 'ptnrApi',
    baseQuery: fetchBaseQuery({ baseUrl: 'http://localhost:3000/' }),
    endpoints: (builder) => ({
        getAllPtnr: builder.query({
            query: () => ({
                url: 'partner',
                method: 'GET'
            }),
        }),
    }),
})

// team-api
export const teamApi = createApi({
    reducerPath: 'teamApi',
    baseQuery: fetchBaseQuery({ baseUrl: 'http://localhost:3000/' }),
    endpoints: (builder) => ({
        getAllteam: builder.query({
            query: () => ({
                url: 'team',
                method: 'GET'
            }),
        }),


    }),
})

// Export hooks for usage in functional components, which are
// auto-generated based on the defined endpoints
export const { useGetAllServiceQuery, useGetSingleServiceQuery } = serApi
export const { useGetAllProductQuery, useGetLimitProductQuery, useGetProductByIdQuery } = proApi
export const { useGetAllBlogQuery, useGetSingleBlogQuery, useGetPostByIdQuery } = blogApi
export const { useGetAllSliderQuery } = sliderApi
export const { useGetAllTtalQuery } = testimonialApi
export const { useGetAllPtnrQuery } = ptnrApi
export const { useGetAllteamQuery } = teamApi