

import { types } from '../../actions/admin';

const INITIAL_STATE = {
    questionCategories: [],
};

export const questionCategories = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case types.ADMIN_GET_QUESTION_CATEGORIES_ATTEMPT:
            return {
                ...state,
            };
        case types.ADMIN_GET_QUESTION_CATEGORIES_SUCCESS:
            return {
                ...state,
                questionCategories: action.payload,
            };
        case types.ADMIN_GET_QUESTION_CATEGORIES_FAILED:
            return {
                ...state,
                questionCategories: [],
            };
        case types.ADMIN_ADD_QUESTION_CATEGORY_ATTEMPT:
            return {
                ...state,
            };
        case types.ADMIN_ADD_QUESTION_CATEGORY_SUCCESS:
            return {
                ...state,
                questionCategories: [...state.questionCategories, action.payload],
            };
        case types.ADMIN_ADD_QUESTION_CATEGORY_FAILED:
            return {
                ...state,
            };
        case types.ADMIN_EDIT_QUESTION_CATEGORY_ATTEMPT:
            return {
                ...state,
            };
        case types.ADMIN_EDIT_QUESTION_CATEGORY_SUCCESS:
            const questionCategoryData = action.payload;
            const newquestionCategories = state.questionCategories.map((questionCategory) => {
                if (questionCategory.id === questionCategoryData.id) {
                    return { ...questionCategoryData };
                } else {
                    return questionCategory;
                }
            });
            return {
                ...state,
                questionCategories: newquestionCategories,
            };
        case types.ADMIN_EDIT_QUESTION_CATEGORY_FAILED:
            return {
                ...state,
            };
        case types.ADMIN_DELETE_QUESTION_CATEGORY_ATTEMPT:
            return {
                ...state,
            };
        case types.ADMIN_DELETE_QUESTION_CATEGORY_SUCCESS: {
            const questionCategoryData = action.payload;
            const newquestionCategories = state.questionCategories.filter(
                (questionCategory) => questionCategory.id !== questionCategoryData.id,
            );
            return {
                ...state,
                questionCategories: newquestionCategories,
            };
        }
        case types.ADMIN_DELETE_QUESTION_CATEGORY_FAILED:
            return {
                ...state,
            };

        default:
            return {
                ...state,
            };
    }
};
