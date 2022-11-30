import * as types from '../types';
import { payloadActionCreator } from '../../../utils/actions';

export const getUsersAttempt = payloadActionCreator(
    types.ADMIN_GET_USERS_ATTEMPT,
);
export const getUsersSuccess = payloadActionCreator(
    types.ADMIN_GET_USERS_SUCCESS,
);
export const getUsersFailed = payloadActionCreator(
    types.ADMIN_GET_USERS_FAILED,
);

export const addUserAttempt = payloadActionCreator(
    types.ADMIN_ADD_USER_ATTEMPT,
);
export const addUserSuccess = payloadActionCreator(
    types.ADMIN_ADD_USER_SUCCESS,
);
export const addUserFailed = payloadActionCreator(types.ADMIN_ADD_USER_FAILED);

export const editUserAttempt = payloadActionCreator(
    types.ADMIN_EDIT_USER_ATTEMPT,
);
export const editUserSuccess = payloadActionCreator(
    types.ADMIN_EDIT_USER_SUCCESS,
);
export const editUserFailed = payloadActionCreator(
    types.ADMIN_EDIT_USER_FAILED,
);

export const DeleteUserAttempt = payloadActionCreator(
    types.ADMIN_DELETE_USER_ATTEMPT,
);
export const DeleteUserSuccess = payloadActionCreator(
    types.ADMIN_DELETE_USER_SUCCESS,
);
export const DeleteUserFailed = payloadActionCreator(
    types.ADMIN_DELETE_USER_FAILED,
);

export const getChannelsAttempt = payloadActionCreator(
    types.ADMIN_GET_CHANNELS_ATTEMPT,
);
export const getChannelsSuccess = payloadActionCreator(
    types.ADMIN_GET_CHANNELS_SUCCESS,
);
export const getChannelsFailed = payloadActionCreator(
    types.ADMIN_GET_CHANNELS_FAILED,
);

export const addChannelAttempt = payloadActionCreator(
    types.ADMIN_ADD_CHANNEL_ATTEMPT,
);
export const addChannelSuccess = payloadActionCreator(
    types.ADMIN_ADD_CHANNEL_SUCCESS,
);
export const addChannelFailed = payloadActionCreator(
    types.ADMIN_ADD_CHANNEL_FAILED,
);

export const editChannelAttempt = payloadActionCreator(
    types.ADMIN_EDIT_CHANNEL_ATTEMPT,
);
export const editChannelSuccess = payloadActionCreator(
    types.ADMIN_EDIT_CHANNEL_SUCCESS,
);
export const editChannelFailed = payloadActionCreator(
    types.ADMIN_EDIT_CHANNEL_FAILED,
);

export const DeleteChannelAttempt = payloadActionCreator(
    types.ADMIN_DELETE_CHANNEL_ATTEMPT,
);
export const DeleteChannelSuccess = payloadActionCreator(
    types.ADMIN_DELETE_CHANNEL_SUCCESS,
);
export const DeleteChannelFailed = payloadActionCreator(
    types.ADMIN_DELETE_CHANNEL_FAILED,
);


export const getCitiesAttempt = payloadActionCreator(
    types.ADMIN_GET_CITIES_ATTEMPT,
);
export const getCitiesSuccess = payloadActionCreator(
    types.ADMIN_GET_CITIES_SUCCESS,
);
export const getCitiesFailed = payloadActionCreator(
    types.ADMIN_GET_CITIES_FAILED,
);

export const addCityAttempt = payloadActionCreator(
    types.ADMIN_ADD_CITY_ATTEMPT,
);
export const addCitySuccess = payloadActionCreator(
    types.ADMIN_ADD_CITY_SUCCESS,
);
export const addCityFailed = payloadActionCreator(
    types.ADMIN_ADD_CITY_FAILED,
);

export const editCityAttempt = payloadActionCreator(
    types.ADMIN_EDIT_CITY_ATTEMPT,
);
export const editCitySuccess = payloadActionCreator(
    types.ADMIN_EDIT_CITY_SUCCESS,
);
export const editCityFailed = payloadActionCreator(
    types.ADMIN_EDIT_CITY_FAILED,
);

export const DeleteCityAttempt = payloadActionCreator(
    types.ADMIN_DELETE_CITY_ATTEMPT,
);
export const DeleteCitySuccess = payloadActionCreator(
    types.ADMIN_DELETE_CITY_SUCCESS,
);
export const DeleteCityFailed = payloadActionCreator(
    types.ADMIN_DELETE_CITY_FAILED,
);


export const getNationalitiesAttempt = payloadActionCreator(
    types.ADMIN_GET_NATIONALITIES_ATTEMPT,
);
export const getNationalitiesSuccess = payloadActionCreator(
    types.ADMIN_GET_NATIONALITIES_SUCCESS,
);
export const getNationalitiesFailed = payloadActionCreator(
    types.ADMIN_GET_NATIONALITIES_FAILED,
);

