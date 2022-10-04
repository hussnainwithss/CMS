import { apiCaller } from "../api-caller";
import { ENDPOINTS, REQUEST_TYPES } from "../constants";

export const loginAPI = (data) =>
  apiCaller({
    method: REQUEST_TYPES.POST,
    url: ENDPOINTS.LOGIN,
    data,
  });
