import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isEditing: false,
};

const sliceName = "my_profile";

const slice = createSlice({
  name: sliceName,
  initialState,
  reducers: {
    start_editing: (state) => {
      state.isEditing = true;
    },
    stop_editing: (state) => {
      state.isEditing = false;
    },
  },
});

// Export slice
export default slice.reducer;
export { sliceName };

// Export actions
export const { start_editing, stop_editing } = slice.actions;

// Export store variables
export const store_is_editing = (store) => store[sliceName].isEditing;
