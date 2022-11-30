import { call, select, put } from 'redux-saga/effects';
import { actions } from '../../actions/admin';
import { selectAccessTokenFromState } from '../../selectors/auth';

import {
    addLanguageApi,
    DeleteLanguageApi,
    EditLanguageApi,
    getLanguagesApi,
} from '../../api/admin';

export function* getLanguages({ payload: { setIsLoading } }) {
    const token = yield select(selectAccessTokenFromState);
    try {
        const resp = yield call(getLanguagesApi, token);
        if (resp) {
            yield put(actions.getLanguagesSuccess(resp.data.data));
            setIsLoading(false);
        }
    } catch (error) {
        yield put(actions.getLanguagesFailed(error.data.enMessage));
    }
}

export function* addLanguage({
    payload: { values, setSubmitting, afterSubmit, setStatus },
}) {
    const token = yield select(selectAccessTokenFromState);
    const data = { ...values };
    try {
        const resp = yield call(addLanguageApi, token, data);
        if (resp) {
            yield put(actions.addLanguageSuccess(resp.data.data));
            afterSubmit();
        }
    } catch (error) {
        setStatus({ type: 'danger', message: error.data.enMessage });
        yield put(actions.addLanguageFailed(error.data.enMessage));
    }
    setSubmitting(false);
}

export function* editLanguage({
    payload: { values, setSubmitting, afterSubmit, setStatus },
}) {
    const token = yield select(selectAccessTokenFromState);
    const data = { ...values };
    try {
        const resp = yield call(EditLanguageApi, token, data);
        if (resp) {
            yield put(actions.editLanguageSuccess(resp.data.data));
            afterSubmit();
        }
    } catch (error) {
        setStatus({ type: 'danger', message: error.data.enMessage });
        yield put(actions.editLanguageFailed(error.data.enMessage));
    }
    setSubmitting(false);
}

export function* deleteLanguage({ payload: { language, setShowDeletePopUp } }) {
    const token = yield select(selectAccessTokenFromState);
    const data = { ...language };
    try {
        const resp = yield call(DeleteLanguageApi, token, data);
        if (resp) {
            yield put(actions.DeleteLanguageSuccess(resp.data.data));
            setShowDeletePopUp(false);
        }
    } catch (error) {
        yield put(actions.DeleteLanguageFailed(error.message));
    }
}
