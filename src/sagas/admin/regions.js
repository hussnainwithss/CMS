import { call, select, put } from 'redux-saga/effects';
import { actions } from '../../actions/admin';
import { selectAccessTokenFromState } from '../../selectors/auth';

import {
    addRegionApi,
    DeleteRegionApi,
    EditRegionApi,
    getRegionsApi,
} from '../../api/admin';

export function* getRegions({ payload: { setIsLoading } }) {
    const token = yield select(selectAccessTokenFromState);
    try {
        const resp = yield call(getRegionsApi, token);
        if (resp) {
            yield put(actions.getRegionsSuccess(resp.data.data));
            setIsLoading(false);
        }
    } catch (error) {
        yield put(actions.getRegionsFailed(error.data.enMessage));
    }
}

export function* addRegion({
    payload: { values, setSubmitting, afterSubmit, setStatus },
}) {
    const token = yield select(selectAccessTokenFromState);
    const data = { ...values };
    try {
        const resp = yield call(addRegionApi, token, data);
        if (resp) {
            yield put(actions.addRegionSuccess(resp.data.data));
            afterSubmit(resp.data.data.id);
        }
    } catch (error) {
        setStatus({ type: 'danger', message: error.data.enMessage });
        yield put(actions.addRegionFailed(error.data.enMessage));
    }
    setSubmitting(false);
}

export function* editRegion({
    payload: { values, setSubmitting, afterSubmit, setStatus },
}) {
    const token = yield select(selectAccessTokenFromState);
    const data = { ...values };
    try {
        const resp = yield call(EditRegionApi, token, data);
        if (resp) {
            yield put(actions.editRegionSuccess(resp.data.data));
            afterSubmit();
        }
    } catch (error) {
        setStatus({ type: 'danger', message: error.data.enMessage });
        yield put(actions.editRegionFailed(error.data.enMessage));
    }
    setSubmitting(false);
}

export function* deleteRegion({ payload: { region, setShowDeletePopUp } }) {
    const token = yield select(selectAccessTokenFromState);
    const data = { ...region };
    try {
        const resp = yield call(DeleteRegionApi, token, data);
        if (resp) {
            yield put(actions.DeleteRegionSuccess(resp.data.data));
            setShowDeletePopUp(false);
        }
    } catch (error) {
        yield put(actions.DeleteRegionFailed(error.message));
    }
}
