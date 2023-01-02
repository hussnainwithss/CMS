import { call, select, put } from 'redux-saga/effects';
import { actions } from '../../actions/sectors';
import { selectAccessTokenFromState } from '../../selectors/auth';

import {
    addSectorApi,
    DeleteSectorApi,
    EditSectorApi,
    getSectorsApi,
} from '../../api/sectors';
import { ROUTES } from '../../routes/constants';

export function* getSectors({ payload: { setIsLoading } }) {
    const token = yield select(selectAccessTokenFromState);
    try {
        const resp = yield call(getSectorsApi, token);
        if (resp) {
            yield put(actions.getSectorsSuccess(resp.data.data));
            setIsLoading && setIsLoading(false);
        }
    } catch (error) {
        if (error.data)
            yield put(actions.getSectorsFailed(error.data.enMessage));
        else yield put(actions.getSectorsFailed(error));
    }
}
export function* addSector({
    payload: { values, setSubmitting, navigate, setStatus },
}) {
    const token = yield select(selectAccessTokenFromState);
    const data = { ...values };
    try {
        const resp = yield call(addSectorApi, token, data);
        if (resp) {
            yield put(actions.addSectorSuccess(resp.data.data));
            navigate(ROUTES.SECTORS);
            // afterSubmit(resp.data.data.id);
        }
    } catch (error) {
        setStatus({ type: 'danger', message: error.data.enMessage });
        if (error.data)
            yield put(actions.addSectorFailed(error.data.enMessage));
        else yield put(actions.addSectorFailed(error));
    }
    setSubmitting(false);
}

export function* editSector({
    payload: { values, setSubmitting, navigate, setStatus },
}) {
    const token = yield select(selectAccessTokenFromState);
    const data = { ...values };
    try {
        const resp = yield call(EditSectorApi, token, data);
        if (resp) {
            yield put(actions.editSectorSuccess(resp.data.data));
            navigate(ROUTES.SECTORS);
        }
    } catch (error) {
        setStatus({ type: 'danger', message: error.data.enMessage });
        if (error.data)
            yield put(actions.editSectorFailed(error.data.enMessage));
        else yield put(actions.editSectorFailed(error));
    }
    setSubmitting(false);
}

export function* deleteSector({ payload, payload: { sector, hideDeletePopUp, navigate } }) {
    const token = yield select(selectAccessTokenFromState);
    const data = { ...sector };
    try {
        const resp = yield call(DeleteSectorApi, token, data);
        if (resp) {
            yield put(actions.DeleteSectorSuccess(resp.data.data));
            navigate(ROUTES.SECTORS);
            hideDeletePopUp && hideDeletePopUp(false);
        }
    } catch (error) {
        hideDeletePopUp && hideDeletePopUp(false);
        if (error.data)
            yield put(actions.DeleteSectorFailed(error.data.enMessage));
        else yield put(actions.DeleteSectorFailed(error));
        
    }
    
}
