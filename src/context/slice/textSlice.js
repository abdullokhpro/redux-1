import { createSlice } from "@reduxjs/toolkit";

const textSlice = createSlice({
  name: "text",
  initialState: {
    value: "hello world",
  },
  reducers: {
    changeText: (state) => {
      state.value = "salom dunyo";
    },
  },
});

export const { changeText } = textSlice.actions;
export default textSlice.reducer;
