import * as types from '../actions/actionTypes';

export function issuesReducer(state = [], action) {
    switch (action.type) {
        case types.ADD_ISSUES:
            return action.payload.issues;
        default:
            return state;
    }
}

export function singleIssueReducer(state = null, action) {
    switch(action.type) {
        case types.ADD_SINGLE_ISSUE:
            return action.payload.issue;
        default:
            return state;
    }
}