

import { types } from '../../actions/admin';

const INITIAL_STATE = {
    entityTypes: [],
};

export const entityTypes = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case types.ADMIN_GET_ENTITY_TYPES_ATTEMPT:
            return {
                ...state,
            };
        case types.ADMIN_GET_ENTITY_TYPES_SUCCESS:
            return {
                ...state,
                entityTypes: action.payload,
            };
        case types.ADMIN_GET_ENTITY_TYPES_FAILED:
            return {
                ...state,
                entityTypes: [],
            };
        case types.ADMIN_ADD_ENTITY_TYPE_ATTEMPT:
            return {
                ...state,
            };
        case types.ADMIN_ADD_ENTITY_TYPE_SUCCESS:
            return {
                ...state,
                entityTypes: [...state.entityTypes, action.payload],
            };
        case types.ADMIN_ADD_ENTITY_TYPE_FAILED:
            return {
                ...state,
            };
        case types.ADMIN_EDIT_ENTITY_TYPE_ATTEMPT:
            return {
                ...state,
            };
        case types.ADMIN_EDIT_ENTITY_TYPE_SUCCESS:
            const entityTypeData = action.payload;
            const newEntityTypes = state.entityTypes.map((entityType) => {
                if (entityType.id === entityTypeData.id) {
                    return { ...entityTypeData };
                } else {
                    return entityType;
                }
            });
            return {
                ...state,
                entityTypes: newEntityTypes,
            };
        case types.ADMIN_EDIT_ENTITY_TYPE_FAILED:
            return {
                ...state,
            };
        case types.ADMIN_DELETE_ENTITY_TYPE_ATTEMPT:
            return {
                ...state,
            };
        case types.ADMIN_DELETE_ENTITY_TYPE_SUCCESS: {
            const entityTypeData = action.payload;
            const newEntityTypes = state.entityTypes.filter(
                (entityType) => entityType.id !== entityTypeData.id,
            );
            return {
                ...state,
                entityTypes: newEntityTypes,
            };
        }
        case types.ADMIN_DELETE_ENTITY_TYPE_FAILED:
            return {
                ...state,
            };

        default:
            return {
                ...state,
            };
    }
};
