import { createStore, applyMiddleware, compose  } from 'redux';
import rootReducer from '../reducers';
import thunk from 'redux-thunk';

import createLogger from "redux-logger";
import { composeWithDevTools } from "redux-devtools-extension";
// 引入redux 日志
const logger = createLogger();

// 中间件集合
let middleware = [thunk];

let composeEnhancers = null;

if ( __DEV__ ){
  	// console.log("现在是开发环境")
	 middleware.push(logger);
	 composeEnhancers = composeWithDevTools;
}else{
	// console.log("现在是生产环境")
	composeEnhancers = compose;
}

export default function configureStore( initialState ){
	const store = createStore(
		rootReducer, 
		initialState, 
		composeEnhancers(
			applyMiddleware(
				...middleware
			)
		)
	);
	return store;
}
