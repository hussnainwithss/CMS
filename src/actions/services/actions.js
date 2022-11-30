import * as types from './types';
import { payloadActionCreator, emptyActionCreator } from '../../utils/actions';

export const getServicesAttempt = payloadActionCreator(
    types.ADMIN_GET_SERVICES_ATTEMPT,
);
export const getServicesSuccess = payloadActionCreator(
    types.ADMIN_GET_SERVICES_SUCCESS,
);
export const getServicesFailed = payloadActionCreator(
    types.ADMIN_GET_SERVICES_FAILED,
);

export const addServiceAttempt = payloadActionCreator(
    types.ADMIN_ADD_SERVICE_ATTEMPT,
);
export const addServiceSuccess = payloadActionCreator(
    types.ADMIN_ADD_SERVICE_SUCCESS,
);
export const addServiceFailed = payloadActionCreator(
    types.ADMIN_ADD_SERVICE_FAILED,
);

export const editServiceAttempt = payloadActionCreator(
    types.ADMIN_EDIT_SERVICE_ATTEMPT,
);
export const editServiceSuccess = payloadActionCreator(
    types.ADMIN_EDIT_SERVICE_SUCCESS,
);
export const editServiceFailed = payloadActionCreator(
    types.ADMIN_EDIT_SERVICE_FAILED,
);

export const DeleteServiceAttempt = payloadActionCreator(
    types.ADMIN_DELETE_SERVICE_ATTEMPT,
);
export const DeleteServiceSuccess = payloadActionCreator(
    types.ADMIN_DELETE_SERVICE_SUCCESS,
);
export const DeleteServiceFailed = payloadActionCreator(
    types.ADMIN_DELETE_SERVICE_FAILED,
);

