import * as types from "./types";
import { payloadActionCreator, emptyActionCreator } from "../../utils/actions";

export const loginAttempt = payloadActionCreator(types.AUTH_LOGIN_ATTEMPT);
export const loginSuccess = payloadActionCreator(types.AUTH_LOGIN_SUCCESS);
export const loginFailed = payloadActionCreator(types.AUTH_LOGIN_FAIL);

export const logoutAttempt = payloadActionCreator(types.AUTH_LOGOUT_ATTEMPT);
export const logoutSuccess = emptyActionCreator(types.AUTH_LOGOUT_SUCCESS);
export const logoutFailed = payloadActionCreator(types.AUTH_LOGOUT_FAIL);