export const addNationalityAttempt = payloadActionCreator(
    types.ADMIN_ADD_NATIONALITY_ATTEMPT,
);
export const addNationalitySuccess = payloadActionCreator(
    types.ADMIN_ADD_NATIONALITY_SUCCESS,
);
export const addNationalityFailed = payloadActionCreator(
    types.ADMIN_ADD_NATIONALITY_FAILED,
);

export const editNationalityAttempt = payloadActionCreator(
    types.ADMIN_EDIT_NATIONALITY_ATTEMPT,
);
export const editNationalitySuccess = payloadActionCreator(
    types.ADMIN_EDIT_NATIONALITY_SUCCESS,
);
export const editNationalityFailed = payloadActionCreator(
    types.ADMIN_EDIT_NATIONALITY_FAILED,
);

export const DeleteNationalityAttempt = payloadActionCreator(
    types.ADMIN_DELETE_NATIONALITY_ATTEMPT,
);
export const DeleteNationalitySuccess = payloadActionCreator(
    types.ADMIN_DELETE_NATIONALITY_SUCCESS,
);
export const DeleteNationalityFailed = payloadActionCreator(
    types.ADMIN_DELETE_NATIONALITY_FAILED,
);


export const getLanguagesAttempt = payloadActionCreator(
    types.ADMIN_GET_LANGUAGES_ATTEMPT,
);
export const getLanguagesSuccess = payloadActionCreator(
    types.ADMIN_GET_LANGUAGES_SUCCESS,
);
export const getLanguagesFailed = payloadActionCreator(
    types.ADMIN_GET_LANGUAGES_FAILED,
);

export const addLanguageAttempt = payloadActionCreator(
    types.ADMIN_ADD_LANGUAGE_ATTEMPT,
);
export const addLanguageSuccess = payloadActionCreator(
    types.ADMIN_ADD_LANGUAGE_SUCCESS,
);
export const addLanguageFailed = payloadActionCreator(types.ADMIN_ADD_LANGUAGE_FAILED);

export const editLanguageAttempt = payloadActionCreator(
    types.ADMIN_EDIT_LANGUAGE_ATTEMPT,
);
export const editLanguageSuccess = payloadActionCreator(
    types.ADMIN_EDIT_LANGUAGE_SUCCESS,
);
export const editLanguageFailed = payloadActionCreator(
    types.ADMIN_EDIT_LANGUAGE_FAILED,
);

export const DeleteLanguageAttempt = payloadActionCreator(
    types.ADMIN_DELETE_LANGUAGE_ATTEMPT,
);
export const DeleteLanguageSuccess = payloadActionCreator(
    types.ADMIN_DELETE_LANGUAGE_SUCCESS,
);
export const DeleteLanguageFailed = payloadActionCreator(
    types.ADMIN_DELETE_LANGUAGE_FAILED,
);

export const getRegionsAttempt = payloadActionCreator(
    types.ADMIN_GET_REGIONS_ATTEMPT,
);
export const getRegionsSuccess = payloadActionCreator(
    types.ADMIN_GET_REGIONS_SUCCESS,
);
export const getRegionsFailed = payloadActionCreator(
    types.ADMIN_GET_REGIONS_FAILED,
);

export const addRegionAttempt = payloadActionCreator(
    types.ADMIN_ADD_REGION_ATTEMPT,
);
export const addRegionSuccess = payloadActionCreator(
    types.ADMIN_ADD_REGION_SUCCESS,
);
export const addRegionFailed = payloadActionCreator(types.ADMIN_ADD_REGION_FAILED);

export const editRegionAttempt = payloadActionCreator(
    types.ADMIN_EDIT_REGION_ATTEMPT,
);
export const editRegionSuccess = payloadActionCreator(
    types.ADMIN_EDIT_REGION_SUCCESS,
);
export const editRegionFailed = payloadActionCreator(
    types.ADMIN_EDIT_REGION_FAILED,
);

export const DeleteRegionAttempt = payloadActionCreator(
    types.ADMIN_DELETE_REGION_ATTEMPT,
);
export const DeleteRegionSuccess = payloadActionCreator(
    types.ADMIN_DELETE_REGION_SUCCESS,
);
export const DeleteRegionFailed = payloadActionCreator(
    types.ADMIN_DELETE_REGION_FAILED,
);



export const getQuestionCategoriesAttempt = payloadActionCreator(
    types.ADMIN_GET_QUESTION_CATEGORIES_ATTEMPT,
);
export const getQuestionCategoriesSuccess = payloadActionCreator(
    types.ADMIN_GET_QUESTION_CATEGORIES_SUCCESS,
);
export const getQuestionCategoriesFailed = payloadActionCreator(
    types.ADMIN_GET_QUESTION_CATEGORIES_FAILED,
);

