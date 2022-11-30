const selectAdminFromState = (state) => state.admin;

export const selectCitiesFromState = (state) =>
    selectAdminFromState(state).cities.cities;
