import { combineReducers } from 'redux';
import user from './user.js';
import posts from './posts.js';

const rootReducer = combineReducers({
	user,
	posts,
});

export default rootReducer;
