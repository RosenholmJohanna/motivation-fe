
export const selectAccessToken = (state) => state.auth?.accessToken;

export const selectIsLoggedIn = (state) => state.auth.isLoggedIn;

export const selectUserProfile = (state) => state.auth.userProfile; 

export const selectIsLoading = (state) => state.auth.isLoading; 

export const selectAuthError = (state) => state.auth.error; 