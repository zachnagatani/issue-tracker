import { call, put, takeEvery, all } from 'redux-saga/effects';

import { fetchIssues, fetchSingleIssue, closeIssueDB } from '../helpers/helpers';
import { addIssues, addSingleIssue, closeIssue } from '../actions/actions';
import * as types from '../actions/actionTypes';

/**
 * Calls fetchIssues to grab the issues from the database and eventually
 * dispatches an ADD_ISSUES action with the issues on success
 */
export function *getIssues() {
    const issues = yield call(fetchIssues, fetch, '/api/issues');
    yield put(addIssues(issues.data));
}

/**
 * Calls getIssues whenever a FETCH_ISSUES action is dispatched
 */
export function *watchGetIssues() {
    yield takeEvery(types.FETCH_ISSUES, getIssues);
}

/**
 * Calls fetchSingleIssue to grab the issues from the database and eventually
 * dispatches an ADD_ISSUES action with the issues on success
 */
export function *getSingleIssue(action) {
    const issue = yield call(fetchSingleIssue, fetch, '/api/issues', action.payload.id);
    yield put(addSingleIssue(issue));
}

/**
 * Calls getSingleIssue whenever a FETCH_ISSUES action is dispatched
 */
export function *watchGetSingleIssue() {
    yield takeEvery(types.FETCH_SINGLE_ISSUE, getSingleIssue);
}

export function *closeIssueSaga(action) {
    const response = yield call(closeIssueDB, fetch, '/api/issues/close', action.payload.id, window.Laravel);
    yield put(closeIssue(action.payload.id));
}

export function *watchCloseIssueSaga() {
    yield takeEvery(types.CLOSE_ISSUE_REQUEST, closeIssueSaga);
}

/**
 * Combines our sagas together to be passed as a group to the middleware
 */
export default function *rootSaga() {
    yield all([
        watchGetIssues(),
        watchGetSingleIssue(),
        watchCloseIssueSaga()
    ]);
}