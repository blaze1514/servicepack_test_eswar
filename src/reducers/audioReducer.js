import { createSlice } from "@reduxjs/toolkit";

const AudioSlice = createSlice({
  name: "audio",
  initialState: {
    list: [],
  },
  reducers: {
    uploadAudio: (state, action) => {
      Array.from(action.payload).map((ele) => {
        state.list.push(ele);
      });
    },
  },
});
export const { uploadAudio } = AudioSlice.actions;
export default AudioSlice.reducer;
