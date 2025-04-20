import { configureStore } from "@reduxjs/toolkit";
import { setupListeners } from "@reduxjs/toolkit/query";
import { TypedUseSelectorHook, useDispatch, useSelector } from "react-redux";
import counterReducer from "./features/counter/counter-slice";
import personReducer from "./features/person/person-slice";

import addFormReducer from "./features/add-form/add-form-slice";
import inputErrorReducer from "./features/input-error/input-error-slice";
export const store = configureStore({
  reducer: {
    counter: counterReducer,
    person: personReducer,
    addForm: addFormReducer,
    inputError: inputErrorReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredPaths: ["addForm.startDate"], // Ignore serialization warning (Optional)
      },
    }),
});

setupListeners(store.dispatch);

export const useAppDispatch: () => typeof store.dispatch = useDispatch;
export const useAppSelector: TypedUseSelectorHook<
  ReturnType<typeof store.getState>
> = useSelector;
