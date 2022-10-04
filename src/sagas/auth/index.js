import { takeEvery, takeLatest } from "redux-saga/effects";
import { types } from "../../actions/auth";

import { attemptLogin, attemptLogout } from "./auth";

export function* authSaga() {
  yield takeEvery(types.AUTH_LOGIN_ATTEMPT, attemptLogin);
  yield takeLatest(types.AUTH_LOGOUT_ATTEMPT, attemptLogout);
}
