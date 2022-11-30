import { apiCaller } from '../api-caller';
import { ENDPOINTS, REQUEST_TYPES } from '../constants';

export const getQuestionCategoriesApi = (token) =>
    apiCaller({
        method: REQUEST_TYPES.GET,
        url: ENDPOINTS.QUESTIONCATEGORY,
        token,
    });

export const addQuestionCategoryApi = (token, data) =>
    apiCaller({
        method: REQUEST_TYPES.POST,
        url: ENDPOINTS.QUESTIONCATEGORY,
        token,
        data,
    });

export const EditQuestionCategoryApi = (token, data) =>
    apiCaller({
        method: REQUEST_TYPES.PUT,
        url: ENDPOINTS.QUESTIONCATEGORY,
        token,
        data,
    });

export const DeleteQuestionCategoryApi = (token, data) =>
    apiCaller({
        method: REQUEST_TYPES.DELETE,
        url: `${ENDPOINTS.QUESTIONCATEGORY}/${data.id}`,
        token,
    });
