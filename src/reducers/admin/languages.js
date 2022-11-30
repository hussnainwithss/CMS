import { types } from '../../actions/admin';

const INITIAL_STATE = {
    languages: [],
};

export const languages = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case types.ADMIN_GET_LANGUAGES_ATTEMPT:
            return {
                ...state,
            };
        case types.ADMIN_GET_LANGUAGES_SUCCESS:
            return {
                ...state,
                languages: action.payload,
            };
        case types.ADMIN_GET_LANGUAGES_FAILED:
            return {
                ...state,
                languages: [],
            };
        case types.ADMIN_ADD_LANGUAGE_ATTEMPT:
            return {
                ...state,
            };
        case types.ADMIN_ADD_LANGUAGE_SUCCESS:
            return {
                ...state,
                languages: [...state.languages, action.payload],
            };
        case types.ADMIN_ADD_LANGUAGE_FAILED:
            return {
                ...state,
            };
        case types.ADMIN_EDIT_LANGUAGE_ATTEMPT:
            return {
                ...state,
            };
        case types.ADMIN_EDIT_LANGUAGE_SUCCESS:
            const languageData = action.payload;
            const newLanguages = state.languages.map((language) => {
                if (language.id === languageData.id) {
                    return { ...languageData };
                } else {
                    return language;
                }
            });
            return {
                ...state,
                languages: newLanguages,
            };
        case types.ADMIN_EDIT_LANGUAGE_FAILED:
            return {
                ...state,
            };
        case types.ADMIN_DELETE_LANGUAGE_ATTEMPT:
            return {
                ...state,
            };
        case types.ADMIN_DELETE_LANGUAGE_SUCCESS: {
            const languageData = action.payload;
            const newLanguages = state.languages.filter(
                (language) => language.id !== languageData.id,
            );
            return {
                ...state,
                languages: newLanguages,
            };
        }
        case types.ADMIN_DELETE_LANGUAGE_FAILED:
            return {
                ...state,
            };

        default:
            return {
                ...state,
            };
    }
};
