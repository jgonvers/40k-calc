import { createSlice } from "@reduxjs/toolkit";

export const attackFormSlice = createSlice({
  name: 'AttackForm',
  initialState: false,
  reducers: {
    switchForm: (state) => {
      return (!state);
    },
  },
});

export const selectFormState = state => state.AttackForm;
export const { switchForm } = attackFormSlice.actions;
export default attackFormSlice.reducer;