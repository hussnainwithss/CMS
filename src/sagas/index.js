import { fork } from 'redux-saga/effects';

import { authSaga } from './auth';
import { adminSaga } from './admin';

export function* rootSaga() {
    yield fork(authSaga);
    yield fork(adminSaga);
}
