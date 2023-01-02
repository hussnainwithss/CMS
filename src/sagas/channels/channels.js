import { call, select, put } from 'redux-saga/effects';
import { actions } from '../../actions/channels';
import { selectAccessTokenFromState } from '../../selectors/auth';

import {
    addChannelApi,
    DeleteChannelApi,
    EditChannelApi,
    getChannelsApi,
} from '../../api/channels';
import { ROUTES } from '../../routes/constants';

export function* getChannels({ payload: { setIsLoading } }) {
    const token = yield select(selectAccessTokenFromState);
    try {
        const resp = yield call(getChannelsApi, token);
        if (resp) {
            yield put(actions.getChannelsSuccess(resp.data.data));
            setIsLoading && setIsLoading(false);
        }
    } catch (error) {
        if (error.data)
            yield put(actions.getChannelsFailed(error.data.enMessage));
        else yield put(actions.getChannelsFailed(error));
    }
}
export function* addChannel({
    payload: { values, setSubmitting, navigate, setStatus },
}) {
    const token = yield select(selectAccessTokenFromState);
    const data = { ...values };
    try {
        const resp = yield call(addChannelApi, token, data);
        if (resp) {
            yield put(actions.addChannelSuccess(resp.data.data));
            navigate(ROUTES.CHANNELS);
            // afterSubmit(resp.data.data.id);
        }
    } catch (error) {
        setStatus({ type: 'danger', message: error.data.enMessage });
        if (error.data)
            yield put(actions.addChannelFailed(error.data.enMessage));
        else yield put(actions.addChannelFailed(error));
    }
    setSubmitting(false);
}

export function* editChannel({
    payload: { values, setSubmitting, navigate, setStatus },
}) {
    const token = yield select(selectAccessTokenFromState);
    const data = { ...values };
    try {
        const resp = yield call(EditChannelApi, token, data);
        if (resp) {
            yield put(actions.editChannelSuccess(resp.data.data));
            navigate(ROUTES.CHANNELS);
        }
    } catch (error) {
        setStatus({ type: 'danger', message: error.data.enMessage });
        if (error.data)
            yield put(actions.editChannelFailed(error.data.enMessage));
        else yield put(actions.editChannelFailed(error));
    }
    setSubmitting(false);
}

export function* deleteChannel({ payload, payload: { channel, hideDeletePopUp, navigate } }) {
    const token = yield select(selectAccessTokenFromState);
    const data = { ...channel };
    try {
        const resp = yield call(DeleteChannelApi, token, data);
        if (resp) {
            yield put(actions.DeleteChannelSuccess(resp.data.data));
            navigate(ROUTES.CHANNELS);
            hideDeletePopUp && hideDeletePopUp(false);
        }
    } catch (error) {
        hideDeletePopUp && hideDeletePopUp(false);
        if (error.data)
            yield put(actions.DeleteChannelFailed(error.data.enMessage));
        else yield put(actions.DeleteChannelFailed(error));
        
    }
    
}
