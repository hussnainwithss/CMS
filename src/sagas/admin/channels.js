import { call, select, put } from 'redux-saga/effects';
import { actions } from '../../actions/admin';
import { selectAccessTokenFromState } from '../../selectors/auth';

import {
    addChannelApi,
    DeleteChannelApi,
    EditChannelApi,
    getChannelsApi,
} from '../../api/admin';

export function* getChannels({ payload: { setIsLoading } }) {
    const token = yield select(selectAccessTokenFromState);
    try {
        const resp = yield call(getChannelsApi, token);
        if (resp) {
            yield put(actions.getChannelsSuccess(resp.data.data));
            setIsLoading(false);
        }
    } catch (error) {
        yield put(actions.getChannelsFailed(error.data.enMessage));
    }
}

export function* addChannel({
    payload: { values, setSubmitting, afterSubmit, setStatus },
}) {
    const token = yield select(selectAccessTokenFromState);
    const data = { ...values };
    try {
        const resp = yield call(addChannelApi, token, data);
        if (resp) {
            yield put(actions.addChannelSuccess(resp.data.data));
            afterSubmit();
        }
    } catch (error) {
        setStatus({ type: 'danger', message: error.data.enMessage });
        yield put(actions.addChannelFailed(error.data.enMessage));
    }
    setSubmitting(false);
}

export function* editChannel({
    payload: { values, setSubmitting, afterSubmit, setStatus },
}) {
    const token = yield select(selectAccessTokenFromState);
    const data = { ...values };
    try {
        const resp = yield call(EditChannelApi, token, data);
        if (resp) {
            yield put(actions.editChannelSuccess(resp.data.data));
            afterSubmit();
        }
    } catch (error) {
        setStatus({ type: 'danger', message: error.data.enMessage });
        yield put(actions.editChannelFailed(error.data.enMessage));
    }
    setSubmitting(false);
}

export function* deleteChannel({ payload: { channel, setShowDeletePopUp } }) {
    const token = yield select(selectAccessTokenFromState);
    const data = { ...channel };
    try {
        const resp = yield call(DeleteChannelApi, token, data);
        if (resp) {
            yield put(actions.DeleteChannelSuccess(resp.data.data));
            setShowDeletePopUp(false);
        }
    } catch (error) {
        yield put(actions.DeleteChannelFailed(error.message));
    }
}
