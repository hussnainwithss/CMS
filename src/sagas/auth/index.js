import { takeEvery } from "redux-saga/effects";
import { types } from "../../actions/auth";

import { attemptLogin } from "./auth";

export function* authSaga() {
  yield takeEvery(types.AUTH_LOGIN_ATTEMPT, attemptLogin);
}
