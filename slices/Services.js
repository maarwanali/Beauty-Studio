import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  serv: {},
};

export const servSilce = createSlice({
  name: "serv",
  initialState,
  reducers: {
    PuplishServ: (state, action) => {
      state.serv = action.payload;
    },
  },
});

// Action creators are generated for each case reducer function
export const { PuplishServ } = servSilce.actions;
export const selectServ = (state) => state.serv.serv;

// export const selectCurrentItem = (state) => state.cart.currntItem;

export default servSilce.reducer;
