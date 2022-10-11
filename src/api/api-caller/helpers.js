// import Axios from "axios";
// import { store } from "../../App";
// import { tokenRefreshSuccess, logoutAttempt } from "../../actions/auth/actions";
import moment from 'moment';

export const isTokenExpiredError = (status, TokenExpireTimeStamp) =>
    status === 401 && moment().isAfter(moment(TokenExpireTimeStamp));

// export const resetTokenAndReattemptRequest = (
//   originalRequest,
//   data,
//   authType
// ) =>
//   new Promise((resolve, reject) => {
//     let isRefreshing = false;
//     if (!isRefreshing) {
//       refreshTokenAPI(data)
//         .then((res) => {
//           originalRequest.headers.Authorization = `${authType} ${
//             res.data.accessToken || ""
//           }`;
//           store.dispatch(tokenRefreshSuccess(res.data));
//           isRefreshing = true;
//           resolve(Axios(originalRequest));
//         })
//         .catch((err) => {
//           store.dispatch(logoutAttempt());
//           isRefreshing = true;
//           reject(err);
//         });
//     }
//   });
