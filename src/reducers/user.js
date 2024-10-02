import { createSlice } from "@reduxjs/toolkit";


export const getInitialState = () => {
    const state = JSON.parse(localStorage.getItem("userReduxState") ?? "null");
    return {
      error: null,
      username: null,
      ...state,
    };
  };


  export const user = createSlice({
    name: "user",
    initialState: getInitialState(),
    
    reducers: {
      setUsername: (state, { payload }) => ({ 
        ...state, username: payload }),

      setError: (state, { payload }) => ({
         ...state, error: payload }),

      setMotivation: (state, { payload }) => ({ 
        ...state, motivation: payload }),
    }, 
  });
  
  //console.log(user)
  export default user;