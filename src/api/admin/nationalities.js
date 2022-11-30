import { apiCaller } from '../api-caller';
import { ENDPOINTS, REQUEST_TYPES } from '../constants';

export const getNationalitiesApi = (token) =>
    apiCaller({
        method: REQUEST_TYPES.GET,
        url: ENDPOINTS.NATIONALITIES,
        token,
    });

export const addNationalityApi = (token, data) =>
    apiCaller({
        method: REQUEST_TYPES.POST,
        url: ENDPOINTS.NATIONALITIES,
        token,
        data,
    });

export const EditNationalityApi = (token, data) =>
    apiCaller({
        method: REQUEST_TYPES.PUT,
        url: ENDPOINTS.NATIONALITIES,
        token,
        data,
    });

export const DeleteNationalityApi = (token, data) =>
    apiCaller({
        method: REQUEST_TYPES.DELETE,
        url: `${ENDPOINTS.NATIONALITIES}/${data.id}`,
        token,
        data,
    });
