import baseApi from './baseService'

export const productService = baseApi.injectEndpoints({
    endpoints: (builder) => ({
        getProducts: builder.query({
            query: () => "/products"
        }),
        deleteProduct: builder.mutation({
            query: (id) => ({
                url: `/products/${id}`,
                method: "DELETE"
            }),
            transformResponse: (response, meta, arg) => {
                return arg
            }
        }),
        createProduct: builder.mutation({
            query:(data)=>({
                url: "/products",
                method: "POST",
                body: data
            })
        }),
        updateProduct: builder.mutation({
            query:({id,...data})=>({
                url: `/products/${id}`,
                method: "PUT",
                body: data
            })
        }),
    })
})

export const { 
    useGetProductsQuery, 
    useDeleteProductMutation, 
    useCreateProductMutation, 
    useUpdateProductMutation
} = productService