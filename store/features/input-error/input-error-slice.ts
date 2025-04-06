import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export interface InputError {
  [key: string]: string;
}

const initialState: InputError = {};

export const inputErrorSlice = createSlice({
  name: "input-error",
  initialState,
  reducers: {
    updateInputError: (state, action: PayloadAction<Partial<InputError>>) => {
      Object.assign(state, action.payload);
    },
  },
});

const inputErrorReducer = inputErrorSlice.reducer;
export const { updateInputError } = inputErrorSlice.actions;
export default inputErrorReducer;
