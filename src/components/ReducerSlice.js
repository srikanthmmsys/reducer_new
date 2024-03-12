import { createSlice } from "@reduxjs/toolkit";
const ReducerSlice = createSlice({
  name: "counter",
  initialState: { count: 5 },
  reducers: {
    increment: (state,action) => {
      state.count += action.payload;
    },
    decrement: (state) => {
      state.count -= 1;
    },
  },
});
export const { increment, decrement } = ReducerSlice.actions;
export default ReducerSlice.reducer;
