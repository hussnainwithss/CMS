const selectAdminFromState = (state) => state.admin;

export const selectEntityTypesFromState = (state) =>
    selectAdminFromState(state).entityTypes.entityTypes;
