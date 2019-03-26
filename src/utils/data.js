/* eslint-disable import/prefer-default-export */
/**
 * Data check for empty
 * @param value
 * @returns {boolean}
 */
export function isEmpty(value) {
  return value === undefined
    || value === null
    || (typeof value === 'object' && Object.keys(value).length === 0)
    || (typeof value === 'string' && value.trim().length === 0);
}

export const sortByKeyBook = (key, asc = true) => (item1, item2) => {
  if (item1.data[key] > item2.data[key]) {
    return asc ? 1 : -1;
  }

  if (item1.data[key] < item2.data[key]) {
    return asc ? -1 : 1;
  }

  return 0;
};
