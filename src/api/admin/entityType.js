import { apiCaller } from '../api-caller';
import { ENDPOINTS, REQUEST_TYPES } from '../constants';

export const getEntityTypesApi = (token) =>
    apiCaller({
        method: REQUEST_TYPES.GET,
        url: ENDPOINTS.ENTITYTYPE,
        token,
    });

export const addEntityTypeApi = (token, data) =>
    apiCaller({
        method: REQUEST_TYPES.POST,
        url: ENDPOINTS.ENTITYTYPE,
        token,
        data,
    });

export const EditEntityTypeApi = (token, data) =>
    apiCaller({
        method: REQUEST_TYPES.PUT,
        url: ENDPOINTS.ENTITYTYPE,
        token,
        data,
    });

export const DeleteEntityTypeApi = (token, id) =>
    apiCaller({
        method: REQUEST_TYPES.DELETE,
        url: `${ENDPOINTS.ENTITYTYPE}/${id}`,
        token,
    });
