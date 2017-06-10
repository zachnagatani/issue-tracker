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

export { fetchIssues, addIssues };