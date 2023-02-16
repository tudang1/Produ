import baseApi from './baseService'

export const userService = baseApi.injectEndpoints({
    endpoints: (builder) => ({
        getUsers: builder.query({
            query: () => "/users"
        }),
        deleteUser: builder.mutation({
            query: (id) => ({
                url: `/users/${id}`,
                method: "DELETE"
            }),
            transformResponse: (response, meta, arg) => {
                return arg
            }
        }),
        createUser: builder.mutation({
            query:(data)=>({
                url: "/users",
                method: "POST",
                body: data
            })
        }),
        updateUser: builder.mutation({
            query:({id,...data})=>({
                url: `/users/${id}`,
                method: "PUT",
                body: data
            })
        }),
    })
})

export const { 
    useCreateUserMutation,
    useDeleteUserMutation,
    useGetUsersQuery,
    useUpdateUserMutation
} = userService