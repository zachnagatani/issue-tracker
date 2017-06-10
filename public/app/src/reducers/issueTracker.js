import { combineReducers } from 'redux';
import { issuesReducer, singleIssueReducer } from './issuesReducer';

const issueTracker = combineReducers({
    issues: issuesReducer,
    singleIssue: singleIssueReducer
});

export default issueTracker;