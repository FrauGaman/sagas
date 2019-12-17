import { createStore, applyMiddleware  } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import createSagaMiddleware from 'redux-saga';

import rootReducer from './reducres';

import rootSaga from './sagas'

const sagaMiddleware = createSagaMiddleware();

const configureStore = preloadedState => (
	createStore(
		rootReducer,
		preloadedState,
		composeWithDevTools(applyMiddleware(sagaMiddleware)),
	)
);

const store = configureStore({});

sagaMiddleware.run(rootSaga);

export const action = type => store.dispatch({type});

export default store;
