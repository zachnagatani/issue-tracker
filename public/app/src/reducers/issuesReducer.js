import * as types from '../actions/actionTypes';

export default function issuesReducer(state = [], action) {
    switch (action.type) {
        case types.ADD_ISSUES:
            return action.payload.issues;
        default:
            return state;
    }
}