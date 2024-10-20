import { createSlice } from '@reduxjs/toolkit';

const authSlice = createSlice({
  name: 'auth',
  initialState: {
    accessToken: "",
    isLoggedIn: false,
    isLoading: false,
  },
  reducers: {
    setAccessToken(state, action) {
      state.accessToken = action.payload; //  state.accessToken = action.payload.token;
      state.isLoggedIn = !!action.payload;
      state.isLoading = false;
    },
    clearAccessToken(state) {
      state.accessToken = null;
      state.isLoggedIn = false;
      state.isLoading = false;
    },
    setLoading(state, action) {
        state.isLoading = action.payload;
    }
  },
});

export const selectAccessToken = (state) => state.auth?.accessToken;

export const { setAccessToken, clearAccessToken, setLoading } = authSlice.actions;

export default authSlice.reducer;