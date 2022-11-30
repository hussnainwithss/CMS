const selectAdminFromState = (state) => state.admin;

export const selectNationalitiesFromState = (state) =>
    selectAdminFromState(state).nationalities.nationalities;
