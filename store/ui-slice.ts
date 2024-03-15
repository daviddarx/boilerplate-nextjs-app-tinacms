import { createSlice } from '@reduxjs/toolkit';

export interface uiStateType {
  ui: {
    scrollToTopOnPageChange: boolean;
    system: {
      os: string | undefined;
      browser: string | undefined;
    };
  };
}

export const uiSlice = createSlice({
  name: 'ui',
  initialState: {
    scrollToTopOnPageChange: true,
    system: {
      os: undefined,
      browser: undefined,
    },
  },
  reducers: {
    setSystem: (state, action) => {
      state.system = action.payload;
    },
    setScrollToTopOnPageChange: (state, action) => {
      state.scrollToTopOnPageChange = action.payload;
    },
  },
});

export default uiSlice;
