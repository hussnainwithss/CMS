import { apiCaller } from '../api-caller';
import { ENDPOINTS, REQUEST_TYPES } from '../constants';

export const getLanguagesApi = (token) =>
    apiCaller({
        method: REQUEST_TYPES.GET,
        url: ENDPOINTS.LANGUAGES,
        token,
    });

export const addLanguageApi = (token, data) =>
    apiCaller({
        method: REQUEST_TYPES.POST,
        url: ENDPOINTS.LANGUAGES,
        token,
        data,
    });

export const EditLanguageApi = (token, data) =>
    apiCaller({
        method: REQUEST_TYPES.PUT,
        url: ENDPOINTS.LANGUAGES,
        token,
        data,
    });

export const DeleteLanguageApi = (token, data) =>
    apiCaller({
        method: REQUEST_TYPES.DELETE,
        url: `${ENDPOINTS.LANGUAGES}/${data.id}`,
        token,
        data,
    });
