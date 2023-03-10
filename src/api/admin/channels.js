import { apiCaller } from '../api-caller';
import { ENDPOINTS, REQUEST_TYPES } from '../constants';

export const getChannelsApi = (token) =>
    apiCaller({
        method: REQUEST_TYPES.GET,
        url: ENDPOINTS.CHANNELCATEGORIES,
        token,
    });

export const addChannelApi = (token, data) =>
    apiCaller({
        method: REQUEST_TYPES.POST,
        url: ENDPOINTS.CHANNELCATEGORIES,
        token,
        data,
    });

export const EditChannelApi = (token, data) =>
    apiCaller({
        method: REQUEST_TYPES.PUT,
        url: ENDPOINTS.CHANNELCATEGORIES,
        token,
        data,
    });

export const DeleteChannelApi = (token, data) =>
    apiCaller({
        method: REQUEST_TYPES.DELETE,
        url: `${ENDPOINTS.CHANNELCATEGORIES}/${data.id}`,
        token,
        data,
    });
