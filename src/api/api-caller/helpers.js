import Axios from "axios";
import { store } from "../../components/app";
import { refreshTokenAPI } from "../auth";
import { tokenRefreshSuccess, logoutAttempt } from "../../actions/auth/actions";

export const isTokenExpiredError = (status) => status === 401;

export const resetTokenAndReattemptRequest = (
  originalRequest,
  data,
  authType
) =>
  new Promise((resolve, reject) => {
    let isRefreshing = false;
    if (!isRefreshing) {
      refreshTokenAPI(data)
        .then((res) => {
          originalRequest.headers.Authorization = `${authType} ${
            res.data.accessToken || ""
          }`;
          store.dispatch(tokenRefreshSuccess(res.data));
          isRefreshing = true;
          resolve(Axios(originalRequest));
        })
        .catch((err) => {
          store.dispatch(logoutAttempt());
          isRefreshing = true;
          reject(err);
        });
    }
  });
