import { types } from '../../actions/entities';

const INITIAL_STATE = {
    entities: [],
};

export const entities = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case types.ADMIN_GET_ENTITIES_ATTEMPT:
            return {
                ...state,
            };
        case types.ADMIN_GET_ENTITIES_SUCCESS:
            return {
                ...state,
                entities: action.payload ,
            };
        case types.ADMIN_GET_ENTITIES_FAILED:
            return {
                ...state,
                entities: [],
            };
        case types.ADMIN_ADD_ENTITY_ATTEMPT:
            return {
                ...state,
            };
        case types.ADMIN_ADD_ENTITY_SUCCESS:
            return {
                ...state,
                entities: [...state.entities, action.payload],
            };
        case types.ADMIN_ADD_ENTITY_FAILED:
            return {
                ...state,
            };
        case types.ADMIN_EDIT_ENTITY_ATTEMPT:
            return {
                ...state,
            };
        case types.ADMIN_EDIT_ENTITY_SUCCESS:
            const entityData = action.payload;
            const newEntities = state.entities.map((entity) => {
                if (entity.id === entityData.id) {
                    return { ...entityData };
                } else {
                    return entity;
                }
            });
            return {
                ...state,
                entities: newEntities,
            };
        case types.ADMIN_EDIT_ENTITY_FAILED:
            return {
                ...state,
            };
        case types.ADMIN_DELETE_ENTITY_ATTEMPT:
            return {
                ...state,
            };
        case types.ADMIN_DELETE_ENTITY_SUCCESS: {
            const entityData = action.payload;
            const newEntities = state.entities.filter(
                (entity) => entity.id !== entityData.id,
            );
            return {
                ...state,
                entities: newEntities,
            };
        }
        case types.ADMIN_DELETE_ENTITY_FAILED:
            return {
                ...state,
            };

        default:
            return {
                ...state,
            };
    }
};
