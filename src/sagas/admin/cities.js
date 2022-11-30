import { call, select, put } from 'redux-saga/effects';
import { actions } from '../../actions/admin';
import { selectAccessTokenFromState } from '../../selectors/auth';

import {
    addCityApi,
    DeleteCityApi,
    EditCityApi,
    getCitiesApi,
} from '../../api/admin';

export function* getCities({ payload: { setIsLoading } }) {
    const token = yield select(selectAccessTokenFromState);
    try {
        const resp = yield call(getCitiesApi, token);
        if (resp) {
            yield put(actions.getCitiesSuccess(resp.data.data));
            setIsLoading(false);
        }
    } catch (error) {
        yield put(actions.getCitiesFailed(error.data.enMessage));
    }
}

export function* addCity({
    payload: { values, setSubmitting, afterSubmit, setStatus },
}) {
    const token = yield select(selectAccessTokenFromState);
    const data = { ...values };
    try {
        const resp = yield call(addCityApi, token, data);
        if (resp) {
            yield put(actions.addCitySuccess(resp.data.data));
            afterSubmit();
        }
    } catch (error) {
        setStatus({ type: 'danger', message: error.data.enMessage });
        yield put(actions.addCityFailed(error.data.enMessage));
    }
    setSubmitting(false);
}

export function* editCity({
    payload: { values, setSubmitting, afterSubmit, setStatus },
}) {
    const token = yield select(selectAccessTokenFromState);
    const data = { ...values };
    try {
        const resp = yield call(EditCityApi, token, data);
        if (resp) {
            yield put(actions.editCitySuccess(resp.data.data));
            afterSubmit();
        }
    } catch (error) {
        setStatus({ type: 'danger', message: error.data.enMessage });
        yield put(actions.editCityFailed(error.data.enMessage));
    }
    setSubmitting(false);
}

export function* deleteCity({ payload: { city, setShowDeletePopUp } }) {
    const token = yield select(selectAccessTokenFromState);
    const data = { ...city };
    try {
        const resp = yield call(DeleteCityApi, token, data);
        if (resp) {
            yield put(actions.DeleteCitySuccess(resp.data.data));
            setShowDeletePopUp(false);
        }
    } catch (error) {
        yield put(actions.DeleteCityFailed(error.message));
    }
}
