import {
  FETCH_POSTS_REQUEST,
  FETCH_POSTS_FAILURE,
  FETCH_POSTS_SUCCESS
} from '../actions';


const subreddit = {
  isFetching: false,
  didInvalidate: false,
  lastUpdated: Date.now(),
}

function posts (state = subreddit, action){
	switch (action.type){
		case FETCH_POSTS_REQUEST:
			return { ...subreddit, isFetching: true };
		case FETCH_POSTS_FAILURE:
			return { ...subreddit, didInvalidate: true };
    case FETCH_POSTS_SUCCESS:
			return { ...subreddit, isFetching: false, ...action.response };
		default:
			return state;
	}
}


export default posts;
