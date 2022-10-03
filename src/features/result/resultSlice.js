import { createSlice } from "@reduxjs/toolkit";
import { createAsyncThunk } from "@reduxjs/toolkit";
import { multiCalc } from "../ResultCalculator";

export const resultSlice = createSlice({
  name: 'Result',
  initialState: {},
  reducers: {
    changeResult: (state, action) => { return action.payload; },
  },
  extraReducers(builder) {
    builder
      .addCase(calculate.fulfilled, (state, action) => { return action.payload; })
  }
});


const calculate = createAsyncThunk('result/calculate', async (attacks) => {
  await timeout(100); // allow react/redux to parse the events
  // otherwise multicalc hog the cpu and the events are parsed after its resolution
  // alternatively use worker
  const result = await multiCalc(attacks);
  return result;
})

function timeout(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

export const selectResult = state => state.Result;
export const { changeResult } = resultSlice.actions;
export { calculate }
export default resultSlice.reducer;
