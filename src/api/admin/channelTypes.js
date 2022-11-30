import { apiCaller } from '../api-caller';
import { ENDPOINTS, REQUEST_TYPES } from '../constants';

export const getChannelTypesApi = (token) =>
    apiCaller({
        method: REQUEST_TYPES.GET,
        url: ENDPOINTS.CHANNELTYPES,
        token,
    });

export const addChannelTypeApi = (token, data) =>
    apiCaller({
        method: REQUEST_TYPES.POST,
        url: ENDPOINTS.CHANNELTYPES,
        token,
        data,
    });

export const EditChannelTypeApi = (token, data) =>
    apiCaller({
        method: REQUEST_TYPES.PUT,
        url: ENDPOINTS.CHANNELTYPES,
        token,
        data,
    });

export const DeleteChannelTypeApi = (token, data) =>
    apiCaller({
        method: REQUEST_TYPES.DELETE,
        url: `${ENDPOINTS.CHANNELTYPES}/${data.id}`,
        token,
    });
