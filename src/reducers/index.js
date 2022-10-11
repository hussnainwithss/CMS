import { combineReducers } from "redux";
import { persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";
import { auth } from "./auth";
import { admin } from "./admin";

const authPersistConfig = {
  key: "auth",
  storage,
  blacklist: ["success", "error", "infoMessage", "isSignupSuccess"],
  transforms: [],
};

const adminPersistConfig = {
  key: "admin",
  storage,
  blacklist: [],
  transforms: [],
};

const persistedReducer = (persistConfig, reducer) =>
  persistReducer(persistConfig, reducer);

export const rootReducer = () =>
  combineReducers({
    auth: persistedReducer(authPersistConfig, auth),
    admin: persistedReducer(adminPersistConfig, admin),
  });
