const selectAdminFromState = (state) => state.admin;

export const selectLanguagesFromState = (state) =>
    selectAdminFromState(state).languages.languages;
