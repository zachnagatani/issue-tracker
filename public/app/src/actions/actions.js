import * as types from './actionTypes';

function fetchIssues() {
    return {
        type: types.FETCH_ISSUES
    };
}

function addIssues(issues) {
    return {
        type: types.ADD_ISSUES,
        payload: {
            issues
        }
    };
}

function fetchSingleIssue(id) {
    return {
        type: types.FETCH_SINGLE_ISSUE,
        payload: {
            id
        }
    };
}

function addSingleIssue(issue) {
    return {
        type: types.ADD_SINGLE_ISSUE,
        payload: {
            issue
        }
    };
}

export {
    fetchIssues, addIssues,
    fetchSingleIssue, addSingleIssue
};