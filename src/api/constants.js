export const BASE_URL =
  process.env.REACT_APP_BACKEND_API_URL !== undefined
    ? process.env.REACT_APP_BACKEND_API_URL
    : window._env_.API_URL;

export const ENDPOINTS = {
  LOGIN: `${BASE_URL}/users/login`,
  USERS: `${BASE_URL}/users`,
};

export const REQUEST_TYPES = {
  GET: "GET",
  POST: "POST",
  PUT: "PUT",
  PATCH: "PATCH",
  DELETE: "DELETE",
};
