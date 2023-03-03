import baseApi from './baseService'

export const userService = baseApi.injectEndpoints({
    endpoints: (builder) => ({
        getUsers: builder.query({
            query: () => "/users"
        }),
        getUserById:builder.query({
            query: (id) => `/users/${id}`,
            method: "GET",
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
        uploadAvatar: builder.mutation({
            query: ({ id, file }) => ({
                url:  `/users/${id}/update-avatar`,
                method: "POST",
                body: file
            }),
            transformResponse: (response, meta, arg) => {
                console.log({response, meta, arg})
                return {
                    id : arg.id,
                    avatar : response.avatar
                }
            }

        }),
    })
})

export const { 
    useCreateUserMutation,
    useDeleteUserMutation,
    useGetUsersQuery,
    useUpdateUserMutation,
    useUploadAvatarMutation,
    useGetUserByIdQuery,
} = userService