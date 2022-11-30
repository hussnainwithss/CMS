export const BASE_URL =
    process.env.REACT_APP_BACKEND_API_URL !== undefined
        ? process.env.REACT_APP_BACKEND_API_URL
        : window._env_.API_URL;

export const ENDPOINTS = {
    LOGIN: `${BASE_URL}/users/login`,
    USERS: `${BASE_URL}/users`,
    CHANNELS: `${BASE_URL}/channelscategories`,
    CITIES: `${BASE_URL}/cities`,
    REGIONS: `${BASE_URL}/regions`,
    LANGUAGES: `${BASE_URL}/languages`,
    NATIONALITIES: `${BASE_URL}/nationalities`,
    ENTITYTYPE: `${BASE_URL}/entitytype`, 
    QUESTIONCATEGORY: `${BASE_URL}/questioncategory`,
    CHANNELTYPES: `${BASE_URL}/channelType`,
    SECTORS: `${BASE_URL}/sectors`,
    ENTITIES: `${BASE_URL}/entities`,
};

export const REQUEST_TYPES = {
    GET: 'GET',
    POST: 'POST',
    PUT: 'PUT',
    PATCH: 'PATCH',
    DELETE: 'DELETE',
};
