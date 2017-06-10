import { call, put, takeEvery, all } from 'redux-saga/effects';

import { fetchIssues, fetchSingleIssue } from '../helpers/helpers';
import { addIssues, addSingleIssue } from '../actions/actions';
import * as types from '../actions/actionTypes';

/**
 * Calls fetchIssues to grab the issues from the database and eventually
 * dispatches an ADD_ISSUES action with the issues on success
 */
export function *getIssues() {
    const issues = yield call(fetchIssues, fetch, '/issues.json');
    yield put(addIssues(issues.data));
}

/**
 * Calls getIssues whenever a FETCH_ISSUES action is dispatched
 */
export function *watchGetIssues() {
    yield takeEvery(types.FETCH_ISSUES, getIssues);
}

export function *getSingleIssue(action) {
    const issue = yield call(fetchSingleIssue, fetch, '/issues.json', action.payload.id);
    yield put(addSingleIssue(issue));
}

export function *watchGetSingleIssue() {
    yield takeEvery(types.FETCH_SINGLE_ISSUE, getSingleIssue);
}

/**
 * Combines our sagas together to be passed as a group to the middleware
 */
export default function *rootSaga() {
    yield all([
        watchGetIssues(),
        watchGetSingleIssue()
    ]);
}