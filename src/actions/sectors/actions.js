import * as types from './types';
import { payloadActionCreator, emptyActionCreator } from '../../utils/actions';

export const getSectorsAttempt = payloadActionCreator(
    types.ADMIN_GET_SECTORS_ATTEMPT,
);
export const getSectorsSuccess = payloadActionCreator(
    types.ADMIN_GET_SECTORS_SUCCESS,
);
export const getSectorsFailed = payloadActionCreator(
    types.ADMIN_GET_SECTORS_FAILED,
);

export const addSectorAttempt = payloadActionCreator(
    types.ADMIN_ADD_SECTOR_ATTEMPT,
);
export const addSectorSuccess = payloadActionCreator(
    types.ADMIN_ADD_SECTOR_SUCCESS,
);
export const addSectorFailed = payloadActionCreator(
    types.ADMIN_ADD_SECTOR_FAILED,
);

export const editSectorAttempt = payloadActionCreator(
    types.ADMIN_EDIT_SECTOR_ATTEMPT,
);
export const editSectorSuccess = payloadActionCreator(
    types.ADMIN_EDIT_SECTOR_SUCCESS,
);
export const editSectorFailed = payloadActionCreator(
    types.ADMIN_EDIT_SECTOR_FAILED,
);

export const DeleteSectorAttempt = payloadActionCreator(
    types.ADMIN_DELETE_SECTOR_ATTEMPT,
);
export const DeleteSectorSuccess = payloadActionCreator(
    types.ADMIN_DELETE_SECTOR_SUCCESS,
);
export const DeleteSectorFailed = payloadActionCreator(
    types.ADMIN_DELETE_SECTOR_FAILED,
);

