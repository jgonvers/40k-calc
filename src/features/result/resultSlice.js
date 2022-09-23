import { createSlice } from "@reduxjs/toolkit";

export const resultSlice = createSlice({
  name: 'Result',
  initialState: {},
  reducers: {
    changeResult: (state, action) => { return action.payload; },
  },
});

export const selectResult = state => state.Result;
export const { changeResult } = resultSlice.actions;
export default resultSlice.reducer;
