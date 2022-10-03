import { createSlice } from "@reduxjs/toolkit";
import { calculate } from "../result/resultSlice";

export const LoaderSlice = createSlice({
  name: 'Loader',
  initialState: false,
  reducers: {
    startLoader: showLoader,
    endLoader: hideLoader
  },
  extraReducers(builder) {
    builder
      .addCase(calculate.pending, showLoader)
      .addCase(calculate.fulfilled, hideLoader)
  }
});

function showLoader(state) {
  return (true);
}

function hideLoader(state) {
  return (false);
}

export const selectLoaderState = state => state.Loader;
export const { startLoader, endLoader } = LoaderSlice.actions;
export default LoaderSlice.reducer;