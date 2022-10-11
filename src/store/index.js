import { applyMiddleware, compose, createStore } from 'redux';
import { persistStore } from 'redux-persist';
import sagaMiddlewareFactory from 'redux-saga';
import { rootReducer } from '../reducers';
import { rootSaga } from '../sagas';

export function configureStore(preloadedState) {
    const sagaMiddleware = sagaMiddlewareFactory();
    const composedEnhancers =
        (window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ &&
            window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({
                trace: true,
                traceLimit: 25,
            })) ||
        compose;

    const enhancers = composedEnhancers(applyMiddleware(sagaMiddleware));

    const store = createStore(rootReducer(), preloadedState, enhancers);

    const persistor = persistStore(store);

    sagaMiddleware.run(rootSaga);

    return { store, persistor };
}
