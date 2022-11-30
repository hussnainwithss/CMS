import { takeEvery, takeLatest } from 'redux-saga/effects';
import { types } from '../../actions/entities';

import { addEntity, editEntity, deleteEntity, getEntities } from './entities';

export function* entitiesSaga() {
    yield takeEvery(types.ADMIN_GET_ENTITIES_ATTEMPT, getEntities);
    yield takeEvery(types.ADMIN_ADD_ENTITY_ATTEMPT, addEntity);
    yield takeEvery(types.ADMIN_EDIT_ENTITY_ATTEMPT, editEntity);
    yield takeLatest(types.ADMIN_DELETE_ENTITY_ATTEMPT, deleteEntity);
}
