import { types } from '../../actions/admin';

const INITIAL_STATE = {
    nationalities: [],
};

export const nationalities = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case types.ADMIN_GET_NATIONALITIES_ATTEMPT:
            return {
                ...state,
            };
        case types.ADMIN_GET_NATIONALITIES_SUCCESS:
            return {
                ...state,
                nationalities: action.payload,
            };
        case types.ADMIN_GET_NATIONALITIES_FAILED:
            return {
                ...state,
                nationalities: [],
            };
        case types.ADMIN_ADD_NATIONALITY_ATTEMPT:
            return {
                ...state,
            };
        case types.ADMIN_ADD_NATIONALITY_SUCCESS:
            return {
                ...state,
                nationalities: [...state.nationalities, action.payload],
            };
        case types.ADMIN_ADD_NATIONALITY_FAILED:
            return {
                ...state,
            };
        case types.ADMIN_EDIT_NATIONALITY_ATTEMPT:
            return {
                ...state,
            };
        case types.ADMIN_EDIT_NATIONALITY_SUCCESS:
            const nationalityData = action.payload;
            const newNationalities = state.nationalities.map((nationality) => {
                if (nationality.id === nationalityData.id) {
                    return { ...nationalityData };
                } else {
                    return nationality;
                }
            });
            return {
                ...state,
                nationalities: newNationalities,
            };
        case types.ADMIN_EDIT_NATIONALITY_FAILED:
            return {
                ...state,
            };
        case types.ADMIN_DELETE_NATIONALITY_ATTEMPT:
            return {
                ...state,
            };
        case types.ADMIN_DELETE_NATIONALITY_SUCCESS: {
            const nationalityData = action.payload;
            const newNationalities = state.nationalities.filter(
                (nationality) => nationality.id !== nationalityData.id,
            );
            return {
                ...state,
                nationalities: newNationalities,
            };
        }
        case types.ADMIN_DELETE_NATIONALITY_FAILED:
            return {
                ...state,
            };

        default:
            return {
                ...state,
            };
    }
};
