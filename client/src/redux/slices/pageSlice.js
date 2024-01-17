import { createSlice } from "@reduxjs/toolkit";

export const pageSlice = createSlice({
  name: "page",
  //intial states should be what?
  initialState: {
    rerender: false,
  },
  reducers: {
    //dispatch(booleanSet(cloudInfo))
    setRender: (state) => {
      state.rerender = !state.rerender;
    },
  },
});

export const { setRender } = pageSlice.actions;

export default pageSlice.reducer;
