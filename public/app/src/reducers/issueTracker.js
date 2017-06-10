import { combineReducers } from 'redux';
import issuesReducer from './issuesReducer';

const issueTracker = combineReducers({
    issues: issuesReducer
});

export default issueTracker;