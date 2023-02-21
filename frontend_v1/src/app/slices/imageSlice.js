import { createSlice } from '@reduxjs/toolkit'
import { imageService } from '../services/imageService';

const initialState = {
    images : []
}

const imageSlice = createSlice({
  name: "image",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addMatcher(imageService.endpoints.getImage.matchFulfilled, (state, action) => {
        state.images = action.payload;
    })
    builder.addMatcher(imageService.endpoints.deleteImage.matchFulfilled, (state, action) => {
        let index = state.images.findIndex(image => image.id === action.payload);
        state.images.splice(index, 1);
    })
    builder.addMatcher(imageService.endpoints.uploadThumbnail.matchFulfilled, (state,action) =>{
        let index = state.images.findIndex(image => image.id === action.payload.id);
        state.images[index] = action.payload;
    })
}
});

export const {} = imageSlice.actions

export default imageSlice.reducer