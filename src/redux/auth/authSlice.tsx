import { createSlice } from "@reduxjs/toolkit";

const authSlice = createSlice({
  name: "auth",
  initialState: {
    isLogged: null,
  },
  reducers: {
    setLogin(state, action) {
      state.isLogged = action.payload;
    },
  },
});
export const { setLogin } = authSlice.actions;
export default authSlice.reducer;
