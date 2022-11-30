import { types } from '../../actions/sectors';

const INITIAL_STATE = {
    sectors: [],
};

export const sectors = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case types.ADMIN_GET_SECTORS_ATTEMPT:
            return {
                ...state,
            };
        case types.ADMIN_GET_SECTORS_SUCCESS:
            return {
                ...state,
                sectors: action.payload,
            };
        case types.ADMIN_GET_SECTORS_FAILED:
            return {
                ...state,
                sectors: [],
            };
        case types.ADMIN_ADD_SECTOR_ATTEMPT:
            return {
                ...state,
            };
        case types.ADMIN_ADD_SECTOR_SUCCESS:
            return {
                ...state,
                sectors: [...state.sectors, action.payload],
            };
        case types.ADMIN_ADD_SECTOR_FAILED:
            return {
                ...state,
            };
        case types.ADMIN_EDIT_SECTOR_ATTEMPT:
            return {
                ...state,
            };
        case types.ADMIN_EDIT_SECTOR_SUCCESS:
            const sectorData = action.payload;
            const newSectors = state.sectors.map((sector) => {
                if (sector.id === sectorData.id) {
                    return { ...sectorData };
                } else {
                    return sector;
                }
            });
            return {
                ...state,
                sectors: newSectors,
            };
        case types.ADMIN_EDIT_SECTOR_FAILED:
            return {
                ...state,
            };
        case types.ADMIN_DELETE_SECTOR_ATTEMPT:
            return {
                ...state,
            };
        case types.ADMIN_DELETE_SECTOR_SUCCESS: {
            const sectorData = action.payload;
            const newSectors = state.sectors.filter(
                (sector) => sector.id !== sectorData.id,
            );
            return {
                ...state,
                sectors: newSectors,
            };
        }
        case types.ADMIN_DELETE_SECTOR_FAILED:
            return {
                ...state,
            };

        default:
            return {
                ...state,
            };
    }
};
