import uiSlice from './ui-slice';
import { configureStore } from '@reduxjs/toolkit';

const store = configureStore({
  reducer: {
    ui: uiSlice.reducer,
  },
});

export default store;

export const uiActions = uiSlice.actions;
