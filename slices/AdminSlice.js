import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  admin: "",
};

export const adminSlice = createSlice({
  name: "admin",
  initialState,
  reducers: {
    PuplishAdmin: (state, action) => {
      state.admin = action.payload;
    },
  },
});

// Action creators are generated for each case reducer function
export const { PuplishAdmin } = adminSlice.actions;
export const selectAdmin = (state) => state.admin.admin;

// export const selectCurrentItem = (state) => state.cart.currntItem;

export default adminSlice.reducer;
