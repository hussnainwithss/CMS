import { apiCaller } from '../api-caller';
import { ENDPOINTS, REQUEST_TYPES } from '../constants';

export const getUsersApi = (token, userId) =>
    apiCaller({
        method: REQUEST_TYPES.GET,
        url: ENDPOINTS.USERS,
        token,
        params: userId,
    });

export const addUserApi = (token, data) =>
    apiCaller({
        method: REQUEST_TYPES.POST,
        url: ENDPOINTS.USERS,
        token,
        data,
    });

export const EditUserApi = (token, data) =>
    apiCaller({
        method: REQUEST_TYPES.PUT,
        url: ENDPOINTS.USERS,
        token,
        data,
    });

export const DeleteUserApi = (token, data) =>
    apiCaller({
        method: REQUEST_TYPES.DELETE,
        url: `${ENDPOINTS.USERS}/${data.id}`,
        token,
        data,
    });
