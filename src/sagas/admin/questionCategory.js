import { call, select, put } from 'redux-saga/effects';
import { actions } from '../../actions/admin';
import { selectAccessTokenFromState } from '../../selectors/auth';

import {
    addQuestionCategoryApi,
    DeleteQuestionCategoryApi,
    EditQuestionCategoryApi,
    getQuestionCategoriesApi,
} from '../../api/admin';

export function* getQuestionCategories({ payload: { setIsLoading } }) {
    const token = yield select(selectAccessTokenFromState);
    try {
        const resp = yield call(getQuestionCategoriesApi, token);
        if (resp) {
            yield put(actions.getQuestionCategoriesSuccess(resp.data.data));
            setIsLoading(false);
        }
    } catch (error) {
        if (error.data)
            yield put(actions.getQuestionCategoriesFailed(error.data.enMessage));
        else yield put(actions.getQuestionCategoriesFailed(error));
    }
}
export function* addQuestionCategory({
    payload: { values, setSubmitting, afterSubmit, setStatus },
}) {
    const token = yield select(selectAccessTokenFromState);
    const data = { ...values };
    try {
        const resp = yield call(addQuestionCategoryApi, token, data);
        if (resp) {
            yield put(actions.addQuestionCategorySuccess(resp.data.data));
            afterSubmit();
        }
    } catch (error) {
        setStatus({ type: 'danger', message: error.data.enMessage });
        if (error.data)
            yield put(actions.addQuestionCategoryFailed(error.data.enMessage || error));
        else yield put(actions.addQuestionCategoryFailed(error));
    }
    setSubmitting(false);
}

export function* editQuestionCategory({
    payload: { values, setSubmitting, afterSubmit, setStatus },
}) {
    const token = yield select(selectAccessTokenFromState);
    const data = { ...values };
    try {
        const resp = yield call(EditQuestionCategoryApi, token, data);
        if (resp) {
            yield put(actions.editQuestionCategorySuccess(resp.data.data));
            afterSubmit();
        }
    } catch (error) {
        setStatus({ type: 'danger', message: error.data.enMessage });
        if (error.data)
            yield put(actions.editQuestionCategoryFailed(error.data.enMessage));
        else yield put(actions.editQuestionCategoryFailed(error));
    }
    setSubmitting(false);
}

export function* deleteQuestionCategory({ payload: { questionCategory, setShowDeletePopUp, setIsDeleting } }) {
    const token = yield select(selectAccessTokenFromState);
    const data = { ...questionCategory };
    try {
        const resp = yield call(DeleteQuestionCategoryApi, token, data);
        if (resp) {
            yield put(actions.DeleteQuestionCategorySuccess(resp.data.data));
            setShowDeletePopUp(false);
        }
    } catch (error) {
        if (error.data)
            yield put(actions.DeleteQuestionCategoryFailed(error.data.enMessage));
        else yield put(actions.DeleteQuestionCategoryFailed(error));
        
    }
    setIsDeleting(false);
}
