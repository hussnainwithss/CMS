import { apiCaller } from '../api-caller';
import { ENDPOINTS, REQUEST_TYPES } from '../constants';

export const getRegionsApi = (token) =>
    apiCaller({
        method: REQUEST_TYPES.GET,
        url: ENDPOINTS.REGIONS,
        token,
    });

export const addRegionApi = (token, data) =>
    apiCaller({
        method: REQUEST_TYPES.POST,
        url: ENDPOINTS.REGIONS,
        token,
        data,
    });

export const EditRegionApi = (token, data) =>
    apiCaller({
        method: REQUEST_TYPES.PUT,
        url: ENDPOINTS.REGIONS,
        token,
        data,
    });

export const DeleteRegionApi = (token, data) =>
    apiCaller({
        method: REQUEST_TYPES.DELETE,
        url: `${ENDPOINTS.REGIONS}/${data.id}`,
        token,
    });
