import { call, put, takeEvery, all } from 'redux-saga/effects';

import { fetchIssues } from '../helpers/helpers';
import { addIssues } from '../actions/actions';

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
    yield takeEvery('FETCH_ISSUES', getIssues);
}

/**
 * Combines our sagas together to be passed as a group to the middleware
 */
export default function *rootSaga() {
    yield all([
        watchGetIssues()
    ]);
}