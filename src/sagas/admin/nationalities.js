import { call, select, put } from 'redux-saga/effects';
import { actions } from '../../actions/admin';
import { selectAccessTokenFromState } from '../../selectors/auth';

import {
    addNationalityApi,
    DeleteNationalityApi,
    EditNationalityApi,
    getNationalitiesApi,
} from '../../api/admin';

export function* getNationalities({ payload: { setIsLoading } }) {
    const token = yield select(selectAccessTokenFromState);
    try {
        const resp = yield call(getNationalitiesApi, token);
        if (resp) {
            yield put(actions.getNationalitiesSuccess(resp.data.data));
            setIsLoading(false);
        }
    } catch (error) {
        yield put(actions.getNationalitiesFailed(error.data.enMessage));
    }
}

export function* addNationality({
    payload: { values, setSubmitting, afterSubmit, setStatus },
}) {
    const token = yield select(selectAccessTokenFromState);
    const data = { ...values };
    try {
        const resp = yield call(addNationalityApi, token, data);
        if (resp) {
            yield put(actions.addNationalitySuccess(resp.data.data));
            afterSubmit();
        }
    } catch (error) {
        setStatus({ type: 'danger', message: error.data.enMessage });
        yield put(actions.addNationalityFailed(error.data.enMessage));
    }
    setSubmitting(false);
}

export function* editNationality({
    payload: { values, setSubmitting, afterSubmit, setStatus },
}) {
    const token = yield select(selectAccessTokenFromState);
    const data = { ...values };
    try {
        const resp = yield call(EditNationalityApi, token, data);
        if (resp) {
            yield put(actions.editNationalitySuccess(resp.data.data));
            afterSubmit();
        }
    } catch (error) {
        setStatus({ type: 'danger', message: error.data.enMessage });
        yield put(actions.editNationalityFailed(error.data.enMessage));
    }
    setSubmitting(false);
}

export function* deleteNationality({ payload: { nationality, setShowDeletePopUp } }) {
    const token = yield select(selectAccessTokenFromState);
    const data = { ...nationality };
    try {
        const resp = yield call(DeleteNationalityApi, token, data);
        if (resp) {
            yield put(actions.DeleteNationalitySuccess(resp.data.data));
            setShowDeletePopUp(false);
        }
    } catch (error) {
        yield put(actions.DeleteNationalityFailed(error.message));
    }
}
