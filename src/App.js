import { BrowserRouter } from 'react-router-dom';
import { Provider as StoreProvider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import { configureStore } from './store';

import 'bootstrap/dist/css/bootstrap.min.css';
// import "bootstrap/dist/css/bootstrap.rtl.min.css";

// import "bootstrap/dist/js/bootstrap.bundle";
import './index.css';

import Router from './routes';

export const { store, persistor } = configureStore({});

function App() {
    return (
        <div className="App">
            <StoreProvider store={store}>
                <PersistGate
                    loading={<div>Loading...</div>}
                    persistor={persistor}
                >
                    <BrowserRouter>
                        <Router />
                    </BrowserRouter>
                </PersistGate>
            </StoreProvider>
        </div>
    );
}

export default App;
