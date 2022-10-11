import { takeEvery, takeLatest } from "redux-saga/effects";
import { types } from "../../actions/admin";

import { addUser, deleteUser, editUser, getUsers } from "./users";

export function* adminSaga() {
  yield takeEvery(types.ADMIN_GET_USERS_ATTEMPT, getUsers);
  yield takeEvery(types.ADMIN_ADD_USER_ATTEMPT, addUser);
  yield takeEvery(types.ADMIN_EDIT_USER_ATTEMPT, editUser);
  yield takeLatest(types.ADMIN_DELETE_USER_ATTEMPT, deleteUser);
}
