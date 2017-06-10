import * as types from '../actions/actionTypes';

export function issuesReducer(state = [], action) {
    switch (action.type) {
        case types.ADD_ISSUES:
            return action.payload.issues;
        case types.CLOSE_ISSUE:
            return state.map(issue => {
                if (issue.id == action.payload.id) {
                    return { ...issue, attributes: { ...issue.attributes, status: 0 }};
                }

                return issue;
            });
        default:
            return state;
    }
}

export function singleIssueReducer(state = null, action) {
    switch(action.type) {
        case types.ADD_SINGLE_ISSUE:
            return action.payload.issue;
        case types.CLOSE_ISSUE:
            return { ...state, attributes: { ...state.attributes, status: 0 }};
        default:
            return state;
    }
}