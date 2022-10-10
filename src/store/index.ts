import { configureStore } from "@reduxjs/toolkit";
import userSlice from "./userSlice";
import animalSlice from "./petSlice";

export const store = configureStore({
  reducer: {
    user: userSlice,
    animal: animalSlice,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
