import { combineReducers } from "redux";
import { persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";
import { auth } from "./auth";

const authPersistConfig = {
  key: "auth",
  storage,
  blacklist: ["success", "error", "infoMessage", "isSignupSuccess"],
  transforms: [],
};

const persistedReducer = (persistConfig, reducer) =>
  persistReducer(persistConfig, reducer);

export const rootReducer = () =>
  combineReducers({
    auth: persistedReducer(authPersistConfig, auth),
  });
