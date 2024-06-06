import { configureStore } from "@reduxjs/toolkit";
import counterSlice from "./slice/counterSlice";
import textSlice from "./slice/textSlice";

export const store = configureStore({
  reducer: {
    counter: counterSlice,
    text: textSlice,
  },
});
