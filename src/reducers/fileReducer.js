import { createSlice } from "@reduxjs/toolkit";

const FileSlice = createSlice({
  name: "files",
  initialState: {
    list: null,
  },
  reducers: {
    uploadFile: (state, action) => {
      state.list = action.payload;
    },
  },
});
export const { uploadFile } = FileSlice.actions;
export default FileSlice.reducer;
