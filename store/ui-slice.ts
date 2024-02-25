import { createSlice } from '@reduxjs/toolkit';

export interface uiStateType {
  ui: {
    system: {
      os: string | undefined;
      browser: string | undefined;
    };
  };
}

export const uiSlice = createSlice({
  name: 'ui',
  initialState: {
    system: {
      os: undefined,
      browser: undefined,
    },
  },
  reducers: {
    setSystem: (state, action) => {
      state.system = action.payload;
    },
  },
});

export default uiSlice;
