import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export interface AddForm {
  name: string;
  dosage: string;
  frequency: string;
  duration: string;
  startDate: number;
  times: string[];
  notes: string;
  reminderEnabled: boolean;
  refillReminder: boolean;
  currentSupply: string;
  refillAt: string;
}

const initialState: AddForm = {
  name: "",
  dosage: "",
  frequency: "",
  duration: "",
  // NOTE: we covert the date to milliseconds because when we store date in redux it returns that error A non-serializable
  startDate: new Date().getTime(),
  times: ["09:00"],
  notes: "",
  reminderEnabled: true,
  refillReminder: false,
  currentSupply: "",
  refillAt: "",
};

export const addFormSlice = createSlice({
  name: "add-form",
  initialState,
  reducers: {
    updateForm: (state, action: PayloadAction<Partial<AddForm>>) => {
      Object.assign(state, action.payload);
    },
  },
});

const addFormReducer = addFormSlice.reducer;
export const { updateForm } = addFormSlice.actions;
export default addFormReducer;
