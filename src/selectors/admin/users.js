const selectAdminFromState = (state) => state.admin;

export const selectUsersFromState = (state) =>
    selectAdminFromState(state).users.users;
