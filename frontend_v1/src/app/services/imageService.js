import baseApi from './baseService'

export const imageService = baseApi.injectEndpoints({
    endpoints: (builder) => ({
        getImage:builder.query({
            query: (id) => `/images/${id}`,
            method: "GET"
        }),
        deleteImage: builder.mutation({
            query: (id) => ({
                url: `/images/${id}`,
                method: "DELETE"
            }),
            transformResponse: (response, meta, arg) => {
                return arg
            }
        }),
        uploadThumbnail: builder.mutation({
            query: ({ id, file }) => ({
                url:  `/images/${id}`,
                method: "POST",
                body: file
            }),
            transformResponse: (response, meta, arg) => {
                console.log({response, meta, arg})
                return {
                    id : arg.id,
                    thumbnail : response.thumbnail
                }
            }

        }),
    })
})

export const { 
    useGetImageQuery,
    useDeleteImageMutation,
    useUploadThumbnailMutation
} = imageService