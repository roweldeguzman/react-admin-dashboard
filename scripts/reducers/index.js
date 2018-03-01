import { combineReducers } from 'redux';
import UserReducer from './users';
import SparklineData from './sparkline-data'
/*
 * We combine all reducers into a single object before updated data is dispatched (sent) to store
 * Your entire applications state (store) is just whatever gets returned from all your reducers
 * */

const allReducers = combineReducers({
	users: UserReducer,
	sparkline: SparklineData
});

export default allReducers