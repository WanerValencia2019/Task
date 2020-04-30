import { createStore, applyMiddleware } from 'redux';
import reducers from './reducers';
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

const persistConfig = {
	key: 'root',
	storage,
	whitelist: ['login'],
};

const middleware = [thunk];

const reducerPersisted = persistReducer(persistConfig, reducers);
const store = createStore(
	reducerPersisted,
	composeWithDevTools(applyMiddleware(...middleware))
);
const persistedStore = persistStore(store);

export { store, persistedStore };
