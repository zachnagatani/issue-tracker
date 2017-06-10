/**
 * Fetches the issues from the database
 * @param fetch - The API for making the HTTP request
 * @param URL - The endpoint to make the request to
 */
export function fetchIssues(fetch, URL) {
    return fetch(URL)
                .then(response => response.json());
}

/**
 * Fetches a single issue from the database
 * @param fetch - The API for making the HTTP request
 * @param URL - The endpoint to make the request to
 * @param id - The id of the issue to find
 */
export function fetchSingleIssue(fetch, URL, id) {
    return fetch(`${URL}/${id}`)
            .then(response => response.json())
            .then(issue => issue.data);
}

/**
 * Filters through an issues list, finding the one with the matching id
 * If nothing from the store was passed in, then it fetches the issue from the db
 * @param issues - A list of issues to filter
 * @param id - An id to match
 */
export function filterSingleIssue(issues, id) {
    if (!issues.length) {
        return fetchSingleIssue(fetch, '/api/issues', id);
    }

    return issues.filter(item => item.id === id)[0];
}


export function closeIssueDB(fetch, URL, id, token) {
    const formData = new FormData();
    formData.append('_token', token);

    return fetch(`${URL}/${id}`, {
        method: 'POST',
        credentials: 'same-origin',
        headers: {
            'X-CSRF-Token': token
        },
        body: formData
    })
    .then(response => response.json())
    .then(response => response);
}