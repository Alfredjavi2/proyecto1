import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isNavbarOpen: false,
};

const sliceName = "layout";

const slice = createSlice({
  name: sliceName,
  initialState,
  reducers: {
    toggle_navbar_open: (state) => {
      state.isNavbarOpen = !state.isNavbarOpen;
    },
  },
});

// Export slice
export default slice.reducer;
export { sliceName };

// Export actions
export const { toggle_navbar_open } = slice.actions;

// Export state
export const store_navbar_open = (state) => state[sliceName].isNavbarOpen;
