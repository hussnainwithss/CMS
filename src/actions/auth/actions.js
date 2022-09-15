import * as types from "./types";
import { payloadActionCreator } from "../../utils/actions";

export const loginAttempt = payloadActionCreator(types.AUTH_LOGIN_ATTEMPT);
export const loginSuccess = payloadActionCreator(types.AUTH_LOGIN_SUCCESS);
export const loginFailure = payloadActionCreator(types.AUTH_LOGIN_FAIL);
