import { combineReducers } from 'redux';
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import { auth } from './auth';
import { admin } from './admin';
import { sectors } from './sectors';
import { entities } from './entities';

const authPersistConfig = {
    key: 'auth',
    storage,
    blacklist: ['success', 'error', 'infoMessage', 'isSignupSuccess'],
    transforms: [],
};

const sectorsPersistConfig = {
    key: 'sectors',
    storage,
    blacklist: [],
    transforms: [],
};

const entitiesPersistConfig = {
    key: 'entities',
    storage,
    blacklist: [],
    transforms: [],
};

export const persistedReducer = (persistConfig, reducer) =>
    persistReducer(persistConfig, reducer);

export const rootReducer = () =>
    combineReducers({
        admin,
        auth: persistedReducer(authPersistConfig, auth),
        sectors: persistReducer(sectorsPersistConfig, sectors),
        entities: persistReducer(entitiesPersistConfig,  entities),
    });
