import * as types from './types';
import { payloadActionCreator, emptyActionCreator } from '../../utils/actions';

export const getChannelsAttempt = payloadActionCreator(
    types.ADMIN_GET_SERVICES_ATTEMPT,
);
export const getChannelsSuccess = payloadActionCreator(
    types.ADMIN_GET_SERVICES_SUCCESS,
);
export const getChannelsFailed = payloadActionCreator(
    types.ADMIN_GET_SERVICES_FAILED,
);

export const addChannelAttempt = payloadActionCreator(
    types.ADMIN_ADD_SERVICE_ATTEMPT,
);
export const addChannelSuccess = payloadActionCreator(
    types.ADMIN_ADD_SERVICE_SUCCESS,
);
export const addChannelFailed = payloadActionCreator(
    types.ADMIN_ADD_SERVICE_FAILED,
);

export const editChannelAttempt = payloadActionCreator(
    types.ADMIN_EDIT_SERVICE_ATTEMPT,
);
export const editChannelSuccess = payloadActionCreator(
    types.ADMIN_EDIT_SERVICE_SUCCESS,
);
export const editChannelFailed = payloadActionCreator(
    types.ADMIN_EDIT_SERVICE_FAILED,
);

export const DeleteChannelAttempt = payloadActionCreator(
    types.ADMIN_DELETE_SERVICE_ATTEMPT,
);
export const DeleteChannelSuccess = payloadActionCreator(
    types.ADMIN_DELETE_SERVICE_SUCCESS,
);
export const DeleteChannelFailed = payloadActionCreator(
    types.ADMIN_DELETE_SERVICE_FAILED,
);

