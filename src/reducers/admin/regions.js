import { types } from '../../actions/admin';

const INITIAL_STATE = {
    regions: [],
};

export const regions = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case types.ADMIN_GET_REGIONS_ATTEMPT:
            return {
                ...state,
            };
        case types.ADMIN_GET_REGIONS_SUCCESS:
            return {
                ...state,
                regions: action.payload,
            };
        case types.ADMIN_GET_REGIONS_FAILED:
            return {
                ...state,
                regions: [],
            };
        case types.ADMIN_ADD_REGION_ATTEMPT:
            return {
                ...state,
            };
        case types.ADMIN_ADD_REGION_SUCCESS:
            return {
                ...state,
                regions: [...state.regions, action.payload],
            };
        case types.ADMIN_ADD_REGION_FAILED:
            return {
                ...state,
            };
        case types.ADMIN_EDIT_REGION_ATTEMPT:
            return {
                ...state,
            };
        case types.ADMIN_EDIT_REGION_SUCCESS:
            const regionData = action.payload;
            const newRegions = state.regions.map((region) => {
                if (region.id === regionData.id) {
                    return { ...regionData };
                } else {
                    return region;
                }
            });
            return {
                ...state,
                regions: newRegions,
            };
        case types.ADMIN_EDIT_REGION_FAILED:
            return {
                ...state,
            };
        case types.ADMIN_DELETE_REGION_ATTEMPT:
            return {
                ...state,
            };
        case types.ADMIN_DELETE_REGION_SUCCESS: {
            const regionData = action.payload;
            const newRegions = state.regions.filter(
                (region) => region.id !== regionData.id,
            );
            return {
                ...state,
                regions: newRegions,
            };
        }
        case types.ADMIN_DELETE_REGION_FAILED:
            return {
                ...state,
            };

        default:
            return {
                ...state,
            };
    }
};
