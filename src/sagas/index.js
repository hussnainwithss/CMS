import { fork } from 'redux-saga/effects';

import { authSaga } from './auth';
import { adminSaga } from './admin';
import { sectorsSaga} from './sectors';
import { entitiesSaga } from './entities';

export function* rootSaga() {
    yield fork(authSaga);
    yield fork(adminSaga);
    yield fork(sectorsSaga);
    yield fork(entitiesSaga);
}
