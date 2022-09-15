export const selectAuthFromState = (state) => state.auth;

export const selectLoggedInUserFromState = (state) =>
  selectAuthFromState(state).user;

export const selectIsAuthenticatedFromState = (state) =>
  selectAuthFromState(state).isAuthenticated;

export const selectLoggedInUserRoleFromState = (state) =>
  selectAuthFromState(state).user.role;

export const selectAccessTokenFromState = (state) =>
  selectAuthFromState(state).token.accessToken;

export const selectTokenExpiredDateFromState = (state) =>
  selectAuthFromState(state).token.expiredDate;
