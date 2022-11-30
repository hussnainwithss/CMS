import { takeEvery, takeLatest } from 'redux-saga/effects';
import { types } from '../../actions/admin';
import {
    addChannel,
    deleteChannel,
    editChannel,
    getChannels,
} from './channels';
import { addCity, deleteCity, editCity, getCities } from './cities';
import { addRegion, deleteRegion, editRegion, getRegions } from './regions';
import { addUser, deleteUser, editUser, getUsers } from './users';
import { addLanguage, deleteLanguage, editLanguage, getLanguages } from './languages';
import { addNationality, deleteNationality, editNationality, getNationalities } from './nationalities';
import { addEntityType, deleteEntityType, editEntityType, getEntityTypes } from './entitytypes';
import { addQuestionCategory, deleteQuestionCategory, editQuestionCategory,getQuestionCategories } from './questionCategory';
import {
    addChannelType,
    deleteChannelType,
    editChannelType,
    getChannelTypes,
} from './channelTypes';


export function* adminSaga() {
    yield takeEvery(types.ADMIN_GET_USERS_ATTEMPT, getUsers);
    yield takeEvery(types.ADMIN_ADD_USER_ATTEMPT, addUser);
    yield takeEvery(types.ADMIN_EDIT_USER_ATTEMPT, editUser);
    yield takeLatest(types.ADMIN_DELETE_USER_ATTEMPT, deleteUser);
    yield takeEvery(types.ADMIN_GET_CHANNELS_ATTEMPT, getChannels);
    yield takeEvery(types.ADMIN_ADD_CHANNEL_ATTEMPT, addChannel);
    yield takeEvery(types.ADMIN_EDIT_CHANNEL_ATTEMPT, editChannel);
    yield takeLatest(types.ADMIN_DELETE_CHANNEL_ATTEMPT, deleteChannel);
    yield takeEvery(types.ADMIN_GET_REGIONS_ATTEMPT, getRegions);
    yield takeEvery(types.ADMIN_ADD_REGION_ATTEMPT, addRegion);
    yield takeEvery(types.ADMIN_EDIT_REGION_ATTEMPT, editRegion);
    yield takeLatest(types.ADMIN_DELETE_REGION_ATTEMPT, deleteRegion);
    yield takeEvery(types.ADMIN_GET_CITIES_ATTEMPT, getCities);
    yield takeEvery(types.ADMIN_ADD_CITY_ATTEMPT, addCity);
    yield takeEvery(types.ADMIN_EDIT_CITY_ATTEMPT, editCity);
    yield takeLatest(types.ADMIN_DELETE_CITY_ATTEMPT, deleteCity);
    yield takeEvery(types.ADMIN_GET_LANGUAGES_ATTEMPT, getLanguages);
    yield takeEvery(types.ADMIN_ADD_LANGUAGE_ATTEMPT, addLanguage);
    yield takeEvery(types.ADMIN_EDIT_LANGUAGE_ATTEMPT, editLanguage);
    yield takeLatest(types.ADMIN_DELETE_LANGUAGE_ATTEMPT, deleteLanguage);
    yield takeEvery(types.ADMIN_GET_NATIONALITIES_ATTEMPT, getNationalities);
    yield takeEvery(types.ADMIN_ADD_NATIONALITY_ATTEMPT, addNationality);
    yield takeEvery(types.ADMIN_EDIT_NATIONALITY_ATTEMPT, editNationality);
    yield takeLatest(types.ADMIN_DELETE_NATIONALITY_ATTEMPT, deleteNationality);
    yield takeEvery(types.ADMIN_GET_ENTITY_TYPES_ATTEMPT, getEntityTypes);
    yield takeEvery(types.ADMIN_ADD_ENTITY_TYPE_ATTEMPT, addEntityType);
    yield takeEvery(types.ADMIN_EDIT_ENTITY_TYPE_ATTEMPT, editEntityType);
    yield takeLatest(types.ADMIN_DELETE_ENTITY_TYPE_ATTEMPT, deleteEntityType);
    yield takeEvery(types.ADMIN_GET_QUESTION_CATEGORIES_ATTEMPT, getQuestionCategories);
    yield takeEvery(types.ADMIN_ADD_QUESTION_CATEGORY_ATTEMPT, addQuestionCategory);
    yield takeEvery(types.ADMIN_EDIT_QUESTION_CATEGORY_ATTEMPT, editQuestionCategory);
    yield takeLatest(types.ADMIN_DELETE_QUESTION_CATEGORY_ATTEMPT, deleteQuestionCategory);
    yield takeEvery(types.ADMIN_GET_CHANNEL_TYPES_ATTEMPT, getChannelTypes);
    yield takeEvery(types.ADMIN_ADD_CHANNEL_TYPE_ATTEMPT, addChannelType);
    yield takeEvery(types.ADMIN_EDIT_CHANNEL_TYPE_ATTEMPT, editChannelType);
    yield takeLatest(types.ADMIN_DELETE_CHANNEL_TYPE_ATTEMPT, deleteChannelType);
}
