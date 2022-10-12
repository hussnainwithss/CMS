import * as types from './types';
import { payloadActionCreator } from '../../utils/actions';

export const getUsersAttempt = payloadActionCreator(
    types.ADMIN_GET_USERS_ATTEMPT,
);
export const getUsersSuccess = payloadActionCreator(
    types.ADMIN_GET_USERS_SUCCESS,
);
export const getUsersFailed = payloadActionCreator(
    types.ADMIN_GET_USERS_FAILED,
);

export const addUserAttempt = payloadActionCreator(
    types.ADMIN_ADD_USER_ATTEMPT,
);
export const addUserSuccess = payloadActionCreator(
    types.ADMIN_ADD_USER_SUCCESS,
);
export const addUserFailed = payloadActionCreator(types.ADMIN_ADD_USER_FAILED);

export const editUserAttempt = payloadActionCreator(
    types.ADMIN_EDIT_USER_ATTEMPT,
);
export const editUserSuccess = payloadActionCreator(
    types.ADMIN_EDIT_USER_SUCCESS,
);
export const editUserFailed = payloadActionCreator(
    types.ADMIN_EDIT_USER_FAILED,
);

export const DeleteUserAttempt = payloadActionCreator(
    types.ADMIN_DELETE_USER_ATTEMPT,
);
export const DeleteUserSuccess = payloadActionCreator(
    types.ADMIN_DELETE_USER_SUCCESS,
);
export const DeleteUserFailed = payloadActionCreator(
    types.ADMIN_DELETE_USER_FAILED,
);

export const getChannelsAttempt = payloadActionCreator(
    types.ADMIN_GET_CHANNELS_ATTEMPT,
);
export const getChannelsSuccess = payloadActionCreator(
    types.ADMIN_GET_CHANNELS_SUCCESS,
);
export const getChannelsFailed = payloadActionCreator(
    types.ADMIN_GET_CHANNELS_FAILED,
);

export const addChannelAttempt = payloadActionCreator(
    types.ADMIN_ADD_CHANNEL_ATTEMPT,
);
export const addChannelSuccess = payloadActionCreator(
    types.ADMIN_ADD_CHANNEL_SUCCESS,
);
export const addChannelFailed = payloadActionCreator(
    types.ADMIN_ADD_CHANNEL_FAILED,
);

export const editChannelAttempt = payloadActionCreator(
    types.ADMIN_EDIT_CHANNEL_ATTEMPT,
);
export const editChannelSuccess = payloadActionCreator(
    types.ADMIN_EDIT_CHANNEL_SUCCESS,
);
export const editChannelFailed = payloadActionCreator(
    types.ADMIN_EDIT_CHANNEL_FAILED,
);

export const DeleteChannelAttempt = payloadActionCreator(
    types.ADMIN_DELETE_CHANNEL_ATTEMPT,
);
export const DeleteChannelSuccess = payloadActionCreator(
    types.ADMIN_DELETE_CHANNEL_SUCCESS,
);
export const DeleteChannelFailed = payloadActionCreator(
    types.ADMIN_DELETE_CHANNEL_FAILED,
);
