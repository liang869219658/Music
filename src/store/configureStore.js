import { createStore,applyMiddleware } from 'redux';
import rootReducer from '../reducers';
import promiseMiddleware from 'redux-thunk';

export default function configureStore( initialState ){
	const store = createStore(rootReducer, initialState, applyMiddleware(promiseMiddleware));
	return store;
}
