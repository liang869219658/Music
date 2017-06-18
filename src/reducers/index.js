import { combineReducers } from 'redux';
// import { combineReducers } from 'redux-immutable';
import Immutable from 'immutable';
import user from './user.js';
import posts from './posts.js';


const rootReducer = combineReducers({
	user,
	posts,
});

export default rootReducer;
