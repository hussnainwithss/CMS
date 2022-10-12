import { call, select, put } from 'redux-saga/effects';
import { actions } from '../../actions/admin';
import { selectAccessTokenFromState } from '../../selectors/auth';

import {
    addUserApi,
    DeleteUserApi,
    EditUserApi,
    getUsersApi,
} from '../../api/admin/users';

export function* getUsers({ payload: { setIsLoading } }) {
    const token = yield select(selectAccessTokenFromState);
    try {
        const resp = yield call(getUsersApi, token);
        if (resp) {
            yield put(actions.getUsersSuccess(resp.data.data));
            setIsLoading(false);
        }
    } catch (error) {
        yield put(actions.getUsersFailed(error.data.enMessage));
    }
}

export function* addUser({
    payload: { values, setSubmitting, afterSubmit, setStatus, setErrors },
}) {
    const token = yield select(selectAccessTokenFromState);
    const data = { ...values };
    try {
        const resp = yield call(addUserApi, token, data);
        if (resp) {
            yield put(actions.addUserSuccess(resp.data.data));
            afterSubmit();
        }
    } catch (error) {
        const errorMsg =
            error.data.enMessage === 'Already Exsist'
                ? `User ${error.data.enMessage}s`
                : error.data.enMessage;
        setStatus({ type: 'danger', message: errorMsg });
        yield put(actions.addUserFailed(error.data));
    }
    setSubmitting(false);
}

export function* editUser({
    payload: { values, setSubmitting, afterSubmit, setStatus, setErrors },
}) {
    const token = yield select(selectAccessTokenFromState);
    const data = { ...values };
    try {
        const resp = yield call(EditUserApi, token, data);
        if (resp) {
            yield put(actions.editUserSuccess(resp.data.data));
            afterSubmit();
        }
    } catch (error) {
        const errorMsg =
            error.data.enMessage === 'Already Exsist'
                ? `User ${error.data.enMessage}s`
                : error.data.enMessage;
        setStatus({ type: 'danger', message: errorMsg });
        yield put(actions.editUserFailed(errorMsg));
    }
    setSubmitting(false);
}

export function* deleteUser({ payload: { user, setShowDeletePopUp } }) {
    const token = yield select(selectAccessTokenFromState);
    const data = { ...user };
    try {
        const resp = yield call(DeleteUserApi, token, data);
        if (resp) {
            yield put(actions.DeleteUserSuccess(resp.data.data));
            setShowDeletePopUp(false);
        }
    } catch (error) {
        yield put(actions.DeleteUserFailed(error.message));
    }
}
