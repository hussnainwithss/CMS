import { call, put } from "redux-saga/effects";
import { actions } from "../../actions/auth";
import { loginAPI } from "../../api/auth";
import { ROUTES } from "../../routes/constants";

export function* attemptLogin({ payload: { values, navigate } }) {
  console.log("im here");
  try {
    const resp = yield call(loginAPI, values);
    if (resp) {
      yield put(actions.loginSuccess(resp.data));
      navigate(ROUTES.DASHBOARD);
      return;
    }
  } catch (error) {
    yield put(actions.loginFailure(error.data));
    // yield put(actions.resetInfoMesssage());
  }
}
