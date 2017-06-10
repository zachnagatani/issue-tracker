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
    // return fetch(URL + id)
                // .then(response => response.json());
    return fetch(URL)
            .then(response => response.json())
            .then(issues => {
                return issues.data.filter(item => item.id == id)[0]
            });
}

/**
 * Filters through an issues list, finding the one with the matching id
 * If nothing from the store was passed in, then it fetches the issue from the db
 * @param issues - A list of issues to filter
 * @param id - An id to match
 */
export function filterSingleIssue(issues, id) {
    if (!issues.length) {
        return fetchSingleIssue(fetch, '/issues.json', id);
    }

    return issues.filter(item => item.id === id)[0];
}