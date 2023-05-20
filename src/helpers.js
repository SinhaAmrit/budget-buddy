/**
 * The function retrieves data from local storage and parses it as JSON.
 * @param key - The key parameter is a string that represents the key of the item to be retrieved from
 * the localStorage. The function uses this key to retrieve the corresponding value from the
 * localStorage and parse it as a JSON object before returning it.
 * @returns The `fetchData` function is returning the parsed JSON data stored in the local storage with
 * the given `key`.
 */
export const fetchData = (key) => {
    return JSON.parse(localStorage.getItem(key));
};