import Axios from "axios";
import * as queryString from "query-string";
import * as caseConverter from "change-object-case";
import { isTokenExpiredError } from "./helpers";

import { store } from "../../App";
import { logoutAttempt } from "../../actions/auth/actions";
import { selectTokenExpiredDateFromState } from "../../selectors/auth";

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
    data,
    transformRequest: [
      (reqData) =>
        typeof reqData === "string"
          ? reqData
          : caseConverter.toTitle(JSON.stringify(reqData)),
      // this check will not stringfigy already stringify object
    ],
    headers: {
      Authorization: `${token || ""}`,
      "Content-Type": "application/json",
    },
    responseType: "json",
    validateStatus: (status) => status >= 200 && status < 300,
  })
    .then((res) => res)
    .catch(({ response }) => {
      if (response){
        throw response;
      }
      throw Error("Unauthorized");
      
    });
}

Axios.interceptors.response.use(
  (response) => response,
  (error) => {
    const {
      response: { status },
    } = error;
    const originalState = store.getState();
    const TokenExpireTimeStamp = selectTokenExpiredDateFromState(originalState);
    // this will check for token expired specific case in all api's error response
    if (isTokenExpiredError(status, TokenExpireTimeStamp)) {
      store.dispatch(logoutAttempt());
      return Promise.resolve("Logged out");
    }
    return Promise.reject(error);
  }
);
