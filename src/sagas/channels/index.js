import { takeEvery, takeLatest } from 'redux-saga/effects';
import { types } from '../../actions/channels';

import { addChannel, editChannel, deleteChannel, getChannels } from './channels';

export function* channelsSaga() {
    yield takeEvery(types.ADMIN_GET_CHANNELS_ATTEMPT, getChannels);
    yield takeEvery(types.ADMIN_ADD_CHANNEL_ATTEMPT, addChannel);
    yield takeEvery(types.ADMIN_EDIT_CHANNEL_ATTEMPT, editChannel);
    yield takeLatest(types.ADMIN_DELETE_CHANNEL_ATTEMPT, deleteChannel);
}
