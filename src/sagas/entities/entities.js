import { call, select, put } from 'redux-saga/effects';
import { actions } from '../../actions/entities';
import { selectAccessTokenFromState } from '../../selectors/auth';

import {
    addEntityApi,
    DeleteEntityApi,
    EditEntityApi,
    getEntitiesApi,
} from '../../api/entities';
import { ROUTES } from '../../routes/constants';

export function* getEntities({ payload: { setIsLoading } }) {
    const token = yield select(selectAccessTokenFromState);
    try {
        const resp = yield call(getEntitiesApi, token);
        if (resp) {
            yield put(actions.getEntitiesSuccess(resp.data.data));
            setIsLoading(false);
        }
    } catch (error) {
        if (error.data)
            yield put(actions.getEntitiesFailed(error.data.enMessage));
        else yield put(actions.getEntitiesFailed(error));
    }
}
export function* addEntity({
    payload: { values, setSubmitting, navigate, setStatus },
}) {
    const token = yield select(selectAccessTokenFromState);
    const data = { ...values };
    try {
        const resp = yield call(addEntityApi, token, data);
        if (resp) {
            yield put(actions.addEntitySuccess(resp.data.data));
            navigate(ROUTES.ENTITIES);
            // afterSubmit(resp.data.data.id);
        }
    } catch (error) {
        setStatus({ type: 'danger', message: error.data.enMessage });
        if (error.data)
            yield put(actions.addEntityFailed(error.data.enMessage));
        else yield put(actions.addEntityFailed(error));
    }
    setSubmitting(false);
}

export function* editEntity({
    payload: { values, setSubmitting, navigate, setStatus },
}) {
    const token = yield select(selectAccessTokenFromState);
    const data = { ...values };
    try {
        const resp = yield call(EditEntityApi, token, data);
        if (resp) {
            yield put(actions.editEntitySuccess(resp.data.data));
            navigate(ROUTES.ENTITIES);
        }
    } catch (error) {
        setStatus({ type: 'danger', message: error.data.enMessage });
        if (error.data)
            yield put(actions.editEntityFailed(error.data.enMessage));
        else yield put(actions.editEntityFailed(error));
    }
    setSubmitting(false);
}

export function* deleteEntity({ payload, payload: { entity, setShowDeletePopUp, navigate } }) {
    const token = yield select(selectAccessTokenFromState);
    const data = { ...entity };
    try {
        const resp = yield call(DeleteEntityApi, token, data);
        if (resp) {
            yield put(actions.DeleteEntitySuccess(resp.data.data));
            navigate(ROUTES.ENTITIES);
            setShowDeletePopUp(false);
        }
    } catch (error) {
        setShowDeletePopUp(false);
        if (error.data)
            yield put(actions.DeleteEntityFailed(error.data.enMessage));
        else yield put(actions.DeleteEntityFailed(error));
        
    }
    
}
