import * as types from './types';
import { payloadActionCreator, emptyActionCreator } from '../../utils/actions';

export const getEntitiesAttempt = payloadActionCreator(
    types.ADMIN_GET_ENTITIES_ATTEMPT,
);
export const getEntitiesSuccess = payloadActionCreator(
    types.ADMIN_GET_ENTITIES_SUCCESS,
);
export const getEntitiesFailed = payloadActionCreator(
    types.ADMIN_GET_ENTITIES_FAILED,
);

export const addEntityAttempt = payloadActionCreator(
    types.ADMIN_ADD_ENTITY_ATTEMPT,
);
export const addEntitySuccess = payloadActionCreator(
    types.ADMIN_ADD_ENTITY_SUCCESS,
);
export const addEntityFailed = payloadActionCreator(
    types.ADMIN_ADD_ENTITY_FAILED,
);

export const editEntityAttempt = payloadActionCreator(
    types.ADMIN_EDIT_ENTITY_ATTEMPT,
);
export const editEntitySuccess = payloadActionCreator(
    types.ADMIN_EDIT_ENTITY_SUCCESS,
);
export const editEntityFailed = payloadActionCreator(
    types.ADMIN_EDIT_ENTITY_FAILED,
);

export const DeleteEntityAttempt = payloadActionCreator(
    types.ADMIN_DELETE_ENTITY_ATTEMPT,
);
export const DeleteEntitySuccess = payloadActionCreator(
    types.ADMIN_DELETE_ENTITY_SUCCESS,
);
export const DeleteEntityFailed = payloadActionCreator(
    types.ADMIN_DELETE_ENTITY_FAILED,
);

