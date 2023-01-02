import { call, select, put } from 'redux-saga/effects';
import { actions } from '../../actions/admin';
import { selectAccessTokenFromState } from '../../selectors/auth';

import {
    addEntityTypeApi,
    DeleteEntityTypeApi,
    EditEntityTypeApi,
    getEntityTypesApi,
} from '../../api/admin';

export function* getEntityTypes({ payload: { setIsLoading } }) {
    const token = yield select(selectAccessTokenFromState);
    try {
        const resp = yield call(getEntityTypesApi, token);
        if (resp) {
            yield put(actions.getEntityTypesSuccess(resp.data.data));
            setIsLoading && setIsLoading(false);
        }
    } catch (error) {
        if (error.data)
            yield put(actions.getEntityTypesFailed(error.data.enMessage));
        else yield put(actions.getEntityTypesFailed(error));
    }
}
export function* addEntityType({
    payload: { values, setSubmitting, afterSubmit, setStatus },
}) {
    const token = yield select(selectAccessTokenFromState);
    const data = { ...values };
    try {
        const resp = yield call(addEntityTypeApi, token, data);
        if (resp) {
            yield put(actions.addEntityTypeSuccess(resp.data.data));
            afterSubmit();
        }
    } catch (error) {
        setStatus({ type: 'danger', message: error.data.enMessage });
        if (error.data)
            yield put(actions.addEntityTypeFailed(error.data.enMessage));
        else yield put(actions.addEntityTypeFailed(error));
    }
    setSubmitting(false);
}

export function* editEntityType({
    payload: { values, setSubmitting, afterSubmit, setStatus },
}) {
    const token = yield select(selectAccessTokenFromState);
    const data = { ...values };
    try {
        const resp = yield call(EditEntityTypeApi, token, data);
        if (resp) {
            yield put(actions.editEntityTypeSuccess(resp.data.data));
            afterSubmit();
        }
    } catch (error) {
        setStatus({ type: 'danger', message: error.data.enMessage });
        if (error.data)
            yield put(actions.editEntityTypeFailed(error.data.enMessage));
        else yield put(actions.editEntityTypeFailed(error));
    }
    setSubmitting(false);
}

export function* deleteEntityType({ payload: { entityType, setShowDeletePopUp, setIsDeleting } }) {
    const token = yield select(selectAccessTokenFromState);
    const data = { ...entityType };
    try {
        const resp = yield call(DeleteEntityTypeApi, token, data.id);
        if (resp) {
            yield put(actions.DeleteEntityTypeSuccess(resp.data.data));
            setShowDeletePopUp(false);
        }
    } catch (error) {
        if (error.data)
            yield put(actions.DeleteEntityTypeFailed(error.data.enMessage));
        else yield put(actions.DeleteEntityTypeFailed(error));
        
    }
    setIsDeleting(false);
}
