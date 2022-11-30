const selectAdminFromState = (state) => state.admin;

export const selectRegionsFromState = (state) =>
    selectAdminFromState(state).regions.regions;
