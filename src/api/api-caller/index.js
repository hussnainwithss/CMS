import Axios from "axios";
import * as queryString from "query-string";
import * as caseConverter from "change-object-case";

export function apiCaller({
  method = "GET",
  url = "",
  params = {},
  data = {},
  token = "",
} = {}) {
  // set-up case conversion configurations
  caseConverter.options = { recursive: true, arrayRecursive: true };
  return Axios({
    method,
    url,
    params,
    paramsSerializer: (queryParams) => queryString.stringify(queryParams),
    transformResponse: [(respData) => caseConverter.toCamel(respData)],
    data,
    transformRequest: [
      (reqData) =>
        typeof reqData === "string"
          ? reqData
          : caseConverter.toTitle(JSON.stringify(reqData)),
      // this check will not stringfigy already stringify object
    ],
    headers: {
      Authorization: `Bearer ${token || ""}`,
      "Content-Type": "application/json",
    },
    responseType: "json",
    validateStatus: (status) => status >= 200 && status < 300,
  })
    .then((res) => res)
    .catch(({ response }) => {
      console.error(response);
      throw response;
    });
}

// Axios.interceptors.response.use(
//   (response) => response,
//   (error) => {
//     const {
//       config,
//       response: { status, data },
//     } = error;
//     // this will check for token expired specific case in all api's error response
//     if (isTokenExpiredError(status, data)) {
//       store.dispatch(logoutAttempt());
//       const originalRequest = config;
//       const storeState = store.getState();
//       const refreshToken = selectRefreshTokenFromState(storeState);
//       const { email } = selectLoggedInUserFromState(storeState);
//       const authType = selectAuthTypeFromState(storeState);
//       // retry to fetch new accesstoken by making an refreshToken api call
//       return resetTokenAndReattemptRequest(
//         originalRequest,
//         { refreshToken, email },
//         authType
//       );
//     }
//     return Promise.reject(error);
//   }
// );
