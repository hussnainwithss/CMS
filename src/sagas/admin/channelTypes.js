import { call, select, put } from 'redux-saga/effects';
import { actions } from '../../actions/admin';
import { selectAccessTokenFromState } from '../../selectors/auth';

import {
    addChannelTypeApi,
    DeleteChannelTypeApi,
    EditChannelTypeApi,
    getChannelTypesApi,
} from '../../api/admin';

export function* getChannelTypes({ payload: { setIsLoading } }) {
    const token = yield select(selectAccessTokenFromState);
    try {
        const resp = yield call(getChannelTypesApi, token);
        if (resp) {
            yield put(actions.getChannelTypesSuccess(resp.data.data));
            setIsLoading(false);
        }
    } catch (error) {
        if (error.data)
            yield put(actions.getChannelTypesFailed(error.data.enMessage));
        else yield put(actions.getChannelTypesFailed(error));
    }
}
export function* addChannelType({
    payload: { values, setSubmitting, afterSubmit, setStatus },
}) {
    const token = yield select(selectAccessTokenFromState);
    const data = { ...values };
    try {
        const resp = yield call(addChannelTypeApi, token, data);
        if (resp) {
            yield put(actions.addChannelTypeSuccess(resp.data.data));
            afterSubmit();
        }
    } catch (error) {
        setStatus({ type: 'danger', message: error.data.enMessage });
        if (error.data)
            yield put(actions.addChannelTypeFailed(error.data.enMessage));
        else yield put(actions.addChannelTypeFailed(error));
    }
    setSubmitting(false);
}

export function* editChannelType({
    payload: { values, setSubmitting, afterSubmit, setStatus },
}) {
    const token = yield select(selectAccessTokenFromState);
    const data = { ...values };
    try {
        const resp = yield call(EditChannelTypeApi, token, data);
        if (resp) {
            yield put(actions.editChannelTypeSuccess(resp.data.data));
            afterSubmit();
        }
    } catch (error) {
        setStatus({ type: 'danger', message: error.data.enMessage });
        if (error.data)
            yield put(actions.editChannelTypeFailed(error.data.enMessage));
        else yield put(actions.editChannelTypeFailed(error));
    }
    setSubmitting(false);
}

export function* deleteChannelType({ payload: { channel, setShowDeletePopUp } }) {
    const token = yield select(selectAccessTokenFromState);
    const data = { ...channel };
    try {
        const resp = yield call(DeleteChannelTypeApi, token, data);
        if (resp) {
            yield put(actions.DeleteChannelTypeSuccess(resp.data.data));
            setShowDeletePopUp(false);
        }
    } catch (error) {
        if (error.data)
            yield put(actions.DeleteChannelTypeFailed(error.data.enMessage));
        else yield put(actions.DeleteChannelTypeFailed(error));
    }
}
