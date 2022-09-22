import { createSlice } from "@reduxjs/toolkit";

const datas = {
  data1: [{ x: 1, y: 1 }, { x: 2, y: 2 }, { x: 3, y: 3 }, { x: 4, y: 4 }],
  data2: [{ x: 1, y: 4 }, { x: 2, y: 3 }, { x: 3, y: 2 }, { x: 4, y: 1 }],
  data3: [{ x: 4, y: 16 }, { x: 5, y: 25 }, { x: 1, y: 1 }, { x: 3, y: 9 }],
};

export const resultSlice = createSlice({
  name: 'Result',
  initialState: datas,
  reducers: {
    changeResult: (state, action) => { return action.payload; },
  },
});

export const selectResult = state => state.Result;
export const { changeResult } = resultSlice.actions;
export default resultSlice.reducer;