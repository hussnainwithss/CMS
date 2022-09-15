import { call, put } from "redux-saga/effects";
import * as caseConverter from "change-object-case";
import { actions } from "../../actions/auth";
import { loginAPI } from "../../api/auth";
import { ROUTES } from "../../routes/constants";

export function* attemptLogin({
  payload: { values, navigate, setSubmitting },
}) {
  try {
    const resp = yield call(loginAPI, values);
    const respData = caseConverter.toCamel(JSON.parse(resp.data));
    if (respData && respData.key) {
      const actionPayload = {
        token: {
          ...respData,
        },
        user: respData.user,
      };
      delete actionPayload.token.user;
      yield put(actions.loginSuccess(actionPayload));
      navigate(ROUTES.DASHBOARD);
    } else {
      throw Error();
    }
  } catch (error) {
    yield put(actions.loginFailure({ message: "Auth Failed" }));
  }
  setSubmitting(false);
}