export const addQuestionCategoryAttempt = payloadActionCreator(
    types.ADMIN_ADD_QUESTION_CATEGORY_ATTEMPT,
);
export const addQuestionCategorySuccess = payloadActionCreator(
    types.ADMIN_ADD_QUESTION_CATEGORY_SUCCESS,
);
export const addQuestionCategoryFailed = payloadActionCreator(types.ADMIN_ADD_QUESTION_CATEGORY_FAILED);

export const editQuestionCategoryAttempt = payloadActionCreator(
    types.ADMIN_EDIT_QUESTION_CATEGORY_ATTEMPT,
);
export const editQuestionCategorySuccess = payloadActionCreator(
    types.ADMIN_EDIT_QUESTION_CATEGORY_SUCCESS,
);
export const editQuestionCategoryFailed = payloadActionCreator(
    types.ADMIN_EDIT_QUESTION_CATEGORY_FAILED,
);

export const DeleteQuestionCategoryAttempt = payloadActionCreator(
    types.ADMIN_DELETE_QUESTION_CATEGORY_ATTEMPT,
);
export const DeleteQuestionCategorySuccess = payloadActionCreator(
    types.ADMIN_DELETE_QUESTION_CATEGORY_SUCCESS,
);
export const DeleteQuestionCategoryFailed = payloadActionCreator(
    types.ADMIN_DELETE_QUESTION_CATEGORY_FAILED,
);


export const getEntityTypesAttempt = payloadActionCreator(
    types.ADMIN_GET_ENTITY_TYPES_ATTEMPT,
);
export const getEntityTypesSuccess = payloadActionCreator(
    types.ADMIN_GET_ENTITY_TYPES_SUCCESS,
);
export const getEntityTypesFailed = payloadActionCreator(
    types.ADMIN_GET_ENTITY_TYPES_FAILED,
);

export const addEntityTypeAttempt = payloadActionCreator(
    types.ADMIN_ADD_ENTITY_TYPE_ATTEMPT,
);
export const addEntityTypeSuccess = payloadActionCreator(
    types.ADMIN_ADD_ENTITY_TYPE_SUCCESS,
);
export const addEntityTypeFailed = payloadActionCreator(types.ADMIN_ADD_ENTITY_TYPE_FAILED);

export const editEntityTypeAttempt = payloadActionCreator(
    types.ADMIN_EDIT_ENTITY_TYPE_ATTEMPT,
);
export const editEntityTypeSuccess = payloadActionCreator(
    types.ADMIN_EDIT_ENTITY_TYPE_SUCCESS,
);
export const editEntityTypeFailed = payloadActionCreator(
    types.ADMIN_EDIT_ENTITY_TYPE_FAILED,
);

export const DeleteEntityTypeAttempt = payloadActionCreator(
    types.ADMIN_DELETE_ENTITY_TYPE_ATTEMPT,
);
export const DeleteEntityTypeSuccess = payloadActionCreator(
    types.ADMIN_DELETE_ENTITY_TYPE_SUCCESS,
);
export const DeleteEntityTypeFailed = payloadActionCreator(
    types.ADMIN_DELETE_ENTITY_TYPE_FAILED,
);


export const getChannelTypesAttempt = payloadActionCreator(
    types.ADMIN_GET_CHANNEL_TYPES_ATTEMPT,
);
export const getChannelTypesSuccess = payloadActionCreator(
    types.ADMIN_GET_CHANNEL_TYPES_SUCCESS,
);
export const getChannelTypesFailed = payloadActionCreator(
    types.ADMIN_GET_CHANNEL_TYPES_FAILED,
);

export const addChannelTypeAttempt = payloadActionCreator(
    types.ADMIN_ADD_CHANNEL_TYPE_ATTEMPT,
);
export const addChannelTypeSuccess = payloadActionCreator(
    types.ADMIN_ADD_CHANNEL_TYPE_SUCCESS,
);
export const addChannelTypeFailed = payloadActionCreator(
    types.ADMIN_ADD_CHANNEL_TYPE_FAILED,
);

export const editChannelTypeAttempt = payloadActionCreator(
    types.ADMIN_EDIT_CHANNEL_TYPE_ATTEMPT,
);
export const editChannelTypeSuccess = payloadActionCreator(
    types.ADMIN_EDIT_CHANNEL_TYPE_SUCCESS,
);
export const editChannelTypeFailed = payloadActionCreator(
    types.ADMIN_EDIT_CHANNEL_TYPE_FAILED,
);

export const DeleteChannelTypeAttempt = payloadActionCreator(
    types.ADMIN_DELETE_CHANNEL_TYPE_ATTEMPT,
);
export const DeleteChannelTypeSuccess = payloadActionCreator(
    types.ADMIN_DELETE_CHANNEL_TYPE_SUCCESS,
);
export const DeleteChannelTypeFailed = payloadActionCreator(
    types.ADMIN_DELETE_CHANNEL_TYPE_FAILED,
);
