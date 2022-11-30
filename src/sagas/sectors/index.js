import { takeEvery, takeLatest } from 'redux-saga/effects';
import { types } from '../../actions/sectors';

import { addSector, editSector, deleteSector, getSectors } from './sectors';

export function* sectorsSaga() {
    yield takeEvery(types.ADMIN_GET_SECTORS_ATTEMPT, getSectors);
    yield takeEvery(types.ADMIN_ADD_SECTOR_ATTEMPT, addSector);
    yield takeEvery(types.ADMIN_EDIT_SECTOR_ATTEMPT, editSector);
    yield takeLatest(types.ADMIN_DELETE_SECTOR_ATTEMPT, deleteSector);
}
