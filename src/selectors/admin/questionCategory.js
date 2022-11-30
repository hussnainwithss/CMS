const selectAdminFromState = (state) => state.admin;

export const selectQuestionCategoryFromState = (state) =>
    selectAdminFromState(state).questionCategories.questionCategories;
