import { combineReducers } from 'redux';
import storage from 'redux-persist/lib/storage';
import { persistReducer } from 'redux-persist';

import { regions } from './regions';
import { languages } from './languages';
import { nationalities } from './nationalities';
import { cities } from './cities';
import { users } from './users';
import { channels } from './channels';
import { entityTypes } from './entitytype';
import { questionCategories } from './questionCategory';
import { channelTypes } from './channelTypes';

export const persistedReducer = (persistConfig, reducer) =>
    persistReducer(persistConfig, reducer);

const regionsPersistConfig = {
    key: 'regions',
    storage,
    blacklist: [],
    transforms: [],
};

const usersPersistConfig = {
    key: 'users',
    storage,
    blacklist: [],
    transforms: [],
};

const citiesPersistConfig = {
    key: 'cities',
    storage,
    blacklist: [],
    transforms: [],
};

const channelsPersistConfig = {
    key: 'channels',
    storage,
    blacklist: [],
    transforms: [],
};

const nationalitiesPersistConfig = {
    key: 'nationalities',
    storage,
    blacklist: [],
    transforms: [],
};

const languagesPersistConfig = {
    key: 'languages',
    storage,
    blacklist: [],
    transforms: [],
};

const entityTypePersistConfig = {
    key: 'entitytypes',
    storage,
    blacklist: [],
    transforms: [],
};

const questionCategoryPersistConfig = {
    key: 'questionCategory',
    storage,
    blacklist: [],
    transforms: [],
};

const channelTypesPersistConfig = {
    key: 'channelTypes',
    storage,
    blacklist: [],
    transforms: [],
};

export const admin = combineReducers({
    users: persistedReducer(usersPersistConfig, users),
    channels: persistedReducer(channelsPersistConfig, channels),
    regions: persistedReducer(regionsPersistConfig, regions),
    languages: persistedReducer(languagesPersistConfig, languages),
    nationalities: persistedReducer(nationalitiesPersistConfig, nationalities),
    cities: persistedReducer(citiesPersistConfig, cities),
    entityTypes: persistReducer(entityTypePersistConfig, entityTypes),
    questionCategories: persistReducer(questionCategoryPersistConfig, questionCategories),
    channelTypes: persistReducer(channelTypesPersistConfig, channelTypes),
});
