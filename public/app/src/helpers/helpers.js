/**
 * Fetches the issues from the database
 * @param fetch - The API for making the HTTP request
 * @param URL - The endpoint to make the request to
 */
export function fetchIssues(fetch, URL) {
    return fetch(URL)
                .then(response => response.json());
}