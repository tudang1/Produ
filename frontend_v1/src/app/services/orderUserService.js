
import baseUserApi from './baseUserService'

export const orderUserService = baseUserApi.injectEndpoints({
    endpoints: (builder) => ({
        getOrderByUserid: builder.query({
            query: (id) => ({
                url: `/orders/${id}`,
                method: "GET",
            })
        }),
        createOrder: builder.mutation({
            query: (data) => ({
                url: "/orders",
                method: "POST",
                body: data
            })
        }),
        deleteOrderUser: builder.mutation({
            query: (id) => ({
                url: `/orders/${id}`,
                method: "DELETE"
            }),
            transformResponse: (response, meta, arg) => {
                return arg
            }
        }),
    })
})

export const { 
    useCreateOrderMutation ,
    useGetOrderByUseridQuery,
    useDeleteOrderUserMutation,
} = orderUserService